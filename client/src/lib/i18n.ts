import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        home: "Home",
        about: "About",
        product: "Product",
        investment: "Investment",
        deposits: "Deposits",
        contact: "Contact",
        language: "en"
      },
      hero: {
        title: "The Mineral of the Future",
        subtitle: "Perlite Babidanchi",
        description: "Strategically located in Sonora at the US-Mexico border, with high-quality deposits and guaranteed water access A local solution for global perlite demand"
      },
      about: {
        title: "More Than a Mine, a Strategic Resource",
        history: "Located in the heart of Sonora, our family-owned perlite mine represents a unique investment opportunity in the industrial minerals sector",
        mission: "To deliver the highest-quality perlite for strategic markets, responsibly and sustainably",
        vision: "To become North America's leading sustainable perlite provider by 2030"
      },
      product: {
        title: "What is Perlite",
        description: "A versatile volcanic glass with exceptional value across multiple industries",
        uses: [
          "Construction & Building Materials",
          "Horticulture & Agriculture",
          "Industrial Filtration",
          "Insulation Products"
        ]
      },
      deposits: {
        title: "Our Deposits",
        description: "Two premium perlite deposits with proven reserves",
        selene: {
          title: "Selene Deposit",
          description: "Our primary deposit with high-quality perlite reserves"
        },
        bendicion: {
          title: "La Bendición Deposit",
          description: "Our second deposit demonstrating rich mineral resources"
        }
      },
      investment: {
        title: "Why Invest in Mina Babidanchi",
        subtitle: "The Local Solution to America's Perlite Dependency",
        perlite_gap: {
          title: "The Growing U.S. Perlite Gap",
          table_headers: {
            problem: "Problem",
            solution: "Our Solution"
          },
          problem1: "U.S. imports 93% of perlite from distant countries (USGS, 2024)",
          solution1: "We solve the distance problem: Strategic reserves + cross-border proximity = faster U.S. access",
          problem2: "U.S. production ↓15% since 2020",
          solution2: "Two massive deposits (50M+ ton reserves)"
        },
        stats: {
          title: "U.S. Key Statistics (2020-2024)",
          headers: {
            metric: "Metric",
            y2020: "2020",
            y2024: "2024",
            trend: "Trend"
          },
          rows: {
            production: {
              label: "Mine production (tons)",
              y2020: "853,000",
              y2024: "690,000",
              trend: "↓ Decrease"
            },
            imports: {
              label: "Imports (tons)",
              y2020: "160,000",
              y2024: "180,000",
              trend: "↑ Increase"
            },
            price: {
              label: "Average price (USD/ton)",
              y2020: "$61",
              y2024: "$75",
              trend: "↑ +23%"
            },
            dependency: {
              label: "Import dependency",
              y2020: "21%",
              y2024: "26%",
              trend: "↑ Higher dependency"
            }
          },
          source: "External suppliers: 93% of imports come from Greece, 4% from China (USGS, 2024)"
        },
        deposits: {
          title: "Two Certified Deposits",
          description: "Premium quality perlite deposits with proven reserves"
        },
        location: {
          title: "Strategic Location",
          description: "3 hours from the US border, enabling fast logistics and reduced costs"
        },
        water: {
          title: "Guaranteed Water Access",
          description: "The only mine in the region with a perennial river and active permits"
        },
        highlight: "Join the shift: Supply America's perlite demand from Mexico's most strategic mine.",
        source: "Data source: U.S. Geological Survey (USGS) Mineral Commodity Summaries, 2024",
        strategic_advantage: {
          title: "Strategic Advantage",
          description: "📍 Near the U.S. border | 🚚 Rapid deliveries | ⏳ No ocean freight delays"
        }
      },
      sustainability: {
        title: "Commitment to the Future",
        points: [
          "Low-impact extraction technology",
          "Investment in Sonora's community development programs"
        ]
      },
      contact: {
        title: "Let's Talk Opportunities",
        name: "Full Name",
        email: "Email Address",
        company: "Company Name",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully",
        error: "Error sending message Please try again"
      }
    }
  },
  es: {
    translation: {
      nav: {
        home: "Inicio",
        about: "Nosotros",
        product: "Producto",
        investment: "Inversión",
        deposits: "Depósitos",
        contact: "Contacto",
        language: "es"
      },
      hero: {
        title: "El Mineral del Futuro",
        subtitle: "Perlita Babidanchi",
        description: "Estratégicamente ubicada en Sonora en la frontera México-EE.UU, con depósitos de alta calidad y acceso garantizado al agua Una solución local para la demanda global de perlita"
      },
      about: {
        title: "Más que una Mina, un Recurso Estratégico",
        history: "Ubicada en el corazón de Sonora, nuestra mina familiar de perlita representa una oportunidad única de inversión en el sector de minerales industriales",
        mission: "Entregar perlita de la más alta calidad para mercados estratégicos, de manera responsable y sostenible",
        vision: "Convertirnos en el principal proveedor de perlita sostenible de Norteamérica para 2030"
      },
      product: {
        title: "¿Qué es la Perlita?",
        description: "Un vidrio volcánico versátil con valor excepcional en múltiples industrias",
        uses: [
          "Construcción y Materiales de Construcción",
          "Horticultura y Agricultura",
          "Filtración Industrial",
          "Productos de Aislamiento"
        ]
      },
      deposits: {
        title: "Nuestros Depósitos",
        description: "Dos depósitos de perlita premium con reservas probadas",
        selene: {
          title: "Depósito Selene",
          description: "Nuestro depósito principal con reservas de perlita de alta calidad"
        },
        bendicion: {
          title: "Depósito La Bendición",
          description: "Nuestro segundo depósito que demuestra ricos recursos minerales"
        }
      },
      investment: {
        title: "¿Por qué Invertir en Mina Babidanchi?",
        subtitle: "La Solución Local para la Dependencia de Perlita en América",
        perlite_gap: {
          title: "La Creciente Brecha de Perlita en EE.UU.",
          table_headers: {
            problem: "Problema",
            solution: "Nuestra Solución"
          },
          problem1: "EE.UU. importa el 93% de perlita de países lejanos (USGS, 2024)",
          solution1: "Resolvemos el problema de la distancia: Reservas estratégicas + proximidad fronteriza = acceso más rápido a EE.UU.",
          problem2: "Producción de EE.UU. ↓15% desde 2020",
          solution2: "Dos depósitos masivos (reservas de 50M+ toneladas)"
        },
        stats: {
          title: "Estadísticas Clave de EE.UU. (2020-2024)",
          headers: {
            metric: "Concepto",
            y2020: "2020",
            y2024: "2024",
            trend: "Tendencia"
          },
          rows: {
            production: {
              label: "Producción minera (ton)",
              y2020: "853,000",
              y2024: "690,000",
              trend: "↓ Reducción"
            },
            imports: {
              label: "Importaciones (ton)",
              y2020: "160,000",
              y2024: "180,000",
              trend: "↑ Aumento"
            },
            price: {
              label: "Precio promedio (USD/ton)",
              y2020: "$61",
              y2024: "$75",
              trend: "↑ +23%"
            },
            dependency: {
              label: "Dependencia de importaciones",
              y2020: "21%",
              y2024: "26%",
              trend: "↑ Mayor dependencia"
            }
          },
          source: "Proveedores externos: 93% de las importaciones vienen de Grecia, 4% de China (USGS, 2024)"
        },
        deposits: {
          title: "Dos Depósitos Certificados",
          description: "Depósitos de perlita de alta calidad con reservas probadas"
        },
        location: {
          title: "Ubicación Estratégica",
          description: "A 3 horas de la frontera con EE.UU, permitiendo una logística rápida y costos reducidos"
        },
        water: {
          title: "Acceso Garantizado al Agua",
          description: "La única mina en la región con un río perenne y permisos activos"
        },
        highlight: "Únete al cambio: Suministra la demanda de perlita de América desde la mina más estratégica de México.",
        source: "Fuente de datos: Resumen de Productos Minerales del Servicio Geológico de EE.UU. (USGS), 2024",
        strategic_advantage: {
          title: "Ventaja Estratégica",
          description: "📍 Cerca de la frontera EE.UU. | 🚚 Entregas rápidas | ⏳ Sin retrasos de flete marítimo"
        }
      },
      sustainability: {
        title: "Compromiso con el Futuro",
        points: [
          "Tecnología de extracción de bajo impacto",
          "Inversión en programas de desarrollo comunitario de Sonora"
        ]
      },
      contact: {
        title: "Hablemos de Oportunidades",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        company: "Nombre de la Empresa",
        message: "Su Mensaje",
        submit: "Enviar Mensaje",
        success: "Mensaje enviado exitosamente",
        error: "Error al enviar mensaje Intente nuevamente"
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    interpolation: {
      escapeValue: false
    }
  });

export default i18n;