import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { TrendingUp } from "lucide-react";

export default function Investment() {
  const { t } = useTranslation();

  return (
    <section id="invest" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('investment.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('investment.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {t('investment.points', { returnObjects: true }).map((point: string, index: number) => (
            <Card key={index}>
              <CardContent className="pt-6">
                <div className="flex items-center justify-center mb-4">
                  <TrendingUp className="h-8 w-8 text-primary" />
                </div>
                <p className="text-center font-medium">{point}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            size="lg"
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
          >
            {t('investment.cta')}
          </Button>
        </div>
      </div>
    </section>
  );
}
