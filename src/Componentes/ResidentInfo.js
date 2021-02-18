import React, { useEffect, useState } from 'react'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';

const ResidentInfo = ( { value } ) => {

      const [ date, setDate ] = useState( [] ) 
      const url = ` https://rickandmortyapi.com/api/location`;

      const Apiasync = async() => {
            const response = await fetch(url)
            const data = await response.json();
            setDate(data)
      }
      
      useEffect(()=>{
            Apiasync()
      },[]);

      return (
            <>
            <ResidentContainer value={ value }  date={ date } />
            <LocationInfo data={ date } />
            </>
      )
}

export default ResidentInfo;