import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="border-0 shadow-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <p className="text-gray-700 leading-relaxed">
                  {t('about.history')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {t('nav.language') === 'es' ? 'Misión' : 'Mission'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.mission')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="border-0 shadow-sm">
            <CardContent className="pt-8">
              <div className="text-center">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {t('nav.language') === 'es' ? 'Visión' : 'Vision'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.vision')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}