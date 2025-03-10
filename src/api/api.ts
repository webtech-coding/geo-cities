/**
 * fetch the city by name
 * @param cityName 
 * @returns 
 */
import { ICityData } from "../utils/interfaces";
export const fetchGeoCityData = async (cityName:string):Promise<ICityData[]>=>{
    const url = new URL(`https://${import.meta.env.VITE_GEO_HOST}/v1/geo/cities`);
    const options = {
        method:"GET",
        headers:{
            'x-rapidapi-key': import.meta.env.VITE_GEO_HOST_KEY as string,
		    'x-rapidapi-host': import.meta.env.VITE_GEO_HOST as string
        }
    }
   const response = await fetch(url, options);

   if(!response.ok){
        throw new Error(`Unable to fetch request `)
   }

   const responseData =  await response.json();
   

   const cityData: ICityData[] = responseData.data
   return cityData;
}