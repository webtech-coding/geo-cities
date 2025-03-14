import { useEffect, useState, type FC, type ReactElement } from 'react'

import SideBar from './components/sidebar';
import CityMap from './components/cityMap';
import { fetchGeoCityData } from './api/api';
import { ICityData } from './utils/interfaces';

const App:FC = ():ReactElement=> {
  const [currentOffset, setCurrentOffset] = useState<number>(0)
  const [geoCityData, setGeoCityData] = useState<ICityData[] | []>([]);
  const [loading, setLoading] = useState<boolean>(false);
  const [selectedCity, setSelectedCity] = useState<ICityData | null>(null);

  useEffect(()=>{ 
    const fetchCityData = async ()=>{
      const data:ICityData[] = await fetchGeoCityData(currentOffset);
      const citiesData = [...geoCityData, ...data]
      //when cities are fetched, make the first one as selected city.
      setGeoCityData(citiesData);
      setLoading(false);
      setSelectedCity(citiesData[0])
    }
    setLoading(true)
    fetchCityData();
  },[currentOffset])

  return(
    <div className='app-container'>
      <CityMap 
         selectedCity={selectedCity}
      />
      <SideBar 
        citiesData={geoCityData} 
        selectedCity={selectedCity}
        citySelection={(data)=>setSelectedCity(data)}
        fetchMoreCities={()=>setCurrentOffset(currentOffset + 5)}
        loading={loading}
        currentOffset={currentOffset}
      />
    </div>
  )
}
  

export default App
