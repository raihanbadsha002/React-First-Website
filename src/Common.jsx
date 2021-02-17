import React from 'react';
import { NavLink } from 'react-router-dom';

const Common = (props) => {
    return ( 
        <>
            <section id="header">
                <div className="container-fluid">
                <div className="row ">
                    <div className="col-10 mx-auto">
                     <div className="row d-flex align-items-center justify-content-center">
                        <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                          <h1> {props.pageHeadLine}</h1>
                          <h5 className="my-3">
                              We are the team of talented developer making responsive website
                          </h5>
                          <div className="mt-3">
                              <NavLink to={props.visit} className="btn btn-get-started"> {props.btnName} </NavLink>
                          </div>
                       </div>

                       <div className="col-lg-6 order-1 order-lg-2 header-image">
                          <img 
                          src={props.imgSrc} 
                          className="img-fluid animated" 
                          alt="Common img"
                          />
                       </div>
                    </div>  
                </div>
                </div>
                </div>
            </section>
        </>
    );
};

export default Common;