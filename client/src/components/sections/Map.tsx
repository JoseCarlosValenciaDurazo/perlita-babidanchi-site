export default function Map() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden relative" style={{ zIndex: 0 }}>
      <iframe 
        src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d1774156.9731647411!2d-109.5!3d31.5!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sus!4v1707815400000!5m2!1sen!2sus"
        width="100%" 
        height="100%"
        style={{ border: 0 }}
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      />
    </div>
  );
}