import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import L from "leaflet";
import { useEffect, useRef, useState } from 'react';
import VendorPopup from "./vendorPopup";

// Custom Icon
const customIcon = new L.Icon({
  iconUrl: "https://cdn-icons-png.flaticon.com/512/684/684908.png", // 📍 Marker Icon
  iconSize: [35, 35], // Size of the icon
});

export default function Map() {
  const mapRef = useRef(null);
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setShowPopup(true);
        }
      },
      {
        threshold: 0.5, // 50% map visible
      }
    );

    if (mapRef.current) {
      observer.observe(mapRef.current);
    }

    return () => {
      if (mapRef.current) observer.unobserve(mapRef.current);
    };
  }, []);
  return (
    <section className="w-full py-16 px-6">
      <div className="container mx-auto max-w-6xl">
        {/* Heading */}
        <div className="mb-10">
          <h2 className="text-4xl md:text-5xl Poppins-bold font-bold text-white">
            Find Nearest <br /> Vendor
          </h2>
          <p className="text-lg Poppins text-white mt-2">
            Check your nearest vendor in your place, your time, your way!
          </p>
        </div>

        {/* Map */}
        <div ref={mapRef}  className="w-full h-[400px] rounded-4xl overflow-hidden shadow-lg">
          <MapContainer
            center={[37.8044, -122.2711]} // Oakland Coordinates
            zoom={12}
            scrollWheelZoom={false}
            className="h-full w-full"
          >
            <TileLayer
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[37.8044, -122.2711]} icon={customIcon}>
              <Popup>Vendor Available Here!</Popup>
            </Marker>
          </MapContainer>
          {showPopup && (
          <VendorPopup isOpen={showPopup} onClose={() => setShowPopup(false)} />
        )}
        </div>
      </div>
    </section>
  );
}
