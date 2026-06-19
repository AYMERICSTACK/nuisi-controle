import Link from "next/link";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const issues = [
  "Présence de pigeons sur toiture",
  "Fientes sur façades ou balcons",
  "Nids dans les zones sensibles",
  "Dégradations des bâtiments",
  "Nuisances sonores et sanitaires",
];

const solutions = [
  "Protection de toitures",
  "Protection de façades",
  "Balcons & rebords",
  "Locaux professionnels",
  "Bâtiments collectifs",
  "Zones sensibles",
];

const methodSteps = [
  {
    title: "Diagnostic",
    text: "Analyse des zones fréquentées par les pigeons, des accès et des points sensibles du bâtiment.",
  },
  {
    title: "Préconisation",
    text: "Choix d’une solution adaptée selon le lieu, la configuration et le niveau de nuisance.",
  },
  {
    title: "Installation",
    text: "Mise en place des dispositifs de protection pour limiter l’installation des pigeons.",
  },
  {
    title: "Sécurisation",
    text: "Protection des zones exposées afin de préserver les façades, toitures, balcons et locaux.",
  },
  {
    title: "Prévention",
    text: "Conseils pour limiter les risques de retour et surveiller les zones sensibles.",
  },
];

const targets = [
  "Particuliers",
  "Professionnels",
  "Collectivités",
  "Syndics",
  "Commerces",
  "Entreprises",
];

const serviceAreas = [
  "Lyon Métropole",
  "Villeurbanne",
  "Nord Lyonnais",
  "Ain",
  "Bassin lyonnais",
];

const cities = [
  "Lyon",
  "Villeurbanne",
  "Caluire-et-Cuire",
  "Rillieux-la-Pape",
  "Neuville-sur-Saône",
  "Genay",
  "Massieux",
  "Villefranche-sur-Saône",
  "Toussieux",
  "Trévoux",
  "Reyrieux",
  "Bourg-en-Bresse",
];

const faq = [
  {
    question: "Quand faut-il prévoir une intervention de dépigeonnage ?",
    answer:
      "Une intervention peut être nécessaire lorsque les pigeons s’installent durablement sur une toiture, une façade, un balcon, un rebord ou un bâtiment professionnel.",
  },
  {
    question: "Quels sont les risques liés aux pigeons ?",
    answer:
      "Les pigeons peuvent provoquer des salissures importantes, dégrader les façades, gêner l’activité d’un site et créer des nuisances sanitaires liées aux fientes et aux nids.",
  },
  {
    question: "Intervenez-vous pour les syndics et collectivités ?",
    answer:
      "Oui, Nuisi Contrôle intervient auprès des particuliers, professionnels, syndics, entreprises et collectivités dans la région lyonnaise et l’Ain.",
  },
  {
    question: "Le dépigeonnage est-il adapté aux commerces ?",
    answer:
      "Oui, les commerces, restaurants, entrepôts, bâtiments professionnels et zones recevant du public peuvent nécessiter une solution adaptée pour limiter les nuisances.",
  },
];

export const metadata = {
  title: "Dépigeonnage Lyon, Ain, Toussieux & Villefranche | Nuisi Contrôle",
  description:
    "Nuisi Contrôle intervient pour le dépigeonnage à Lyon, Villeurbanne, Caluire-et-Cuire, Rillieux-la-Pape, dans l’Ain et le bassin lyonnais. Protection bâtiments, toitures, façades et locaux professionnels.",
};

