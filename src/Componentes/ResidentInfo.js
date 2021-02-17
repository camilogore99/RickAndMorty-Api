import React, { useState } from 'react'
import LocationInfo from './LocationInfo';
import ResidentContainer from './ResidentContainer';

const ResidentInfo = () => {
      const [ date, setDate ] = useState( [] ) 
      const url = ` https://rickandmortyapi.com/api/location`;

      const Apiasync = async() => {
            const response = await fetch(url)
            const data = await response.json();
            setDate(data)
      }
      Apiasync()
      return (
            <>
            <ResidentContainer date={ date } />
            <LocationInfo data={ date } />
            </>
      )
}

export default ResidentInfo;