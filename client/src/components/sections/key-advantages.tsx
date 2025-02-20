import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Database, MapPin, Droplets } from "lucide-react";

export default function KeyAdvantages() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h3 className="text-3xl font-semibold text-center mb-12 text-gray-900">
          Key Advantages of Babidanchi Perlite
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Database className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.deposits.title')}
                </h4>
                <p className="text-gray-700">
                  {t('investment.deposits.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <MapPin className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.location.title')}
                </h4>
                <p className="text-gray-700">
                  {t('investment.location.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Droplets className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('investment.water.title')}
                </h4>
                <p className="text-gray-700">
                  {t('investment.water.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
