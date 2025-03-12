import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section id="who-we-are" className="relative min-h-[70vh] flex items-center justify-center bg-gray-50 py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Perlita Babidanchi
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-900">
            {t('about.who_we_are.title')}
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto bg-white shadow-lg">
          <CardContent className="pt-6">
            <p className="text-xl text-gray-900 leading-relaxed">
              {t('about.who_we_are.description')}
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}