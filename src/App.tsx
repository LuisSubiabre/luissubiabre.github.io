import AboutComponent from "./components/AboutComponent.tsx";
import HeroComponent from "./components/HeroComponent.tsx";
import ProjectsComponent from "./components/ProjectsComponent.tsx";
import SkillsComponent from "./components/SkillsComponent.tsx";
import ContactComponent from "./components/ContactComponent.tsx";
import NavbarComponent from "./components/NavbarComponent.tsx";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-white via-gray-50 to-gray-100 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 transition-colors duration-200">
      <NavbarComponent />
      <HeroComponent />
      <AboutComponent />
      <ProjectsComponent />
      <SkillsComponent />
      <ContactComponent />
      {/* Footer */}
      <footer className="py-8 bg-gradient-to-br from-gray-50 via-white to-gray-50 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
        <div className="max-w-4xl mx-auto px-4 text-center text-gray-600 dark:text-gray-300">
          <p>© {new Date().getFullYear()} Luis Subiabe Salviat</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
