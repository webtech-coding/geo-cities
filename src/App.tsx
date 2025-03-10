import { useEffect, useState, type FC, type ReactElement } from 'react'

import SideBar from './components/sidebar';
import CityDetails from './components/cityDetails';
import CityMap from './components/cityMap';
import { fetchGeoCityData } from './api/api';
import { ICityData } from './utils/interfaces';

const App:FC = ():ReactElement=> {
  const [currentCity, setCurrentCity] = useState<string>(import.meta.env.VITE_DEFAULT_CITY as string || 'helsinki')
  const [geoCityData, setGeoCityData] = useState<ICityData[] | []>([]);
  const [fetchingData, setFetchingData] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<ICityData | null>(null);

  useEffect(()=>{
    if(!currentCity)return
    return
    const fetchCityData = async ()=>{
      const citiesData:ICityData[] = await fetchGeoCityData(currentCity);
      setGeoCityData(citiesData);
      setFetchingData(false);
    }
    setFetchingData(true)
    fetchCityData();
  },[currentCity])

  return(
    <div className='app-container'>
      <CityMap 
         selectedCity={selectedCity}
      />
      <CityDetails 
        selectedCity={selectedCity} 
      />
      <SideBar 
        citiesData={geoCityData} 
        selectedCity={selectedCity}
        citySelection={(data)=>setSelectedCity(data)}
      />
    </div>
  )
}
  

export default App
