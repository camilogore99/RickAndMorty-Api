export const LocationContainer = ( { residents } ) => {
      return(
            <>
            <div className="row">
            { residents &&
                  residents.map( ( res ) => {
                        return(
                              
                              <div classname="row card col-sm-4 col-md-6 col-lg-6">
                                 {/* <div className="card-body col-md-12"> */}
                                       <div className="row  marg col-md-12 col-lg-12" >
                                             <div className="col-md-6" >
                                                   <img  style={{width: '100%'}} className="image" alt=""src={res.image}/>
                                            </div>
                                            <div className ="info-card col-md-6">
                                                    <h2>{ res.name }</h2>
                                                    <h6> { res.species }</h6>
                                                     <p> { res.origin.name } </p>
                                                     <p> Location: { res.locationname } </p>
                                                     <p>first seen </p>
                                                     <p>anatomy park </p>
                                           </div>
                                      </div>
                                {/* </div> */}
                          </div>
                    
                        )
                  } )
            } 
            </div>
            </>

      )
}