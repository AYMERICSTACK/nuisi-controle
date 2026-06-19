import Link from "next/link";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const values = [
  {
    title: "Sérieux",
    text: "Chaque intervention est réalisée avec méthode, rigueur et attention aux détails.",
  },
  {
    title: "Réactivité",
    text: "Nuisi Contrôle intervient rapidement dans l’Ain, la Dombes, le Val de Saône et le bassin lyonnais.",
  },
  {
    title: "Discrétion",
    text: "Les interventions sont menées avec professionnalisme, que ce soit chez un particulier ou dans un local professionnel.",
  },
  {
    title: "Prévention",
    text: "Au-delà du traitement, des conseils sont apportés pour limiter les risques de récidive.",
  },
];

const expertises = [
  "Dératisation",
  "Désinsectisation",
  "Désinfection",
  "Dépigeonnage",
];

const targets = ["Particuliers", "Professionnels", "Collectivités"];

const serviceAreas = [
  "Lyon Métropole",
  "Villeurbanne",
  "Nord Lyonnais",
  "Ain",
  "Bassin lyonnais",
];

export const metadata = {
  title: "À propos de Nuisi Contrôle | Dératisation & désinsectisation Ain",
  description:
    "Découvrez Nuisi Contrôle, entreprise spécialisée en dératisation, désinsectisation, désinfection et dépigeonnage dans l’Ain, la Dombes, le Val de Saône et le bassin lyonnais.",
};

export default function AboutPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              À propos de Nuisi Contrôle
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Une entreprise locale spécialisée dans le traitement des
              nuisibles.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle accompagne les particuliers, professionnels et
              collectivités pour leurs besoins en dératisation, désinsectisation,
              désinfection et dépigeonnage dans l’Ain et la région lyonnaise.
            </p>

            <div className="mt-10 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#C1121F] px-7 py-4 text-center text-sm font-bold text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
              >
                Demander un devis gratuit
              </Link>

              <a
                href={phoneHref}
                className="rounded-full border border-white/15 bg-white/10 px-7 py-4 text-center text-sm font-bold text-white transition hover:bg-white hover:text-[#0f0f10]"
              >
                Appeler le {phoneNumber}
              </a>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-white p-7 text-[#0f0f10]">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                  Approche terrain
                </p>

                <h2 className="mt-4 text-3xl font-black">
                  Comprendre, traiter, prévenir.
                </h2>

                <p className="mt-5 leading-8 text-zinc-600">
                  Chaque intervention commence par une analyse de la situation :
                  type de nuisible, niveau d’infestation, configuration des
                  lieux et contraintes du client.
                </p>

                <div className="mt-8 grid gap-3">
                  {expertises.map((expertise) => (
                    <div
                      key={expertise}
                      className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 text-sm font-bold"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C1121F] text-white">
                        ✓
                      </span>
                      {expertise}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#C1121F] px-5 py-4 text-sm font-black text-white shadow-xl">
              Particuliers • Pros • Collectivités
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Notre mission
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Protéger les lieux de vie et les espaces professionnels.
              </h2>
            </div>

            <div className="space-y-6 text-lg leading-8 text-zinc-600">
              <p>
                La présence de nuisibles peut rapidement devenir une source de
                stress, de gêne ou de risque sanitaire. L’objectif de Nuisi
                Contrôle est d’apporter une réponse claire, professionnelle et
                adaptée à chaque situation.
              </p>

              <p>
                Qu’il s’agisse d’une maison, d’un appartement, d’un commerce,
                d’un restaurant, d’une entreprise ou d’une collectivité, chaque
                intervention est pensée pour traiter le problème efficacement
                tout en apportant des conseils de prévention.
              </p>

              <p>
                L’entreprise intervient dans la région lyonnaise, l’Ain, la Dombes, le Val de Saône,
                le Nord Lyonnais et le bassin lyonnais avec une approche locale,
                sérieuse et orientée résultat.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Nos valeurs
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Une intervention sérieuse, discrète et adaptée.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {values.map((value) => (
              <div
                key={value.title}
                className="rounded-[1.7rem] border border-zinc-200 bg-white p-7 shadow-sm transition hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />

                <h3 className="text-2xl font-black">{value.title}</h3>

                <p className="mt-4 text-sm leading-7 text-zinc-600">
                  {value.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-24 text-white lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(193,18,31,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Expertise
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Quatre domaines d’intervention.
              </h2>

              <p className="mt-6 text-lg leading-8 text-white/65">
                Nuisi Contrôle intervient sur les problématiques de nuisibles et
                d’hygiène avec des solutions adaptées à chaque environnement.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {expertises.map((expertise) => (
                <Link
                  key={expertise}
                  href={
                    expertise === "Dératisation"
                      ? "/deratisation"
                      : expertise === "Désinsectisation"
                        ? "/desinsectisation"
                        : expertise === "Désinfection"
                        ? "/desinfection"
                        : "/depigeonnage"
                  }
                  className="rounded-2xl border border-white/10 bg-white/5 p-6 font-black text-white/85 transition hover:bg-white hover:text-[#0f0f10]"
                >
                  {expertise}
                  <span className="mt-4 block text-sm font-bold text-[#C1121F] transition-all duration-300 group-hover:translate-x-1">
                    Découvrir →
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-[2rem] bg-zinc-50 p-8 md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-start">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Publics accompagnés
              </p>

              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Des solutions pour tous types de clients.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Les interventions sont adaptées aux besoins des particuliers,
                professionnels et collectivités.
              </p>
            </div>

            <div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {targets.map((target) => (
                  <div
                    key={target}
                    className="rounded-2xl bg-[#0f0f10] p-5 text-center text-sm font-black text-white shadow-lg"
                  >
                    {target}
                  </div>
                ))}
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                {serviceAreas.map((area) => (
                  <span
                    key={area}
                    className="rounded-full border border-zinc-200 bg-white px-5 py-3 text-sm font-bold shadow-sm"
                  >
                    {area}
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
              Une question ou besoin d’une intervention ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une intervention de dératisation,
              désinsectisation, désinfection ou dépigeonnage dans l’Ain et la région lyonnaise.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white shadow-xl shadow-red-950/30 transition hover:bg-red-700"
              >
                Demander un devis gratuit
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
