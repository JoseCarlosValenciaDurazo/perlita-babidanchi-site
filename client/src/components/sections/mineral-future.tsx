import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Leaf, Factory, Shield } from "lucide-react";

export default function MineralFuture() {
  const { t } = useTranslation();

  const features = [
    {
      icon: <Sparkles className="h-8 w-8 text-primary" />,
      title: "Versatile Applications",
      description: "From construction to agriculture, perlite's unique properties make it invaluable across industries."
    },
    {
      icon: <Leaf className="h-8 w-8 text-primary" />,
      title: "Sustainable Solution",
      description: "Natural, environmentally friendly material that supports green building and sustainable agriculture."
    },
    {
      icon: <Factory className="h-8 w-8 text-primary" />,
      title: "Growing Demand",
      description: "Increasing industrial applications and construction needs drive strong market growth."
    },
    {
      icon: <Shield className="h-8 w-8 text-primary" />,
      title: "Strategic Resource",
      description: "Essential mineral for North American industrial independence and security."
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('hero.title')}
          </h2>
          <p className="text-xl text-gray-700 max-w-3xl mx-auto">
            The growing importance of perlite in modern industry and sustainable development
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="bg-white shadow-lg">
              <CardContent className="pt-6">
                <div className="flex flex-col items-center text-center">
                  {feature.icon}
                  <h3 className="text-xl font-semibold mt-4 mb-2 text-gray-900">
                    {feature.title}
                  </h3>
                  <p className="text-gray-700">
                    {feature.description}
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
