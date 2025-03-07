import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      nav: {
        who_we_are: "Who We Are",
        location: "Our Location",
        strategic_resource: "More Than a Mine",
        what_is_perlite: "What is Perlite",
        mineral_future: "Mineral of the Future",
        investment: "Why Invest",
        key_advantages: "Key Advantages",
        strategic_delivery: "Strategic Delivery",
        deposits: "Deposits",
        bibliography: "Bibliography",
        gallery: "Our Gallery",
        contact: "Contact Us",
        language: "en"
      },
      hero: {
        title: "The Mineral of the Future",
        subtitle: "Perlite Babidanchi",
        description: "Strategically located in Sonora at the US-Mexico border, with high-quality deposits and guaranteed water access. A local solution for global perlite demand"
      },
      main_uses: {
        header: {
          title: "PERLITE",
          subtitle: "THE MINERAL OF THE FUTURE"
        },
        uses: {
          construction: {
            title: "Construction",
            description: "Used in lightweight construction materials, insulation, and plasters for improved thermal efficiency."
          },
          agriculture: {
            title: "Agriculture",
            description: "Enhances soil aeration and water retention in horticultural applications."
          },
          filtration: {
            title: "Filtration",
            description: "Essential in industrial filtration processes for beverages and pharmaceuticals."
          },
          insulation: {
            title: "Insulation",
            description: "Provides excellent thermal and acoustic insulation properties."
          },
          industrial: {
            title: "Industrial",
            description: "Used in various industrial applications including foundry and cryogenic systems."
          },
          innovation: {
            title: "Innovation",
            description: "Emerging applications in sustainable technologies and green building materials."
          }
        }
      },
      about: {
        title: "More Than a Mine: A Strategic Resource",
        who_we_are: {
          title: "Who We Are",
          description: "We are a Sonora based company that emerged from identifying a business opportunity for our family, who owns and operates Rancho Babidanchi. This land is home to two significant perlite deposits of high quality, located close to each other, with enormous resource potential to become a leader in North America."
        },
        history: "Located in the heart of Sonora, our family-owned perlite mine represents a unique investment opportunity in the industrial minerals sector",
        mission: "Produce the highest-quality perlite for strategic markets, responsibly and sustainably",
        vision: "To become a leading global supplier of premium perlite, delivering high-quality products and sustainable solutions to meet the diverse needs of our clients worldwide"
      },
      location: {
        title: "Location",
        description: "Perlita Babidanchi is conveniently located just 10 kilometers from the town of Aribabi, belonging to the municipality of Huachinera in the state of Sonora, Mexico."
      },
      product: {
        title: "What is Perlite?",
        description: "A versatile volcanic glass with exceptional value across multiple industries",
        uses: [
          "Construction & Building Materials",
          "Horticulture & Agriculture",
          "Industrial Filtration",
          "Insulation Products"
        ],
        definition: {
          title: "Definition",
          description: "Perlite is a volcanic mineral belonging to the family of amorphous siliceous glass. It forms when silica-rich lava cools rapidly, trapping small amounts of water within its vitreous structure. Its name comes from its physical appearance, as unexpanded particles often exhibit concentric fractures that resemble pearls."
        },
        expansion: {
          title: "Expansion Process",
          description: "Raw perlite (in its natural state) contains between 2% and 5% water. When heated to temperatures between 760°C and 1,100°C, the trapped water vaporizes, causing the mineral to expand up to 20 times its original volume. This process creates a porous, ultra-lightweight, and white material with unique properties."
        },
        properties: {
          density: {
            title: "Low Density",
            description: "It weighs only between 32 kg/m³ and 240 kg/m³ (depending on the degree of expansion)."
          },
          fire: {
            title: "Fire Resistance",
            description: "It is non-flammable and withstands extreme temperatures."
          },
          insulation: {
            title: "Insulation",
            description: "Its cellular structure retains air, reducing heat and sound transfer."
          },
          inert: {
            title: "Inert & Sterile",
            description: "It is chemically non-reactive, pH-neutral, and free of pathogens."
          }
        }
      },
      deposits: {
        title: "Deposits",
        description: "2 Premium Quality Perlite deposits with abundant reserves",
        selene: {
          title: "South Deposit",
          description: "Our primary deposit with high-quality perlite reserves"
        },
        bendicion: {
          title: "North Deposit",
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
          solution2: "2 Massive deposits (more than 50M ton reserves)"
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
          }
        },
        deposits: {
          title: "2 Vast Deposits Holding Millions of Tons",
          description: "We have huge perlite deposits that would allow us to work for many years."
        },
        location: {
          title: "Strategic Location",
          description: "3 hours from the US border, enabling fast logistics and reduced costs."
        },
        water: {
          title: "Resources of Exceptional Quality",
          description: "The quality of our perlites is backed by certified laboratory documentation."
        },
        source: "Data source: U.S. Geological Survey (USGS) Mineral Commodity Summaries, 2024",
        strategic_advantage: {
          title: "Strategic Delivery Channels",
          description: "Near the U.S. border | No ocean freight delays"
        },
        market_analysis: {
          title: "Market Analysis",
          external_suppliers: "External suppliers: 93% of imports come from Greece, 4% from China (USGS, 2024)"
        },
        key_advantages: {
          title: "Key Advantages of Babidanchi Perlite"
        },
        mineral_future: {
          title: "The Mineral of the Future",
          description: "The growing importance of perlite in modern industry and sustainable development",
          versatile: {
            title: "Versatile Applications",
            description: "From construction to agriculture, perlite's unique properties make it invaluable across industries"
          },
          sustainable: {
            title: "Sustainable Solution",
            description: "Natural, environmentally friendly material that supports green building and sustainable agriculture"
          },
          demand: {
            title: "Growing Demand",
            description: "Increasing industrial applications and construction needs drive strong market growth"
          },
          strategic: {
            title: "Strategic Resource",
            description: "Essential mineral for North American industrial independence and security"
          }
        }
      },
      contact: {
        title: "Contact Us",
        name: "Full Name",
        email: "Email Address",
        message: "Your Message",
        submit: "Send Message",
        success: "Message sent successfully",
        error: "Error sending message. Please try again"
      },
      gallery: {
        title: "Our Gallery",
        description: "Discover in our image gallery the stunning perlite deposits sources that are part of our mine"
      },
      bibliography: {
        usgs: {
          description: 'The U.S. Geological Survey (USGS) is a scientific agency dedicated to researching and providing data on natural resources, including minerals like perlite, to support informed decision-making and sustainable development.',
          pdf_description: 'USGS 2024 Mineral Commodity Summary for Perlite'
        },
        perlite_institute: {
          description: 'The Perlite Institute is an organization dedicated to the research, promotion, and development of perlite applications, a volcanic mineral widely used in industries such as construction, agriculture, and filtration.'
        },
        babidanchi: {
          description: 'Collection of geological studies, research papers, and technical reports about the Babidanchi perlite deposits in Sonora, Mexico.',
          view_pdf: 'View PDF'
        },
        pdf_error: 'Error loading PDF. Please try again later.',
        website_links: {
          usgs: 'www.usgs.gov',
          perlite_institute: 'www.perlite.org'
        }
      }
    }
  },
  es: {
    translation: {
      nav: {
        who_we_are: "Quiénes Somos",
        location: "Ubicación",
        strategic_resource: "Más que una Mina",
        what_is_perlite: "¿Qué es la Perlita?",
        mineral_future: "Mineral del Futuro",
        investment: "Por qué Invertir",
        key_advantages: "Ventajas Clave",
        strategic_delivery: "Entrega Estratégica",
        deposits: "Depósitos",
        bibliography: "Bibliografía",
        gallery: "Nuestra Galería",
        contact: "Contáctenos",
        language: "es"
      },
      hero: {
        title: "El Mineral del Futuro",
        subtitle: "Perlita Babidanchi",
        description: "Estratégicamente ubicada en Sonora en la frontera México-EE.UU., con depósitos de alta calidad y acceso garantizado al agua. Una solución local para la demanda global de perlita"
      },
      main_uses: {
        header: {
          title: "PERLITA",
          subtitle: "EL MINERAL DEL FUTURO"
        },
        uses: {
          construction: {
            title: "Construcción",
            description: "Utilizado en materiales de construcción ligeros, aislamiento y yesos para mejorar la eficiencia térmica."
          },
          agriculture: {
            title: "Agricultura",
            description: "Mejora la aireación del suelo y la retención de agua en aplicaciones hortícolas."
          },
          filtration: {
            title: "Filtración",
            description: "Esencial en procesos de filtración industrial para bebidas y productos farmacéuticos."
          },
          insulation: {
            title: "Aislamiento",
            description: "Proporciona excelentes propiedades de aislamiento térmico y acústico."
          },
          industrial: {
            title: "Industrial",
            description: "Utilizado en diversas aplicaciones industriales, incluyendo fundición y sistemas criogénicos."
          },
          innovation: {
            title: "Innovación",
            description: "Aplicaciones emergentes en tecnologías sostenibles y materiales de construcción ecológicos."
          }
        }
      },
      about: {
        title: "Más que una Mina: Un Recurso Estratégico",
        who_we_are: {
          title: "Quiénes Somos",
          description: "Somos una empresa sonorense que surgió al identificar una oportunidad de negocio para nuestra familia, propietaria y operadora del Rancho Babidanchi. Esta tierra alberga dos importantes depósitos de perlita de alta calidad, ubicados cerca uno del otro, con un enorme potencial de recursos para convertirse en líder en América del Norte."
        },
        history: "Ubicada en el corazón de Sonora, nuestra mina familiar de perlita representa una oportunidad única de inversión en el sector de minerales industriales",
        mission: "Producir perlita de la más alta calidad para mercados estratégicos, de manera responsable y sostenible",
        vision: "Convertirnos en un proveedor global líder de perlita premium, entregando productos de alta calidad y soluciones sostenibles para satisfacer las diversas necesidades de nuestros clientes en todo el mundo"
      },
      location: {
        title: "Ubicación",
        description: "Perlita Babidanchi está convenientemente ubicada a solo 10 kilómetros de la localidad de Aribabi, perteneciente al municipio de Huachinera en el estado de Sonora, México."
      },
      product: {
        title: "¿Qué es la Perlita?",
        description: "Un vidrio volcánico versátil con valor excepcional en múltiples industrias",
        uses: [
          "Construcción y Materiales de Construcción",
          "Horticultura y Agricultura",
          "Filtración Industrial",
          "Productos de Aislamiento"
        ],
        definition: {
          title: "Definición",
          description: "La perlita es un mineral volcánico perteneciente a la familia del vidrio silíceo amorfo. Se forma cuando la lava rica en sílice se enfría rápidamente, atrapando pequeñas cantidades de agua dentro de su estructura vítrea. Su nombre proviene de su apariencia física, ya que las partículas no expandidas suelen exhibir fracturas concéntricas que se asemejan a perlas."
        },
        expansion: {
          title: "Proceso de Expansión",
          description: "La perlita cruda (en su estado natural) contiene entre 2% y 5% de agua. Cuando se calienta a temperaturas entre 760°C y 1,100°C, el agua atrapada se vaporiza, causando que el mineral se expanda hasta 20 veces su volumen original. Este proceso crea un material poroso, ultraligero y blanco con propiedades únicas."
        },
        properties: {
          density: {
            title: "Baja Densidad",
            description: "Pesa solo entre 32 kg/m³ y 240 kg/m³ (dependiendo del grado de expansión)."
          },
          fire: {
            title: "Resistencia al Fuego",
            description: "Es no inflamable y resiste temperaturas extremas."
          },
          insulation: {
            title: "Aislamiento",
            description: "Su estructura celular retiene el aire, reduciendo la transferencia de calor y sonido."
          },
          inert: {
            title: "Inerte y Estéril",
            description: "Es químicamente no reactivo, pH neutro y libre de patógenos."
          }
        }
      },
      deposits: {
        title: "Depósitos",
        description: "2 Depósitos de perlita de primera calidad con abundantes reservas",
        selene: {
          title: "Depósito Sur",
          description: "Nuestro depósito principal con reservas de perlita de alta calidad"
        },
        bendicion: {
          title: "Depósito Norte",
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
          solution2: "Dos depósitos masivos (reservas de más de 50M de toneladas)"
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
          }
        },
        deposits: {
          title: "2 Inmensos Depósitos con Millones de Toneladas",
          description: "Enormes depósitos de perlita que nos permitirían trabajar durante muchos años."
        },
        location: {
          title: "Ubicación Estratégica",
          description: "A 3 horas de la frontera con EE.UU., permitiendo una logística rápida y costos reducidos."
        },
        water: {
          title: "Recursos de Calidad Excepcional",
          description: "La calidad de nuestras perlitras está respaldada por documentación de laboratorios certificados."
        },
        source: "Fuente de datos: Resumen de Productos Minerales del Servicio Geológico de EE.UU. (USGS), 2024",
        strategic_advantage: {
          title: "Canales de Entrega Estratégicos",
          description: "Cerca de la frontera EE.UU. | Sin retrasos de flete marítimo"
        },
        market_analysis: {
          title: "Análisis de Mercado",
          external_suppliers: "Proveedores externos: 93% de las importaciones provienen de Grecia, 4% de China (USGS, 2024)"
        },
        key_advantages: {
          title: "Ventajas Clave de Perlita Babidanchi"
        },
        mineral_future: {
          title: "El Mineral del Futuro",
          description: "La creciente importancia de la perlita en la industria moderna y el desarrollo sostenible",
          versatile: {
            title: "Aplicaciones Versátiles",
            description: "Desde la construcción hasta la agricultura, las propiedades únicas de la perlita la hacen invaluable en múltiples industrias"
          },
          sustainable: {
            title: "Solución Sostenible",
            description: "Material natural y ecológico que apoya la construcción verde y la agricultura sostenible"
          },
          demand: {
            title: "Demanda Creciente",
            description: "El aumento de aplicaciones industriales y necesidades de construcción impulsan un fuerte crecimiento del mercado"
          },
          strategic: {
            title: "Recurso Estratégico",
            description: "Mineral esencial para la independencia industrial y la seguridad de América del Norte"
          }
        }
      },
      contact: {
        title: "Contáctenos",
        name: "Nombre Completo",
        email: "Correo Electrónico",
        message: "Su Mensaje",
        submit: "Enviar Mensaje",
        success: "Mensaje enviado exitosamente",
        error: "Error al enviar mensaje. Intente nuevamente"
      },
      gallery: {
        title: "Nuestra Galería",
        description: "Descubra en nuestra galería de imágenes las impresionantes fuentes de depósitos de perlita que forman parte de nuestra mina"
      },
      bibliography: {
        usgs: {
          description: 'El Servicio Geológico de los Estados Unidos (USGS) es una agencia científica dedicada a la investigación y provisión de datos sobre recursos naturales, incluyendo minerales como la perlita, para apoyar la toma de decisiones informada y el desarrollo sostenible.',
          pdf_description: 'Resumen de Productos Minerales USGS 2024 para Perlita'
        },
        perlite_institute: {
          description: 'El Instituto de Perlita es una organización dedicada a la investigación, promoción y desarrollo de aplicaciones de perlita, un mineral volcánico ampliamente utilizado en industrias como la construcción, agricultura y filtración.'
        },
        babidanchi: {
          description: 'Colección de estudios geológicos, trabajos de investigación e informes técnicos sobre los depósitos de perlita Babidanchi en Sonora, México.',
          view_pdf: 'Ver PDF'
        },
        pdf_error: 'Error al cargar el PDF. Por favor, inténtelo de nuevo más tarde.',
        website_links: {
          usgs: 'www.usgs.gov',
          perlite_institute: 'www.perlite.org'
        }
      }
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources,
    lng: "en",
    fallbackLng: "en",
    interpolation: {
      escapeValue: false
    },
    react: {
      useSuspense: false
    }
  });

export default i18n;