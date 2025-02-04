import { Mail } from "lucide-react";
import { Toaster } from "react-hot-toast";
import { copyToClipboard } from "../helpers/copyToClipboard"; // Asegúrate de que la ruta es correcta

const ContactComponent = () => {
  const email = "contacto@luissubiabre.dev";

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <section className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-2xl font-bold mb-8 text-gray-900 dark:text-white">
            Ponte en Contacto
          </h2>
          <button
            onClick={() => copyToClipboard(email)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
          >
            <Mail size={20} />
            {email}
          </button>
        </div>
      </section>
    </>
  );
};

export default ContactComponent;
