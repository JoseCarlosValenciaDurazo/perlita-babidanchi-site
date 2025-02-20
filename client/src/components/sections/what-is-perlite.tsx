import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function WhatIsPerlite() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('product.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('product.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {t('product.uses', { returnObjects: true }).map((use: string, index: number) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="text-center">
                  <p className="text-gray-700 font-medium">
                    {use}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
