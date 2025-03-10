import { useState } from "react";
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";
import { Separator } from "@/components/ui/separator";
import PDFPreviewModal from "./pdf-preview-modal";

interface Reference {
  title: string;
  description: string;
  pdfUrl?: string;
  pdfDescription?: string;
  references?: { title: string; pdfUrl: string }[];
}

export default function Bibliography() {
  const { t } = useTranslation();
  const [selectedPdf, setSelectedPdf] = useState<string | null>(null);
  const [pdfError, setPdfError] = useState<string | null>(null);

  const references: Reference[] = [
    {
      title: "Babidanchi Perlite Studies",
      description: t('bibliography.babidanchi.description'),
      references: [
        {
          title: "Geología de los depositos de perlita de Huachinera, Sonora, Mexico",
          pdfUrl: "/assets/Geologia de los depositos de perlita de Huachinera, Sonora, Mexico.pdf"
        },
        {
          title: "Geology of the Selene perlite deposit Sonora, Mexico",
          pdfUrl: "/assets/Geology of the Selene perlite deposit Sonora, Mexico.pdf"
        },
        {
          title: "Informe proyecto Perlita Babidanchi 2016",
          pdfUrl: "/assets/Informe proyecto Perlita Babidanchi 2016.pdf"
        },
        {
          title: "Ratificación de firmas y contenidos de tesis",
          pdfUrl: "/assets/Ratificacion de firmas y contenidos de tesis.pdf"
        },
        {
          title: "Tesis Lic. Geol. Emmanuel Melgarejo Joris",
          pdfUrl: "/assets/Tesis Lic. Geol. Emmanuel Melgarejo Joris.pdf"
        }
      ].sort((a, b) => a.title.localeCompare(b.title))
    }
  ];

  const handlePdfClick = (pdfUrl: string) => {
    try {
      setPdfError(null);
      const cleanUrl = pdfUrl;
      const encodedUrl = cleanUrl.split('/').map(part => encodeURIComponent(part)).join('/');
      console.log('Opening PDF:', encodedUrl);
      setSelectedPdf(encodedUrl);
    } catch (error) {
      console.error('Error handling PDF:', error);
      setPdfError(t('bibliography.pdf_error'));
    }
  };

  return (
    <section id="bibliography" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          {t('nav.bibliography')}
        </h2>
        {pdfError && (
          <div className="max-w-4xl mx-auto mb-6 p-4 bg-red-100 text-red-700 rounded-md">
            {pdfError}
          </div>
        )}
        <div className="max-w-4xl mx-auto">
          {references.map((ref, index) => (
            <div key={index} className="mb-6">
              <Card className="bg-white shadow-lg">
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="flex-shrink-0 mt-1">
                      <FileText className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex-grow">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        {ref.title}
                      </h3>
                      <p className="text-gray-700 mb-4">
                        {ref.description}
                      </p>
                      {ref.references && (
                        <div className="mt-6 pl-4 border-l-2 border-gray-200">
                          {ref.references.map((study, studyIndex) => (
                            <div key={studyIndex} className="mb-4">
                              <div className="flex items-center gap-4">
                                <FileText className="h-4 w-4 text-primary" />
                                <button
                                  onClick={() => handlePdfClick(study.pdfUrl)}
                                  className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-200 hover:underline"
                                >
                                  {study.title}
                                </button>
                              </div>
                            </div>
                          ))}
                        </div>
                      )}
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
        onClose={() => {
          setSelectedPdf(null);
          setPdfError(null);
        }}
        url={selectedPdf || ''}
      />
    </section>
  );
}