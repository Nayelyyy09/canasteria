import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'
import path from 'path'
import fs from 'fs'

// Read .env file manually for server-side use
function loadServerEnv() {
  const envPath = path.resolve(process.cwd(), '.env');
  const env = {};
  try {
    const content = fs.readFileSync(envPath, 'utf-8');
    content.split('\n').forEach(line => {
      const trimmed = line.trim();
      if (trimmed && !trimmed.startsWith('#')) {
        const eqIndex = trimmed.indexOf('=');
        if (eqIndex > 0) {
          const key = trimmed.substring(0, eqIndex).trim();
          let value = trimmed.substring(eqIndex + 1).trim();
          // Remove quotes
          if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
            value = value.slice(1, -1);
          }
          env[key] = value;
        }
      }
    });
  } catch (e) {
    console.warn('Could not read .env file:', e.message);
  }
  return env;
}

const serverEnv = loadServerEnv();

// Brevo email proxy plugin
function brevoMailPlugin() {
  return {
    name: 'brevo-mail-proxy',
    configureServer(server) {
      server.middlewares.use((req, res, next) => {
        if (req.url === '/api/send-quote' && req.method === 'POST') {
          let body = '';
          req.on('data', chunk => { body += chunk; });
          req.on('end', async () => {
            try {
              const { name, email, phone, company, type, items, notes } = JSON.parse(body);

              const BREVO_API = serverEnv.BREVO_API;
              const BREVO_SENDER = serverEnv.BREVO_SENDER;
              const EMAIL_COTIZAR = serverEnv.EMAIL_COTIZAR;

              console.log('[Brevo] API Key:', BREVO_API ? 'OK' : 'MISSING');
              console.log('[Brevo] Sender:', BREVO_SENDER);
              console.log('[Brevo] Email:', EMAIL_COTIZAR);

              if (!BREVO_API || !BREVO_SENDER || !EMAIL_COTIZAR) {
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Variables de entorno no configuradas en .env' }));
                return;
              }

              // Build HTML table of items (sin precios, solo cantidades)
              const itemsHtml = items.map(item => `
                <tr>
                  <td style="padding:12px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:14px;color:#333;">${item.name}</td>
                  <td style="padding:12px;border-bottom:1px solid #eee;font-family:Arial,sans-serif;font-size:14px;color:#333;text-align:center;font-weight:bold;">${item.qty}</td>
                </tr>
              `).join('');

              const typeLabel = type === 'corporativo' ? 'Cotización Corporativa' : 'Cotización Personal';
              const subject = `Nueva ${typeLabel} - ${name}`;

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
      <span style="display:inline-block;background-color:${type === 'corporativo' ? '#841B2D' : '#1A6B3E'};color:#ffffff;font-family:Arial,sans-serif;font-size:11px;font-weight:bold;letter-spacing:1px;text-transform:uppercase;padding:6px 16px;border-radius:20px;">${typeLabel}</span>
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
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;">${phone || 'No especificado'}</td>
        </tr>
        ${company ? `<tr>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#666;">Empresa:</td>
          <td style="padding:8px 0;font-family:Arial,sans-serif;font-size:13px;color:#333;font-weight:bold;">${company}</td>
        </tr>` : ''}
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
        Total de productos: ${items.reduce((sum, item) => sum + item.qty, 0)} unidades
      </p>
    </td>
  </tr>
  ${notes ? `<tr>
    <td style="padding:0 40px 25px;">
      <div style="background-color:#f8f8f8;border-left:3px solid #B39359;padding:15px;border-radius:0 4px 4px 0;">
        <p style="margin:0 0 5px;font-family:Arial,sans-serif;font-size:11px;color:#666;text-transform:uppercase;letter-spacing:1px;">Notas del Cliente</p>
        <p style="margin:0;font-family:Arial,sans-serif;font-size:14px;color:#333;">${notes}</p>
      </div>
    </td>
  </tr>` : ''}
  <tr>
    <td style="background-color:#f8f8f8;padding:25px 40px;text-align:center;border-top:1px solid #eee;">
      <p style="margin:0;font-family:Arial,sans-serif;font-size:11px;color:#999;">
        Este correo fue generado automáticamente desde el sistema de cotizaciones de publiventa.pe
      </p>
      <p style="margin:5px 0 0;font-family:Arial,sans-serif;font-size:11px;color:#999;">
        Fecha: ${new Date().toLocaleDateString('es-PE', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
      </p>
    </td>
  </tr>
</table>
</td></tr>
</table>
</body>
</html>`;

              // Send via Brevo API
              const response = await fetch('https://api.brevo.com/v3/smtp/email', {
                method: 'POST',
                headers: {
                  'accept': 'application/json',
                  'content-type': 'application/json',
                  'api-key': BREVO_API,
                },
                body: JSON.stringify({
                  sender: { email: BREVO_SENDER, name: 'Publiventa - Canastas Navideñas' },
                  to: [{ email: EMAIL_COTIZAR, name: 'Ventas Publiventa' }],
                  replyTo: { email: BREVO_SENDER, name: 'Ventas Publiventa' },
                  subject: subject,
                  htmlContent: htmlContent,
                }),
              });

              if (!response.ok) {
                const errorData = await response.json();
                console.error('[Brevo] Error:', errorData);
                res.writeHead(500, { 'Content-Type': 'application/json' });
                res.end(JSON.stringify({ error: 'Error al enviar el correo', details: errorData }));
                return;
              }

              console.log('[Brevo] Email sent successfully');
              res.writeHead(200, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ success: true, message: 'Cotización enviada correctamente' }));
            } catch (err) {
              console.error('[Brevo] Error:', err);
              res.writeHead(500, { 'Content-Type': 'application/json' });
              res.end(JSON.stringify({ error: 'Error interno del servidor' }));
            }
          });
        } else {
          next();
        }
      });
    },
  };
}

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    brevoMailPlugin(),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
