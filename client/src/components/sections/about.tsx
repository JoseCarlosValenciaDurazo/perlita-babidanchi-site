import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function About() {
  const { t } = useTranslation();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1523848309072-c199db53f137"
              alt="Mining Operations"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div>
            <h2 className="text-4xl font-bold mb-6 text-gray-900">
              {t('about.title')}
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-lg text-gray-700 leading-relaxed">
                  {t('about.description')}
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
