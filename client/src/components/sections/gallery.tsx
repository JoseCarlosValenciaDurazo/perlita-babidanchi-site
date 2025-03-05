import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

export default function Gallery() {
  const { t } = useTranslation();
  const [shuffledImages, setShuffledImages] = useState<Array<{src: string, alt: string}>>([]);

  const galleryImages = [
    // Original perlite samples and deposits
    {
      src: "/assets/Perlite example.png",
      alt: "Perlite Sample"
    },
    {
      src: "/assets/Perlite example 2.png",
      alt: "Raw Perlite Material"
    },
    {
      src: "/assets/Bendicion Deposit.jpg",
      alt: "La Bendición Deposit"
    },
    {
      src: "/assets/Rio Babidanchi.jpg",
      alt: "Babidanchi River"
    },
    {
      src: "/assets/Deposito Selene 2.png",
      alt: "Selene Deposit"
    },
    {
      src: "/assets/Selene Deposit.jpg",
      alt: "Selene Deposit Landscape"
    },
    // New images from attached_assets
    {
      src: "/assets/2016-07-08_10-30-26_o.jpg",
      alt: "Mining Site View 1"
    },
    {
      src: "/assets/2016-07-08_10-30-37_o.jpg",
      alt: "Mining Site View 2"
    },
    {
      src: "/assets/2016-07-08_10-32-47_o.jpg",
      alt: "Mining Site View 3"
    },
    {
      src: "/assets/2016-07-08_10-35-19_o.jpg",
      alt: "Mining Site View 4"
    },
    {
      src: "/assets/2016-07-08_16-13-20_o.jpg",
      alt: "Mining Site View 5"
    },
    {
      src: "/assets/2016-07-09_08-16-33_o.jpg",
      alt: "Mining Operations 1"
    },
    {
      src: "/assets/2016-07-09_08-17-26_o.jpg",
      alt: "Mining Operations 2"
    },
    {
      src: "/assets/2016-07-09_08-50-11_o.jpg",
      alt: "Mining Operations 3"
    },
    {
      src: "/assets/2016-07-09_08-56-30_o.jpg",
      alt: "Mining Operations 4"
    },
    {
      src: "/assets/2016-07-09_16-05-12_o.jpg",
      alt: "Perlite Sample Close-up"
    },
    {
      src: "/assets/2016-07-09_16-19-52_o.jpg",
      alt: "Mining Equipment"
    },
    {
      src: "/assets/20160708_111828.jpg",
      alt: "Panoramic View of Mining Site"
    },
    {
      src: "/assets/IMG_1607.JPG",
      alt: "Geological Formation 1"
    },
    {
      src: "/assets/IMG_1608.JPG",
      alt: "Geological Formation 2"
    },
    {
      src: "/assets/IMG_1613.JPG",
      alt: "Geological Formation 3"
    },
    {
      src: "/assets/IMG_1716.JPG",
      alt: "Mining Site Landscape"
    }
  ];

  // Fisher-Yates shuffle algorithm
  const shuffleArray = (array: Array<{src: string, alt: string}>) => {
    const newArray = [...array];
    for (let i = newArray.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [newArray[i], newArray[j]] = [newArray[j], newArray[i]];
    }
    return newArray;
  };

  // Shuffle images on component mount
  useEffect(() => {
    setShuffledImages(shuffleArray(galleryImages));
  }, []);

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
            {shuffledImages.map((image, index) => (
              <CarouselItem key={index} className="basis-full md:basis-1/2 lg:basis-1/3">
                <div className="p-1">
                  <div className="aspect-square relative overflow-hidden rounded-lg">
                    <img
                      src={image.src}
                      alt={image.alt}
                      className="object-cover w-full h-full hover:scale-105 transition-transform duration-300"
                      loading="lazy"
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