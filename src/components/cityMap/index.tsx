import { useEffect, type FC, type ReactElement } from "react";
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import { ICityData } from "../../utils/interfaces";

type cityMapProps ={
    geoCityData:ICityData
}

const CityMap:FC<cityMapProps> =({geoCityData}):ReactElement=>{

    
    return(
        <div className="map">
            <MapContainer center={[geoCityData && geoCityData.latitude || 51.505, geoCityData && geoCityData.longitude || -0.09]} zoom={13} scrollWheelZoom={true} style={{height:'100vh', width:'100vw'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={[51.505, -0.09]}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
            </MapContainer>
        </div>
    )
}

export default CityMap;