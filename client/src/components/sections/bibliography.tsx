import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { FileText } from "lucide-react";

export default function Bibliography() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-12">
          {t('nav.bibliography')}
        </h2>
        <div className="max-w-4xl mx-auto">
          <Card className="transform transition-all duration-300 hover:scale-[1.02] hover:shadow-lg bg-white">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <div className="flex-shrink-0 mt-1">
                  <FileText className="h-5 w-5 text-primary" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    U.S. Geological Survey
                  </h3>
                  <p className="text-gray-900 mb-4">
                    Mineral Commodity Summaries 2024: Perlite
                  </p>
                  <div className="flex items-center gap-4">
                    <a
                      href="https://www.usgs.gov/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-200 hover:underline"
                    >
                      Visit Source
                    </a>
                    <button
                      onClick={() => window.open("attached_assets/USGS 2024 Perlite .pdf", '_blank')}
                      className="text-primary hover:text-primary/80 font-medium flex items-center gap-2 transition-colors duration-200 hover:underline"
                    >
                      View PDF
                      <FileText className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}