import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { Globe } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function LanguageToggle() {
  const { i18n } = useTranslation();

  const toggleLanguage = () => {
    const newLang = i18n.language === "en" ? "es" : "en";
    i18n.changeLanguage(newLang);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLanguage}
      className="flex items-center gap-2 relative overflow-hidden text-gray-700 hover:text-gray-900"
    >
      <motion.div
        initial={{ rotate: 0 }}
        animate={{ rotate: i18n.language === "en" ? 0 : 180 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      >
        <Globe className="h-4 w-4" />
      </motion.div>

      <AnimatePresence mode="wait">
        <motion.span
          key={i18n.language}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.3, ease: "easeInOut" }}
          className="inline-block font-medium"
        >
          {i18n.language.toUpperCase()}
        </motion.span>
      </AnimatePresence>
    </Button>
  );
}