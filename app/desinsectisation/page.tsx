import Image from "next/image";
import Link from "next/link";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const insects = [
  "Cafards",
  "Punaises de lit",
  "Fourmis",
  "Puces",
  "Guêpes",
  "Frelons",
];

const infestationSigns = [
  "Présence d’insectes visibles",
  "Piqûres ou démangeaisons",
  "Traces noires ou déjections",
  "Nids ou passages répétés",
  "Odeurs inhabituelles",
];

const methodSteps = [
  {
    title: "Diagnostic",
    text: "Identification de l’insecte, du niveau d’infestation et des zones touchées.",
  },
  {
    title: "Repérage",
    text: "Analyse des points d’entrée, zones de nidification, passages et facteurs favorables.",
  },
  {
    title: "Traitement ciblé",
    text: "Mise en place d’une solution professionnelle adaptée au nuisible et au lieu.",
  },
  {
    title: "Sécurisation",
    text: "Intervention pensée pour préserver les occupants, les clients, les salariés et les locaux.",
  },
  {
    title: "Prévention",
    text: "Conseils pour réduire les risques de retour et mieux surveiller les zones sensibles.",
  },
];

const targets = [
  "Maisons individuelles",
  "Appartements",
  "Restaurants",
  "Commerces",
  "Hôtels",
  "Entreprises",
  "Collectivités",
  "Locaux professionnels",
];

const serviceAreas = [
  "Lyon Métropole",
  "Villeurbanne",
  "Nord Lyonnais",
  "Ain",
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
  "Villeurbanne",
  "Caluire-et-Cuire",
  "Rillieux-la-Pape",
  "Bourg-en-Bresse",
];

const faq = [
  {
    question: "Quels insectes traitez-vous ?",
    answer:
      "Nuisi Contrôle intervient contre les cafards, punaises de lit, fourmis, puces, guêpes, frelons et autres insectes nuisibles.",
  },
  {
    question: "Intervenez-vous contre les punaises de lit ?",
    answer:
      "Oui, les punaises de lit nécessitent une intervention rigoureuse avec identification des zones touchées, traitement adapté et conseils pour limiter la récidive.",
  },
  {
    question: "Pouvez-vous intervenir pour un restaurant ou un commerce ?",
    answer:
      "Oui, Nuisi Contrôle accompagne les professionnels, restaurants, commerces, entreprises et collectivités avec des solutions adaptées aux contraintes d’activité.",
  },
  {
    question: "Faut-il agir rapidement en cas de cafards ?",
    answer:
      "Oui, les cafards peuvent se reproduire rapidement. Plus l’intervention est rapide, plus le traitement a de chances d’être efficace durablement.",
  },
];

export const metadata = {
  title: "Désinsectisation Ain, Toussieux, Trévoux & Lyon | Nuisi Contrôle",
  description:
    "Nuisi Contrôle intervient pour la désinsectisation dans l’Ain, à Toussieux, Trévoux, Reyrieux, Villefranche-sur-Saône, Nord Lyonnais et bassin lyonnais. Traitement cafards, punaises de lit, fourmis, puces, guêpes et frelons.",
};

export default function DesinsectisationPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Désinsectisation dans l’Ain & le bassin lyonnais
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Traitement cafards, punaises de lit, guêpes & frelons.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle intervient rapidement auprès des particuliers,
              professionnels et collectivités pour éliminer les insectes
              nuisibles et sécuriser vos espaces.
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
                Cafards
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Punaises de lit
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Guêpes & frelons
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/services/desinsectisation.jpg"
                alt="Intervention de désinsectisation professionnelle"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                  Intervention ciblée
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Des traitements adaptés à chaque insecte
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#C1121F] px-5 py-4 text-sm font-black text-white shadow-xl">
              Cafards • Punaises • Guêpes
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
              Comment repérer une infestation d’insectes ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Cafards, punaises de lit, fourmis ou puces peuvent
              rapidement devenir difficiles à maîtriser. Une intervention rapide
              permet d’éviter leur propagation.
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

      <section className="bg-zinc-50 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="grid gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
                Insectes traités
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Une désinsectisation adaptée à chaque nuisible.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Chaque insecte demande une approche spécifique. Nuisi Contrôle
                identifie le nuisible présent et applique une solution
                professionnelle adaptée au lieu.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {insects.map((insect) => (
                <div
                  key={insect}
                  className="rounded-[1.7rem] bg-[#0f0f10] p-7 text-white shadow-xl"
                >
                  <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />
                  <h3 className="text-2xl font-black">{insect}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Traitement ciblé, diagnostic précis et conseils pour limiter
                    les risques de récidive.
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
              Pourquoi faire appel à un professionnel de la désinsectisation ?
            </h2>
          </div>

          <div className="mt-12 grid gap-10 text-lg leading-8 text-zinc-600 lg:grid-cols-2">
            <div className="space-y-6">
              <p>
                La présence d’insectes nuisibles dans une habitation, un
                commerce, un restaurant ou un local professionnel peut
                rapidement devenir problématique. Certains insectes comme les
                cafards, punaises de lit se développent vite et
                peuvent contaminer plusieurs zones en peu de temps.
              </p>

              <p>
                Les cafards recherchent la chaleur, l’humidité et les
                zones alimentaires. Les punaises de lit, elles, peuvent
                provoquer des piqûres, des démangeaisons et une gêne importante
                au quotidien. Les guêpes et frelons nécessitent également une
                intervention adaptée pour éviter les risques.
              </p>

              <p>
                Une désinsectisation professionnelle permet d’identifier le type
                d’insecte, les zones touchées, les passages, les nids et les
                conditions favorables à leur développement.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Nuisi Contrôle intervient pour la désinsectisation à Toussieux,
                Trévoux, Reyrieux, Villefranche-sur-Saône, dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais.
              </p>

              <p>
                Chaque intervention est adaptée au contexte : logement,
                appartement, commerce, restaurant, hôtel, entreprise ou
                collectivité. L’objectif est de proposer une solution sérieuse,
                efficace et cohérente avec les contraintes du lieu.
              </p>

              <p>
                Après le traitement, des recommandations peuvent être données
                pour limiter les récidives : nettoyage des zones sensibles,
                surveillance, limitation des accès et correction des facteurs
                favorables à l’installation des insectes.
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
              Une intervention précise, sécurisée et durable.
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
                Particuliers, professionnels et collectivités.
              </h2>
              <p className="mt-6 text-lg leading-8 text-white/65">
                Nuisi Contrôle intervient dans différents environnements avec
                une approche sérieuse, discrète et adaptée aux contraintes de
                chaque lieu.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
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
                Désinsectisation à Toussieux, dans l’Ain et autour de Lyon.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Basé à Toussieux, Nuisi Contrôle intervient dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais
                pour les besoins de désinsectisation des particuliers,
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
              FAQ désinsectisation
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Vos questions sur la désinsectisation.
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
              Un problème de cafards, punaises de lit ou frelons ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une désinsectisation professionnelle
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
