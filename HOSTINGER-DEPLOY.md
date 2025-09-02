# 🚀 Deploy na Hostinger - Chat com IA

## ❌ **Problema Identificado:**

O chat com IA não está funcionando no deploy da Hostinger (www.agenciaupfront.com.br)

## 🔍 **Possíveis Causas:**

### **1. Variáveis de Ambiente**

- O arquivo `.env.local` não está sendo carregado no deploy
- A variável `N8N_WEBHOOK_URL` está undefined

### **2. API Routes**

- A Hostinger pode ter limitações com Next.js API routes
- Configurações de servidor incorretas

### **3. CORS/Network**

- Bloqueios de firewall ou configurações de rede

## 🛠️ **Soluções Implementadas:**

### **1. ✅ API Route Robusta**

- Logs detalhados para debug
- Resposta de fallback quando webhook falhar
- Verificação de variáveis de ambiente

### **2. ✅ Next.js Config**

- Configurações específicas para Hostinger
- Headers CORS configurados
- Output standalone habilitado

## 📋 **Passos para Resolver:**

### **Passo 1: Verificar Variáveis de Ambiente**

```bash
# Na Hostinger, crie um arquivo .env.local com:
N8N_WEBHOOK_URL=https://automacao-n8n.jqnbbt.easypanel.host/webhook/7ded8e5e-bf5f-4318-8762-c29c206c6a1c
```

### **Passo 2: Rebuild e Deploy**

```bash
npm run build
# Fazer deploy novamente na Hostinger
```

### **Passo 3: Verificar Logs**

- Acessar os logs do servidor na Hostinger
- Verificar se há erros de API routes

## 🔧 **Configurações Hostinger:**

### **1. Node.js Version**

- Usar Node.js 18+ ou 20+
- Verificar se está habilitado

### **2. Build Command**

```bash
npm run build
```

### **3. Start Command**

```bash
npm start
```

### **4. Environment Variables**

- Configurar `N8N_WEBHOOK_URL` no painel da Hostinger
- Ou criar arquivo `.env.local` no root do projeto

## 🧪 **Teste do Chat:**

### **1. Abrir Console do Navegador**

- F12 → Console
- Verificar se há erros de API

### **2. Testar Endpoint**

- Acessar: `https://www.agenciaupfront.com.br/api/ai-chat`
- Deve retornar erro 405 (Method Not Allowed) - isso é normal

### **3. Verificar Logs do Servidor**

- Na Hostinger, verificar logs de erro
- Procurar por mensagens de log da API

## 📞 **Contato para Suporte:**

Se o problema persistir, entre em contato com o suporte da Hostinger mencionando:

- "Next.js API routes não estão funcionando"
- "Erro 500 ao acessar /api/ai-chat"
- "Variáveis de ambiente não estão sendo carregadas"

## 🎯 **Status Atual:**

- ✅ API route implementada com fallbacks
- ✅ Logs detalhados para debug
- ✅ Configurações Next.js otimizadas
- ⏳ Aguardando deploy e teste na Hostinger
