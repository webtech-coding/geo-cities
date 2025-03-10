import React, { Fragment, useState, type FC, type ReactElement } from "react";

import { ICityData } from "../../utils/interfaces";
import CityList from "./cityList";
import CityDetails from "../cityDetails";

import Styles from './sidebar.module.scss';
import menu from './../../icons/menu.svg';
import sort from './../../icons/sort.svg';
import search from './../../icons/search.svg';
import reloadIcon from './../../icons/reload.svg';
 

type sideBarProps = {
    citiesData: ICityData[],
    selectedCity:ICityData | null,
    citySelection:(data:ICityData)=>void,
    fetchMoreCities:()=>void,
    loading:boolean,
    currentOffset:number
}

const SideBar:FC<sideBarProps> =({citiesData, citySelection, selectedCity, fetchMoreCities, loading, currentOffset}):ReactElement=>{
    console.log(currentOffset)

    const [toggleCities, setToggleCities] = useState<boolean>(false);
    const [searchText, setSearchText] = useState<string>('');
    const [dataSort,setDataSort] = useState<string>('asc');

    const searchTextChange=(e:React.ChangeEvent<HTMLInputElement>)=>{
        setSearchText(e.target.value);
    }

    const getCitiesToRender=()=>{
       
        return citiesData.filter(city=>{
            return city.name.toLocaleLowerCase().includes(searchText.toLocaleLowerCase().trim())
        }).sort((a,b)=> {
            if(dataSort === 'asc'){
                return  a.name.localeCompare(b.name)
            }else{
                return b.name.localeCompare(a.name)
            }
        })
    }

    return(
        <Fragment>
            <aside className={Styles.sidebar}>
                <div className={Styles.sidebar_top}>
                    <div className={Styles.sidebar_cta} onClick={()=>setToggleCities(!toggleCities)}>
                        <img src={menu} alt="menu"/>
                    </div>
                    <div className={Styles.sidebar_search}>
                        <input type="text" placeholder="Search city by name" onChange={searchTextChange}/>
                        <img src={search} alt="search"/>
                    </div>
                    <div className={Styles.sidebar_cta} onClick={()=>setDataSort(prev=>prev === 'asc' ? 'desc':'asc')}>
                        <img src={sort} alt="sort"/>
                    </div>
                </div>
                <div className={`${Styles.sidebar_cities} ${!toggleCities ? '': Styles.sidebar_cities_hide}`}>
                    <div className={Styles.sidebar_cities_list}>
                    {
                        currentOffset<=10 && (
                            <div className={Styles.sidebar_button} onClick={()=>fetchMoreCities()}>
                               <img src={reloadIcon}/> <span>Fetch more cities</span>
                            </div>
                        )
                    }
                        <ul>
                            {
                                getCitiesToRender().map(city=>{
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
                    
                    
                </div>
            </aside>
            <CityDetails 
                selectedCity={selectedCity}
                toggle={toggleCities}
            />
        </Fragment>
        
    )
}

export default SideBar;