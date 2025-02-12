import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { MapPin, Droplets, Database } from "lucide-react";

export default function Investment() {
  const { t } = useTranslation();

  const investmentPoints = [
    {
      title: t('investment.deposits.title'),
      description: t('investment.deposits.description'),
      icon: Database,
    },
    {
      title: t('investment.location.title'),
      description: t('investment.location.description'),
      icon: MapPin,
    },
    {
      title: t('investment.water.title'),
      description: t('investment.water.description'),
      icon: Droplets,
    },
  ];

  return (
    <section id="investment" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('investment.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {investmentPoints.map((point, index) => (
            <Card key={index} className="bg-white">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <point.icon className="h-8 w-8 text-primary mb-4" />
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {point.title}
                  </h3>
                  <p className="text-gray-700">
                    {point.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <Card className="bg-white/50 backdrop-blur">
          <CardContent className="pt-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-center">
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {t('investment.market.price')}
                </p>
              </div>
              <div>
                <p className="text-xl font-semibold text-gray-900">
                  {t('investment.market.imports')}
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}