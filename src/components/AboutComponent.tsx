import { User } from "lucide-react";
const AboutComponent = () => {
  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="py-20 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-800 dark:to-gray-800"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="flex items-center gap-2 mb-8">
            <User className="text-gray-900 dark:text-white" size={24} />
            <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
              Acerca de mí
            </h2>
          </div>
          <div className="flex justify-center mb-8">
            <img
              src="https://avatars.githubusercontent.com/u/3602747?v=4"
              alt="Profile"
              className="w-32 h-32 rounded-full shadow-lg"
            />
          </div>
          <p className="text-gray-600 dark:text-gray-300 leading-relaxed">
            Soy un desarrollador Full Stack apasionado con más de 10 años de
            experiencia en la creación de soluciones web innovadoras y
            escalables. Especializado en React, TypeScript y tecnologías web
            modernas, me dedico a diseñar interfaces limpias, eficientes y
            fáciles de usar que proporcionen experiencias de usuario
            excepcionales.
          </p>
        </div>
      </section>
    </>
  );
};

export default AboutComponent;
