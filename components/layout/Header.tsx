"use client";

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const navItems = [
  { label: "Accueil", href: "/" },
  { label: "Dératisation", href: "/deratisation" },
  { label: "Désinsectisation", href: "/desinsectisation" },
  { label: "Désinfection", href: "/desinfection" },
  { label: "Zones", href: "/zones-intervention" },
  { label: "À propos", href: "/a-propos" },
  { label: "Contact", href: "/contact" },
];

export function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto flex h-24 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link
          href="/"
          className="flex items-center gap-3"
          onClick={() => setIsOpen(false)}
        >
          <Image
            src="/logo/logo-nuisi-controle.png"
            alt="Nuisi Contrôle"
            width={90}
            height={90}
            className="h-16 w-auto"
            priority
          />

          <div className="leading-none">
            <p className="text-lg font-black uppercase tracking-[0.15em] text-white">
              Nuisi
            </p>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-500">
              Contrôle
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 lg:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-semibold text-white/70 transition hover:text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="hidden items-center gap-3 md:flex">
          <a
            href="tel:+33662332036"
            className="rounded-full border border-white/15 px-5 py-3 text-sm font-black text-white transition hover:bg-white/10"
          >
            06 62 33 20 36
          </a>

          <Link
            href="/contact"
            className="rounded-full bg-primary px-5 py-3 text-sm font-black text-white shadow-lg shadow-primary/30 transition hover:-translate-y-0.5 hover:bg-red-700"
          >
            Devis gratuit
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setIsOpen(!isOpen)}
          className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white lg:hidden"
          aria-label="Ouvrir le menu"
        >
          <span className="text-2xl">{isOpen ? "×" : "☰"}</span>
        </button>
      </div>

      {isOpen && (
        <div className="border-t border-white/10 bg-[#0f0f10] px-5 py-6 lg:hidden">
          <nav className="mx-auto flex max-w-7xl flex-col gap-4">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsOpen(false)}
                className="rounded-2xl bg-white/5 px-5 py-4 text-base font-bold text-white/80"
              >
                {item.label}
              </Link>
            ))}

            <a
              href="tel:+33662332036"
              className="mt-2 rounded-full border border-white/15 px-5 py-4 text-center text-sm font-black uppercase tracking-wide text-white"
            >
              Appeler maintenant
            </a>

            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="rounded-full bg-primary px-5 py-4 text-center text-sm font-black uppercase tracking-wide text-white shadow-lg shadow-primary/30"
            >
              Demander un devis gratuit
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
