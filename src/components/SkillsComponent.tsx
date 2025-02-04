import {
  Github,
  GitBranch,
  ServerCog,
  Database,
  DatabaseBackup,
  Code,
} from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";

const skills = [
  { name: "React", icon: <FaReact size={30} /> },
  { name: "TypeScript", icon: <TbBrandTypescript size={30} /> },
  { name: "Tailwind CSS", icon: <RiTailwindCssFill size={30} /> },
  { name: "Node.js", icon: <FaNodeJs size={30} /> },
  { name: "Git", icon: <GitBranch size={30} /> },
  { name: "GitHub", icon: <Github size={30} /> },
  { name: "REST APIs", icon: <ServerCog size={30} /> },
  { name: "PostgreSQL", icon: <Database size={30} /> },
  { name: "MySQL", icon: <DatabaseBackup size={30} /> },
];

const SkillsComponent = () => {
  return (
    <>
      <section
        id="skills"
        className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <Code className="text-gray-900 dark:text-white" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Skills
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg flex flex-col items-center gap-2 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
              >
                <div className="text-gray-700 dark:text-gray-300">
                  {skill.icon}
                </div>
                <span className="text-gray-800 dark:text-gray-200">
                  {skill.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default SkillsComponent;
