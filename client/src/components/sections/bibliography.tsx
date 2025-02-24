import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Link as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export default function Bibliography() {
  const { t } = useTranslation();

  const references = [
    {
      title: "U.S. Geological Survey",
      description: "Mineral Commodity Summaries 2024: Perlite",
      link: "https://www.usgs.gov/",
      // pdfUrl: "", // For future PDF attachments
      // pdfDescription: "", // For future PDF descriptions
    },
    {
      title: "Perlite Institute",
      description: "Technical data and industry standards for perlite applications",
      link: "https://www.perlite.org/",
    },
    {
      title: "Mexican Geological Survey",
      description: "Geological studies and mineral resources of Sonora",
      link: "https://www.gob.mx/sgm",
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Bibliography
        </h2>
        <div className="max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <div key={index} className="mb-6">
              <Card className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <LinkIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {ref.title}
                      </h3>
                      <p className="text-gray-600 mb-4">
                        {ref.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
                        >
                          Visit Source
                          <LinkIcon className="h-4 w-4" />
                        </a>
                        {/* Placeholder for future PDF link */}
                        {/*
                        {ref.pdfUrl && (
                          <>
                            <Separator orientation="vertical" className="h-4" />
                            <a
                              href={ref.pdfUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2"
                            >
                              View PDF
                              <FileText className="h-4 w-4" />
                            </a>
                          </>
                        )}
                        */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}