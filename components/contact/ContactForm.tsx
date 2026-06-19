"use client";

import { useState } from "react";

const services = ["Dératisation", "Désinsectisation", "Désinfection", "Dépigeonnage"];

export function ContactForm() {
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [error, setError] = useState("");

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    setStatus("loading");
    setError("");

    const payload = {
      name: String(formData.get("name") || ""),
      phone: String(formData.get("phone") || ""),
      email: String(formData.get("email") || ""),
      service: String(formData.get("service") || ""),
      message: String(formData.get("message") || ""),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json();
        throw new Error(data.error || "Erreur lors de l’envoi.");
      }

      setStatus("success");
      form.reset();
    } catch (err) {
      setStatus("error");
      setError(
        err instanceof Error
          ? err.message
          : "Une erreur est survenue. Merci de réessayer.",
      );
    }
  }

  return (
    <form onSubmit={handleSubmit} className="mt-10 grid gap-5">
      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold">Nom complet</label>
          <input
            required
            type="text"
            name="name"
            placeholder="Votre nom"
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-[#C1121F] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">Téléphone</label>
          <input
            required
            type="tel"
            name="phone"
            placeholder="Votre numéro"
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-[#C1121F] focus:bg-white"
          />
        </div>
      </div>

      <div className="grid gap-5 md:grid-cols-2">
        <div>
          <label className="mb-2 block text-sm font-bold">Email</label>
          <input
            required
            type="email"
            name="email"
            placeholder="Votre email"
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-[#C1121F] focus:bg-white"
          />
        </div>

        <div>
          <label className="mb-2 block text-sm font-bold">
            Service demandé
          </label>
          <select
            required
            name="service"
            defaultValue=""
            className="w-full rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-[#C1121F] focus:bg-white"
          >
            <option value="" disabled>
              Choisir un service
            </option>
            {services.map((service) => (
              <option key={service} value={service}>
                {service}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div>
        <label className="mb-2 block text-sm font-bold">Message</label>
        <textarea
          required
          name="message"
          rows={6}
          placeholder="Décrivez votre besoin : type de nuisible, lieu concerné, urgence, commune..."
          className="w-full resize-none rounded-2xl border border-zinc-200 bg-zinc-50 px-5 py-4 text-sm outline-none transition focus:border-[#C1121F] focus:bg-white"
        />
      </div>

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-[#C1121F] px-8 py-4 text-sm font-black text-white shadow-xl shadow-red-950/20 transition hover:bg-red-700 disabled:cursor-not-allowed disabled:opacity-60"
      >
        {status === "loading" ? "Envoi en cours..." : "Envoyer ma demande"}
      </button>

      {status === "success" && (
        <div className="rounded-2xl border border-green-200 bg-green-50 p-5 text-sm font-bold text-green-700">
          Votre demande a bien été envoyée. Nuisi Contrôle vous recontactera
          rapidement.
        </div>
      )}

      {status === "error" && (
        <div className="rounded-2xl border border-red-200 bg-red-50 p-5 text-sm font-bold text-red-700">
          {error}
        </div>
      )}
    </form>
  );
}
