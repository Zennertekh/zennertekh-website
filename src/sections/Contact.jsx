import { useState } from "react";



function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents page reload
    setStatus('Sending...');

    try {
      const response = await fetch(import.meta.env.VITE_API_URL, { 
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
        
      


      if (response.ok) {
        setStatus('Message sent successfully!');
        setFormData({ name: '', email: '', message: '' }); // Clear the form
      } else {
        setStatus('Failed to send message.');
      }
    } catch (error) {
      setStatus('Error connecting to the server.');
    }
  };

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h2>
        <p className="text-base leading-relaxed text-slate-600">
          Have a project in mind? Share a few details and let&apos;s build something practical and clean.
        </p>
        {/* Status Message Display */}
        {status && (
          <p className={`text-sm font-semibold ${status.includes('Error') || status.includes('Failed') ? 'text-red-500' : 'text-blue-600'}`}>
            {status}
          </p>
        )}
      </div>

      {/* 1. Added onSubmit handler */}
      <form onSubmit={handleSubmit} className="space-y-4 rounded-xl border border-slate-200 p-5 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            required
            value={formData.name} // 2. Linked to state
            onChange={(e) => setFormData({ ...formData, name: e.target.value })} // 3. Updates state
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            required
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="your@email.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            rows="4"
            required
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="Tell us about your project"
          />
        </label>
        <button
          type="submit" // 4. Changed to "submit" to trigger onSubmit
          className="w-full rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact;