import React from 'react';
import Svdata from './Svdata';
import Card from './Card';

const Service = () => {
    return ( 
        <>  
          <div className="my-5 d-flex justify-content-center">
             <div className="bottom-underline">
                 <h1 className="text-center servicesTxt"> Our Services</h1>
             </div>   
          </div>
            <div className="container-fluid">
                <div className="row mb-5">
                <div className="col-10 mx-auto">
                    <div className="row gy-3"> 
                        {
                            Svdata.map((val, ind) => {
                                return <Card key={ind} 
                                    imageSrc={val.image}
                                    imageTitle={val.title}
                                />
                            })
                        }
                       </div>
                      </div>
                    </div>
                </div>
            
        </>
    );
};

export default Service;