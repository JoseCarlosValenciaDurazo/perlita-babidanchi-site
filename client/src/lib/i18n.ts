import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Us",
        product: "Our Product",
        invest: "Invest",
        contact: "Contact",
      },
      hero: {
        title: "Sonora Perlite Mine",
        subtitle: "Premium Perlite Mining Investment Opportunity",
        cta: "Learn More",
      },
      about: {
        title: "About Us",
        description: "Located in the heart of Sonora, Mexico, our family-owned perlite mine represents a unique investment opportunity in the industrial minerals sector. With vast reserves of high-quality perlite and strategic location, we're positioned for significant growth in the North American market.",
      },
      product: {
        title: "What is Perlite?",
        description: "Perlite is a versatile volcanic glass with exceptional value across multiple industries:",
        uses: [
          "Construction & Building Materials",
          "Horticulture & Agriculture",
          "Industrial Filtration",
          "Insulation Products",
        ],
      },
      investment: {
        title: "Investment Opportunity",
        description: "Join us in developing this promising perlite mining operation:",
        points: [
          "Strategic Location in Sonora",
          "Vast Mineral Reserves",
          "Growing Market Demand",
          "Export Potential",
        ],
        cta: "Contact Us for Investment Details",
      },
      contact: {
        title: "Contact Us",
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully!",
        error: "Error sending message. Please try again.",
      },
    },
  },
  es: {
    translation: {
      nav: {
        about: "Nosotros",
        product: "Nuestro Producto",
        invest: "Invertir",
        contact: "Contacto",
      },
      hero: {
        title: "Mina de Perlita Sonora",
        subtitle: "Oportunidad de Inversión en Minería de Perlita Premium",
        cta: "Conoce Más",
      },
      about: {
        title: "Sobre Nosotros",
        description: "Ubicada en el corazón de Sonora, México, nuestra mina familiar de perlita representa una oportunidad única de inversión en el sector de minerales industriales. Con vastas reservas de perlita de alta calidad y ubicación estratégica, estamos posicionados para un crecimiento significativo en el mercado norteamericano.",
      },
      product: {
        title: "¿Qué es la Perlita?",
        description: "La perlita es un vidrio volcánico versátil con valor excepcional en múltiples industrias:",
        uses: [
          "Construcción y Materiales de Construcción",
          "Horticultura y Agricultura",
          "Filtración Industrial",
          "Productos de Aislamiento",
        ],
      },
      investment: {
        title: "Oportunidad de Inversión",
        description: "Únase a nosotros en el desarrollo de esta prometedora operación minera de perlita:",
        points: [
          "Ubicación Estratégica en Sonora",
          "Vastas Reservas Minerales",
          "Demanda Creciente del Mercado",
          "Potencial de Exportación",
        ],
        cta: "Contáctenos para Detalles de Inversión",
      },
      contact: {
        title: "Contáctenos",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        company: "Nombre de la Empresa",
        message: "Su Mensaje",
        submit: "Enviar Mensaje",
        success: "¡Mensaje enviado exitosamente!",
        error: "Error al enviar mensaje. Por favor intente nuevamente.",
      },
    },
  },
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false,
    },
  });

export default i18n;
