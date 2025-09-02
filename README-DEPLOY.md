# 🚀 Deploy da Agência Up Front

Este projeto está configurado para deploy em VPS da Hostinger com duas opções: **Docker** (recomendado) ou **PM2**.

## 🎯 Opções de Deploy

### 1. 🐳 Deploy com Docker (Recomendado)

- **Vantagens**: Isolamento, consistência, fácil rollback
- **Arquivos**: `Dockerfile`, `docker-compose.yml`, `deploy.sh`
- **Requisitos**: Docker e Docker Compose

### 2. ⚡ Deploy com PM2

- **Vantagens**: Mais leve, melhor para VPS pequenas
- **Arquivos**: `ecosystem.config.js`, `deploy-pm2.sh`
- **Requisitos**: Node.js, PM2, Nginx

## 📋 Pré-requisitos da VPS

- **Sistema**: Ubuntu 20.04 LTS ou superior
- **RAM**: Mínimo 2GB (recomendado 4GB+)
- **Armazenamento**: Mínimo 20GB
- **Acesso**: SSH habilitado
- **Domínio**: Configurado e apontando para a VPS (opcional)

## 🔧 Deploy Rápido

### Opção 1: Docker (Recomendado)

```bash
# 1. Conectar na VPS
ssh root@SEU_IP_DA_VPS

# 2. Clonar projeto
git clone https://github.com/seu-usuario/agencia-up-front.git
cd agencia-up-front

# 3. Executar deploy
chmod +x deploy.sh
./deploy.sh
```

### Opção 2: PM2

```bash
# 1. Conectar na VPS
ssh root@SEU_IP_DA_VPS

# 2. Clonar projeto
git clone https://github.com/seu-usuario/agencia-up-front.git
cd agencia-up-front

# 3. Executar deploy
chmod +x deploy-pm2.sh
./deploy-pm2.sh
```

## 📁 Estrutura de Arquivos de Deploy

```
agencia-up-front/
├── Dockerfile                 # Configuração Docker
├── docker-compose.yml         # Orquestração Docker
├── nginx.conf                 # Configuração Nginx
├── ecosystem.config.js        # Configuração PM2
├── deploy.sh                  # Script Docker
├── deploy-pm2.sh             # Script PM2
├── .dockerignore             # Arquivos ignorados pelo Docker
├── DEPLOY-INSTRUCTIONS.md    # Guia detalhado
└── README-DEPLOY.md          # Este arquivo
```

## 🌐 Configuração de Domínio

### 1. Configurar DNS

```bash
# Aponte seu domínio para o IP da VPS
A    seudominio.com    ->    SEU_IP_DA_VPS
A    www.seudominio.com ->   SEU_IP_DA_VPS
```

### 2. Atualizar configuração

```bash
# Editar nginx.conf
server_name seudominio.com www.seudominio.com;

# Ou para o Docker
# Editar docker-compose.yml e nginx.conf
```

### 3. Configurar SSL

```bash
# O script de deploy oferece opção automática
# Ou manual:
sudo certbot --nginx -d seudominio.com
```

## 📊 Monitoramento

### Docker

```bash
# Status dos containers
docker-compose ps

# Logs em tempo real
docker-compose logs -f

# Uso de recursos
docker stats
```

### PM2

```bash
# Status da aplicação
pm2 status

# Logs em tempo real
pm2 logs -f

# Monitoramento
pm2 monit
```

## 🔄 Atualizações

### Docker

```bash
# Parar aplicação
docker-compose down

# Fazer pull das alterações
git pull origin main

# Rebuild e restart
docker-compose build --no-cache
docker-compose up -d
```

### PM2

```bash
# Fazer pull das alterações
git pull origin main

# Instalar dependências e build
npm install
npm run build

# Reload da aplicação
pm2 reload agencia-up-front
```

## 🚨 Troubleshooting

### Problemas Comuns

#### 1. Porta 3000 em uso

```bash
# Verificar processos
sudo netstat -tlnp | grep :3000

# Matar processo
sudo kill -9 PID
```

#### 2. Erro de permissão

```bash
# Corrigir permissões
sudo chown -R $USER:$USER .
chmod +x *.sh
```

#### 3. Aplicação não inicia

```bash
# Ver logs
docker-compose logs agencia-up-front
# ou
pm2 logs agencia-up-front

# Verificar configuração
docker-compose config
# ou
pm2 show agencia-up-front
```

#### 4. Nginx não funciona

```bash
# Ver logs
sudo journalctl -u nginx

# Testar configuração
sudo nginx -t

# Reiniciar
sudo systemctl restart nginx
```

## 🔒 Segurança

### Firewall

```bash
# Configurar UFW
sudo ufw allow 22/tcp    # SSH
sudo ufw allow 80/tcp    # HTTP
sudo ufw allow 443/tcp   # HTTPS
sudo ufw enable
```

### SSL/TLS

```bash
# Certificado automático
sudo certbot --nginx -d seudominio.com

# Renovação automática
sudo crontab -e
# Adicionar: 0 12 * * * /usr/bin/certbot renew --quiet
```

### Rate Limiting

```nginx
# Configurado no nginx.conf
limit_req_zone $binary_remote_addr zone=api:10m rate=10r/s;
limit_req_zone $binary_remote_addr zone=general:10m rate=30r/s;
```

## 💾 Backup

### Backup Automático

- **Frequência**: Diário às 2h da manhã
- **Retenção**: 7 dias
- **Local**: `/backup/agencia-up-front/`

### Backup Manual

```bash
# Docker
./backup.sh

# PM2
./backup.sh
```

## 📈 Performance

### Otimizações Aplicadas

- **Gzip compression** para arquivos estáticos
- **Cache headers** para recursos estáticos
- **Rate limiting** para APIs
- **Load balancing** com PM2
- **Image optimization** com Next.js

### Monitoramento

- **Health checks** automáticos
- **Logs rotacionados**
- **Métricas de performance**
- **Alertas de falha**

## 🆘 Suporte

### Logs Importantes

- **Aplicação**: `docker-compose logs` ou `pm2 logs`
- **Nginx**: `sudo journalctl -u nginx`
- **Sistema**: `journalctl -u docker` ou `journalctl -u pm2`

### Comandos de Emergência

```bash
# Parar tudo
docker-compose down
# ou
pm2 stop all

# Reiniciar tudo
docker-compose restart
# ou
pm2 restart all

# Ver status geral
docker-compose ps
# ou
pm2 status
```

## 📚 Recursos Adicionais

- [Guia Detalhado](./DEPLOY-INSTRUCTIONS.md)
- [Documentação Docker](https://docs.docker.com/)
- [Documentação PM2](https://pm2.keymetrics.io/docs/)
- [Documentação Nginx](https://nginx.org/en/docs/)
- [Documentação Next.js](https://nextjs.org/docs)

---

## ✅ Checklist de Deploy

- [ ] VPS configurada e atualizada
- [ ] Docker/PM2 instalado e funcionando
- [ ] Projeto clonado e configurado
- [ ] Script de deploy executado com sucesso
- [ ] Aplicação respondendo na porta 3000
- [ ] Nginx funcionando na porta 80
- [ ] SSL configurado (se aplicável)
- [ ] Monitoramento configurado
- [ ] Backup automático configurado
- [ ] Firewall configurado
- [ ] Testes realizados

---

**🎉 Sua aplicação está pronta para produção!**

Para dúvidas ou problemas, consulte o [Guia Detalhado](./DEPLOY-INSTRUCTIONS.md) ou entre em contato com o desenvolvedor.
