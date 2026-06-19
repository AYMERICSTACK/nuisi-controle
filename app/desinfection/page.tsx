import Image from "next/image";
import Link from "next/link";

const phoneNumber = "06 62 33 20 36";
const phoneHref = "tel:+33662332036";

const situations = [
  "Logement insalubre",
  "Syndrome de Diogène",
  "Après infestation",
  "Après sinistre",
  "Locaux professionnels",
];

const spaces = [
  "Maisons",
  "Appartements",
  "Bureaux",
  "Commerces",
  "Restaurants",
  "Collectivités",
];

const methodSteps = [
  {
    title: "Diagnostic",
    text: "Analyse des lieux, des risques et des besoins de désinfection.",
  },
  {
    title: "Préparation",
    text: "Sécurisation et préparation des zones avant le traitement.",
  },
  {
    title: "Désinfection",
    text: "Application d’un traitement adapté à la situation et au type de lieu.",
  },
  {
    title: "Contrôle",
    text: "Vérification des zones traitées et des points sensibles.",
  },
  {
    title: "Prévention",
    text: "Conseils pour maintenir un environnement sain dans la durée.",
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
    question: "Dans quels cas une désinfection est-elle nécessaire ?",
    answer:
      "Une désinfection peut être nécessaire après une infestation de nuisibles, dans un logement insalubre, après un sinistre, en cas de mauvaises odeurs persistantes ou pour sécuriser un local professionnel.",
  },
  {
    question: "Intervenez-vous après un syndrome de Diogène ?",
    answer:
      "Oui, Nuisi Contrôle peut intervenir dans le cadre d’une désinfection après syndrome de Diogène, avec une approche sérieuse, respectueuse et adaptée à l’état des lieux.",
  },
  {
    question: "Travaillez-vous avec les professionnels et collectivités ?",
    answer:
      "Oui, les interventions concernent les particuliers, commerces, entreprises, syndics, locaux professionnels et collectivités dans l’Ain et le bassin lyonnais.",
  },
  {
    question: "La désinfection élimine-t-elle les mauvaises odeurs ?",
    answer:
      "La désinfection peut contribuer à traiter certaines sources d’odeurs, notamment lorsqu’elles sont liées à une contamination, un logement dégradé ou une situation d’insalubrité.",
  },
];

export const metadata = {
  title: "Désinfection Ain, Toussieux, Trévoux & Lyon | Nuisi Contrôle",
  description:
    "Nuisi Contrôle intervient pour la désinfection dans l’Ain, à Toussieux, Trévoux, Reyrieux, Villefranche-sur-Saône, Nord Lyonnais et bassin lyonnais. Désinfection logements, commerces, bureaux, collectivités et syndrome de Diogène.",
};

