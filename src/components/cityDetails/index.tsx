import { FC, ReactElement } from "react";
import { ICityData } from "../../utils/interfaces";
import Styles from './citydetails.module.scss';

import cityIcon from './../../icons/city.svg';
import countryIcon from './../../icons/map.svg';
import population from './../../icons/population.svg';
import globeIcon from './../../icons/globe.svg';
import arrowIcon from './../../icons/arrow.svg';

type CityDetailsProps={
    selectedCity:ICityData | null
}

const CityDetails:FC<CityDetailsProps>=({selectedCity}):ReactElement=>{
    if(!selectedCity)return <></>

    return(
        <div className={Styles.citydetails}>
           <div className={Styles.citydetails__card}>
                <div className={Styles.citydetails__card_icon}>
                    <img src={cityIcon} alt="city"/>
                </div>
                <div className={Styles.citydetails__text}>
                    <span>
                        City
                    </span>
                    <span>
                        { selectedCity.name }
                    </span>
                </div>
           </div>
           <div className={Styles.citydetails__card}>
                <div className={Styles.citydetails__card_icon}>
                    <img src={countryIcon} alt="country"/>
                </div>
                <div className={Styles.citydetails__text}>
                    <span>
                        Country
                    </span>
                    <span>
                        { selectedCity.country } ({selectedCity.countryCode})
                    </span>
                </div>
           </div>
           <div className={Styles.citydetails__card}>
                <div className={Styles.citydetails__card_icon}>
                    <img src={population} alt="population"/>
                </div>
                <div className={Styles.citydetails__text}>
                    <span>
                        population
                    </span>
                    <span>
                        { selectedCity.population ? selectedCity.population : 'Not availabl' }
                    </span>
                </div>
           </div>
           <div className={Styles.citydetails__card}>
                <div className={Styles.citydetails__card_icon}>
                    <img src={globeIcon} alt="Lat/long"/>
                </div>
                <div className={Styles.citydetails__text}>
                    <span>
                        Position.
                    </span>
                    <span>
                        Lat: { selectedCity.latitude}
                    </span>
                    <span>
                        Long : {selectedCity.longitude}
                    </span>
                </div>
           </div>
           <div className={Styles.citydetails__card}>
                <div className={Styles.citydetails__card_icon}>
                    <img src={arrowIcon} alt="Lat/long"/>
                </div>
                <div className={Styles.citydetails__text}>
                    <span>
                       More info
                    </span>
                    <span>
                        <a href={`https://www.wikidata.org/wiki/${selectedCity.wikiDataId}`} target="_blank">Click for more</a>
                    </span>
                </div>
           </div>
           
        </div>
    )
}

export default CityDetails;