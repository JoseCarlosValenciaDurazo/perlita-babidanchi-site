import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import { Icon } from 'leaflet';

export default function Map() {
  // Center coordinates for the Sonora-Arizona-New Mexico region
  const position: [number, number] = [31.5, -109.5];

  // Custom icon to avoid the missing marker issue
  const customIcon = new Icon({
    iconUrl: '/marker-icon.png',
    shadowUrl: '/marker-shadow.png',
    iconSize: [25, 41],
    iconAnchor: [12, 41],
    popupAnchor: [1, -34],
    shadowSize: [41, 41]
  });

  return (
    <div className="h-[400px] w-full rounded-lg overflow-hidden relative">
      <MapContainer
        center={position}
        zoom={6}
        style={{ height: '100%', width: '100%' }}
        zoomControl={false}
        attributionControl={false}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position} icon={customIcon}>
          <Popup>
            Perlite Babidanchi
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
}