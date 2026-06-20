export const metadata = {
  title: "Politique de confidentialité | Nuisi Contrôle",
  description: "Politique de confidentialité du site Nuisi Contrôle.",
};

export default function PolitiqueConfidentialitePage() {
  return (
    <main className="bg-white px-5 py-24 text-[#0f0f10] lg:px-8">
      <div className="mx-auto max-w-4xl">
        <h1 className="text-4xl font-black md:text-5xl">
          Politique de confidentialité
        </h1>

        <div className="mt-12 space-y-10 leading-8 text-zinc-600">
          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Données collectées
            </h2>

            <p className="mt-4">
              Lorsque vous utilisez le formulaire de contact, certaines données
              peuvent être collectées :
            </p>

            <ul className="mt-4 list-disc space-y-2 pl-6">
              <li>Nom</li>
              <li>Adresse e-mail</li>
              <li>Numéro de téléphone</li>
              <li>Message envoyé</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Utilisation des données
            </h2>

            <p className="mt-4">
              Les informations transmises sont utilisées uniquement afin de
              répondre aux demandes de contact, établir un devis ou organiser
              une intervention.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">
              Conservation des données
            </h2>

            <p className="mt-4">
              Les données sont conservées uniquement pendant la durée nécessaire
              au traitement de la demande et conformément à la réglementation en
              vigueur.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">Vos droits</h2>

            <p className="mt-4">
              Conformément au RGPD, vous disposez d’un droit d’accès, de
              rectification, d’opposition, de suppression et de limitation du
              traitement de vos données personnelles.
            </p>

            <p className="mt-4">
              Pour toute demande :
              <br />
              nuisicontrole69@gmail.com
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-black text-[#0f0f10]">Cookies</h2>

            <p className="mt-4">
              Le site peut utiliser des cookies techniques nécessaires à son bon
              fonctionnement. Aucun cookie publicitaire n’est utilisé sans
              consentement préalable.
            </p>
          </section>
        </div>
      </div>
    </main>
  );
}
