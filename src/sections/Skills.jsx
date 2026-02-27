const skills = [
  "React",
  "Vite",
  "Tailwind CSS",
  "JavaScript",
  "Responsive UI",
  "Component Design",
]

function Skills() {
  return (
    <div className="space-y-8">
      <h2 className="text-3xl font-bold tracking-tight text-slate-200">Skills</h2>

      <div className="flex flex-wrap gap-3">
        {skills.map(skill => (
          <span
            key={skill}
            className="rounded-full border border-slate-700 bg-slate-900/50 px-4 py-2 text-sm font-medium text-slate-300 transition-colors hover:bg-slate-800"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  )
}

export default Skills
