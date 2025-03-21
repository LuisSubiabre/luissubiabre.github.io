import { Github, Mail, Linkedin, FileText, Youtube } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { copyToClipboard } from "../helpers/copyToClipboard"; // Asegúrate de que la ruta es correcta
import { motion } from "framer-motion";

const HeroComponent = () => {
  const email = "contacto@luissubiabre.dev";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
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
    <>
      <section id="inicio" className="relative">
        <Toaster position="bottom-center" reverseOrder={false} />

        <header className="min-h-screen flex items-center justify-center bg-gradient-to-t from-blue-0 via-white to-purple-100 dark:from-gray-900 dark:via-gray-800 dark:to-purple-900 relative overflow-hidden">
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10 dark:opacity-5">
            <div className="absolute inset-0 bg-grid-pattern"></div>
          </div>

          <motion.div
            className="max-w-4xl mx-auto px-4 py-16 text-center relative z-10"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h1
              className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-gray-900 to-gray-600 dark:from-white dark:to-gray-300 bg-clip-text text-transparent"
              variants={itemVariants}
            >
              Luis Subiabre
            </motion.h1>
            <motion.h2
              className="text-2xl md:text-3xl text-gray-600 dark:text-gray-300 mb-8"
              variants={itemVariants}
            >
              Full Stack Developer
            </motion.h2>
            <motion.p
              className="text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto leading-relaxed"
              variants={itemVariants}
            >
              Con más de 10 años de experiencia creando soluciones web
              innovadoras y escalables. Especializado en arquitecturas modernas
              y desarrollo full stack.
            </motion.p>
            <motion.div
              className="flex flex-wrap items-center justify-center gap-4"
              variants={containerVariants}
            >
              <div className="flex flex-wrap items-center justify-center gap-4">
                <a
                  href="https://github.com/LuisSubiabre"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="GitHub Profile"
                >
                  <Github className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    GitHub
                  </span>
                </a>
                <a
                  href="https://www.linkedin.com/in/luissubiabre/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Linkedin className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    LinkedIn
                  </span>
                </a>
                <a
                  href="https://www.youtube.com/@LuisSubiabre/videos"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="LinkedIn Profile"
                >
                  <Youtube className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">
                    Youtube
                  </span>
                </a>
                <a
                  href="#"
                  onClick={() => copyToClipboard(email)}
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Send email"
                >
                  <Mail className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300 group-hover:underline">
                    contacto@luissubiabre.dev
                  </span>
                </a>
                <a
                  href="#" // Add your CV URL here
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 px-4 py-2 rounded-lg hover:bg-gray-100 dark:hover:bg-slate-700 transition-colors"
                  aria-label="Download CV"
                >
                  <FileText className="w-5 h-5 text-gray-700 dark:text-gray-300" />
                  <span className="text-gray-700 dark:text-gray-300">CV</span>
                </a>
              </div>
            </motion.div>
          </motion.div>
        </header>
      </section>
    </>
  );
};

export default HeroComponent;
