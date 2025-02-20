import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Leaf, Factory, Shield } from "lucide-react";

export default function MineralFuture() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            PERLITE
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('mineral_future.title')}
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('mineral_future.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Sparkles className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('mineral_future.versatile.title')}
                </h4>
                <p className="text-gray-700">
                  {t('mineral_future.versatile.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Leaf className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('mineral_future.sustainable.title')}
                </h4>
                <p className="text-gray-700">
                  {t('mineral_future.sustainable.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Factory className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('mineral_future.demand.title')}
                </h4>
                <p className="text-gray-700">
                  {t('mineral_future.demand.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('mineral_future.strategic.title')}
                </h4>
                <p className="text-gray-700">
                  {t('mineral_future.strategic.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}