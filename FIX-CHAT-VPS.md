# 🔧 Correção do Chat IA em Produção (VPS)

## ❌ **Problema Identificado**

O chat com IA estava retornando erro 404 em produção (`https://www.agenciaupfront.com.br/api/ai-chat`) porque:

1. **Variável de ambiente não configurada**: `N8N_WEBHOOK_URL` não estava disponível na VPS
2. **Arquivo de configuração ausente**: Faltava `.env.production` na VPS
3. **API route funcionando**: Em VPS com Next.js, as API routes funcionam normalmente

## ✅ **Solução Implementada**

### **Arquitetura Simplificada**

O chat agora usa sempre a API route `/api/ai-chat`, que gerencia a comunicação com o webhook n8n:

### **Código da Solução**

```typescript
// Para VPS com Next.js, sempre usa a API route
// A API route já gerencia a comunicação com o webhook n8n
const response = await fetch("/api/ai-chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    message: userMessage,
    messageId: messageId,
    timestamp: new Date().toISOString(),
    sessionId: sessionStorage.getItem("chatSessionId") || "default-session",
  }),
});
```

## 🎯 **Benefícios da Solução**

### ✅ **Arquitetura Simplificada**

- **Desenvolvimento e Produção**: Usa sempre a API route `/api/ai-chat`
- **Logs centralizados**: Todos os logs ficam na API route
- **Tratamento de erro unificado**: Uma única lógica de fallback

### ✅ **Configuração Clara**

- Arquivo `.env.production` na VPS com variáveis necessárias
- Configuração do PM2 já preparada para carregar variáveis
- Documentação atualizada com instruções específicas

### ✅ **Fallback Robusto**

- API route com tratamento de erro completo
- Mensagens de fallback quando webhook falhar
- Logs detalhados para debugging

## 🚀 **Como Configurar na VPS**

### **1. Criar Arquivo de Variáveis de Ambiente**

Na VPS, crie o arquivo `.env.production`:

```bash
# Na VPS, no diretório do projeto
nano .env.production
```

Adicione o conteúdo:

```bash
N8N_WEBHOOK_URL=https://automacao-n8n.jqnbbt.easypanel.host/webhook/7ded8e5e-bf5f-4318-8762-c29c206c6a1c
N8N_ENVIRONMENT=production
N8N_TIMEOUT=30000
NODE_ENV=production
HOSTNAME=0.0.0.0
PORT=3000
```

### **2. Fazer Deploy**

```bash
# Fazer push das alterações
git add .
git commit -m "fix: corrigir chat IA para VPS"
git push origin main

# Na VPS, fazer pull e deploy
git pull origin main
npm install
npm run build
pm2 restart agencia-up-front --env production
```

## 🔍 **Verificação e Debug**

### **1. Verificar Logs da API**

```bash
# Na VPS, verificar logs do PM2
pm2 logs agencia-up-front

# Ou verificar logs específicos
tail -f logs/out.log
tail -f logs/error.log
```

### **2. Testar API Route Diretamente**

```bash
# Testar se a API route está respondendo
curl -X POST https://www.agenciaupfront.com.br/api/ai-chat \
  -H "Content-Type: application/json" \
  -d '{"message":"teste","messageId":"123","timestamp":"2024-01-01T00:00:00.000Z","sessionId":"test-session"}'
```

### **3. Verificar Variáveis de Ambiente**

```bash
# Na VPS, verificar se as variáveis estão carregadas
pm2 show agencia-up-front
```

## 🔧 **Troubleshooting**

### **Se o erro 404 persistir:**

1. **Verificar se a API route existe:**

   ```bash
   ls -la app/api/ai-chat/
   ```

2. **Verificar build:**

   ```bash
   npm run build
   # Verificar se não há erros de build
   ```

3. **Verificar PM2:**
   ```bash
   pm2 restart agencia-up-front --env production
   pm2 logs agencia-up-front --lines 50
   ```

### **Se o webhook não responder:**

1. **Verificar variável de ambiente:**

   ```bash
   # No arquivo .env.production, confirmar se a URL está correta
   cat .env.production
   ```

2. **Testar webhook diretamente:**
   ```bash
   curl -X POST https://automacao-n8n.jqnbbt.easypanel.host/webhook/7ded8e5e-bf5f-4318-8762-c29c206c6a1c \
     -H "Content-Type: application/json" \
     -d '{"message":"teste"}'
   ```

## 🎉 **Status**

- ✅ **Problema diagnosticado**: Variáveis de ambiente não configuradas na VPS
- ✅ **Solução implementada**: Configuração correta para VPS com Next.js
- ✅ **API route mantida**: Funciona tanto em dev quanto em produção
- ✅ **Documentação atualizada**: Instruções específicas para VPS

---

**O chat da IA agora funcionará perfeitamente na sua VPS!** 🚀
