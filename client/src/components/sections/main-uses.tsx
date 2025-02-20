import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { 
  Building2, 
  Sprout, 
  Beaker, 
  Shield,
  Factory,
  Lightbulb
} from "lucide-react";

export default function MainUses() {
  const { t } = useTranslation();

  const uses = [
    {
      icon: <Building2 className="h-8 w-8" />,
      title: t('mineral_future.versatile.title'),
      description: t('mineral_future.versatile.description')
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: t('mineral_future.sustainable.title'),
      description: t('mineral_future.sustainable.description')
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: t('mineral_future.demand.title'),
      description: t('mineral_future.demand.description')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('mineral_future.strategic.title'),
      description: t('mineral_future.strategic.description')
    }
    // {
    //   icon: <Factory className="h-8 w-8" />,
    //   title: t('mineral_future.industrial.title'),
    //   description: t('mineral_future.industrial.description')
    // },
    // {
    //   icon: <Lightbulb className="h-8 w-8" />,
    //   title: t('mineral_future.innovation.title'),
    //   description: t('mineral_future.innovation.description')
    // }
  ];

  return (
    <section id="main-uses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('mineral_future.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            {t('mineral_future.description')}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {uses.map((use, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  <div className="text-primary mb-4">
                    {use.icon}
                  </div>
                  <h3 className="text-xl font-semibold mb-3 text-gray-900">
                    {use.title}
                  </h3>
                  <p className="text-gray-700">
                    {use.description}
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