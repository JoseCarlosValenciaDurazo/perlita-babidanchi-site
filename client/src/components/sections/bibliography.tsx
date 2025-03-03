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
  const [selectedPdf, setSelectedPdf] = useState<Reference | null>(null);

  const references: Reference[] = [
    {
      title: "U.S. Geological Survey",
      description: "Mineral Commodity Summaries 2024: Perlite",
      link: "https://www.usgs.gov/",
      pdfUrl: "/pdfs/USGS 2024 Perlite .pdf",
      pdfDescription: "USGS Mineral Commodity Summaries 2024 - Perlite Section"
    },
    {
      title: "Perlite Institute",
      description: "Technical data and industry standards for perlite applications",
      link: "https://www.perlite.org/",
      pdfUrl: "/pdfs/perlite-technical-data.pdf",
      pdfDescription: "Perlite Technical Standards and Applications Guide"
    },
    {
      title: "Mexican Geological Survey",
      description: "Geological studies and mineral resources of Sonora",
      link: "https://www.gob.mx/sgm",
      pdfUrl: "/pdfs/sonora-geological-report.pdf",
      pdfDescription: "Sonora Region Geological Survey Report"
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
              <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <LinkIcon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                        {ref.title}
                      </h3>
                      <p className="text-gray-900 mb-4"> {/* Changed to text-gray-900 */}
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
                              onClick={() => setSelectedPdf(ref)}
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

      {selectedPdf && (
        <PDFPreviewModal
          isOpen={true}
          onClose={() => setSelectedPdf(null)}
          pdfUrl={selectedPdf.pdfUrl!}
          title={selectedPdf.title}
          description={selectedPdf.pdfDescription}
        />
      )}
    </section>
  );
}