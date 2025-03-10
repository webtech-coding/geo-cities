import { type FC, type ReactElement } from "react";

import { ICityData } from "../../utils/interfaces";
import CityList from "./cityList";

import Styles from './sidebar.module.scss';
import menu from './../../icons/menu.svg';
import sort from './../../icons/sort.svg';
import search from './../../icons/search.svg';


type sideBarProps = {
    citiesData: ICityData[],
    selectedCity:ICityData | null,
    citySelection:(data:ICityData)=>void
}

const SideBar:FC<sideBarProps> =({citiesData, citySelection, selectedCity}):ReactElement=>{
    return(
        <aside className={Styles.sidebar}>
            <div className={Styles.sidebar_top}>
                <img src={menu} alt="menu"/>
                <div className={Styles.sidebar_search}>
                    <input type="text" placeholder="Search city by name"/>
                    <img src={search} alt="search"/>
                </div>
                <img src={sort} alt="menu"/>
            </div>
            <div className={Styles.sidebar_cities}>
                <div className={Styles.sidebar_cities_list}>
                    <p>Please click the name of the city of view the details</p>
                    <ul>
                        {
                            citiesData.map(city=>{
                                return(
                                    <CityList
                                        city={city}
                                        citySelection={citySelection}
                                        selectedCity={selectedCity}
                                        key={city.id}
                                    />
                                )
                            })
                        }
                    </ul>
                </div>
                
                <button>
                    Fetch more cities
                </button>
            </div>
        </aside>
    )
}

export default SideBar;