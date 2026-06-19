import Link from "next/link";

const services = [
  {
    title: "Dératisation",
    description:
      "Élimination des rats, souris, mulots et autres rongeurs avec des traitements adaptés et durables.",
    href: "/deratisation",
    image: "/images/services/deratisation.jpg",
  },
  {
    title: "Désinsectisation",
    description:
      "Traitement des cafards, punaises de lit, fourmis, puces, guêpes, frelons et autres insectes nuisibles.",
    href: "/desinsectisation",
    image: "/images/services/desinsectisation.jpg",
  },
  {
    title: "Désinfection",
    description:
      "Désinfection professionnelle des logements, commerces, bureaux et collectivités.",
    href: "/desinfection",
    image: "/images/services/desinfection.jpg",
  },
  {
    title: "Dépigeonnage",
    description:
      "Solutions de dépigeonnage pour protéger bâtiments, toitures, façades et locaux professionnels.",
    href: "/depigeonnage",
    image: "/images/services/technicien-nuisible.png",
  },
];

const targets = ["Particuliers", "Professionnels", "Collectivités"];

export default function Home() {
  return (
    <main>
      <section className="relative overflow-hidden bg-[#0f0f10] px-5 pb-24 pt-36 text-white lg:px-8 lg:pb-32 lg:pt-44">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_10%,rgba(193,18,31,0.35),transparent_32%),radial-gradient(circle_at_80%_20%,rgba(255,255,255,0.08),transparent_28%)]" />
        <div className="absolute bottom-0 left-0 h-12 w-full bg-gradient-to-t from-white to-transparent" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1.1fr_0.9fr]">
          <div>
            <div className="mb-6 inline-flex rounded-full border border-white/15 bg-white/10 px-4 py-2 text-sm font-bold text-white/80 backdrop-blur">
              Intervention dans l’Ain & le bassin lyonnais
            </div>

            <h1 className="max-w-4xl text-4xl font-black leading-[0.95] tracking-tight md:text-6xl lg:text-7xl">
              Dératisation, désinsectisation, désinfection & dépigeonnage.
            </h1>

            <p className="mt-7 max-w-2xl text-lg leading-8 text-white/70">
              Nuisi Contrôle intervient rapidement auprès des particuliers,
              professionnels et collectivités pour éliminer les nuisibles,
              protéger vos bâtiments et sécuriser vos espaces.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="rounded-full bg-primary px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-xl shadow-primary/30 transition hover:-translate-y-1 hover:bg-red-700"
              >
                Demander un devis
              </Link>

              <a
                href="tel:+33662332036"
                className="rounded-full border border-white/20 bg-white/10 px-7 py-4 text-center text-sm font-black uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/15"
              >
                Appeler maintenant
              </a>
            </div>

            <div className="mt-10 flex flex-wrap gap-3">
              {targets.map((target) => (
                <span
                  key={target}
                  className="rounded-full border border-white/15 px-4 py-2 text-sm font-semibold text-white/70"
                >
                  {target}
                </span>
              ))}
            </div>
          </div>

          <div className="relative h-[400px] md:h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 overflow-hidden rounded-[2rem] border border-white/10">
              <img
                src="/images/services/technicien-nuisible.png"
                alt="Technicien nuisibles"
                className="h-full w-full object-cover"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
            </div>

            <div className="absolute bottom-6 left-6 right-6 rounded-3xl border border-white/10 bg-black/60 p-6 backdrop-blur-xl">
              <p className="text-sm font-black uppercase tracking-[0.2em] text-primary">
                Intervention professionnelle
              </p>

              <h3 className="mt-3 text-2xl font-black text-white">
                Une prise en charge rapide et efficace.
              </h3>

              <p className="mt-3 text-white/70">
                Diagnostic, traitement, prévention et accompagnement pour
                éliminer durablement les nuisibles.
              </p>
            </div>

            <div className="absolute left-6 top-6 rounded-2xl border border-white/10 bg-black/60 px-5 py-4 backdrop-blur-xl">
              <p className="text-3xl font-black text-white">24h</p>
              <p className="text-xs font-bold uppercase tracking-widest text-white/70">
                Intervention rapide
              </p>
            </div>

            <div className="absolute right-6 top-6 rounded-2xl border border-white/10 bg-primary px-5 py-4 text-white shadow-2xl shadow-primary/40">
              <p className="text-3xl font-black">4</p>
              <p className="text-xs font-bold uppercase tracking-widest">
                Expertises
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-2xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Nos services
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Des solutions adaptées à chaque situation.
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Chaque intervention est pensée pour répondre précisément au type
              de nuisible, au lieu concerné et au niveau d’urgence.
            </p>
          </div>

          <div className="mt-12 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            {services.map((service) => (
              <Link
                key={service.href}
                href={service.href}
                className="group overflow-hidden rounded-[2rem] bg-black text-white shadow-xl transition duration-500 hover:-translate-y-2"
              >
                <div className="relative h-72 overflow-hidden">
                  <img
                    src={service.image}
                    alt={service.title}
                    className="h-full w-full object-cover transition duration-700 group-hover:scale-110"
                  />

                  <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />

                  <div className="absolute bottom-6 left-6 right-6">
                    <h3 className="text-2xl font-black leading-tight">
                      {service.title}
                    </h3>
                  </div>
                </div>

                <div className="p-7">
                  <p className="leading-7 text-white/70">
                    {service.description}
                  </p>

                  <div className="mt-6 flex items-center gap-2 text-sm font-black uppercase tracking-wide text-primary">
                    Découvrir
                    <span className="transition group-hover:translate-x-2">
                      →
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-20 lg:px-8">
        <div className="mx-auto grid max-w-7xl items-center gap-10 rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm md:grid-cols-[0.8fr_1.2fr] md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Certification professionnelle
            </p>
            <h2 className="mt-4 text-3xl font-black tracking-tight md:text-4xl">
              Agrément Certibiocide
            </h2>
            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Nuisi Contrôle dispose de la certification Certibiocide, gage
              d’une utilisation raisonnée et réglementée des produits biocides
              dans le cadre des interventions professionnelles.
            </p>
          </div>

          <div className="rounded-[1.5rem] bg-white p-6 shadow-sm">
            <img
              src="/images/certifications/certibiocide.png"
              alt="Certification Certibiocide"
              className="h-auto w-full object-contain"
            />
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden px-5 py-24 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.12),transparent_35%)]" />

        <div className="relative mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Pourquoi nous choisir
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Une intervention rapide, efficace et durable.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Nous accompagnons particuliers, professionnels et collectivités
              avec des solutions adaptées à chaque problématique.
            </p>
          </div>

          <div className="mt-12 flex flex-wrap gap-4">
            <div className="rounded-2xl bg-primary px-6 py-4 text-white">
              <p className="text-3xl font-black">24h</p>
              <p className="text-sm uppercase tracking-wider">
                Intervention rapide
              </p>
            </div>

            <div className="rounded-2xl bg-[#0f0f10] px-6 py-4 text-white">
              <p className="text-3xl font-black">4</p>
              <p className="text-sm uppercase tracking-wider">
                Expertises métiers
              </p>
            </div>

            <div className="rounded-2xl bg-[#0f0f10] px-6 py-4 text-white">
              <p className="text-3xl font-black">7j/7</p>
              <p className="text-sm uppercase tracking-wider">Disponibilité</p>
            </div>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white shadow-sm">
              <div className="text-4xl">⚡</div>
              <h3 className="mt-5 text-xl font-black">Intervention rapide</h3>
              <p className="mt-3 text-white/60">
                Réactivité et disponibilité pour les situations urgentes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white shadow-sm">
              <div className="text-4xl">🛡️</div>
              <h3 className="mt-5 text-xl font-black">
                Produits professionnels
              </h3>
              <p className="mt-3 text-white/60">
                Utilisation de traitements adaptés et conformes aux normes.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white shadow-sm">
              <div className="text-4xl">🎯</div>
              <h3 className="mt-5 text-xl font-black">Résultats durables</h3>
              <p className="mt-3 text-white/60">
                Analyse complète et traitement ciblé pour éviter les récidives.
              </p>
            </div>

            <div className="rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white shadow-sm">
              <div className="text-4xl">📞</div>
              <h3 className="mt-5 text-xl font-black">Devis gratuit</h3>
              <p className="mt-3 text-white/60">
                Réponse rapide et accompagnement personnalisé.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Nos traitements
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Quels nuisibles traitons-nous ?
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Nous intervenons rapidement pour éliminer durablement tous types
              de nuisibles chez les particuliers, professionnels et
              collectivités.
            </p>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-2 lg:grid-cols-4">
            <div className="group rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white transition hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl">
                🐀
              </div>

              <h3 className="text-2xl font-black leading-tight">
                Dératisation
              </h3>

              <p className="mt-3 text-white/60">
                Traitement des rongeurs présents dans les habitations, locaux
                professionnels et collectivités.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Rats", "Souris", "Mulots"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white transition hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl">
                🪳
              </div>
              <h3 className="text-2xl font-black leading-tight">
                Désinsectisation
              </h3>

              <p className="mt-3 text-white/60">
                Élimination durable des insectes nuisibles grâce à des
                traitements adaptés à chaque situation.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Cafards",
                  "Punaises de lit",
                  "Fourmis",
                  "Puces",
                  "Guêpes",
                  "Frelons",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white transition hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl">
                🧴
              </div>

              <h3 className="text-2xl font-black leading-tight">
                Désinfection
              </h3>

              <p className="mt-3 text-white/60">
                Assainissement complet des logements, commerces, bureaux et
                locaux professionnels.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {[
                  "Habitations",
                  "Commerces",
                  "Collectivités",
                  "Syndrome de Diogène",
                ].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>

            <div className="group rounded-[2rem] border border-white/10 bg-[#0f0f10] p-8 text-white transition hover:-translate-y-2 hover:border-primary/30">
              <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-primary text-2xl">
                🐦
              </div>

              <h3 className="text-2xl font-black leading-tight">
                Dépigeonnage
              </h3>

              <p className="mt-3 text-white/60">
                Protection des bâtiments, toitures, façades et zones sensibles
                contre les pigeons et leurs nuisances.
              </p>

              <div className="mt-6 flex flex-wrap gap-3">
                {["Pigeons", "Fientes", "Toitures", "Façades"].map((item) => (
                  <span
                    key={item}
                    className="rounded-full bg-white/10 px-4 py-2 text-sm font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-24 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-10 rounded-[2rem] bg-[#0f0f10] p-8 text-white md:grid-cols-[0.9fr_1.1fr] md:p-12">
          <div>
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Zone d’intervention
            </p>
            <h2 className="mt-4 text-4xl font-black tracking-tight">
              Région lyonnaise, Ain et bassin lyonnais.
            </h2>
          </div>

          <div>
            <p className="text-lg leading-8 text-white/70">
              Basé à Toussieux, Nuisi Contrôle intervient largement sur la
              région lyonnaise, Lyon, Villeurbanne, Caluire-et-Cuire,
              Rillieux-la-Pape, l’Ain et le bassin lyonnais pour les
              particuliers, professionnels et collectivités.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {[
                "Lyon",
                "Villeurbanne",
                "Caluire-et-Cuire",
                "Rillieux-la-Pape",
                "Neuville-sur-Saône",
                "Toussieux",
                "Trévoux",
                "Reyrieux",
                "Villefranche-sur-Saône",
                "Bourg-en-Bresse",
              ].map((city) => (
                <span
                  key={city}
                  className="rounded-full bg-white/10 px-4 py-2 text-sm font-bold text-white/75"
                >
                  {city}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Satisfaction client
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Notre priorité : votre satisfaction.
            </h2>

            <p className="mt-5 text-lg leading-8 text-zinc-600">
              Chaque intervention est réalisée avec sérieux, discrétion et
              professionnalisme afin d'apporter une solution durable à votre
              problématique.
            </p>
          </div>

          <div className="mt-14 grid gap-6 md:grid-cols-3">
            {[
              {
                title: "Réactivité",
                text: "Une prise en charge rapide et un accompagnement personnalisé dès le premier contact.",
              },
              {
                title: "Professionnalisme",
                text: "Des méthodes adaptées à chaque situation avec des solutions efficaces et durables.",
              },
              {
                title: "Conseils & Prévention",
                text: "Des recommandations concrètes pour limiter les risques de réinfestation.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="rounded-[2rem] border border-zinc-200 bg-zinc-50 p-8 shadow-sm transition hover:-translate-y-1 hover:shadow-lg"
              >
                <div className="text-2xl text-primary">★★★★★</div>

                <h3 className="mt-5 text-xl font-black">{item.title}</h3>

                <p className="mt-4 leading-7 text-zinc-600">{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-zinc-100 px-5 py-24 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="max-w-3xl">
            <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
              Questions fréquentes
            </p>

            <h2 className="mt-4 text-4xl font-black tracking-tight md:text-5xl">
              Vos questions les plus fréquentes
            </h2>
          </div>

          <div className="mt-14 grid gap-5">
            {[
              {
                question: "Combien coûte une dératisation ?",
                answer:
                  "Le tarif dépend du type de nuisible, de la surface à traiter, du niveau d’infestation et du lieu d’intervention. Un devis personnalisé permet d’apporter une réponse adaptée.",
              },
              {
                question: "Intervenez-vous en urgence ?",
                answer:
                  "Oui, Nuisi Contrôle intervient rapidement dans l’Ain, la Dombes, le Val de Saône, le Nord Lyonnais et le bassin lyonnais selon les disponibilités.",
              },
              {
                question: "Quels nuisibles traitez-vous ?",
                answer:
                  "Nous traitons notamment les rats, souris, mulots, cafards, punaises de lit, fourmis, puces, guêpes, frelons, pigeons et autres nuisibles.",
              },
              {
                question:
                  "Travaillez-vous avec les professionnels et collectivités ?",
                answer:
                  "Oui, les interventions concernent les particuliers, les professionnels, les commerces, les entreprises et les collectivités.",
              },
              {
                question: "Proposez-vous des conseils après intervention ?",
                answer:
                  "Oui, chaque intervention peut être accompagnée de conseils de prévention afin de limiter les risques de récidive.",
              },
            ].map((item) => (
              <div
                key={item.question}
                className="rounded-[2rem] border border-zinc-200 bg-white p-8 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
              >
                <h3 className="text-xl font-black text-zinc-900">
                  {item.question}
                </h3>
                <p className="mt-4 leading-7 text-zinc-600">{item.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#0f0f10] px-5 py-32 lg:px-8">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(193,18,31,0.18),transparent_35%)]" />

        <div className="relative mx-auto max-w-5xl text-center text-white">
          <p className="text-sm font-black uppercase tracking-[0.24em] text-primary">
            Besoin d'une intervention ?
          </p>
          <h2 className="mt-6 text-4xl font-black tracking-tight md:text-6xl lg:text-7xl">
            Besoin d'une
            <br />
            intervention rapide ?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-white/70">
            Dératisation • Désinsectisation • Désinfection • Dépigeonnage
            <br />
            Intervention dans la région lyonnaise, l'Ain et le bassin lyonnais.
          </p>
          <div className="mt-12 flex flex-wrap justify-center gap-4">
            <div className="rounded-2xl bg-primary px-6 py-4 text-white">
              <p className="text-3xl font-black">24h</p>
              <p className="text-sm uppercase tracking-wider">
                Intervention rapide
              </p>
            </div>

            <div className="rounded-2xl bg-white/5 px-6 py-4 text-white backdrop-blur">
              <p className="text-3xl font-black">7j/7</p>
              <p className="text-sm uppercase tracking-wider">Disponibilité</p>
            </div>

            <div className="rounded-2xl bg-white/5 px-6 py-4 text-white backdrop-blur">
              <p className="text-3xl font-black">100%</p>
              <p className="text-sm uppercase tracking-wider">Devis gratuit</p>
            </div>
          </div>
          <div className="mt-14 flex flex-col justify-center gap-5 sm:flex-row">
            <Link
              href="/contact"
              className="rounded-full bg-primary px-10 py-6 text-base font-black uppercase tracking-wide text-white shadow-2xl shadow-primary/40 transition hover:-translate-y-1 hover:bg-red-700"
            >
              Demander un devis gratuit
            </Link>

            <a
              href="tel:+33662332036"
              className="rounded-full border border-white/15 bg-white/5 px-10 py-6 text-base font-black uppercase tracking-wide text-white backdrop-blur transition hover:-translate-y-1 hover:bg-white/10"
            >
              Appeler maintenant
            </a>
          </div>
          <div className="mt-12 flex flex-wrap justify-center gap-3">
            {["✓ Particuliers", "✓ Professionnels", "✓ Collectivités"].map(
              (item) => (
                <span
                  key={item}
                  className="rounded-full border border-white/10 px-5 py-3 text-sm font-semibold text-white/70"
                >
                  {item}
                </span>
              ),
            )}
          </div>
        </div>
      </section>
    </main>
  );
}
