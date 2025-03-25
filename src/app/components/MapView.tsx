"use client"; // Ensure this component is rendered on the client side

import { MapContainer, TileLayer, Marker } from "react-leaflet";
import { LatLngExpression } from "leaflet";
import "leaflet/dist/leaflet.css"; // Import Leaflet CSS for proper map rendering

const MapView: React.FC = () => {
  const center: LatLngExpression = [48.8566, 2.3522]; // Coordinates for Paris

  return (
    <MapContainer center={center} zoom={13} className="h-64 w-full rounded-lg shadow-md">
      <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
      <Marker position={center} />
    </MapContainer>
  );
};

export default MapView;