import { 
  Code2, Layout, Terminal, Database, GitBranch, MonitorSmartphone, 
  Cpu, Layers, Globe, Zap, BarChart, FileJson, Box, Github, 
  RefreshCw, Cloud, Settings, HardDrive, Smartphone, Binary,
  FileCode, Server, LayoutTemplate, Wind
} from "lucide-react";

const skillGroups = [
  {
    category: "Languages & Logic",
    items: [
      { name: "JavaScript", icon: Code2 },
      { name: "Go", icon: Binary },
      { name: "C++", icon: Terminal },
      { name: "PHP", icon: FileCode },
      { name: "Dart", icon: Code2 },
    ]
  },
  {
    category: "Frontend & Mobile",
    items: [
      { name: "React", icon: Cpu },
      { name: "Flutter", icon: Smartphone },
      { name: "Tailwind CSS", icon: Wind },
      { name: "Vite", icon: Zap },
      { name: "Chart.js", icon: BarChart },
      { name: "Markdown", icon: FileJson },
    ]
  },
  {
    category: "Backend & Database",
    items: [
      { name: "PostgreSQL", icon: Database }, // D: Drive Resident
      { name: "MongoDB", icon: Database },
      { name: "MySQL / SQLite", icon: HardDrive },
      { name: "Sequelize ORM", icon: Layers },
      { name: "Supabase / Serverless", icon: Cloud },
      { name: "Database Mgmt", icon: Settings },
    ]
  },
  {
    category: "Tools & Ecosystem",
    items: [
      { name: "Git & GitHub", icon: Github }, // D: Drive Resident
      { name: "Vercel / CI/CD", icon: RefreshCw },
      { name: "NPM / Node.js", icon: Box },
      { name: "Insomnia / APIs", icon: Globe },
      { name: "Arduino / IoT", icon: Cpu },
      { name: "WAMP / WordPress", icon: Server },
    ]
  }
];

const revealDirections = ["up", "left", "right"];

function Skills() {
  let globalIndex = 0;

  return (
    <div className="space-y-12">
      <div className="space-y-4">
        <h2 data-reveal="up" className="text-3xl font-bold tracking-tight text-slate-200">
          Technical Expertise
        </h2>
        <p data-reveal="up" className="max-w-3xl text-slate-400">
          A comprehensive overview of some of our tools and technologies, ranging from system-level programming 
          to modern cloud infrastructure and mobile development.
        </p>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {skillGroups.map((group) => (
          <div key={group.category} className="space-y-5">
            <h3 className="text-[10px] font-bold uppercase tracking-[0.3em] text-slate-500">
              {group.category}
            </h3>
            
            <div className="flex flex-col gap-2">
              {group.items.map((skill) => {
                const direction = revealDirections[globalIndex % revealDirections.length];
                const delay = 30 + globalIndex * 35;
                globalIndex++;
                const Icon = skill.icon;

                return (
                  <div
                    key={skill.name}
                    data-reveal={direction}
                    style={{ "--reveal-delay": `${delay}ms` }}
                    className="group flex items-center gap-3 rounded-lg border border-slate-800/50 bg-slate-900/20 p-2.5 transition-all hover:border-blue-500/30 hover:bg-slate-800/50"
                  >
                    <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded bg-slate-800 text-slate-400 transition-colors group-hover:text-blue-400">
                      <Icon size={16} />
                    </div>
                    <span className="truncate text-xs font-medium text-slate-400 group-hover:text-white">
                      {skill.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;