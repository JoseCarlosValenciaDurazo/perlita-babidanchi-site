import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Bibliography() {
  const { t } = useTranslation();

  const references = [
    {
      title: "U.S. Geological Survey",
      description: "Mineral Commodity Summaries 2024: Perlite",
      link: "https://www.usgs.gov/"
    },
    {
      title: "Perlite Institute",
      description: "Technical data and industry standards for perlite applications",
      link: "https://www.perlite.org/"
    },
    {
      title: "Mexican Geological Survey",
      description: "Geological studies and mineral resources of Sonora",
      link: "https://www.gob.mx/sgm"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Bibliography
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {references.map((ref, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {ref.title}
                  </h3>
                  <p className="text-gray-700 mb-4">
                    {ref.description}
                  </p>
                  <a
                    href={ref.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary hover:text-primary/80"
                  >
                    Visit Source
                  </a>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
