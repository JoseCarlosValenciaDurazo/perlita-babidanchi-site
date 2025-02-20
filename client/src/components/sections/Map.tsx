export default function Map() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-4xl font-bold mb-6 text-center text-gray-900">
        Our Location
      </h2>
      <div className="max-w-3xl mx-auto h-[400px] rounded-lg overflow-hidden relative">
        <iframe 
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3524288.476282714!2d-112.18555192361784!3d32.367777974305837!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86d20a7c3b6b6b6b%3A0x0!2zMzDCsDIyJzA0LjAiTiAxMDnCsDExJzAwLjAiVw!5e0!3m2!1sen!2sus!4v1707815400000!5m2!1sen!2sus" 
          width="100%" 
          height="100%"
          style={{ border: 0 }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        />
      </div>
    </div>
  );
}