import { type FC, type ReactElement } from "react";
import { ICityData } from "../../utils/interfaces";

import Styles from './sidebar.module.scss';

type cityListProps ={
    city:ICityData,
    citySelection:(data:ICityData)=>void,
    selectedCity:ICityData | null
}

const CityList:FC<cityListProps>=({city, citySelection, selectedCity}):ReactElement=>{
    return(
       <li className={`${ city.id === (selectedCity && selectedCity.id) ? Styles.active_city : null}`} onClick={()=>citySelection(city)} key={city.id}>
            <div className={Styles.city}>
                <span className={`${(city.id === (selectedCity && selectedCity.id)) ? Styles.city__check_active:null} ${Styles.city__check}`}></span>
                <span className={Styles.city__name}>{city.name}</span>
            </div>
            <div className={Styles.country}>
                {city.country}
            </div>
       </li>
    )
}

export default CityList;