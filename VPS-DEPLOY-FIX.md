# 🔧 Correções para Deploy na VPS

## Problemas Identificados e Soluções

### 1. **Configuração Conflitante do Next.js**

- ❌ **Problema**: Havia dois arquivos de configuração (`next.config.js` e `next.config.mjs`) com configurações conflitantes
- ✅ **Solução**: Removido `next.config.mjs` e configurado `next.config.js` para VPS

### 2. **Imagens Não Copiadas para Docker**

- ❌ **Problema**: `.dockerignore` estava ignorando a pasta `public/`
- ✅ **Solução**: Comentado a linha que ignorava a pasta `public/`

### 3. **Configuração de Imagens para VPS**

- ❌ **Problema**: `images: { unoptimized: false }` não funciona em VPS sem otimização
- ✅ **Solução**: Configurado `images: { unoptimized: true }`

## 🚀 Passos para Deploy na VPS

### 1. **Fazer Commit das Correções**

```bash
git add .
git commit -m "fix: corrigir carregamento de imagens na VPS"
git push origin main
```

### 2. **Na VPS, Fazer Pull e Deploy**

```bash
# Entrar na pasta do projeto
cd /caminho/para/seu/projeto

# Fazer pull das correções
git pull origin main

# Executar o script de deploy
chmod +x deploy-vps.sh
./deploy-vps.sh
```

### 3. **Verificar se as Imagens Estão Funcionando**

```bash
# Verificar logs do container
docker-compose logs agencia-up-front

# Verificar se as imagens estão no container
docker exec agencia-up-front ls -la public/images/

# Testar acesso às imagens
curl -I http://localhost:3000/images/up-front-logo.webp
```

## 🔍 Troubleshooting

### Se as imagens ainda não carregarem:

1. **Verificar se o container está rodando**:

   ```bash
   docker-compose ps
   ```

2. **Verificar logs de erro**:

   ```bash
   docker-compose logs -f agencia-up-front
   ```

3. **Verificar se as imagens estão no container**:

   ```bash
   docker exec agencia-up-front ls -la public/images/
   ```

4. **Testar acesso direto às imagens**:
   ```bash
   curl -I http://seu-dominio.com/images/up-front-logo.webp
   ```

### Configurações Importantes

- ✅ `output: "standalone"` - Para VPS com Node.js
- ✅ `images: { unoptimized: true }` - Para VPS sem otimização
- ✅ Pasta `public/` incluída no Docker
- ✅ Healthcheck configurado
- ✅ Logs configurados

## 📱 Teste de Imagens

Adicione temporariamente o componente `ImageTest` em uma página para verificar se as imagens estão carregando:

```tsx
import { ImageTest } from "@/components/image-test";

// Em qualquer página
<ImageTest />;
```

## 🎯 Próximos Passos

1. Fazer deploy com as correções
2. Testar carregamento das imagens
3. Verificar logs se houver problemas
4. Remover componente de teste após confirmação
