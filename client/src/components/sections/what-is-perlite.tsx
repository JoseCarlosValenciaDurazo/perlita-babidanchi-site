import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatIsPerlite() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('product.title')}
          </h2>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {t('product.definition.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('product.definition.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4 text-gray-900">
                {t('product.expansion.title')}
              </h3>
              <p className="text-gray-700 leading-relaxed mb-6">
                {t('product.expansion.description')}
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.density.title')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.density.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.fire.title')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.fire.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.insulation.title')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.insulation.description')}
                </p>
              </div>
            </CardContent>
          </Card>

          <Card className="bg-white shadow-lg">
            <CardContent className="pt-6">
              <div className="text-center">
                <h4 className="text-xl font-semibold mb-3 text-gray-900">
                  {t('product.properties.inert.title')}
                </h4>
                <p className="text-gray-700">
                  {t('product.properties.inert.description')}
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}