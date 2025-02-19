import { useTranslation } from "react-i18next";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  const { t } = useTranslation();

  return (
    <section id="gallery" className="py-24 bg-white">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-6 text-gray-900">
            {t('gallery.title')}
          </h2>
          <p className="text-xl text-gray-700 mb-12">
            {t('gallery.description')}
          </p>
        </div>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {/* Placeholder for images that will be added later */}
            <CarouselItem className="basis-full md:basis-1/2 lg:basis-1/3">
              <div className="p-1">
                <div className="flex aspect-square items-center justify-center p-6 relative">
                  <p className="text-gray-500">Images coming soon...</p>
                </div>
              </div>
            </CarouselItem>
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}
