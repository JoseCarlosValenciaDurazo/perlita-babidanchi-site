export default function Map() {
  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden relative" style={{ zIndex: 0 }}>
      <iframe 
        src="https://www.google.com/maps/d/embed?mid=1fFbg1eX9zGB4f1DPDanI3EhccKrOEfc&ehbc=2E312F&z=6&ui=none&hl=en&msa=0&ll=31.5,-109.5&output=embed" 
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