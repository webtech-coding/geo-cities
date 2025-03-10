import { useEffect, useState, type FC, type ReactElement } from 'react'

import SideBar from './components/sidebar';
import SearchBar from './components/searchBar';
import CityMap from './components/cityMap';
import { fetchGeoCityData } from './api/api';
import { ICityData } from './utils/interfaces';

const App:FC = ():ReactElement=> {
  const [currentCity, setCurrentCity] = useState<string>(import.meta.env.VITE_DEFAULT_CITY as string || 'helsinki')
  const [geoCityData, setGeoCityData] = useState<ICityData[] | []>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(false);

  useEffect(()=>{
    if(!currentCity)return
    
    const fetchCityData = async ()=>{
      const citiesData:ICityData[] = await fetchGeoCityData(currentCity);
      console.log(citiesData)
      setGeoCityData(citiesData);
      setFetchingData(false);
    }
    setFetchingData(true)
    fetchCityData();
  },[currentCity])

  return(
    <div className='app-container'>
      <CityMap 
        geoCityData = {geoCityData}
      />
      <SearchBar />
      <SideBar citiesData={geoCityData}/>
    </div>
  )
}
  

export default App
