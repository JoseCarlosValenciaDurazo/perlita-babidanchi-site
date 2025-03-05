import { useTranslation } from "react-i18next";
import { Card, CardContent } from "@/components/ui/card";

export default function Contact() {
  const { t } = useTranslation();

  return (
    <section id="contact" className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold mb-12 text-center text-gray-900">
          Contact us:
        </h2>

        <Card className="max-w-2xl mx-auto bg-white shadow-lg">
          <CardContent className="pt-6">
            <ul className="space-y-6 text-gray-900">
              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Email:</span>
                <span className="hover:text-primary transition-colors text-gray-700">
                  josecarlosvalencia.contacto@gmail.com
                </span>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Phone:</span>
                <span className="hover:text-primary transition-colors text-gray-700">
                  (+52) 662 377 6968
                </span>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Email:</span>
                <span className="hover:text-primary transition-colors text-gray-700">
                  carlosjavier.valencia@gmail.com
                </span>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Phone:</span>
                <span className="hover:text-primary transition-colors text-gray-700">
                  (+52) 662 256 2933
                </span>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}