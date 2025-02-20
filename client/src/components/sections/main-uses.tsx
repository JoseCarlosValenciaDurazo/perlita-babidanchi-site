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
      title: t('main_uses.uses.construction.title'),
      description: t('main_uses.uses.construction.description')
    },
    {
      icon: <Sprout className="h-8 w-8" />,
      title: t('main_uses.uses.agriculture.title'),
      description: t('main_uses.uses.agriculture.description')
    },
    {
      icon: <Beaker className="h-8 w-8" />,
      title: t('main_uses.uses.filtration.title'),
      description: t('main_uses.uses.filtration.description')
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: t('main_uses.uses.insulation.title'),
      description: t('main_uses.uses.insulation.description')
    },
    {
      icon: <Factory className="h-8 w-8" />,
      title: t('main_uses.uses.industrial.title'),
      description: t('main_uses.uses.industrial.description')
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: t('main_uses.uses.innovation.title'),
      description: t('main_uses.uses.innovation.description')
    }
  ];

  return (
    <section id="main-uses" className="py-20 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-2">
            {t('main_uses.perlite')}
          </h2>
          <h3 className="text-2xl md:text-3xl font-bold text-gray-900">
            {t('main_uses.tagline')}
          </h3>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
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