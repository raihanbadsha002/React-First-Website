import React, { useState } from 'react'

const Contact = () => {

    const [data, setData] = useState({
          fullname: "",
          phone:"",
          email:"",
          message:"",  
    });
    
    const InputEvent = (event) => {
       const {name, value} = event.target;

       setData((preVal) => {
           return {
               ...preVal,
               [name] : value,
           };
       });
    };
    const formSubmit = (e) => {
       e.preventDefault();
       alert(`
       Name : ${data.fullname}
       Phone : ${data.phone}
       Email : ${data.email}
       Message : ${data.message}
               
       `);
    };
    
    return ( 
        <>
          <div className="my-5">
              <h1 className="text-center"> Contact Us</h1>
          </div>
          <div className="container">
             <div className="row d-flex justify-content-center">
               <div className="col-md-6 col-10 mb-5">
                  <form onSubmit={formSubmit}>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">FullName</label>
                        <input 
                            type="text" 
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="fullname"
                            value={data.fullname}
                            onChange={InputEvent}
                            placeholder="Enter your name" 
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">PhoneNumber</label>
                        <input 
                            type="number"
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="phone"
                            value={data.phone}
                            onChange={InputEvent}
                            placeholder="Enter your mobile number" 
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlInput1" class="form-label">Email address</label>
                        <input 
                            type="email"
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            name="email"
                            value={data.email}
                            onChange={InputEvent}
                            placeholder="name@example.com"
                        />
                    </div>
                    <div class="mb-3">
                        <label for="exampleFormControlTextarea1" class="form-label">Message</label>
                        <textarea 
                            type="email"
                            class="form-control" 
                            id="exampleFormControlInput1" 
                            rows="3"
                            name="message"
                            value={data.message}
                            onChange={InputEvent}
                          ></textarea>  
                     </div>
                     <div class="col-12">
                        <button class="btn btn-outline-primary" type="submit">Submit form</button>
                    </div>
                  </form>
               </div>
             </div>
          </div>
            
        </>
    );
};

export default Contact;