import { type FC, type ReactElement } from "react";

import { ICityData } from "../../utils/interfaces";
import Styles from './sidebar.module.scss';
import menu from './../../icons/menu.svg';
import sort from './../../icons/sort.svg';
import search from './../../icons/search.svg';


type sideBarProps = {
    citiesData: ICityData[]
}

const SideBar:FC<sideBarProps> =({citiesData}):ReactElement=>{
    return(
        <aside className={Styles.sidebar}>
            <div className={Styles.sidebar_top}>
                <img src={menu} alt="menu"/>
                <div className={Styles.sidebar_search}>
                    <input type="text" placeholder="search city by name"/>
                    <img src={search} alt="search"/>
                </div>
                
                <img src={sort} alt="menu"/>
               
            </div>
            <div className={Styles.sidebar_cities}>
            this is the aside section where side bar will be hoisted and the main issue is that it occupies whole the container
            </div>
            
        </aside>
    )
}

export default SideBar;