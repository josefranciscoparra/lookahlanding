import { NextRequest, NextResponse } from 'next/server'
import { Resend } from 'resend'
import { z } from 'zod'

// Validación del schema con Zod
const contactSchema = z.object({
  nombre: z.string().min(2, 'El nombre debe tener al menos 2 caracteres'),
  apellidos: z.string().min(2, 'Los apellidos deben tener al menos 2 caracteres'),
  email: z.string().email('Email inválido'),
  telefono: z.string().min(9, 'El teléfono debe tener al menos 9 caracteres'),
  empresa: z.string().min(2, 'El nombre de la empresa debe tener al menos 2 caracteres'),
  mensaje: z.string().optional(),
})

// Configuración de Resend
const resendApiKey = process.env.RESEND_API_KEY
const contactEmail = process.env.CONTACT_EMAIL

let resend: Resend | null = null

if (resendApiKey) {
  resend = new Resend(resendApiKey)
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json()

    // Validar datos con Zod
    const validatedData = contactSchema.parse(body)

    console.log('🔍 Resend Debug:', {
      hasApiKey: !!resendApiKey,
      hasContactEmail: !!contactEmail,
    })

    // Si Resend está configurado, enviar el email
    if (resend && contactEmail) {
      console.log('📧 Attempting to send email...')

      try {
        const result = await resend.emails.send({
          from: 'Lookah Contact <onboarding@resend.dev>',
          to: contactEmail,
          subject: `[Lookah] Nueva solicitud de prueba gratuita - ${validatedData.empresa}`,
          replyTo: validatedData.email,
          html: `
            <!DOCTYPE html>
            <html>
              <head>
                <meta charset="utf-8">
                <style>
                  body {
                    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
                    line-height: 1.6;
                    color: #333;
                    max-width: 600px;
                    margin: 0 auto;
                    padding: 20px;
                  }
                  .header {
                    background: linear-gradient(135deg, #F57197 0%, #e85d7f 100%);
                    color: white;
                    padding: 30px;
                    border-radius: 10px 10px 0 0;
                    text-align: center;
                  }
                  .content {
                    background: #f9f9f9;
                    padding: 30px;
                    border-radius: 0 0 10px 10px;
                  }
                  .field {
                    margin-bottom: 20px;
                  }
                  .label {
                    font-weight: 600;
                    color: #555;
                    display: block;
                    margin-bottom: 5px;
                  }
                  .value {
                    color: #333;
                    padding: 10px;
                    background: white;
                    border-radius: 5px;
                    border-left: 3px solid #F57197;
                  }
                  .footer {
                    margin-top: 30px;
                    padding-top: 20px;
                    border-top: 2px solid #e0e0e0;
                    text-align: center;
                    color: #888;
                    font-size: 14px;
                  }
                </style>
              </head>
              <body>
                <div class="header">
                  <h1 style="margin: 0; font-size: 28px;">Nueva Solicitud de Prueba Gratuita</h1>
                  <p style="margin: 10px 0 0 0; opacity: 0.9;">Lookah - Sistema de Gestión</p>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">👤 Nombre completo:</span>
                    <div class="value">${validatedData.nombre} ${validatedData.apellidos}</div>
                  </div>

                  <div class="field">
                    <span class="label">📧 Email:</span>
                    <div class="value"><a href="mailto:${validatedData.email}">${validatedData.email}</a></div>
                  </div>

                  <div class="field">
                    <span class="label">📱 Teléfono:</span>
                    <div class="value">${validatedData.telefono}</div>
                  </div>

                  <div class="field">
                    <span class="label">🏢 Empresa:</span>
                    <div class="value">${validatedData.empresa}</div>
                  </div>

                  ${validatedData.mensaje ? `
                  <div class="field">
                    <span class="label">💬 Mensaje:</span>
                    <div class="value" style="white-space: pre-wrap;">${validatedData.mensaje}</div>
                  </div>
                  ` : ''}

                  <div class="footer">
                    <p>Este mensaje fue enviado desde el formulario de contacto de <strong>Lookah</strong></p>
                    <p>Puedes responder directamente a este email para contactar al cliente.</p>
                  </div>
                </div>
              </body>
            </html>
          `,
        })

        console.log('✅ Email sent successfully:', result)

        return NextResponse.json(
          {
            success: true,
            message: '¡Solicitud enviada correctamente! Nos pondremos en contacto contigo pronto.',
          },
          { status: 200 }
        )
      } catch (emailError) {
        console.error('❌ Error sending email:', emailError)

        // Aunque falle el email, devolvemos éxito al usuario
        return NextResponse.json(
          {
            success: true,
            message: 'Solicitud recibida. Nos pondremos en contacto contigo pronto.',
            warning: 'Email notification failed but message was received',
          },
          { status: 200 }
        )
      }
    } else {
      console.log('⚠️ Resend not configured, skipping email')

      return NextResponse.json(
        {
          success: true,
          message: 'Solicitud recibida correctamente.',
        },
        { status: 200 }
      )
    }
  } catch (error) {
    console.error('❌ Error processing contact form:', error)

    if (error instanceof z.ZodError) {
      return NextResponse.json(
        {
          success: false,
          message: 'Error de validación',
          errors: error.errors,
        },
        { status: 400 }
      )
    }

    return NextResponse.json(
      {
        success: false,
        message: 'Error al procesar la solicitud. Por favor, inténtalo de nuevo.',
      },
      { status: 500 }
    )
  }
}
