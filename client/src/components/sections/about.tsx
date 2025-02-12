import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('about.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="/images/perlite-mine.jpg"
              alt="Mining Operations"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
          <div className="space-y-8">
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed mb-6">
                  {t('about.history')}
                </p>
              </CardContent>
            </Card>

            <div className="grid grid-cols-1 gap-6">
              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Mission
                  </h3>
                  <p className="text-gray-700">
                    {t('about.mission')}
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="pt-6">
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    Vision
                  </h3>
                  <p className="text-gray-700">
                    {t('about.vision')}
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}