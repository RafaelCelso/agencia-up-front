#!/bin/bash

# Script de Deploy com PM2 para VPS da Hostinger
# Agência Up Front

set -e

echo "🚀 Iniciando deploy da Agência Up Front com PM2..."

# Cores para output
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

# Função para log colorido
log() {
    echo -e "${GREEN}[INFO]${NC} $1"
}

warn() {
    echo -e "${YELLOW}[WARN]${NC} $1"
}

error() {
    echo -e "${RED}[ERROR]${NC} $1"
}

# Verificar se Node.js está instalado
if ! command -v node &> /dev/null; then
    error "Node.js não está instalado. Instalando..."
    curl -fsSL https://deb.nodesource.com/setup_18.x | sudo -E bash -
    sudo apt-get install -y nodejs
    log "Node.js instalado com sucesso!"
fi

# Verificar se PM2 está instalado
if ! command -v pm2 &> /dev/null; then
    error "PM2 não está instalado. Instalando..."
    sudo npm install -g pm2
    log "PM2 instalado com sucesso!"
fi

# Verificar se Nginx está instalado
if ! command -v nginx &> /dev/null; then
    error "Nginx não está instalado. Instalando..."
    sudo apt-get update
    sudo apt-get install -y nginx
    sudo systemctl enable nginx
    sudo systemctl start nginx
    log "Nginx instalado com sucesso!"
fi

# Parar aplicação existente
log "Parando aplicação existente..."
pm2 stop agencia-up-front || true
pm2 delete agencia-up-front || true

# Limpar cache do PM2
log "Limpando cache do PM2..."
pm2 flush

# Instalar dependências
log "Instalando dependências..."
npm install --production

# Criar diretório de logs
log "Criando diretório de logs..."
mkdir -p logs

# Build da aplicação
log "Fazendo build da aplicação..."
npm run build

# Iniciar aplicação com PM2
log "Iniciando aplicação com PM2..."
pm2 start ecosystem.config.js --env production

# Salvar configuração do PM2
log "Salvando configuração do PM2..."
pm2 save

# Configurar PM2 para iniciar com o sistema
log "Configurando PM2 para iniciar com o sistema..."
pm2 startup

# Aguardar aplicação estar pronta
log "Aguardando aplicação estar pronta..."
sleep 10

# Verificar status da aplicação
log "Verificando status da aplicação..."
pm2 status

# Verificar logs
log "Verificando logs da aplicação..."
pm2 logs agencia-up-front --lines 20

# Verificar se a aplicação está respondendo
log "Verificando se a aplicação está respondendo..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    log "✅ Aplicação está funcionando na porta 3000!"
else
    warn "⚠️  Aplicação não está respondendo na porta 3000. Verifique os logs."
fi

# Configurar Nginx
log "Configurando Nginx..."

# Criar configuração do Nginx
sudo tee /etc/nginx/sites-available/agencia-up-front << 'EOF'
server {
    listen 80;
    server_name _;
    
    # Configurações de segurança
    add_header X-Frame-Options "SAMEORIGIN" always;
    add_header X-Content-Type-Options "nosniff" always;
    add_header X-XSS-Protection "1; mode=block" always;
    add_header Referrer-Policy "strict-origin-when-cross-origin" always;

    # Rate limiting
    limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
    limit_req_zone $binary_remote_addr zone=general:10m rate=30r/s;

    # API routes
    location /api/ {
        limit_req zone=api burst=20 nodelay;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }

    # Static files
    location ~* \.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$ {
        expires 1y;
        add_header Cache-Control "public, immutable";
        proxy_pass http://localhost:3000;
    }

    # Main application
    location / {
        limit_req zone=general burst=50 nodelay;
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_set_header X-Real-IP $remote_addr;
        proxy_set_header X-Forwarded-For $proxy_add_x_forwarded_for;
        proxy_set_header X-Forwarded-Proto $scheme;
        proxy_cache_bypass $http_upgrade;
    }
}
EOF

# Ativar site
log "Ativando site no Nginx..."
sudo ln -sf /etc/nginx/sites-available/agencia-up-front /etc/nginx/sites-enabled/
sudo rm -f /etc/nginx/sites-enabled/default

# Testar configuração do Nginx
log "Testando configuração do Nginx..."
sudo nginx -t

# Reiniciar Nginx
log "Reiniciando Nginx..."
sudo systemctl restart nginx

# Verificar se o Nginx está funcionando
if curl -f http://localhost > /dev/null 2>&1; then
    log "✅ Nginx está funcionando na porta 80!"
else
    warn "⚠️  Nginx não está respondendo na porta 80. Verifique os logs."
