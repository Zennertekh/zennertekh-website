function Contact() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      <div className="space-y-4">
        <h2 className="text-3xl font-bold tracking-tight text-slate-900">Contact</h2>
        <p className="text-base leading-relaxed text-slate-600">
          Have a project in mind? Share a few details and let&apos;s build something practical and
          clean.
        </p>
      </div>

      <form className="space-y-4 rounded-xl border border-slate-200 p-5 shadow-sm">
        <label className="block text-sm font-medium text-slate-700">
          Name
          <input
            type="text"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="Your name"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Email
          <input
            type="email"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="your@email.com"
          />
        </label>
        <label className="block text-sm font-medium text-slate-700">
          Message
          <textarea
            rows="4"
            className="mt-1 block w-full rounded-md border border-slate-300 px-3 py-2 text-sm outline-none ring-0 focus:border-slate-500"
            placeholder="Tell us about your project"
          />
        </label>
        <button
          type="button"
          className="rounded-lg bg-slate-900 px-5 py-3 text-sm font-semibold text-white transition hover:bg-slate-700"
        >
          Send Message
        </button>
      </form>
    </div>
  )
}

export default Contact
