import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        investment: "Investment",
        sustainability: "Sustainability",
        contact: "Contact",
      },
      hero: {
        title: "The Mineral of the Future",
        subtitle: "Perlite Babidanchi",
        description: "Strategically located in Sonora at the US-Mexico border, with high-quality deposits and guaranteed water access A local solution for global perlite demand",
      },
      about: {
        title: "More Than a Mine, a Strategic Resource",
        history: "Located in the heart of Sonora, our family-owned perlite mine represents a unique investment opportunity in the industrial minerals sector",
        mission: "To deliver the highest-quality perlite for strategic markets, responsibly and sustainably",
        vision: "To become North America's leading sustainable perlite provider by 2030",
      },
      product: {
        title: "What is Perlite",
        description: "A versatile volcanic glass with exceptional value across multiple industries",
        uses: [
          "Construction & Building Materials",
          "Horticulture & Agriculture",
          "Industrial Filtration",
          "Insulation Products",
        ],
      },
      investment: {
        title: "Why Invest in Mina Babidanchi",
        deposits: {
          title: "Two Certified Deposits",
          description: "Premium quality perlite deposits with proven reserves",
        },
        location: {
          title: "Strategic Location",
          description: "3 hours from the US border, enabling fast logistics and reduced costs",
        },
        water: {
          title: "Guaranteed Water Access",
          description: "The only mine in the region with a perennial river and active permits",
        },
        market: {
          price: "Current perlite price: $85 USD/ton",
          imports: "80% of US perlite is imported from Greece and Turkey",
        },
      },
      sustainability: {
        title: "Commitment to the Future",
        points: [
          "Low-impact extraction technology",
          "Investment in Sonora's community development programs",
        ],
      },
      contact: {
        title: "Let's Talk Opportunities",
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully",
        error: "Error sending message Please try again",
      },
    },
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        investment: "Inversión",
        sustainability: "Sustentabilidad",
        contact: "Contacto",
      },
      hero: {
        title: "El Mineral del Futuro",
        subtitle: "Perlita Babidanchi",
        description: "Estratégicamente ubicada en Sonora en la frontera México-EE.UU, con depósitos de alta calidad y acceso garantizado al agua Una solución local para la demanda global de perlita",
      },
      about: {
        title: "Más que una Mina, un Recurso Estratégico",
        history: "Ubicada en el corazón de Sonora, nuestra mina familiar de perlita representa una oportunidad única de inversión en el sector de minerales industriales",
        mission: "Entregar perlita de la más alta calidad para mercados estratégicos, de manera responsable y sostenible",
        vision: "Convertirnos en el principal proveedor de perlita sostenible de Norteamérica para 2030",
      },
      product: {
        title: "¿Qué es la Perlita?",
        description: "Un vidrio volcánico versátil con valor excepcional en múltiples industrias",
        uses: [
          "Construcción y Materiales de Construcción",
          "Horticultura y Agricultura",
          "Filtración Industrial",
          "Productos de Aislamiento",
        ],
      },
      investment: {
        title: "¿Por qué Invertir en Mina Babidanchi?",
        deposits: {
          title: "Dos Depósitos Certificados",
          description: "Depósitos de perlita de alta calidad con reservas probadas",
        },
        location: {
          title: "Ubicación Estratégica",
          description: "A 3 horas de la frontera con EE.UU, permitiendo una logística rápida y costos reducidos",
        },
        water: {
          title: "Acceso Garantizado al Agua",
          description: "La única mina en la región con un río perenne y permisos activos",
        },
        market: {
          price: "Precio actual de la perlita: $85 USD/ton",
          imports: "El 80% de la perlita de EE.UU se importa de Grecia y Turquía",
        },
      },
      sustainability: {
        title: "Compromiso con el Futuro",
        points: [
          "Tecnología de extracción de bajo impacto",
          "Inversión en programas de desarrollo comunitario de Sonora",
        ],
      },
      contact: {
        title: "Hablemos de Oportunidades",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        company: "Nombre de la Empresa",
        message: "Su Mensaje",
        submit: "Enviar Mensaje",
        success: "Mensaje enviado exitosamente",
        error: "Error al enviar mensaje Intente nuevamente",
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