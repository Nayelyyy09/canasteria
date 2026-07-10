// Supabase Edge Function - Send Quote via Brevo
// Deploy: supabase functions deploy send-quote
// Set secrets: supabase secrets set BREVO_API=xxx BREVO_SENDER=xxx EMAIL_COTIZAR=xxx

import { serve } from "https://deno.land/std@0.177.0/http/server.ts";

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers": "authorization, x-client-info, apikey, content-type",
};

serve(async (req: Request) => {
  // Handle CORS preflight
  if (req.method === "OPTIONS") {
    return new Response("ok", { headers: corsHeaders });
  }

  try {
    const { name, email, phone, company, type, items, notes } = await req.json();

    const BREVO_API = Deno.env.get("BREVO_API");
    const BREVO_SENDER = Deno.env.get("BREVO_SENDER");
    const EMAIL_COTIZAR = Deno.env.get("EMAIL_COTIZAR");

    if (!BREVO_API || !BREVO_SENDER || !EMAIL_COTIZAR) {
      return new Response(
        JSON.stringify({ error: "Variables de entorno no configuradas en Supabase" }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    // Build HTML table of items
    const itemsHtml = items
      .map(
        (item: { name: string; qty: number }) => `
        <tr>
          <td style="padding:12px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:14px;color:#333;">${item.name}</td>
          <td style="padding:12px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:14px;color:#333;text-align:center;font-weight:bold;">${item.qty}</td>
        </tr>`
      )
      .join("");

    const typeLabel = type === "corporativo" ? "Cotización Corporativa" : "Cotización Personal";
    const subject = `Nueva ${typeLabel} - ${name}`;
    const totalUnits = items.reduce((sum: number, item: { qty: number }) => sum + item.qty, 0);

    const htmlContent = `
<!DOCTYPE html>
<html>
<head><meta charset="UTF-8"></head>
<body style="margin:0;padding:0;background-color:#f4f4f4;">
<table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
<tr><td align="center">
<table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:8px;overflow:hidden;">
  <tr>
    <td style="background-color:#1A2F23;padding:30px 40px;text-align:center;">
      <h1 style="margin:0;font-family:Georgia,serif;font-size:28px;color:#ffffff;">Publiventa</h1>
      <p style="margin:8px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#B39359;letter-spacing:2px;text-transform:uppercase;">Nueva Cotización</p>
    </td>
  </tr>
  <tr>
    <td style="padding:25px 40px 0;text-align:center;">
      <span style="display:inline-block;background-color:${type === "corporativo" ? "#841B2D" : "#1A6B3E"};color:#ffffff;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;padding:6px 16px;border-radius:20px;">${typeLabel}</span>
    </td>
  </tr>
  <tr>
    <td style="padding:25px 40px;">
      <h2 style="margin:0 0 15px;font-family:Georgia,serif;font-size:20px;color:#1A2F23;">Datos del Cliente</h2>
      <table width="100%" cellpadding="0" cellspacing="0">
        <tr>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;width:120px;">Nombre:</td>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;font-weight:bold;">${name}</td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;">Email:</td>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;"><a href="mailto:${email}" style="color:#841B2D;">${email}</a></td>
        </tr>
        <tr>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;">Teléfono:</td>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;">${phone || "No especificado"}</td>
        </tr>
        ${
          company
            ? `<tr>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;">Empresa:</td>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;font-weight:bold;">${company}</td>
        </tr>`
            : ""
        }
      </table>
    </td>
  </tr>
  <tr>
    <td style="padding:0 40px 25px;">
      <h2 style="margin:0 0 15px;font-family:Georgia,serif;font-size:20px;color:#1A2F23;">Productos a Cotizar</h2>
      <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #eee;border-radius:4px;overflow:hidden;">
        <thead>
          <tr style="background-color:#f8f8f8;">
            <th style="padding:12px;font-family:Arial,sans-serif;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:1px;text-align:left;border-bottom:2px solid #B39359;">Producto</th>
            <th style="padding:12px;font-family:Arial,sans-serif;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:1px;text-align:center;border-bottom:2px solid #B39359;">Cantidad</th>
          </tr>
        </thead>
        <tbody>
          ${itemsHtml}
        </tbody>
      </table>
      <p style="margin:12px 0 0;font-family:Arial,sans-serif;font-size:12px;color:#999;text-align:center;">
        Total de productos: ${totalUnits} unidades
      </p>
    </td>
  </tr>
  ${
    notes
      ? `<tr>
    <td style="padding:0 40px 25px;">
      <div style="background-color:#f8f8f8;border-left:3px solid #B39359;padding:15px;border-radius:0 4px 4px 0;">
        <p style="margin:0 0 5px;font-family:Arial,sans-serif;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:1px;">Notas del Cliente</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333;">${notes}</p>
      </div>
    </td>
  </tr>`
      : ""
  }
  <tr>
    <td style="background-color:#f8f8f8;padding:25px 40px;text-align:center;border-top:1px solid #eee;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#999;">
        Este correo fue generado automáticamente desde el sistema de cotizaciones de publiventa.pe
      </p>
      <p style="margin:5px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#999;">
        Fecha: ${new Date().toLocaleDateString("es-PE", { day: "2-digit", month: "long", year: "numeric", hour: "2-digit", minute: "2-digit" })}
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;

    // Send via Brevo API
    const response = await fetch("https://api.brevo.com/v3/smtp/email", {
      method: "POST",
      headers: {
        accept: "application/json",
        "content-type": "application/json",
        "api-key": BREVO_API,
      },
      body: JSON.stringify({
        sender: { email: BREVO_SENDER, name: "Publiventa - Canastas Navideñas" },
        to: [{ email: EMAIL_COTIZAR, name: "Ventas Publiventa" }],
        replyTo: { email: email, name: name },
        subject: subject,
        htmlContent: htmlContent,
      }),
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error("[Brevo] Error:", errorData);
      return new Response(
        JSON.stringify({ error: "Error al enviar el correo", details: errorData }),
        { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
      );
    }

    console.log("[Brevo] Email sent successfully to", EMAIL_COTIZAR);

    return new Response(
      JSON.stringify({ success: true, message: "Cotización enviada correctamente" }),
      { status: 200, headers: { ...corsHeaders, "Content-Type": "json" } }
    );
  } catch (err) {
    console.error("[Brevo] Error:", err);
    return new Response(
      JSON.stringify({ error: "Error interno del servidor" }),
      { status: 500, headers: { ...corsHeaders, "Content-Type": "application/json" } }
    );
  }
});
