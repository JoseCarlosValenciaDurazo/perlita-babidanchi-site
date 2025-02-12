import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Deposits() {
  const { t } = useTranslation();

  return (
    <section id="deposits" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
          {t('deposits.title')}
        </h2>
        <p className="text-xl text-gray-700 text-center mb-12 max-w-3xl mx-auto">
          {t('deposits.description')}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          <Card className="overflow-hidden">
            <div className="h-64 w-full relative">
              <img
                src="/attached_assets/Deposito Selene 2.png"
                alt="Selene Deposit"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                {t('deposits.selene.title')}
              </h3>
              <p className="text-gray-700">
                {t('deposits.selene.description')}
              </p>
            </CardContent>
          </Card>

          <Card className="overflow-hidden">
            <div className="h-64 w-full relative">
              <img
                src="/images/bendicion-deposit.jpg"
                alt="La Bendición Deposit"
                className="w-full h-full object-cover"
              />
            </div>
            <CardContent className="pt-6">
              <h3 className="text-2xl font-semibold mb-4">
                {t('deposits.bendicion.title')}
              </h3>
              <p className="text-gray-700">
                {t('deposits.bendicion.description')}
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}