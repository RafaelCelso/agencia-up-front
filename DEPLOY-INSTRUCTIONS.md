# 🚀 Guia de Deploy - Agência Up Front

## 📋 Pré-requisitos

### VPS da Hostinger

- **Sistema Operacional**: Ubuntu 20.04 LTS ou superior
- **RAM**: Mínimo 2GB (recomendado 4GB+)
- **Armazenamento**: Mínimo 20GB
- **Acesso**: SSH habilitado

### Domínio (opcional mas recomendado)

- Domínio configurado e apontando para o IP da VPS
- DNS configurado corretamente

## 🔧 Preparação da VPS

### 1. Conectar via SSH

```bash
ssh root@SEU_IP_DA_VPS
```

### 2. Atualizar o sistema

```bash
sudo apt update && sudo apt upgrade -y
```

### 3. Instalar dependências básicas

```bash
sudo apt install -y curl wget git unzip software-properties-common apt-transport-https ca-certificates gnupg lsb-release
```

### 4. Criar usuário não-root (recomendado)

```bash
sudo adduser deploy
sudo usermod -aG sudo deploy
sudo su - deploy
```

## 🐳 Instalação do Docker

### 1. Instalar Docker

```bash
curl -fsSL https://get.docker.com -o get-docker.sh
sh get-docker.sh
sudo usermod -aG docker $USER
newgrp docker
```

### 2. Verificar instalação

```bash
docker --version
docker-compose --version
```

### 3. Configurar Docker para iniciar com o sistema

```bash
sudo systemctl enable docker
sudo systemctl start docker
```

## 📁 Deploy da Aplicação

### 1. Clonar o projeto

```bash
git clone https://github.com/seu-usuario/agencia-up-front.git
cd agencia-up-front
```

### 2. Configurar variáveis de ambiente

```bash
cp .env.production .env
# Editar o arquivo .env com suas configurações
nano .env
```

### 3. Executar o script de deploy

```bash
chmod +x deploy.sh
./deploy.sh
```

### 4. Verificar status

```bash
docker-compose ps
docker-compose logs -f
```

## 🌐 Configuração do Nginx

### 1. Verificar se o Nginx está funcionando

```bash
curl http://localhost
```

### 2. Configurar domínio (se aplicável)

Editar o arquivo `nginx.conf` e substituir `_` pelo seu domínio:

```nginx
server_name seudominio.com www.seudominio.com;
```

### 3. Reiniciar Nginx

```bash
docker-compose restart nginx
```

## 🔒 Configuração de SSL (HTTPS)

### 1. Instalar Certbot

```bash
sudo apt install -y certbot python3-certbot-nginx
```

### 2. Gerar certificado

```bash
sudo certbot --nginx -d seudominio.com -d www.seudominio.com
```

### 3. Configurar renovação automática

```bash
sudo crontab -e
# Adicionar a linha:
0 12 * * * /usr/bin/certbot renew --quiet
```

## 📊 Monitoramento e Manutenção

### 1. Ver logs em tempo real

```bash
docker-compose logs -f agencia-up-front
```

### 2. Verificar uso de recursos

```bash
docker stats
```

### 3. Backup manual

```bash
./backup.sh
```

### 4. Health check

```bash
./health-check.sh
```

## 🔄 Atualizações

### 1. Parar aplicação

```bash
docker-compose down
```

### 2. Fazer pull das alterações

```bash
git pull origin main
```

### 3. Rebuild e restart

```bash
docker-compose build --no-cache
docker-compose up -d
```

## 🚨 Troubleshooting

### Problema: Aplicação não inicia

```bash
# Ver logs
docker-compose logs agencia-up-front

# Verificar portas
sudo netstat -tlnp | grep :3000

# Reiniciar container
docker-compose restart agencia-up-front
```

### Problema: Nginx não funciona

```bash
# Ver logs do Nginx
docker-compose logs nginx

# Verificar configuração
docker exec -it agencia-up-front-nginx nginx -t

# Reiniciar Nginx
docker-compose restart nginx
```

### Problema: Erro de permissão

```bash
# Corrigir permissões
sudo chown -R $USER:$USER .
chmod +x *.sh
```

## 📱 Comandos Úteis

### Gerenciamento de containers

```bash
# Ver status
docker-compose ps

# Parar todos
docker-compose down

# Reiniciar
docker-compose restart

# Ver logs
docker-compose logs -f
```

### Gerenciamento de imagens

```bash
# Ver imagens
docker images

# Limpar imagens não utilizadas
docker system prune -a

# Ver uso de disco
docker system df
```

### Backup e restore

```bash
# Backup manual
./backup.sh

# Listar backups
ls -la /backup/agencia-up-front/

# Restore (se necessário)
tar xzf /backup/agencia-up-front/config_YYYYMMDD_HHMMSS.tar.gz
```

## 🔧 Configurações Avançadas

### 1. Otimizar performance

Editar `next.config.js`:

```javascript
experimental: {
  optimizeCss: true,
  optimizePackageImports: ['@radix-ui/react-icons']
}
```

### 2. Configurar cache

```bash
# Criar volume para cache
docker volume create agencia-up-front-cache

# Adicionar ao docker-compose.yml
volumes:
  - agencia-up-front-cache:/app/.next/cache
```

### 3. Configurar rate limiting

Editar `nginx.conf` para ajustar limites:

```nginx
limit_req_zone $binary_remote_addr zone=api:10m rate=5r/s;
limit_req_zone $binary_remote_addr zone=general:10m rate=20r/s;
```

## 📞 Suporte

### Logs importantes

- **Aplicação**: `docker-compose logs agencia-up-front`
- **Nginx**: `docker-compose logs nginx`
- **Sistema**: `journalctl -u docker`

### Contatos

- **Desenvolvedor**: [Seu Nome]
- **Email**: [seu-email@dominio.com]
- **Documentação**: [link-para-docs]

---

## ✅ Checklist de Deploy

- [ ] VPS configurada e atualizada
- [ ] Docker instalado e funcionando
- [ ] Projeto clonado e configurado
- [ ] Variáveis de ambiente configuradas
- [ ] Script de deploy executado com sucesso
- [ ] Aplicação respondendo na porta 3000
- [ ] Nginx funcionando na porta 80
- [ ] SSL configurado (se aplicável)
- [ ] Monitoramento configurado
- [ ] Backup automático configurado
- [ ] Testes realizados
- [ ] Documentação atualizada

---

**🎉 Parabéns! Sua aplicação está no ar!**
