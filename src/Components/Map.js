import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "../Stylesheet/Map.css"

const Map = () => {
  // Coordinates for Uyo, Akwa Ibom State
  const uyoCoordinates = [5.0327, 7.9067];

  return (
    <MapContainer
      center={uyoCoordinates}
      zoom={13} // Adjust the zoom level
      scrollWheelZoom={true}
      className="leaflet-container"
    >
      {/* Tile Layer: OpenStreetMap */}
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />

      {/* Marker for Uyo */}
      <Marker position={uyoCoordinates}>
        <Popup>
          Uyo, Akwa Ibom State <br /> The beautiful city of Uyo!
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
