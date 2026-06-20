import Link from "next/link";

const services = [
  { label: "Dératisation", href: "/deratisation" },
  { label: "Désinsectisation", href: "/desinsectisation" },
  { label: "Désinfection", href: "/desinfection" },
  { label: "Dépigeonnage", href: "/depigeonnage" },
];

const links = [
  { label: "Accueil", href: "/" },
  { label: "Zones d’intervention", href: "/zones-intervention" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "/mentions-legales" },
  { label: "Politique de confidentialité", href: "/politique-confidentialite" },
];

export function Footer() {
  return (
    <footer className="bg-[#0f0f10] px-5 py-14 text-white lg:px-8">
      <div className="mx-auto max-w-7xl">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <p className="text-2xl font-black uppercase tracking-[0.2em]">
              Nuisi Contrôle
            </p>

            <p className="mt-6 max-w-sm leading-7 text-white/60">
              Dératisation, désinsectisation, désinfection et dépigeonnage pour
              particuliers, professionnels et collectivités dans l’Ain et le
              bassin lyonnais.
            </p>

            <a
              href="tel:+33662332036"
              className="mt-6 inline-flex rounded-full bg-[#C1121F] px-5 py-3 text-sm font-black text-white transition hover:bg-red-700"
            >
              06 62 33 20 36
            </a>
          </div>

          <div>
            <p className="font-black">Services</p>

            <div className="mt-5 grid gap-3">
              {services.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-black">Navigation</p>

            <div className="mt-5 grid gap-3">
              {links.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="text-white/60 transition hover:text-white"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="font-black">Contact</p>

            <div className="mt-5 space-y-3 text-white/60">
              <p>Toussieux, Ain</p>
              <p>Intervention région lyonnaise & Ain</p>
              <p>nuisicontrole69@gmail.com</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-2">
              {["Lyon", "Villeurbanne", "Nord Lyonnais", "Ain"].map((area) => (
                <span
                  key={area}
                  className="rounded-full border border-white/10 px-3 py-1 text-xs font-bold text-white/60"
                >
                  {area}
                </span>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-5 border-t border-white/10 pt-8 text-sm text-white/50 md:flex-row md:items-center md:justify-between">
          <p>
            © {new Date().getFullYear()} Nuisi Contrôle. Tous droits réservés.
          </p>

          <div className="flex flex-wrap gap-5">
            {legalLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="transition hover:text-white"
              >
                {item.label}
              </Link>
            ))}
          </div>
          <p className="text-white/40">
            Conception & développement : AD Digital
          </p>
        </div>
      </div>
    </footer>
  );
}
