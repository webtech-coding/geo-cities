import { useEffect, useState, type FC, type ReactElement } from "react";
import { MapContainer, TileLayer, Marker,Popup } from 'react-leaflet'
import { ICityData } from "../../utils/interfaces";
import MapUpdater from "./mapUpdater";

type cityMapProps ={
    selectedCity:ICityData | null
}

const CityMap:FC<cityMapProps> =({selectedCity}):ReactElement=>{
    const [position, setPosition] = useState<[number, number]>([51.505, -0.09])

    useEffect(()=>{
        if(!selectedCity){
            setPosition([51.505, -0.09])
        }else{
            setPosition([selectedCity.latitude, selectedCity.longitude])
        }
        
    },[selectedCity])
    
    return(
        <div className="map">
            <MapContainer center={position} zoom={13} scrollWheelZoom={true} style={{height:'100vh', width:'100vw'}}>
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                    A pretty CSS3 popup. <br /> Easily customizable.
                    </Popup>
                </Marker>
                <MapUpdater 
                    position={position}  
                />
            </MapContainer>
        </div>
    )
}

export default CityMap;