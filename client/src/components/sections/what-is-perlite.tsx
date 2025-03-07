import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatIsPerlite() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('product.title', 'What is Perlite?')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {t('product.definition.title', 'Definition')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('product.definition.description', 'Perlite is a volcanic mineral belonging to the family of amorphous siliceous glass. It forms when silica-rich lava cools rapidly, trapping small amounts of water within its vitreous structure. Its name comes from its physical appearance, as unexpanded particles often exhibit concentric fractures that resemble pearls.')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {t('product.expansion.title', 'Expansion Process')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('product.expansion.description', 'Raw perlite (in its natural state) contains between 2% and 5% water. When heated to temperatures between 760°C and 1,100°C, the trapped water vaporizes, causing the mineral to expand up to 20 times its original volume. This process creates a porous, ultra-lightweight, and white material with unique properties.')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.density.title', 'Low Density')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.density.description', 'It weighs only between 32 kg/m³ and 240 kg/m³ (depending on the degree of expansion).')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.fire.title', 'Fire Resistance')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.fire.description', 'It is non-flammable and withstands extreme temperatures.')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.insulation.title', 'Insulation')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.insulation.description', 'Its cellular structure retains air, reducing heat and sound transfer.')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.inert.title', 'Inert & Sterile')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.inert.description', 'It is chemically non-reactive, pH-neutral, and free of pathogens.')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}