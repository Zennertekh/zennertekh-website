import useTheme from "../../hooks/useTheme"
import Container from "../ui/Container"

function Navbar() {
  const { theme, toggleTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 dark:bg-slate-950/70 border-b border-slate-200 dark:border-slate-800">
      <Container className="flex justify-between items-center h-16">
        <h1 className="text-xl font-bold tracking-tight">
          <span className="text-brand">Zenner</span>tekh
        </h1>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="px-4 py-2 text-sm rounded-lg border border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            {theme === "dark" ? "Light" : "Dark"}
          </button>
        </div>
      </Container>
    </nav>
  )
}

export default Navbar