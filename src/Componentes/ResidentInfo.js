import React, { useEffect, useState } from 'react'
import { LocationContainer } from './LocationContainer';
import LocationInfo from './LocationInfo';

const ResidentInfo = () => {

      const [ date, setDate ] = useState( false ) 
      const [ residents, setResidents ] = useState( [] )
      const url = ` https://rickandmortyapi.com/api/location`;

      useEffect( (  )=>{
            const Apiasync = async() => {
                  const response = await fetch(url)
                  const data = await response.json();
                  setDate(data)
            }
            Apiasync()
      },[])
      
      useEffect(  ( )=>{
            const miFuncAsync = async () => {
                  const array = [];
                  if(date.results) {
                        for (let i = 0; i < date.results[0].residents.length; i++) {
                              const urlData = date.results[0].residents[i]
                              const respue = await fetch(urlData)
                              const data = await respue.json();
                              array.push( data )
                        }
                        setResidents(array)
                  }
            }
            miFuncAsync();
      }, [date] );
      return (
            <>
            <LocationInfo data={ date } />
            <LocationContainer residents={residents}/>
            </>
      )
}

export default ResidentInfo;