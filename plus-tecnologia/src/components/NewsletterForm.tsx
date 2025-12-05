"use client";

import { Button } from "@/components/ui/button";
import { useState } from "react";

export function NewsletterForm() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle newsletter subscription
    alert('¡Gracias por suscribirte! Te enviaremos las últimas noticias tecnológicas.');
    setEmail("");
  };

  return (
    <form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="tu@email.com"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="flex-1 px-4 py-3 rounded-lg border-0 focus:ring-2 focus:ring-white"
        required
      />
      <Button type="submit" className="bg-white text-blue-600 hover:bg-gray-100 px-8">
        Suscribirse
      </Button>
    </form>
  );
}
