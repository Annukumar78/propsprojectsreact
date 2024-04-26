import React from 'react'
import {UseForm} from "react-hook-form"

function AddressForm() {
    const { handleSubmit, } = useForm()

    const onSubmit =()=>{
        console.log()
    }
  return (
    <>
       <div className=''>
             <h2> Contact Form</h2>
            <from onSubmit={handleSubmit(onSubmit)}>
              <input
               type="text" 
               placeholder='Enter your city'
               name='fullname'
               />
              <input
               type="number" 
               placeholder='Enter your zipcode'
               name='code'
               />
              <input
               type="text" 
               placeholder='Enter your vilage'
               name='vilage'
              
               />
            </from>
    
    </div>
      
    </>
  )
}

export default AddressForm
