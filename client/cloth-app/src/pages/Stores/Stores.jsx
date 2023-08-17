import React from "react";
import 'leaflet/dist/leaflet.css';
import "../Stores/Stores.scss";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Stores = () => {
  const position = [40.748817, -73.985428];

  return (
    <div className="map">
      <MapContainer center={[48.8566, 2.3522]} zoom={13}
       style={{ width: '100vw', height: '100vh' }} scrollWheelZoom={false}>
        <TileLayer
          url="https://api.maptiler.com/maps/basic/256/{z}/{x}/{y}.png?key=1nMoC2Hvingy7pfSywHO"
          attribution='<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
        />
        <Marker position={[48.8566, 2.3522]}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Stores;
