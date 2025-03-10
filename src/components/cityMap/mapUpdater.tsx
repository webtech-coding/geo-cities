import { FC, useEffect } from "react";
import { useMap } from "react-leaflet";

type mapUpdaterProps = {
    position:[number, number]
}

const MapUpdater:FC<mapUpdaterProps> = ({position}) => {
  const map = useMap();

  useEffect(() => {
    map.flyTo(position, map.getZoom()); // Smooth transition to new center
  }, [position, map]);

  return null;
};

export default MapUpdater;