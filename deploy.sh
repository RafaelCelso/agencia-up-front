#!/bin/bash

# Script de Deploy para VPS da Hostinger
# Agência Up Front

set -e

echo "🚀 Iniciando deploy da Agência Up Front..."

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

# Verificar se Docker está instalado
if ! command -v docker &> /dev/null; then
    error "Docker não está instalado. Instalando..."
    curl -fsSL https://get.docker.com -o get-docker.sh
    sh get-docker.sh
    sudo usermod -aG docker $USER
    rm get-docker.sh
    log "Docker instalado com sucesso!"
fi

# Verificar se Docker Compose está instalado
if ! command -v docker-compose &> /dev/null; then
    error "Docker Compose não está instalado. Instalando..."
    sudo curl -L "https://github.com/docker/compose/releases/latest/download/docker-compose-$(uname -s)-$(uname -m)" -o /usr/local/bin/docker-compose
    sudo chmod +x /usr/local/bin/docker-compose
    log "Docker Compose instalado com sucesso!"
fi

# Parar containers existentes
log "Parando containers existentes..."
docker-compose down --remove-orphans || true

# Limpar imagens antigas
log "Limpando imagens antigas..."
docker system prune -f

# Fazer pull das imagens base
log "Fazendo pull das imagens base..."
docker pull node:18-alpine
docker pull nginx:alpine

# Build da aplicação
log "Fazendo build da aplicação..."
docker-compose build --no-cache

# Iniciar serviços
log "Iniciando serviços..."
docker-compose up -d

# Aguardar aplicação estar pronta
log "Aguardando aplicação estar pronta..."
sleep 10

# Verificar status dos containers
log "Verificando status dos containers..."
docker-compose ps

# Verificar logs
log "Verificando logs da aplicação..."
docker-compose logs --tail=20 agencia-up-front

# Verificar se a aplicação está respondendo
log "Verificando se a aplicação está respondendo..."
if curl -f http://localhost:3000 > /dev/null 2>&1; then
    log "✅ Aplicação está funcionando na porta 3000!"
else
    warn "⚠️  Aplicação não está respondendo na porta 3000. Verifique os logs."
fi

# Verificar se o Nginx está funcionando
if curl -f http://localhost > /dev/null 2>&1; then
    log "✅ Nginx está funcionando na porta 80!"
else
    warn "⚠️  Nginx não está respondendo na porta 80. Verifique os logs."
fi

# Configurar firewall (se necessário)
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
        
        # Atualizar configuração do Nginx
        sed -i "s/# return 301 https:\/\/\$server_name\$request_uri;/return 301 https:\$server_name\$request_uri;/" nginx.conf
        
        # Reiniciar containers
        docker-compose restart nginx
        
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
    docker-compose restart agencia-up-front
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

# Backup dos volumes
docker run --rm -v agencia-up-front_logs:/data -v $BACKUP_DIR:/backup alpine tar czf /backup/logs_$DATE.tar.gz -C /data .

# Backup da configuração
tar czf $BACKUP_DIR/config_$DATE.tar.gz docker-compose.yml nginx.conf Dockerfile

# Limpar backups antigos (manter apenas os últimos 7 dias)
find $BACKUP_DIR -name "*.tar.gz" -mtime +7 -delete

echo "Backup realizado: $DATE"
EOF

chmod +x backup.sh

# Adicionar ao crontab para backup diário às 2h da manhã
(crontab -l 2>/dev/null; echo "0 2 * * * cd $(pwd) && ./backup.sh") | crontab -

log "✅ Backup automático configurado!"

# Informações finais
echo ""
log "🎉 Deploy concluído com sucesso!"
echo ""
echo "📋 Informações importantes:"
echo "   • Aplicação: http://localhost:3000"
echo "   • Nginx: http://localhost:80"
echo "   • Logs: docker-compose logs -f agencia-up-front"
echo "   • Status: docker-compose ps"
echo "   • Parar: docker-compose down"
echo "   • Reiniciar: docker-compose restart"
echo ""
echo "🔧 Comandos úteis:"
echo "   • Ver logs em tempo real: docker-compose logs -f"
echo "   • Acessar container: docker exec -it agencia-up-front sh"
echo "   • Backup manual: ./backup.sh"
echo "   • Health check: ./health-check.sh"
echo ""
echo "📚 Documentação:"
echo "   • Docker: https://docs.docker.com/"
echo "   • Nginx: https://nginx.org/en/docs/"
echo "   • Next.js: https://nextjs.org/docs"
echo ""
