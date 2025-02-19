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

  const galleryImages = [
    {
      src: "/images/gallery/perlite-sample-1.jpg",
      alt: "Perlite Sample Close-up"
    },
    {
      src: "/images/gallery/perlite-sample-2.jpg",
      alt: "Raw Perlite Material"
    },
    {
      src: "/images/gallery/bendicion-deposit.jpg",
      alt: "La Bendición Deposit Canyon"
    },
    {
      src: "/images/gallery/babidanchi-river.jpg",
      alt: "Babidanchi River"
    },
    {
      src: "/images/gallery/selene-deposit-1.png",
      alt: "Selene Deposit View"
    },
    {
      src: "/images/gallery/selene-deposit-2.jpg",
      alt: "Selene Deposit Landscape"
    }
  ];

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
            {galleryImages.map((image, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full"
                    />
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
}