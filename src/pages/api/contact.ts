import type { APIRoute } from "astro"
import { Resend } from "resend"

export const POST: APIRoute = async ({ request }) => {
  try {
    const body = await request.json()
    const { name, email, projectType, message } = body

    // Validate inputs
    if (!name || !email || !message) {
      return new Response(
        JSON.stringify({ error: "Todos los campos obligatorios deben estar completos." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!emailRegex.test(email)) {
      return new Response(
        JSON.stringify({ error: "Por favor ingresa un correo electrónico válido." }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      )
    }

    const apiKey = import.meta.env.RESEND_API_KEY || process.env.RESEND_API_KEY

    // If API key is not configured yet, return a clear guidance message
    if (!apiKey) {
      console.warn("RESEND_API_KEY no está configurada en las variables de entorno.")
      return new Response(
        JSON.stringify({
          success: true,
          simulated: true,
          message: "Mensaje recibido correctamente en modo desarrollo.",
        }),
        { status: 200, headers: { "Content-Type": "application/json" } }
      )
    }

    const resend = new Resend(apiKey)

    const recipientEmail = import.meta.env.CONTACT_RECEIVER_EMAIL || process.env.CONTACT_RECEIVER_EMAIL || "contactorogeris@gmail.com"
    const senderEmail = import.meta.env.CONTACT_SENDER_EMAIL || process.env.CONTACT_SENDER_EMAIL || "contacto@webcoresys.com"

    const data = await resend.emails.send({
      from: `Portfolio Roger Infa <${senderEmail}>`,
      to: recipientEmail,
      replyTo: email,
      subject: `[Nuevo Contacto Portfolio] ${name} - ${projectType || "Consulta General"}`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #0D0D0E; color: #FFFFFF; border-radius: 12px;">
          <div style="border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 16px; margin-bottom: 20px;">
            <h2 style="margin: 0; color: #FFFFFF; font-size: 20px; font-weight: 600;">Nuevo Mensaje desde tu Portfolio (Astro)</h2>
            <p style="margin: 4px 0 0; color: rgba(255,255,255,0.5); font-size: 13px;">Has recibido una nueva consulta de contacto.</p>
          </div>

          <div style="background: rgba(255,255,255,0.05); padding: 18px; border-radius: 8px; margin-bottom: 20px;">
            <p style="margin: 0 0 10px; font-size: 14px;"><strong style="color: rgba(255,255,255,0.6);">Nombre:</strong> ${name}</p>
            <p style="margin: 0 0 10px; font-size: 14px;"><strong style="color: rgba(255,255,255,0.6);">Correo:</strong> <a href="mailto:${email}" style="color: #60A5FA;">${email}</a></p>
            <p style="margin: 0; font-size: 14px;"><strong style="color: rgba(255,255,255,0.6);">Tipo de Proyecto / Rol:</strong> ${projectType || "No especificado"}</p>
          </div>

          <div style="margin-bottom: 24px;">
            <h3 style="font-size: 14px; font-weight: 600; color: rgba(255,255,255,0.6); text-transform: uppercase; letter-spacing: 0.05em; margin: 0 0 10px;">Mensaje:</h3>
            <div style="background: rgba(255,255,255,0.03); border-left: 3px solid #FFFFFF; padding: 14px 16px; font-size: 15px; line-height: 1.6; color: rgba(255,255,255,0.9); white-space: pre-wrap;">${message}</div>
          </div>

          <div style="border-top: 1px solid rgba(255,255,255,0.1); padding-top: 16px; font-size: 12px; color: rgba(255,255,255,0.4); text-align: center;">
            Puedes responder directamente a este correo para contactar a ${name}.
          </div>
        </div>
      `,
    })

    if (data.error) {
      console.error("Resend API Error:", data.error)
      return new Response(
        JSON.stringify({ error: data.error.message || "Error al enviar el correo con Resend." }),
        { status: 500, headers: { "Content-Type": "application/json" } }
      )
    }

    return new Response(
      JSON.stringify({ success: true, id: data.data?.id }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    )
  } catch (err: unknown) {
    console.error("Error en /api/contact:", err)
    const errorMessage = err instanceof Error ? err.message : "Error interno del servidor."
    return new Response(
      JSON.stringify({ error: errorMessage }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    )
  }
}
