import { NextRequest, NextResponse } from "next/server";

export async function POST(request: NextRequest) {
  try {
    console.log("🚀 API de chat iniciada");

    const body = await request.json();
    const { message, messageId, timestamp, sessionId } = body;

    console.log("📨 Dados recebidos:", {
      message,
      messageId,
      timestamp,
      sessionId,
    });

    // Validação dos dados recebidos
    if (!message || !messageId) {
      console.log("❌ Validação falhou: mensagem ou ID ausente");
      return NextResponse.json(
        { error: "Mensagem e ID são obrigatórios" },
        { status: 400 }
      );
    }

    // URL do webhook do n8n
    const n8nWebhookUrl = process.env.N8N_WEBHOOK_URL;

    console.log("🔗 Webhook URL configurada:", n8nWebhookUrl ? "Sim" : "Não");

    // Se não houver webhook configurado, retorna resposta de fallback
    if (!n8nWebhookUrl) {
      console.log("⚠️ Webhook não configurado, retornando fallback");
      return NextResponse.json({
        response:
          "Olá! Sou a IA da Agência Up Front. Como posso ajudar você hoje? Estou aqui para responder suas perguntas sobre nossos serviços de desenvolvimento web, design e marketing digital.",
        success: true,
        webhookStatus: "not_configured",
        timestamp: new Date().toISOString(),
      });
    }

    // Dados para enviar ao n8n
    const webhookData = {
      message,
      messageId,
      timestamp,
      sessionId,
      source: "agenciaupfront.com.br",
      userAgent: request.headers.get("user-agent"),
      ip:
        request.headers.get("x-forwarded-for") ||
        request.headers.get("x-real-ip") ||
        "unknown",
      referer: request.headers.get("referer"),
      domain: "www.agenciaupfront.com.br",
    };

    console.log("📤 Enviando dados para webhook:", webhookData);

    // Envia dados para o webhook do n8n
    const webhookResponse = await fetch(n8nWebhookUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(webhookData),
    });

    console.log(
      "📥 Resposta do webhook:",
      webhookResponse.status,
      webhookResponse.statusText
    );

    if (!webhookResponse.ok) {
      console.error(
        "❌ Erro no webhook do n8n:",
        webhookResponse.status,
        webhookResponse.statusText
      );

      // Retorna resposta de fallback em caso de erro no webhook
      return NextResponse.json({
        response:
          "Olá! Sou a IA da Agência Up Front. Estou enfrentando algumas dificuldades técnicas no momento, mas posso ajudar com informações básicas sobre nossos serviços. Para atendimento personalizado, entre em contato via WhatsApp ou email.",
        success: true,
        webhookStatus: "error",
        error: `Webhook retornou status ${webhookResponse.status}`,
        timestamp: new Date().toISOString(),
      });
    }

    const webhookResult = await webhookResponse.json();
    console.log("✅ Webhook processado com sucesso:", webhookResult);

    // Retorna exatamente o que o webhook do n8n retornou
    return NextResponse.json(webhookResult);
  } catch (error) {
    console.error("💥 Erro na API de chat:", error);

    return NextResponse.json(
      {
        error: "Erro interno do servidor",
        response:
          "Olá! Sou a IA da Agência Up Front. Estou enfrentando dificuldades técnicas no momento. Por favor, entre em contato diretamente via WhatsApp ou email para atendimento personalizado.",
        success: false,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
