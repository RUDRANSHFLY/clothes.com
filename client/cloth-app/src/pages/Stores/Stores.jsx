import React from "react";
import "../Stores/Stores.scss";
import 'leaflet/dist/leaflet.css';
import { MapContainer, TileLayer } from 'react-leaflet';



const Stores = () => {
  const position = [51.505, -0.09];

  return (
 
        <MapContainer 
          center={position} 
          zoom={13} 
          scrollWheelZoom={false}>
          <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
    
  );
};

export default Stores;