fi

# Configurar firewall
log "Configurando firewall..."
if command -v ufw &> /dev/null; then
    sudo ufw allow 80/tcp
    sudo ufw allow 443/tcp
    sudo ufw allow 22/tcp
    log "Firewall configurado!"
fi

# Configurar SSL com Let's Encrypt (opcional)
read -p "Deseja configurar SSL com Let's Encrypt? (y/n): " -n 1 -r
echo
if [[ $REPLY =~ ^[Yy]$ ]]; then
    log "Configurando SSL com Let's Encrypt..."
    
    # Instalar Certbot
    if ! command -v certbot &> /dev/null; then
        sudo apt-get update
        sudo apt-get install -y certbot python3-certbot-nginx
    fi
    
    read -p "Digite o domínio da sua aplicação: " DOMAIN
    
    if [ ! -z "$DOMAIN" ]; then
        # Gerar certificado
        sudo certbot --nginx -d $DOMAIN --non-interactive --agree-tos --email admin@$DOMAIN
        
        log "✅ SSL configurado para $DOMAIN!"
    fi
fi

# Configurar monitoramento básico
log "Configurando monitoramento básico..."

# Criar script de health check
cat > health-check.sh << 'EOF'
#!/bin/bash
if ! curl -f http://localhost:3000 > /dev/null 2>&1; then
    echo "Aplicação não está respondendo. Reiniciando..."
    pm2 restart agencia-up-front
fi
EOF

chmod +x health-check.sh

# Adicionar ao crontab para verificar a cada 5 minutos
(crontab -l 2>/dev/null; echo "*/5 * * * * cd $(pwd) && ./health-check.sh") | crontab -

log "✅ Monitoramento configurado!"

# Configurar backup automático
log "Configurando backup automático..."

# Criar script de backup
cat > backup.sh << 'EOF'
#!/bin/bash
BACKUP_DIR="/backup/agencia-up-front"
DATE=$(date +%Y%m%d_%H%M%S)

mkdir -p $BACKUP_DIR

# Backup dos logs
tar czf $BACKUP_DIR/logs_$DATE.tar.gz logs/

# Backup da configuração
tar czf $BACKUP_DIR/config_$DATE.tar.gz ecosystem.config.js nginx.conf

# Backup do PM2
pm2 save
cp ~/.pm2/dump.pm2 $BACKUP_DIR/pm2_dump_$DATE.pm2

# Limpar backups antigos (manter apenas os últimos 7 dias)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete
find $BACKUP_DIR -name "*.pm2" -mtime +7 -delete

echo "Backup realizado: $DATE"
EOF

chmod +x backup.sh

# Adicionar ao crontab para backup diário às 2h da manhã
(crontab -l 2>/dev/null; echo "0 2 * * * cd $(pwd) && ./backup.sh") | crontab -

log "✅ Backup automático configurado!"

# Configurar logrotate para logs do PM2
log "Configurando rotação de logs..."

sudo tee /etc/logrotate.d/pm2 << 'EOF'
/home/*/.pm2/logs/*.log {
    daily
    missingok
    rotate 7
    compress
    delaycompress
    notifempty
    create 644 root root
    postrotate
        pm2 reloadLogs
    endscript
}
EOF

log "✅ Rotação de logs configurada!"

# Informações finais
echo ""
log "🎉 Deploy com PM2 concluído com sucesso!"
echo ""
echo "📋 Informações importantes:"
echo "   • Aplicação: http://localhost:3000"
echo "   • Nginx: http://localhost:80"
echo "   • Status PM2: pm2 status"
echo "   • Logs: pm2 logs agencia-up-front"
echo "   • Parar: pm2 stop agencia-up-front"
echo "   • Reiniciar: pm2 restart agencia-up-front"
echo ""
echo "🔧 Comandos úteis:"
echo "   • Ver logs em tempo real: pm2 logs -f"
echo "   • Monitoramento: pm2 monit"
echo "   • Backup manual: ./backup.sh"
echo "   • Health check: ./health-check.sh"
echo "   • Ver processos: pm2 list"
echo "   • Ver informações: pm2 show agencia-up-front"
echo ""
echo "📚 Documentação:"
echo "   • PM2: https://pm2.keymetrics.io/docs/"
echo "   • Nginx: https://nginx.org/en/docs/"
echo "   • Next.js: https://nextjs.org/docs"
echo ""
echo "🔄 Para atualizações futuras:"
echo "   git pull origin main"
echo "   npm install"
echo "   npm run build"
echo "   pm2 reload agencia-up-front"
echo ""
