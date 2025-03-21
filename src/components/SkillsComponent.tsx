import {
  Github,
  GitBranch,
  ServerCog,
  Database,
  DatabaseBackup,
  Code,
  Container,
} from "lucide-react";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { motion } from "framer-motion";

const skills = [
  { name: "React", icon: <FaReact size={30} />, category: "Frontend" },
  {
    name: "TypeScript",
    icon: <TbBrandTypescript size={30} />,
    category: "Frontend",
  },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={30} />,
    category: "Frontend",
  },
  { name: "Node.js", icon: <FaNodeJs size={30} />, category: "Backend" },
  { name: "Git", icon: <GitBranch size={30} />, category: "DevOps" },
  { name: "GitHub", icon: <Github size={30} />, category: "DevOps" },
  { name: "Docker", icon: <Container size={30} />, category: "DevOps" },
  { name: "REST APIs", icon: <ServerCog size={30} />, category: "Backend" },
  { name: "PostgreSQL", icon: <Database size={30} />, category: "Database" },
  { name: "MySQL", icon: <DatabaseBackup size={30} />, category: "Database" },
];

const categories = ["Frontend", "Backend", "DevOps", "Database"];

const SkillsComponent = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  };

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
    >
      <motion.div
        className="max-w-4xl mx-auto px-4"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
      >
        <motion.div
          className="flex items-center gap-2 mb-12"
          variants={itemVariants}
        >
          <Code className="text-gray-900 dark:text-white" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Skills
          </h2>
        </motion.div>

        <div className="space-y-8">
          {categories.map((category) => (
            <motion.div
              key={category}
              variants={itemVariants}
              className="space-y-4"
            >
              <h3 className="text-lg font-semibold text-gray-700 dark:text-gray-300">
                {category}
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {skills
                  .filter((skill) => skill.category === category)
                  .map((skill) => (
                    <div
                      key={skill.name}
                      className="group p-4 bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm rounded-lg flex flex-col items-center gap-2 hover:bg-white dark:hover:bg-gray-700 transition-all duration-300 transform hover:-translate-y-1 hover:shadow-xl"
                    >
                      <motion.div
                        className="text-gray-700 dark:text-gray-300 transition-transform duration-300 group-hover:scale-110"
                        whileHover={{ rotate: 360 }}
                        transition={{ duration: 0.5 }}
                      >
                        {skill.icon}
                      </motion.div>
                      <span className="text-gray-800 dark:text-gray-200 font-medium">
                        {skill.name}
                      </span>
                    </div>
                  ))}
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
};

export default SkillsComponent;
