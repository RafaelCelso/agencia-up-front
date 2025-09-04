#!/bin/bash

# Script de deploy para VPS
echo "🚀 Iniciando deploy para VPS..."

# Parar containers existentes
echo "📦 Parando containers existentes..."
docker-compose down

# Remover imagens antigas
echo "🧹 Removendo imagens antigas..."
docker system prune -f

# Build da nova imagem
echo "🔨 Fazendo build da aplicação..."
docker-compose build --no-cache

# Verificar se as imagens estão presentes
echo "🔍 Verificando imagens..."
docker-compose run --rm app ls -la public/images/

# Iniciar containers
echo "▶️ Iniciando aplicação..."
docker-compose up -d

# Verificar status
echo "✅ Verificando status..."
docker-compose ps

echo "🎉 Deploy concluído!"
echo "📱 Acesse sua aplicação em: http://seu-dominio.com"
