import { useEffect, useState } from 'react'
import { LocationContainer } from './LocationContainer'

const ResidentContainer = ({ value, date }) => {
    
      console.log(value,date)
      useEffect ( () => {
            console.log(value)
      }, [value] )

      const find =  () => {
            console.log(date);
              if (!date?.results.length) {
                    return  
              }  
            let cont = 0;
            console.log(value);
                  for (let i = 0; i < date.results.length; i++) {
                  
                  console.log(date.results[i].name);
                  if (value == date.results[i].name) {
                        console.log(date.results[i].name);
                        return cont
                  }
                  cont +=1
            }
            return cont;           
            }

      const [ residents, setResidents ] = useState( [] )
      useEffect(  ( )=>{
            const miFuncAsync = async () => {
                  console.log(date);
                    if (!date?.results) {
                         return 
                     }
                  const arrayResident =[];
                  if(date.results) {
                         const num = await find();
                         console.log(num);
                        for (let i = 0; i < date.results[num].residents.length; i++) {
                              const urlData = date.results[num].residents[i]
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