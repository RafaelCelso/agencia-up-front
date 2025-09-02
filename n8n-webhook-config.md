# Configuração do Webhook n8n para Chat IA

## Variáveis de Ambiente

Crie um arquivo `.env.local` na raiz do projeto com as seguintes variáveis:

```bash
# Configurações do Webhook n8n para Chat IA
N8N_WEBHOOK_URL=https://seu-n8n.com/webhook/ai-chat
N8N_WEBHOOK_TOKEN=seu-token-de-autenticacao-aqui

# Outras configurações (opcional)
N8N_ENVIRONMENT=production
N8N_TIMEOUT=30000
```

## Estrutura do Webhook

O n8n receberá os seguintes dados:

```json
{
  "message": "Mensagem do usuário",
  "messageId": "1234567890",
  "timestamp": "2024-01-01T12:00:00.000Z",
  "sessionId": "session-123",
  "source": "website-chat",
  "userAgent": "Mozilla/5.0...",
  "ip": "192.168.1.1",
  "referer": "https://seusite.com"
}
```

## Resposta Esperada

O n8n deve retornar:

```json
{
  "response": "Resposta da IA processada",
  "success": true,
  "metadata": {
    "processingTime": "1.2s",
    "aiModel": "gpt-4",
    "confidence": 0.95
  }
}
```

## Fluxo no n8n

1. **Webhook Trigger**: Recebe dados do website
2. **Processamento de IA**: Integra com serviço de IA (OpenAI, Claude, etc.)
3. **Lógica de Negócio**: Aplica regras e contexto do negócio
4. **Resposta**: Retorna resposta processada para o website
5. **Notificação**: Opcional - envia notificação para equipe via WhatsApp/Email

## Segurança

- Use HTTPS para o webhook
- Implemente autenticação via token
- Valide dados de entrada
- Rate limiting para evitar spam
- Logs de auditoria para todas as interações
