import Link from "next/link";
import { ContactForm } from "@/components/contact/ContactForm";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const services = ["Dératisation", "Désinsectisation", "Désinfection"];

const serviceAreas = [
  "Ain",
  "Dombes",
  "Val de Saône",
  "Nord Lyonnais",
  "Bassin lyonnais",
];

const cities = [
  "Toussieux",
  "Trévoux",
  "Reyrieux",
  "Villefranche-sur-Saône",
  "Neuville-sur-Saône",
  "Genay",
  "Massieux",
  "Lyon",
  "Bourg-en-Bresse",
];

const contactReasons = [
  {
    title: "Intervention rapide",
    text: "Une demande claire permet d’évaluer rapidement la situation et de vous orienter vers la bonne intervention.",
  },
  {
    title: "Devis gratuit",
    text: "Expliquez votre besoin et Nuisi Contrôle vous recontacte pour vous proposer une solution adaptée.",
  },
  {
    title: "Conseils personnalisés",
    text: "Chaque situation est différente : type de nuisible, lieu concerné, niveau d’infestation ou urgence.",
  },
];

export const metadata = {
  title: "Contact Nuisi Contrôle | Dératisation, désinsectisation Ain",
  description:
    "Contactez Nuisi Contrôle pour une dératisation, désinsectisation ou désinfection dans l’Ain, la Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais.",
};

export default function ContactPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            Contact & devis gratuit
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Contactez Nuisi Contrôle
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Besoin d’une dératisation, d’une désinsectisation ou d’une
            désinfection ? Contactez Nuisi Contrôle pour obtenir un devis
            gratuit ou programmer une intervention.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <a
              href={phoneHref}
              className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
            >
              Appeler le {phoneNumber}
            </a>

            <a
              href="#formulaire-contact"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0f0f10]"
            >
              Demander un devis gratuit
            </a>
          </div>

          <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-white/70">
            <span>✓ Devis gratuit</span>
            <span>✓ Intervention rapide</span>
            <span>✓ Particuliers & professionnels</span>
          </div>
        </div>
      </section>

      <section id="formulaire-contact" className="px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div className="rounded-[2rem] bg-[#0f0f10] p-8 text-white md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Coordonnées
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Une demande ? Parlons-en.
            </h2>

            <p className="mt-5 leading-8 text-white/65">
              Pour une urgence, un doute ou une demande de devis, vous pouvez
              contacter directement Nuisi Contrôle par téléphone.
            </p>

            <div className="mt-10 space-y-6">
              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-white/50">Téléphone</p>
                <a
                  href={phoneHref}
                  className="mt-2 block text-2xl font-black text-white transition hover:text-[#C1121F]"
                >
                  {phoneNumber}
                </a>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-white/50">
                  Services proposés
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {services.map((service) => (
                    <span
                      key={service}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>

              <div className="rounded-2xl border border-white/10 bg-white/5 p-5">
                <p className="text-sm font-bold text-white/50">
                  Zone d’intervention
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {serviceAreas.map((area) => (
                    <span
                      key={area}
                      className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/80"
                    >
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-xl md:p-10">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Formulaire
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Demander un devis gratuit
            </h2>

            <p className="mt-5 leading-8 text-zinc-600">
              Remplissez le formulaire ci-dessous pour décrire votre besoin.
              Nuisi Contrôle vous recontactera rapidement.
            </p>

            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Pourquoi nous contacter ?
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Une réponse adaptée à votre situation.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-3">
            {contactReasons.map((reason) => (
              <div
                key={reason.title}
                className="rounded-[1.7rem] border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />
                <h3 className="text-2xl font-black">{reason.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {reason.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-zinc-50 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Zone d’intervention
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Intervention dans l’Ain et le bassin lyonnais.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Nuisi Contrôle intervient à Toussieux, dans l’Ain, la Dombes, le
                Val de Saône, le Nord Lyonnais et le bassin lyonnais pour les
                particuliers, professionnels et collectivités.
              </p>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {serviceAreas.map((area) => (
                  <div
                    key={area}
                    className="rounded-2xl bg-[#0f0f10] p-5 text-center text-sm font-black text-white shadow-lg"
                  >
                    {area}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {cities.map((city) => (
                  <span
                    key={city}
                    className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-bold shadow-sm"
                  >
                    {city}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0f0f10] px-7 py-16 text-center text-white shadow-2xl md:px-12 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.28),transparent_38%)]" />

          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/60">
              Nuisi Contrôle
            </p>

            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Besoin d’une intervention rapide ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une dératisation, désinsectisation
              ou désinfection dans l’Ain et le bassin lyonnais.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/"
                className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
              >
                Retour à l’accueil
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white transition hover:bg-white hover:text-[#0f0f10]"
              >
                Appeler maintenant
              </a>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
