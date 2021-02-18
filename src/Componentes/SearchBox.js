import { useState } from "react";
import ResidentInfo from "./ResidentInfo"


const SearchBox = () => {
      const [ state1, setState1 ] = useState( ' ' )
      const [ state2, setState2 ] = useState( '' )

      const handleClick = (e)=> {
            setState1(e.target.value)
      }
      
      const handle = () =>{ 
            const element = (<ResidentInfo value={state1} />);
            // <ResidentInfo value={ state } />
            setState2(element)
      }


      return (
            <>
            <div className="header">
            {/* <LocationInfo /> */}
            </div>
            <div className="main">
            <h4 className="title">Busca Los Habitantes De Cada Dimension</h4>
            {/* <form onSubmit={ handleSubmit }> */}
                  <input 
                      type="text"
                      value={ state1 }
                      onChange={ handleClick }
                  />
            {/* </form> */}
            <button onClick={ handle } className="buton"> Search </button>
            </ div>
            {
                  state2
            }
            </>
      )
}

export default SearchBox;