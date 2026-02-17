import { Github, Linkedin, Youtube } from "lucide-react";
import { Toaster } from "react-hot-toast";
//import { copyToClipboard } from "../helpers/copyToClipboard";
import { motion } from "framer-motion";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqedbnva");

  if (state.succeeded) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        className="p-6 rounded-xl bg-green-50 dark:bg-green-900/20 text-green-700 dark:text-green-300 text-center"
      >
        <h3 className="text-lg font-semibold mb-2">¡Mensaje enviado! 🎉</h3>
        <p>Gracias por contactarme. Te responderé pronto.</p>
      </motion.div>
    );
  }

  return (
    <motion.form
      onSubmit={handleSubmit}
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="max-w-xl mx-auto bg-white dark:bg-gray-900 p-6 rounded-2xl shadow-lg space-y-5"
    >
      {/* Email */}
      <div>
        <label
          htmlFor="email"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Correo electrónico
        </label>
        <input
          id="email"
          type="email"
          name="email"
          required
          placeholder="tu@email.com"
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-500 transition"
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="text-sm text-red-500 mt-1"
        />
      </div>

      {/* Message */}
      <div>
        <label
          htmlFor="message"
          className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1"
        >
          Mensaje
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          placeholder="Cuéntame sobre tu proyecto o idea..."
          className="w-full px-4 py-3 rounded-lg bg-gray-50 dark:bg-gray-800 border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-gray-900 dark:focus:ring-gray-500 transition resize-none"
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="text-sm text-red-500 mt-1"
        />
      </div>

      {/* Submit */}
      <motion.button
        type="submit"
        disabled={state.submitting}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.97 }}
        className="w-full py-3 rounded-lg bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white font-medium hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition disabled:opacity-50"
      >
        {state.submitting ? "Enviando..." : "Enviar mensaje"}
      </motion.button>
    </motion.form>
  );
}

const ContactComponent = () => {
  // const email = "";

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

  const socialLinks = [
    {
      name: "GitHub",
      icon: Github,
      href: "https://github.com/LuisSubiabre",
      color: "hover:text-gray-900 dark:hover:text-white",
    },
    {
      name: "LinkedIn",
      icon: Linkedin,
      href: "https://www.linkedin.com/in/luissubiabre/",
      color: "hover:text-blue-600 dark:hover:text-blue-400",
    },
    {
      name: "YouTube",
      icon: Youtube,
      href: "https://www.youtube.com/@LuisSubiabre/videos",
      color: "hover:text-red-600 dark:hover:text-red-400",
    },
  ];

  return (
    <>
      <Toaster position="bottom-center" reverseOrder={false} />

      <section
        id="contact"
        className="py-20 bg-gradient-to-br from-white via-gray-50 to-white dark:from-gray-900 dark:via-gray-800 dark:to-gray-900"
      >
        <motion.div
          className="max-w-4xl mx-auto px-4 text-center"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          <motion.h2
            className="text-3xl font-bold mb-4 text-gray-900 dark:text-white"
            variants={itemVariants}
          >
            Ponte en Contacto
          </motion.h2>
          <motion.p
            className="text-gray-600 dark:text-gray-300 mb-8 max-w-2xl mx-auto"
            variants={itemVariants}
          >
            ¿Tienes un proyecto en mente? No dudes en contactarme para discutir
            cómo puedo ayudarte a hacerlo realidad.
          </motion.p>

          <motion.div className="space-y-6" variants={itemVariants}>
            {/* <motion.button
              onClick={() => copyToClipboard(email)}
              className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-gray-900 to-gray-700 dark:from-gray-700 dark:to-gray-600 text-white rounded-lg hover:from-gray-800 hover:to-gray-600 dark:hover:from-gray-600 dark:hover:to-gray-500 transition-all duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Mail
                size={20}
                className="group-hover:rotate-12 transition-transform"
              />
              {email}
            </motion.button> */}

            <ContactForm />

            <div className="flex justify-center gap-6 mt-8">
              {socialLinks.map((link) => (
                <motion.a
                  key={link.name}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`text-gray-600 dark:text-gray-400 transition-colors ${link.color}`}
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  variants={itemVariants}
                >
                  <link.icon size={24} />
                  <span className="sr-only">{link.name}</span>
                </motion.a>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </section>
    </>
  );
};

export default ContactComponent;
