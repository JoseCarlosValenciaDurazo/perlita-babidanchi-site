import { useTranslation } from "react-i18next";

export default function Map({ showTitle = true }) {
  const { t } = useTranslation();

  return (
    <section className="py-8 bg-white">
      <div className="container mx-auto px-4">
        {showTitle && (
          <h2 className="text-4xl font-bold mb-6 text-center">
            {t('location.title')}
          </h2>
        )}
        <div className="mx-auto h-[400px] max-w-3xl rounded-lg overflow-hidden shadow-lg">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524288.476282714!2d-112.18555192361784!3d32.367777974305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d20a7c3b6b6b6b%3A0x0!2zMzDCsDIyJzA0LjAiTiAxMDnCsDExJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1707815400000!5m2!1sen!2sus" 
            width="100%" 
            height="100%"
            style={{ border: 0 }}
            loading="lazy"
            title="Location Map"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}