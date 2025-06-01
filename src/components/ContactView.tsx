'use client';

import { useState } from 'react';

export default function ContactView() {
  const [form, setForm] = useState({
    name: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');

    try {
      // Ici tu peux appeler ton endpoint API pour envoyer le message
      // Exemple: await fetch('/api/contact', { method: 'POST', body: JSON.stringify(form) })

      // Simuler délai d’envoi
      await new Promise((r) => setTimeout(r, 1000));

      setStatus('success');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  return (
    <div className="max-w-xl mx-auto p-8 bg-white rounded shadow-md">
      <h2 className="text-2xl font-light mb-6 text-center">Contactez-nous</h2>

      <form onSubmit={handleSubmit} className="space-y-6">
        <label className="block">
          <span className="text-gray-700 font-light mb-1 block">Nom</span>
          <input
            type="text"
            name="name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Votre nom"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-light mb-1 block">Email</span>
          <input
            type="email"
            name="email"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="votre.email@example.com"
          />
        </label>

        <label className="block">
          <span className="text-gray-700 font-light mb-1 block">Message</span>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            rows={5}
            className="w-full px-4 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-indigo-500 transition"
            placeholder="Votre message"
          />
        </label>

        <button
          type="submit"
          disabled={status === 'sending'}
          className="w-full bg-indigo-600 text-white py-2 rounded hover:bg-indigo-700 transition disabled:opacity-50"
        >
          {status === 'sending' ? 'Envoi...' : 'Envoyer'}
        </button>

        {status === 'success' && (
          <p className="mt-4 text-green-600 font-light text-center">Message envoyé avec succès !</p>
        )}
        {status === 'error' && (
          <p className="mt-4 text-red-600 font-light text-center">Erreur lors de l’envoi, veuillez réessayer.</p>
        )}
      </form>
    </div>
  );
}
