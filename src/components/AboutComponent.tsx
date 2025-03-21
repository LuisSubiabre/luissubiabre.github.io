import { User, Code, Rocket, Users } from "lucide-react";
import { motion } from "framer-motion";

const AboutComponent = () => {
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

  const features = [
    {
      icon: Code,
      title: "Desarrollo Web",
      description:
        "Especializado en React, TypeScript y tecnologías web modernas",
    },
    {
      icon: Rocket,
      title: "Arquitectura",
      description: "Diseño de soluciones escalables y mantenibles",
    },
    {
      icon: Users,
      title: "Experiencia",
      description: "Más de 10 años creando soluciones innovadoras",
    },
  ];

  return (
    <section
      id="about"
      className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800"
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
          <User className="text-gray-900 dark:text-white" size={24} />
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Acerca de mí
          </h2>
        </motion.div>

        <div className="flex flex-col items-center mb-12">
          <motion.div
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
            variants={itemVariants}
          >
            <img
              src="https://avatars.githubusercontent.com/u/3602747?v=4"
              alt="Luis Subiabre - Desarrollador Web Full Stack"
              className="w-48 h-48 rounded-full shadow-lg border-4 border-white dark:border-gray-700"
            />
          </motion.div>
        </div>

        <motion.div className="space-y-8" variants={itemVariants}>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg max-w-3xl mx-auto">
            Soy un desarrollador Web Full Stack con más de 10 años de
            experiencia en la creación de soluciones web innovadoras y
            escalables. Especializado en React, TypeScript y tecnologías web
            modernas, me dedico a diseñar interfaces limpias, eficientes y
            fáciles de usar que proporcionen experiencias de usuario
            excepcionales.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {features.map((feature) => (
              <motion.div
                key={feature.title}
                className="p-6 rounded-lg bg-white dark:bg-gray-700 shadow-md hover:shadow-lg transition-shadow"
                variants={itemVariants}
                whileHover={{ y: -5 }}
              >
                <feature.icon className="w-6 h-6 text-blue-500 dark:text-blue-400 mb-3" />
                <h3 className="font-semibold text-gray-900 dark:text-white mb-2">
                  {feature.title}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default AboutComponent;
