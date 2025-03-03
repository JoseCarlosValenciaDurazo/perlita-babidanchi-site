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
                <a href="mailto:josecarlosvalencia.contacto@gmail.com" 
                   className="hover:text-primary transition-colors">
                  josecarlosvalencia.contacto@gmail.com
                </a>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Phone:</span>
                <a href="tel:+526623776968" 
                   className="hover:text-primary transition-colors">
                  (+52) 662 377 6968
                </a>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Email:</span>
                <a href="mailto:carlosjavier.valencia@gmail.com" 
                   className="hover:text-primary transition-colors">
                  carlosjavier.valencia@gmail.com
                </a>
              </li>

              <li className="flex flex-col space-y-1">
                <span className="font-semibold">Phone:</span>
                <a href="tel:+526622562933" 
                   className="hover:text-primary transition-colors">
                  (+52) 662 256 2933
                </a>
              </li>
            </ul>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}