import Link from "next/link";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const infestationSigns = [
  "Bruits dans les murs, combles ou cloisons",
  "Présence de crottes ou d’urine",
  "Odeurs inhabituelles et persistantes",
  "Câbles, gaines ou emballages rongés",
  "Traces de passage, trous ou nids",
];

const rodents = ["Rats", "Souris", "Mulots", "Campagnols"];

const methodSteps = [
  {
    title: "Diagnostic sur place",
    text: "Analyse des signes d’infestation, des zones sensibles et du niveau de présence des rongeurs.",
  },
  {
    title: "Identification des accès",
    text: "Recherche des passages, ouvertures, points d’entrée et zones favorables à l’installation des nuisibles.",
  },
  {
    title: "Traitement adapté",
    text: "Mise en place d’une solution professionnelle selon le lieu, le type de rongeur et le niveau d’infestation.",
  },
  {
    title: "Sécurisation",
    text: "Protection des zones traitées avec une intervention pensée pour les particuliers, professionnels et collectivités.",
  },
  {
    title: "Prévention récidive",
    text: "Conseils concrets pour limiter les risques de retour des rats, souris ou autres rongeurs.",
  },
];

const targets = [
  "Maisons individuelles",
  "Appartements",
  "Restaurants & commerces",
  "Entreprises",
  "Locaux professionnels",
  "Collectivités",
];

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

const faq = [
  {
    question: "Quand faut-il faire appel à une entreprise de dératisation ?",
    answer:
      "Dès les premiers signes de présence de rats, souris ou rongeurs : bruits, crottes, odeurs, câbles rongés ou traces de passage. Plus l’intervention est rapide, plus le traitement est efficace.",
  },
  {
    question: "Intervenez-vous pour les particuliers et les professionnels ?",
    answer:
      "Oui, Nuisi Contrôle intervient auprès des particuliers, professionnels, commerces, restaurants, entreprises et collectivités dans l’Ain et le bassin lyonnais.",
  },
  {
    question: "Quels rongeurs traitez-vous ?",
    answer:
      "Nous intervenons contre les rats, souris, mulots, campagnols et autres rongeurs pouvant s’installer dans une habitation, un local professionnel ou un bâtiment collectif.",
  },
  {
    question: "La dératisation est-elle adaptée aux restaurants et commerces ?",
    answer:
      "Oui, les commerces alimentaires, restaurants, boulangeries, entrepôts et locaux professionnels nécessitent une intervention rigoureuse afin de protéger les lieux, les clients et l’activité.",
  },
];

export const metadata = {
  title: "Dératisation Ain, Toussieux, Trévoux & Lyon | Nuisi Contrôle",
  description:
    "Nuisi Contrôle intervient pour la dératisation dans l’Ain, à Toussieux, Trévoux, Reyrieux, Villefranche-sur-Saône, Nord Lyonnais et bassin lyonnais. Traitement rats, souris et rongeurs.",
};

