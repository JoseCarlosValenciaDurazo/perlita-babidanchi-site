import { useTranslation } from "react-i18next";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className="relative h-screen flex items-center justify-center overflow-hidden">
      <div 
        className="absolute inset-0 z-0"
        style={{
          backgroundImage: 'url(/images/Foto Rancho desde Selene.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          filter: 'brightness(0.7)',
        }}
      />
      <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-7xl font-bold mb-6 font-sans">
          {t('hero.title')}
        </h1>
        <p className="text-xl md:text-2xl mb-8">
          {t('hero.subtitle')}
        </p>
        <p className="text-lg md:text-xl opacity-90 max-w-2xl mx-auto">
          {t('hero.description')}
        </p>
      </div>
    </section>
  );
}