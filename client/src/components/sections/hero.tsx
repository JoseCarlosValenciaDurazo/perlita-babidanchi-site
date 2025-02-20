import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative min-h-[70vh] flex items-center justify-center bg-white py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900">
            Who We Are
          </h1>
          <h2 className="text-2xl md:text-3xl mb-8 text-gray-700">
            PERLITA BABIDANCHI, SA. DE CV.
          </h2>
        </div>

        <Card className="max-w-4xl mx-auto bg-white shadow-lg">
          <CardContent className="pt-6">
            <p className="text-xl text-gray-700 leading-relaxed">
              We are a Sonoran-based company that emerged from identifying a business opportunity for our family, who owns and operates Rancho Babidanchi. This land is home to two significant perlite deposits of high quality, located close to each other, with enormous resource potential to become a leader in North America.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}