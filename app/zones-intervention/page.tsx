import Link from "next/link";

const serviceAreas = [
  {
    title: "Ain",
    description:
      "Interventions de dératisation, désinsectisation et désinfection dans l'ensemble du département de l'Ain.",
  },
  {
    title: "Dombes",
    description:
      "Interventions rapides pour les particuliers, professionnels et collectivités de la Dombes.",
  },
  {
    title: "Val de Saône",
    description:
      "Traitement des nuisibles et interventions sanitaires dans le Val de Saône.",
  },
  {
    title: "Nord Lyonnais",
    description:
      "Couverture des communes du Nord Lyonnais pour tous les besoins liés aux nuisibles.",
  },
  {
    title: "Bassin Lyonnais",
    description:
      "Interventions autour de Lyon pour les particuliers et professionnels.",
  },
];

const cities = [
  "Toussieux",
  "Trévoux",
  "Reyrieux",
  "Genay",
  "Massieux",
  "Neuville-sur-Saône",
  "Villefranche-sur-Saône",
  "Saint-André-de-Corcy",
  "Villars-les-Dombes",
  "Meximieux",
  "Ambérieu-en-Bugey",
  "Rillieux-la-Pape",
  "Caluire-et-Cuire",
  "Villeurbanne",
  "Lyon",
  "Bourg-en-Bresse",
];

export const metadata = {
  title:
    "Zones d'intervention Ain, Dombes, Val de Saône & Lyon | Nuisi Contrôle",
  description:
    "Nuisi Contrôle intervient dans l'Ain, la Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais pour la dératisation, désinsectisation et désinfection.",
};

export default function ZonesInterventionPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />

        <div className="relative mx-auto max-w-5xl text-center">
          <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
            Ain • Dombes • Val de Saône • Lyon
          </div>

          <h1 className="mt-8 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Zones d'intervention Nuisi Contrôle
          </h1>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/70">
            Nuisi Contrôle intervient rapidement pour la dératisation,
            désinsectisation et désinfection dans l'Ain, la Dombes, le Val de
            Saône, le Nord Lyonnais et le bassin lyonnais.
          </p>

          <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white"
            >
              Demander un devis gratuit
            </Link>

            <a
              href="tel:+33662332036"
              className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white"
            >
              Appeler maintenant
            </a>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Zones couvertes
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Une couverture locale pour des interventions rapides.
            </h2>

            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Basé à Toussieux, Nuisi Contrôle intervient sur un large secteur
              afin de garantir des délais d'intervention rapides pour les
              particuliers, professionnels et collectivités.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-5">
            {serviceAreas.map((area) => (
              <div
                key={area.title}
                className="rounded-[1.7rem] bg-[#0f0f10] p-7 text-white shadow-xl"
              >
                <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />

                <h3 className="text-2xl font-black">{area.title}</h3>

                <p className="mt-4 text-sm leading-7 text-white/60">
                  {area.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Villes desservies
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Intervention dans de nombreuses communes.
            </h2>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
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
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Intervention locale
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Dératisation, désinsectisation et désinfection dans l'Ain.
            </h2>
          </div>

          <div className="mt-12 grid gap-10 text-lg leading-8 text-zinc-600 lg:grid-cols-2">
            <div className="space-y-6">
              <p>
                Nuisi Contrôle intervient auprès des particuliers,
                professionnels et collectivités pour le traitement des nuisibles
                et la désinfection des locaux. Grâce à sa proximité avec le
                terrain, les délais d'intervention peuvent être réduits sur une
                grande partie du secteur.
              </p>

              <p>
                Les interventions concernent aussi bien les habitations que les
                commerces, restaurants, entreprises, collectivités ou locaux
                techniques nécessitant une prise en charge rapide.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Les secteurs couverts comprennent notamment Toussieux, Trévoux,
                Reyrieux, Villefranche-sur-Saône, Genay, Massieux,
                Bourg-en-Bresse et l'ensemble du bassin lyonnais.
              </p>

              <p>
                Chaque demande est étudiée afin de proposer une intervention
                adaptée à la situation et au type de nuisible rencontré.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0f0f10] px-7 py-16 text-center text-white shadow-2xl md:px-12 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.28),transparent_38%)]" />

          <div className="relative mx-auto max-w-4xl">
            <h2 className="text-4xl font-black tracking-tight md:text-6xl">
              Besoin d'une intervention ?
            </h2>

            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une intervention rapide dans l'Ain,
              la Dombes, le Val de Saône, le Nord Lyonnais et le bassin
              lyonnais.
            </p>

            <div className="mt-10 flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white"
              >
                Demander un devis gratuit
              </Link>

              <a
                href="tel:+33662332036"
                className="rounded-full border border-white/15 bg-white/10 px-8 py-4 text-sm font-black text-white"
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
