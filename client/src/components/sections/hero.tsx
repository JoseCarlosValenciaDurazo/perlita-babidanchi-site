import { useTranslation } from "react-i18next";
import { Button } from "@/components/ui/button";
import { ArrowDownCircle } from "lucide-react";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1601960439441-5243d3968370)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.6)',
        }}
      />
      <div className="relative z-10 text-center text-white px-4">
        <h1 className="text-5xl md:text-7xl font-bold mb-6">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8 max-w-2xl mx-auto">
          {t('hero.subtitle')}
        </p>
        <Button
          size="lg"
          variant="outline"
          className="text-white border-white hover:bg-white hover:text-black"
          onClick={() => document.getElementById('about')?.scrollIntoView({ behavior: 'smooth' })}
        >
          {t('hero.cta')}
          <ArrowDownCircle className="ml-2 h-4 w-4" />
        </Button>
      </div>
    </section>
  );
}
