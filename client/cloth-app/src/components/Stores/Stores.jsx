import React from 'react'
import "../Stores/Stores.scss";
import { MapContainer, TileLayer, useMap } from 'react-leaflet'

const Stores = () => {
    const position = [51.505, -0.09]
    return (
        <div className='stores'>
            <h1>Our Stores</h1>
        </div>

    )
}

export default Stores