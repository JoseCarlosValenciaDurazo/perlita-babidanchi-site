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

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left column - Image */}
          <div className="relative w-full h-[400px] lg:h-[500px]">
            <img
              src="Captura de pantalla 2025-03-03 a la(s) 12.22.31 p.m..png"
              alt="Perlite mineral sample"
              className="rounded-lg object-cover w-full h-full shadow-lg"
            />
          </div>

          {/* Right column - Features */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <Building2 className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {t('main_uses.uses.construction.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.construction.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Sprout className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {t('main_uses.uses.agriculture.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.agriculture.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Beaker className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {t('main_uses.uses.filtration.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.filtration.description')}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Shield className="h-8 w-8 text-primary mt-1 flex-shrink-0" />
              <div>
                <h4 className="text-xl font-semibold mb-2 text-gray-900">
                  {t('main_uses.uses.insulation.title')}
                </h4>
                <p className="text-gray-700">
                  {t('main_uses.uses.insulation.description')}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}