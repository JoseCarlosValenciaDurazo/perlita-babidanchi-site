import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function MoreThanMine() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          More Than a Mine, a Strategic Resource
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="grid grid-cols-1 gap-8">
            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {t('nav.language') === 'es' ? 'Misión' : 'Mission'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.mission')}
                </p>
              </CardContent>
            </Card>

            <Card className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                  {t('nav.language') === 'es' ? 'Visión' : 'Vision'}
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  {t('about.vision')}
                </p>
              </CardContent>
            </Card>
          </div>
          <div className="relative h-full min-h-[400px] rounded-lg overflow-hidden">
            <img
              src="/images/Perlita.jpg"
              alt="Perlite Mining"
              className="absolute inset-0 w-full h-full object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
