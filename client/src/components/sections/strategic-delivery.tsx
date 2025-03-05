import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Workflow } from "lucide-react";
import Map from "./Map";

export default function StrategicDelivery() {
  const { t } = useTranslation();

  return (
    <section className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <Card className="bg-white shadow-lg max-w-3xl mx-auto">
          <CardContent className="pt-6">
            <div className="flex items-center gap-3 mb-4">
              <Workflow className="h-6 w-6 text-primary" />
              <h3 className="text-2xl font-semibold text-gray-900">
                {t('investment.strategic_advantage.title')}
              </h3>
            </div>
            <p className="text-lg text-gray-700 mb-6">
              {t('investment.strategic_advantage.description')}
            </p>
            <Map showTitle={false} />
          </CardContent>
        </Card>
      </div>
    </section>
  );
}