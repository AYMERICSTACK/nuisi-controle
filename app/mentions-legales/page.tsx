export const metadata = {
  title: "Mentions légales | Nuisi Contrôle",
  description: "Mentions légales du site Nuisi Contrôle.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="bg-white px-5 py-24 text-[#0f0f10] lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black md:text-5xl">Mentions légales</h1>

        <div className="mt-12 space-y-10 leading-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Éditeur du site
            </h2>

            <p className="mt-4">
              Nuisi Contrôle
              <br />
              Kevin Millet
              <br />
              Toussieux, France
              <br />
              Téléphone : 06 62 33 20 36
              <br />
              Email : contact@nuisicontrole.fr
              <br />
              SIRET : À compléter
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">Hébergement</h2>

            <p className="mt-4">
              Vercel Inc.
              <br />
              440 N Barranca Ave #4133
              <br />
              Covina, CA 91723
              <br />
              États-Unis
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Propriété intellectuelle
            </h2>

            <p className="mt-4">
              L’ensemble du contenu présent sur ce site (textes, images,
              graphismes, logo, éléments visuels et structure) est protégé par
              les lois relatives à la propriété intellectuelle. Toute
              reproduction ou utilisation sans autorisation préalable est
              interdite.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Responsabilité
            </h2>

            <p className="mt-4">
              Nuisi Contrôle s’efforce de fournir des informations exactes et
              régulièrement mises à jour. Toutefois, aucune garantie n’est
              donnée quant à l’exactitude, la complétude ou l’actualité des
              informations publiées.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
