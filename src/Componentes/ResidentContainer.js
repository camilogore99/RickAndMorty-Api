import { useEffect, useState } from 'react'
import { LocationContainer } from './LocationContainer'

const ResidentContainer = ({ date }) => {
      const [ residents, setResidents ] = useState( [] )
      useEffect(  ( )=>{
            const miFuncAsync = async () => {
                  const arrayResident =[];
                  if(date.results) {
                        for (let i = 0; i < date.results[0].residents.length; i++) {
                              const urlData = date.results[0].residents[i]
                              const respue = await fetch(urlData)
                              const data = await respue.json();
                              arrayResident.push(data)
                        }
                        setResidents(arrayResident)
                  }
            }
            miFuncAsync();
      }, [date] )
      return ( 
            <LocationContainer residents={ residents } />
      )
}
export default ResidentContainer;