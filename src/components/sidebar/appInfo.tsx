import { FC, ReactElement } from 'react';
import InfoIcon from './../../icons/info.svg';
import Styles from './sidebar.module.scss';

const AppInfo:FC =():ReactElement=>{
    return (
        <div className={Styles.appinfo}>
            <div className={Styles.appinfo__icon}>
                <img src={InfoIcon}/>
            </div>
            <div className={Styles.appinfo__text}>
                <p>
                    A simple web app for visualizing cities. The city's location is
                    marked on the map, and detailed information about the selected city is displayed on the page
                </p>
                <p>
                The city data comes from GeoDB Cities, fetched via Rapid API.
                Each request retrieves only five cities, but you can load more by clicking the <strong>'Fetch More Cities'</strong> button.
                </p>
            </div>
        </div>
    )
}

export default AppInfo