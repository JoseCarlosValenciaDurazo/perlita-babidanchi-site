import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle } from "lucide-react";

export default function Product() {
  const { t } = useTranslation();
  const uses = t('product.uses', { returnObjects: true }) as string[];

  return (
    <section id="product" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          {t('product.title')}
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="bg-white">
            <CardContent className="pt-6">
              <p className="text-lg text-gray-700 mb-6">
                {t('product.description')}
              </p>
              <ul className="space-y-4">
                {Array.isArray(uses) && uses.map((use, index) => (
                  <li key={index} className="flex items-center text-gray-700">
                    <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
                    {use}
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
          <div className="flex items-center justify-center">
            <img
              src="/images/perlite-samples.jpg"
              alt="Perlite Samples"
              className="rounded-lg shadow-lg w-full h-[400px] object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}