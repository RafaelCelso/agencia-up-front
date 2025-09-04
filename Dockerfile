# Dockerfile básico para EasyPanel
FROM node:18-alpine

# Definir diretório de trabalho
WORKDIR /app

# Copiar arquivos de dependências
COPY package*.json ./
COPY pnpm-lock.yaml ./

# Instalar dependências
RUN npm install -g pnpm
RUN pnpm install

# Copiar código fonte
COPY . .

# Verificar se as imagens estão presentes
RUN ls -la public/images/

# Build da aplicação
RUN pnpm run build

# Expor porta
EXPOSE 3000

# Comando para iniciar a aplicação
CMD ["pnpm", "start"]