export default function DeratisationPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Dératisation dans l’Ain & le bassin lyonnais
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Dératisation professionnelle contre rats, souris et rongeurs.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle intervient rapidement à Toussieux, dans l’Ain, la
              Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais
              pour éliminer les rongeurs et sécuriser durablement vos espaces.
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
                Particuliers
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Professionnels
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Collectivités
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[2rem] border border-white/10 bg-white/5 p-6 shadow-2xl">
              <div className="rounded-[1.5rem] bg-white p-6 text-[#0f0f10]">
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#C1121F]">
                  Intervention rapide
                </p>
                <h2 className="mt-4 text-3xl font-black">
                  Des solutions adaptées à chaque infestation
                </h2>
                <p className="mt-4 leading-7 text-zinc-600">
                  Chaque situation est différente : maison, appartement,
                  restaurant, commerce, bâtiment professionnel ou collectivité.
                  L’intervention est pensée selon le niveau d’infestation, le
                  type de rongeur et les contraintes du lieu.
                </p>

                <div className="mt-8 grid gap-3">
                  {[
                    "Diagnostic précis",
                    "Traitement ciblé",
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
              Rats • Souris • Rongeurs
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Signes d’infestation
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Comment reconnaître la présence de rats ou de souris ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Les rongeurs peuvent causer des dégâts matériels, contaminer les
              surfaces et se reproduire rapidement. Une intervention rapide
              permet de limiter les risques et d’éviter que l’infestation ne
              s’installe durablement.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {infestationSigns.map((sign) => (
              <div
                key={sign}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0f0f10] text-white">
                  !
                </div>
                <p className="font-bold leading-6">{sign}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="px-5 py-10 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="overflow-hidden rounded-[2rem]">
            <img
              src="/images/services/rat-deratisation.jpg"
              alt="Rat présent dans une habitation"
              className="h-[350px] w-full object-cover md:h-[500px]"
            />
          </div>
        </div>
      </section>

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Rongeurs traités
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Une dératisation adaptée à chaque type de rongeur.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Rats, souris, mulots ou campagnols : Nuisi Contrôle identifie le
                nuisible présent et met en place une réponse adaptée à votre
                environnement.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {rodents.map((rodent) => (
                <div
                  key={rodent}
                  className="rounded-[1.7rem] bg-[#0f0f10] p-7 text-white shadow-xl"
                >
                  <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />
                  <h3 className="text-2xl font-black">{rodent}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Traitement professionnel avec diagnostic, sécurisation et
                    conseils pour limiter les récidives.
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
              Pourquoi faire appel à un professionnel de la dératisation ?
            </h2>
          </div>

          <div className="mt-12 grid gap-10 text-lg leading-8 text-zinc-600 lg:grid-cols-2">
            <div className="space-y-6">
              <p>
                La présence de rats, souris ou autres rongeurs dans une
                habitation, un commerce ou un local professionnel ne doit jamais
                être prise à la légère. Ces nuisibles peuvent rapidement
                s’installer dans les combles, les caves, les murs, les réserves
                alimentaires ou les zones techniques.
              </p>

              <p>
                En plus de provoquer une gêne au quotidien, les rongeurs peuvent
                causer des dégâts importants : câbles rongés, isolation abîmée,
                denrées contaminées, mauvaises odeurs ou traces de passage
                visibles. Plus l’infestation est traitée tôt, plus il est simple
                de limiter les dégâts et d’éviter une propagation.
              </p>

              <p>
                Une dératisation professionnelle permet d’identifier précisément
                les zones de passage, les points d’entrée et le niveau
                d’infestation. Le traitement peut ensuite être adapté au type de
                lieu, au type de rongeur et aux contraintes de sécurité.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Nuisi Contrôle intervient pour la dératisation à Toussieux,
                Trévoux, Reyrieux, Villefranche-sur-Saône, dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais.
                L’objectif est de proposer une intervention sérieuse, efficace
                et durable.
              </p>

              <p>
                Chaque situation est différente : maison individuelle,
                appartement, restaurant, commerce, entreprise, local technique
                ou collectivité. Une analyse sur place permet de mettre en place
                une solution cohérente, sans intervention générique ni
                traitement approximatif.
              </p>

              <p>
                Après l’intervention, des conseils de prévention peuvent être
                donnés afin de réduire les risques de récidive : limitation des
                accès, entretien des zones sensibles, surveillance des traces et
                correction des points favorables à l’installation des rongeurs.
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
              Une intervention structurée pour un résultat durable.
            </h2>
          </div>

          <div className="mt-14 grid gap-5 lg:grid-cols-5">
            {methodSteps.map((step, index) => (
              <div
                key={step.title}
                className="relative overflow-hidden rounded-[1.7rem] border border-zinc-200 bg-white p-6 shadow-sm"
              >
                <div className="relative">
                  <span className="absolute -top-10 right-0 text-8xl font-black text-[#C1121F]/10">
                    {String(index + 1).padStart(2, "0")}
                  </span>

                  <div className="mb-7 flex h-12 w-12 items-center justify-center rounded-full bg-[#C1121F] text-sm font-black text-white">
                    {index + 1}
                  </div>
                </div>

                <h3 className="text-xl font-black">{step.title}</h3>
                <p className="mt-4 text-sm leading-7 text-zinc-600">
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
                Particuliers, professionnels et collectivités.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Nuisi Contrôle intervient dans différents environnements avec
                une approche sérieuse, discrète et adaptée aux contraintes de
                chaque lieu.
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
                Dératisation à Toussieux, dans l’Ain et autour de Lyon.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Basé à Toussieux, Nuisi Contrôle intervient dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais
                pour les besoins de dératisation des particuliers,
                professionnels et collectivités.
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
              FAQ dératisation
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Vos questions sur la dératisation.
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
              Un problème de rats ou de souris ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une dératisation professionnelle
              dans l’Ain, à Toussieux, Trévoux, Reyrieux, Villefranche-sur-Saône
              et dans le bassin lyonnais.
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

            <div className="mt-8 flex flex-wrap justify-center gap-3 text-sm font-bold text-white/70">
              <span>✓ Devis gratuit</span>
              <span>✓ Intervention rapide</span>
              <span>✓ Particuliers & professionnels</span>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
