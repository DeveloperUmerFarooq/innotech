import React from 'react'
import './App.css'
export default function Contact() {
  return (
    <div className='container-fluid' id='contact'>
       <div className='rounded-5' id="form" >
          <form className='row d-flex flex-column' action="https://api.web3forms.com/submit" method="POST" id='child'>
          <input type="hidden" name="access_key" value="26429c7f-984e-444c-b499-b756a3fa93f0"/>
              
              <label htmlFor="name" className="form-label col-9">Name</label>
              
              
              <input type="text" className="form-control w-100" id="name" name="name"  placeholder='Enter Your Name' required/>
          
              <label htmlFor="email" className="form-label">Email address</label>
              <input type="email" className="form-control mb-3 w-100" id="email" name="email"  placeholder='Enter Your Email' required/>
      
              <div className='d-flex'>
              <label htmlFor="phone" className="form-label">Phone</label>
              <p className="fs-6 ms-auto mt-auto text-light-emphasis">Optional</p>
              </div>
              <input type="text" className="form-control mb-3 w-100" id="phone" name="phone"  placeholder='Enter Your Phone no.'/>

              <div className='d-flex'>
              <label htmlFor="time" className="form-label">Best time to contact you?</label>
              <p className="ms-auto fs-6 mt-auto text-light-emphasis">Optional</p>
              </div>
              <input type="text" className="form-control mb-3 w-100" id="time" name="time" placeholder='Enter Your Best Time'/>
            
              <div className='d-flex'>
              <label htmlFor="phone" className="form-label">Your Message:</label>
              <p className="fs-6 ms-auto mt-auto text-light-emphasis">Max(250)</p>
              </div>
              <textarea type="textarea" className="form-control w-100" id="msg" name='msg' placeholder='Your Msg here' rows={4} required maxLength={250}/>
            
            <center>
              <button type="submit" className="btn btn-primary mt-5" style={{'backgroundColor':'var(--secondary)'}}>Submit</button>
              </center>
          </form>
        </div>
    </div>
  )
}
