import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { FileText, Link as LinkIcon } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PDFPreviewModal from "./pdf-preview-modal";

interface Reference {
  title: string;
  description: string;
  link: string;
  pdfUrl?: string;
  pdfDescription?: string;
}

export default function Bibliography() {
  const { t } = useTranslation();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);

  const references: Reference[] = [
    {
      title: "U.S. Geological Survey",
      description: "The USGS is a scientific agency dedicated to researching and providing data on natural resources, including minerals like perlite, to support informed decision-making and sustainable development.",
      link: "https://www.usgs.gov/",
      pdfUrl: "/pdfs/USGS-2024-Perlite.pdf",
      pdfDescription: "USGS Mineral Commodity Summaries 2024 - Perlite Section"
    },
    {
      title: "Perlite Institute",
      description: "The Perlite Institute is an organization dedicated to the research, promotion, and development of perlite applications, a volcanic mineral widely used in industries such as construction, agriculture, and filtration.",
      link: "https://www.perlite.org/"
    },
    {
      title: "Babidachi Pearlite Studies",
      description: "The following studies were conducted by Perlita Babidanchi:",
      link: "https://www.gob.mx/sgm"
    }
  ];

  return (
    <section id="bibliography" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          {t('nav.bibliography')}
        </h2>
        <div className="max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <div key={index} className="mb-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      {ref.pdfUrl ? <FileText className="h-5 w-5 text-primary" /> : <LinkIcon className="h-5 w-5 text-primary" />}
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {ref.title}
                      </h3>
                      <p className="text-gray-900 mb-4">
                        {ref.description}
                      </p>
                      <div className="flex items-center gap-4">
                        <a
                          href={ref.link}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-200 hover:underline"
                        >
                          Visit Source
                          <LinkIcon className="h-4 w-4" />
                        </a>
                        {ref.pdfUrl && (
                          <>
                            <Separator orientation="vertical" className="h-4" />
                            <button
                              onClick={() => setSelectedPdf(ref.pdfUrl)}
                              className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-200 hover:underline"
                            >
                              View PDF
                              <FileText className="h-4 w-4" />
                            </button>
                          </>
                        )}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          ))}
        </div>
      </div>

      <PDFPreviewModal
        isOpen={!!selectedPdf}
        onClose={() => setSelectedPdf(null)}
        url={selectedPdf || ''}
      />
    </section>
  );
}