export default function DesinfectionPage() {
  return (
    <main className="bg-white text-[#0f0f10]">
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-28 text-white lg:px-8 lg:py-36">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.28),transparent_38%)]" />
        <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-[1.05fr_0.95fr]">
          <div>
            <div className="inline-flex rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm font-semibold text-white/80">
              Désinfection dans l’Ain & le bassin lyonnais
            </div>

            <h1 className="mt-8 max-w-4xl text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
              Désinfection professionnelle de logements, commerces et locaux.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle intervient auprès des particuliers, professionnels
              et collectivités pour assurer la désinfection de logements,
              commerces, bureaux et locaux professionnels.
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
                Logements
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Commerces
              </span>
              <span className="rounded-full border border-white/10 px-4 py-2">
                Collectivités
              </span>
            </div>
          </div>

          <div className="relative">
            <div className="relative h-[400px] overflow-hidden rounded-[2rem] border border-white/10 shadow-2xl md:h-[500px] lg:h-[600px]">
              <Image
                src="/images/services/desinfection.jpg"
                alt="Désinfection professionnelle de locaux"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

              <div className="absolute bottom-6 left-6 right-6 rounded-2xl border border-white/10 bg-black/45 p-5 backdrop-blur-md">
                <p className="text-sm font-black uppercase tracking-[0.2em] text-white/60">
                  Intervention sanitaire
                </p>
                <h2 className="mt-2 text-2xl font-black">
                  Un environnement sain, sécurisé et maîtrisé
                </h2>
              </div>
            </div>

            <div className="absolute -bottom-6 -left-4 rounded-2xl bg-[#C1121F] px-5 py-4 text-sm font-black text-white shadow-xl">
              Logements • Locaux • Commerces
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.25em] text-[#C1121F]">
              Situations fréquentes
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Quand une désinfection est-elle nécessaire ?
            </h2>
            <p className="mt-6 text-lg leading-8 text-zinc-600">
              Certaines situations nécessitent une intervention professionnelle
              pour retrouver un environnement propre, sain et sécurisé.
            </p>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-5">
            {situations.map((situation) => (
              <div
                key={situation}
                className="rounded-[1.5rem] border border-zinc-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#C1121F]/30 hover:shadow-xl"
              >
                <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-full bg-[#0f0f10] text-white">
                  !
                </div>
                <p className="font-bold leading-6">{situation}</p>
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
                Espaces traités
              </p>
              <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
                Des interventions adaptées à chaque environnement.
              </h2>
              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Logement, commerce, bureau ou collectivité : chaque lieu demande
                une méthode adaptée à son usage, son niveau de risque et ses
                contraintes.
              </p>
            </div>

            <div className="grid gap-5 sm:grid-cols-2">
              {spaces.map((space) => (
                <div
                  key={space}
                  className="rounded-[1.7rem] bg-[#0f0f10] p-7 text-white shadow-xl"
                >
                  <div className="mb-8 h-1.5 w-14 rounded-full bg-[#C1121F]" />
                  <h3 className="text-2xl font-black">{space}</h3>
                  <p className="mt-4 text-sm leading-7 text-white/60">
                    Désinfection adaptée au lieu, aux surfaces et aux besoins
                    spécifiques de l’intervention.
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
              Pourquoi faire appel à un professionnel de la désinfection ?
            </h2>
          </div>

          <div className="mt-12 grid gap-10 text-lg leading-8 text-zinc-600 lg:grid-cols-2">
            <div className="space-y-6">
              <p>
                La désinfection d’un logement, d’un commerce ou d’un local
                professionnel permet de traiter des situations où l’hygiène et
                la sécurité sanitaire sont essentielles. Après une infestation,
                un sinistre, une situation d’insalubrité ou un syndrome de
                Diogène, une intervention sérieuse peut être nécessaire pour
                assainir les lieux.
              </p>

              <p>
                Les surfaces, les sols, les zones de contact, les sanitaires,
                les réserves ou les pièces fortement dégradées peuvent
                nécessiter une prise en charge adaptée. L’objectif est de
                limiter les risques, réduire les sources de contamination et
                retrouver un espace plus sain.
              </p>

              <p>
                Une intervention professionnelle permet d’évaluer la situation,
                de préparer les zones concernées et d’appliquer une solution
                cohérente avec le type de lieu, le niveau de dégradation et les
                contraintes d’occupation.
              </p>
            </div>

            <div className="space-y-6">
              <p>
                Nuisi Contrôle intervient pour la désinfection à Toussieux,
                Trévoux, Reyrieux, Villefranche-sur-Saône, dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais.
              </p>

              <p>
                Les interventions peuvent concerner les particuliers, les
                commerces, les bureaux, les restaurants, les entreprises, les
                syndics ou les collectivités. Chaque demande est traitée avec
                une approche sérieuse, discrète et adaptée à la situation.
              </p>

              <p>
                Après la désinfection, des conseils peuvent être apportés afin
                de maintenir un environnement plus sain : ventilation, entretien
                des zones sensibles, surveillance des sources d’odeurs ou
                correction des facteurs favorables à une nouvelle dégradation.
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
              Une intervention précise, sécurisée et adaptée.
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
                Désinfection à Toussieux, dans l’Ain et autour de Lyon.
              </h2>

              <p className="mt-6 text-lg leading-8 text-zinc-600">
                Basé à Toussieux, Nuisi Contrôle intervient dans l’Ain, la
                Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais
                pour les besoins de désinfection des particuliers,
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
              FAQ désinfection
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Vos questions sur la désinfection.
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
              Besoin d’une désinfection professionnelle ?
            </h2>
            <p className="mx-auto mt-6 max-w-2xl text-lg leading-8 text-white/65">
              Contactez Nuisi Contrôle pour une désinfection de logement,
              commerce, bureau ou local professionnel dans l’Ain et le bassin
              lyonnais.
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
