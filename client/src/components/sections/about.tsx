import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          {t('about.title')}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <p className="text-gray-700">
                  {t('about.history')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Mission
                </h3>
                <p className="text-gray-700">
                  {t('about.mission')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h3 className="text-xl font-semibold mb-4 text-gray-900">
                  Vision
                </h3>
                <p className="text-gray-700">
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