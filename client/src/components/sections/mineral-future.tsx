
import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Sprout, 
  Beaker, 
  Shield,
} from "lucide-react";

export default function MineralFuture() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('main_uses.header.title')}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
            {t('main_uses.header.subtitle')}
          </h3>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('mineral_future.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Building2 className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('main_uses.uses.construction.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.construction.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Sprout className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('main_uses.uses.agriculture.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.agriculture.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Beaker className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('main_uses.uses.filtration.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.filtration.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="flex flex-col items-center text-center">
                <Shield className="h-8 w-8 text-primary mb-4" />
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('main_uses.uses.insulation.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.insulation.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
