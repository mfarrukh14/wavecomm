import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

const pinIcon = new L.Icon({
  iconUrl: "/images/marker.png",
  iconSize: [30, 40],
  iconAnchor: [15, 40],
  popupAnchor: [0, -40],
});

const STADIA_API_KEY = "3dae30f1-0657-4eb4-b611-418403c90f54";

const Map = () => {
  const position = [33.6995, 73.0366];

  return (
    <div className="w-full h-full">
      <div className="relative w-full h-full overflow-hidden">
        <MapContainer
          center={position}
          zoom={13}
          zoomControl={false}
          style={{ 
            width: "100%", 
            height: "100%",
            maskImage: "radial-gradient(circle, rgba(0,0,0,1) 50%, rgba(0,0,0,0) 100%)",
            WebkitMaskImage: "radial-gradient(circle, rgba(0,0,0,1) 30%, rgba(0,0,0,0) 70%)",
            background: "transparent"
          }}
        >
          <TileLayer
            url={`https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}.png?api_key=${STADIA_API_KEY}`}
            maxZoom={20}
          />
          <Marker position={position} icon={pinIcon}>
            <Popup>
              <span className="text-black">WaveComm Location</span>
            </Popup>
          </Marker>
        </MapContainer>
      </div>
    </div>
  );
};

export default Map;