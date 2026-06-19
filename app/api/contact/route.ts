import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const { name, phone, email, service, message } = body;

    if (!name || !phone || !email || !service || !message) {
      return NextResponse.json(
        { error: "Tous les champs sont obligatoires." },
        { status: 400 },
      );
    }

    const now = new Date();

    const formattedDate = now.toLocaleDateString("fr-FR");

    const formattedTime = now.toLocaleTimeString("fr-FR", {
      hour: "2-digit",
      minute: "2-digit",
    });

    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.CONTACT_FROM_EMAIL;

    if (!process.env.RESEND_API_KEY || !toEmail || !fromEmail) {
      return NextResponse.json(
        { error: "Configuration email manquante." },
        { status: 500 },
      );
    }

    const resend = new Resend(process.env.RESEND_API_KEY);

    const adminEmail = await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      subject: `Nouvelle demande Nuisi Contrôle - ${service}`,
      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f4f5;padding:32px;">
          <div style="max-width:640px;margin:auto;background:white;border-radius:20px;padding:32px;">
            <div style="text-align:center;margin-bottom:24px;">
  <img
    src="https://nuisi-controle.vercel.app/logo/logo-nuisi-controle.png"
    alt="Nuisi Contrôle"
    style="max-width:220px;height:auto;"
  />
</div>
<p
  style="
    text-align:center;
    color:#C1121F;
    font-weight:bold;
    letter-spacing:2px;
    margin-bottom:24px;
  "
>
  Dératisation • Désinsectisation • Désinfection • Dépigeonnage
</p>

            <h1 style="margin:0 0 16px;color:#0f0f10;">Nouvelle demande de contact</h1>
            <p style="color:#52525b;">Une nouvelle demande a été envoyée depuis le site Nuisi Contrôle.</p>

            <div style="margin-top:24px;color:#52525b;">
              <p><strong>Date :</strong> ${formattedDate}</p>
              <p><strong>Heure :</strong> ${formattedTime}</p>
            </div>

            <div style="margin-top:24px;padding:20px;background:#0f0f10;border-radius:16px;color:white;">
              <p><strong>Nom :</strong> ${name}</p>
              <p>
                <strong>Téléphone :</strong>
                <a href="tel:${phone}" style="color:white;text-decoration:none;">
                  ${phone}
                </a>
              </p>
              <p>
                <strong>Email :</strong>
                <a href="mailto:${email}" style="color:#60a5fa;">
                  ${email}
                </a>
              </p>
              <p><strong>Service :</strong> ${service}</p>
            </div>

            <div style="margin-top:24px;">
              <h2 style="color:#0f0f10;">Message</h2>
              <p style="white-space:pre-line;color:#52525b;">${message}</p>
            </div>
          </div>
        </div>
      `,
    });

    if (adminEmail.error) {
      console.error("RESEND_ADMIN_ERROR", adminEmail.error);

      return NextResponse.json(
        { error: adminEmail.error.message },
        { status: 500 },
      );
    }

    const clientEmail = await resend.emails.send({
      from: fromEmail,
      to: email,
      subject: "Votre demande a bien été envoyée - Nuisi Contrôle",
      html: `
        <div style="font-family:Arial,sans-serif;background:#f4f4f5;padding:32px;">
          <div style="max-width:640px;margin:auto;background:white;border-radius:20px;padding:32px;">
            <div style="text-align:center;margin-bottom:24px;">
  <img
    src="https://nuisi-controle.vercel.app/logo/logo-nuisi-controle.png"
    alt="Nuisi Contrôle"
    style="max-width:220px;height:auto;"
  />
</div>

<p
  style="
    text-align:center;
    color:#C1121F;
    font-weight:bold;
    letter-spacing:2px;
    margin-bottom:24px;
  "
>
  Dératisation • Désinsectisation • Désinfection • Dépigeonnage
</p>


            <h1 style="margin:0 0 16px;color:#0f0f10;">Votre demande a bien été envoyée</h1>

            <p style="color:#52525b;line-height:1.7;">
              Bonjour ${name},<br /><br />
              Merci pour votre message. Nuisi Contrôle a bien reçu votre demande concernant :
              <strong>${service}</strong>.
            </p>

            <p style="color:#52525b;line-height:1.7;">
              Nous reviendrons vers vous rapidement afin d’échanger sur votre besoin et vous proposer une solution adaptée.
            </p>

            <div style="margin-top:24px;padding:20px;background:#0f0f10;border-radius:16px;color:white;">
              <p style="margin:0 0 8px;"><strong>Votre message :</strong></p>
              <p style="white-space:pre-line;margin:0;color:#d4d4d8;">${message}</p>
            </div>

            <p style="margin-top:24px;color:#52525b;line-height:1.7;">
              En cas d’urgence, vous pouvez nous appeler directement au :
              <br />
              <a
                href="tel:+33662332036"
                style="font-size:18px;color:#0f0f10;font-weight:bold;text-decoration:none;"
              >
                06 62 33 20 36
              </a>
            </p>

            <p style="margin-top:32px;color:#71717a;font-size:14px;">
              Nuisi Contrôle — Dératisation, désinsectisation & désinfection dans l’Ain et le bassin lyonnais.
            </p>
          </div>
        </div>
      `,
    });

    if (clientEmail.error) {
      console.error("RESEND_CLIENT_ERROR", clientEmail.error);

      return NextResponse.json(
        { error: clientEmail.error.message },
        { status: 500 },
      );
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("CONTACT_ERROR", error);

    return NextResponse.json(
      { error: "Erreur lors de l’envoi du message." },
      { status: 500 },
    );
  }
}
