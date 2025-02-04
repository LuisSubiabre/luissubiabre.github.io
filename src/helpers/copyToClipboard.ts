import { toast } from "react-hot-toast";

export const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Copiado al portapapeles");
  } catch (error) {
    toast.error("Error al copiar: " + error);
  }
};
