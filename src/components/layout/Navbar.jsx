import useTheme from "../../hooks/useTheme"

function Navbar() {
    const { theme, toggleTheme } = useTheme()

    return (
        <nav className="flex justify-between items-center p-6">
      <h1 className="text-xl font-bold">Zennertekh</h1>

      <button
        onClick={toggleTheme}
        className="px-4 py-2 rounded-lg border border-slate-500"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
    )
}

export default Navbar