export default function DepigeonnagePage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Dépigeonnage dans la région lyonnaise & l’Ain
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Dépigeonnage professionnel pour protéger vos bâtiments.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle intervient auprès des particuliers, professionnels,
              syndics et collectivités pour limiter les nuisances liées aux
              pigeons sur les toitures, façades, balcons et zones sensibles.
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

            <div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold text-white/70">
              <span className="rounded-full border border-white/10 px-4 py-2">
                Toitures
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Façades
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Syndics & pros
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-white p-7 text-[#0f0f10]">
                <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                  Protection bâtiment
                </p>
                <h2 className="mt-4 text-3xl font-black">
                  Des solutions adaptées à chaque configuration
                </h2>
                <p className="mt-5 leading-8 text-zinc-600">
                  Chaque bâtiment nécessite une analyse spécifique : hauteur,
                  accès, zones de pose, niveau de présence des pigeons et
                  contraintes d’usage.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Diagnostic sur place",
                    "Protection des zones sensibles",
                    "Conseils prévention",
                  ].map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-3 rounded-2xl bg-zinc-50 p-4 text-sm font-bold"
                    >
                      <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#C1121F] text-white">
                        ✓
                      </span>
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#C1121F] px-5 py-4 text-sm font-black text-white shadow-xl">
              Pigeons • Toitures • Façades
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Signes et nuisances
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Pourquoi intervenir contre les pigeons ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Les pigeons peuvent rapidement créer des nuisances visibles et
              persistantes sur les bâtiments, façades, balcons, toitures ou
              locaux professionnels.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {issues.map((issue) => (
              <div
                key={issue}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0f0f10] text-white">
                  !
                </div>
                <p className="font-bold leading-6">{issue}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Solutions de dépigeonnage
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Une protection adaptée à chaque zone.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Le dépigeonnage vise à limiter l’installation des pigeons et à
                protéger durablement les zones exposées des bâtiments.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {solutions.map((solution) => (
                <div
                  key={solution}
                  className="rounded-[1.7rem] bg-[#0f0f10] p-7 text-white shadow-xl"
                >
                  <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />
                  <h3 className="text-2xl font-black">{solution}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Analyse, protection et conseils pour limiter les nuisances
                    liées aux pigeons.
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Pourquoi agir rapidement ?
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Pourquoi faire appel à un professionnel du dépigeonnage ?
            </h2>
          </div>

          <div className="mt-12 grid gap-10 text-lg leading-8 text-zinc-600 lg:grid-cols-2">
            <div className="space-y-6">
              <p>
                La présence régulière de pigeons sur un bâtiment peut entraîner
                des salissures importantes, des nuisances sonores, des odeurs et
                une dégradation progressive des surfaces exposées.
              </p>
              <p>
                Les fientes peuvent salir les façades, balcons, rebords,
                enseignes, zones de passage ou espaces professionnels. Une
                intervention adaptée permet de protéger les lieux et de réduire
                les risques de réinstallation.
              </p>
              <p>
                Le dépigeonnage professionnel permet d’identifier les zones
                attractives, les points de pose et les solutions les plus
                cohérentes selon la configuration du bâtiment.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Nuisi Contrôle intervient pour le dépigeonnage à Lyon,
                Villeurbanne, Caluire-et-Cuire, Rillieux-la-Pape, dans l’Ain,
                le Nord Lyonnais et le bassin lyonnais.
              </p>
              <p>
                Les interventions peuvent concerner une habitation, une
                copropriété, un commerce, une entreprise, une collectivité ou un
                local professionnel exposé aux nuisances des pigeons.
              </p>
              <p>
                Après l’intervention, des conseils peuvent être apportés afin de
                surveiller les zones sensibles et limiter les risques de retour.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Méthode d’intervention
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Une intervention structurée et adaptée au bâtiment.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {methodSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <span className="absolute right-4 top-2 text-8xl font-black text-[#C1121F]/10">
                  {String(index + 1).padStart(2, "0")}
                </span>
                <div className="relative mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#C1121F] text-sm font-black text-white">
                  {index + 1}
                </div>
                <h3 className="relative text-xl font-black">{step.title}</h3>
                <p className="relative mt-4 text-sm leading-7 text-zinc-600">
                  {step.text}
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
                Pour qui ?
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Particuliers, professionnels, syndics et collectivités.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Nuisi Contrôle intervient avec une approche sérieuse, discrète
                et adaptée aux contraintes de chaque lieu.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {targets.map((target) => (
                <div
                  key={target}
                  className="rounded-2xl border border-white/10 bg-white/5 p-5 font-bold text-white/85"
                >
                  ✓ {target}
                </div>
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
                Zone d’intervention
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Dépigeonnage à Lyon, dans l’Ain et le bassin lyonnais.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Basé à Toussieux, Nuisi Contrôle intervient dans la région
                lyonnaise, l’Ain, le Nord Lyonnais et le bassin lyonnais pour
                les besoins de dépigeonnage.
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

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              FAQ dépigeonnage
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Vos questions sur le dépigeonnage.
            </h2>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2">
            {faq.map((item) => (
              <div
                key={item.question}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-7 shadow-sm transition hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <h3 className="text-xl font-black">{item.question}</h3>
                <p className="mt-4 leading-7 text-zinc-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="relative mx-auto max-w-7xl overflow-hidden rounded-[2rem] bg-[#0f0f10] px-7 py-16 text-center text-white shadow-2xl md:px-12 md:py-24">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(193,18,31,0.28),transparent_38%)]" />
          <div className="relative mx-auto max-w-4xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-white/60">
              Intervention rapide
            </p>
            <h2 className="mt-5 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Besoin d’une solution de dépigeonnage ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une intervention de dépigeonnage à
              Lyon, dans l’Ain et le bassin lyonnais.
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
