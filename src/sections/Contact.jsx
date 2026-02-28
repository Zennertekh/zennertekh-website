import { useState } from "react"

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" })
  const [status, setStatus] = useState("")

  const handleSubmit = async event => {
    event.preventDefault()
    setStatus("Sending...")

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      })

      const data = await response.json();

      if (response.ok) {
        setStatus("Message sent successfully.")
        setFormData({ name: "", email: "", message: "" })
      } else {
        setStatus(data.message || "Failed to send message.")
      }
    } catch {
      setStatus("Error connecting to the server.")
    }
  }

  const setField = (name, value) => setFormData(previous => ({ ...previous, [name]: value }))

  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div data-reveal="left" className="space-y-4" style={{ "--reveal-delay": "20ms" }}>
        <h2 className="text-3xl font-bold tracking-tight text-slate-200">Contact</h2>
        <p className="text-base leading-relaxed text-slate-400">
          Have a project in mind? Share a few details and let&apos;s build something practical,
          stable, and clean.
        </p>
        {status && (
          <p
            className={`text-sm font-semibold ${
              status.includes("Error") || status.includes("Failed")
                ? "text-rose-400"
                : "text-orange-400"
            }`}
          >
            {status}
          </p>
        )}
      </div>

      <form
        onSubmit={handleSubmit}
        data-reveal="right"
        style={{ "--reveal-delay": "120ms" }}
        className="space-y-4 rounded-2xl border border-slate-700/40 bg-slate-900/60 p-6 backdrop-blur-sm shadow-lg shadow-black/30"
      >
        <label className="block text-sm font-medium text-slate-300">
          Name
          <input
            type="text"
            required
            value={formData.name}
            onChange={event => setField("name", event.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-orange-700"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Email
          <input
            type="email"
            required
            value={formData.email}
            onChange={event => setField("email", event.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-orange-700"
            placeholder="your@email.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-300">
          Message
          <textarea
            rows="4"
            required
            value={formData.message}
            onChange={event => setField("message", event.target.value)}
            className="mt-1 block w-full rounded-md border border-slate-700 bg-slate-950/60 px-3 py-2 text-sm text-slate-200 outline-none ring-0 placeholder:text-slate-500 focus:border-orange-700"
            placeholder="Tell us about your project"
          />
        </label>
        <button
          type="submit"
          className="w-full rounded-lg bg-orange-700 px-5 py-3 text-sm font-semibold text-slate-100 shadow-md shadow-orange-700/20 transition-colors hover:bg-orange-600"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
