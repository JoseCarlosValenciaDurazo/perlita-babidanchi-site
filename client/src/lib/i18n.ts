import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        about: "About Us",
        deposits: "Deposits",
        product: "Our Product",
        invest: "Invest",
        contact: "Contact",
      },
      hero: {
        title: "Perlite Babidanchi",
        subtitle: "Premium Perlite Mining Investment Opportunity",
        cta: "Learn More",
      },
      about: {
        title: "About Us",
        description: "Located in the heart of Sonora, Mexico, our family-owned perlite mine represents a unique investment opportunity in the industrial minerals sector. With vast reserves of high-quality perlite and strategic location, we're positioned for significant growth in the North American market.",
      },
      deposits: {
        title: "Our Deposits",
        description: "We proudly own two premium perlite deposits in our ranch:",
        selene: {
          title: "Selene Deposit",
          description: "Our primary deposit showcasing high-quality perlite reserves in a pristine natural setting."
        },
        bendicion: {
          title: "La Bendición Deposit",
          description: "Our second high-quality perlite deposit, demonstrating the rich mineral resources of our ranch."
        }
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
        deposits: "Depósitos",
        product: "Nuestro Producto",
        invest: "Invertir",
        contact: "Contacto",
      },
      hero: {
        title: "Perlita Babidanchi",
        subtitle: "Oportunidad de Inversión en Minería de Perlita Premium",
        cta: "Conoce Más",
      },
      about: {
        title: "Sobre Nosotros",
        description: "Ubicada en el corazón de Sonora, México, nuestra mina familiar de perlita representa una oportunidad única de inversión en el sector de minerales industriales. Con vastas reservas de perlita de alta calidad y ubicación estratégica, estamos posicionados para un crecimiento significativo en el mercado norteamericano.",
      },
      deposits: {
        title: "Nuestros Depósitos",
        description: "Orgullosamente contamos con dos depósitos de perlita premium en nuestro rancho:",
        selene: {
          title: "Depósito Selene",
          description: "Nuestro depósito principal que muestra reservas de perlita de alta calidad en un entorno natural prístino."
        },
        bendicion: {
          title: "Depósito La Bendición",
          description: "Nuestro segundo depósito de perlita de alta calidad, que demuestra los ricos recursos minerales de nuestro rancho."
        }
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