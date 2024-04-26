import React from 'react'
import {useFrom, } from 'react-hook-form'
import classname from "classnames"

function Contact() {
    const {register, handleSubmit, errors} = useFrom()

    const onSubmit =(value)=>{
        console.log(value)
    }
  return (
    <>
       <div className=''>
            <from onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="fnameull">Email</label>
              <input
               type="Email" 
               placeholder='Enter your Email'
               name='fullname'
               className={classname("from-control",{"is-invalid": errors.email})}
               ref={register({
                required:"",
                minLenght:{
                    value:"",
                    message:""
                }
               })}
               />
              <label htmlFor="fnameull">Number</label>
              <input
               type="number" 
               placeholder='Enter your phone number'
               name='number'
               className={classname("from-control",{"is-invalid": errors.number})}
               ref={register({
                required:"",
                minLenght:{
                    value:"",
                    message:""
                }
               })}
               />
              <label htmlFor="fnameull">Alternat number</label>
              <input
               type="number" 
               placeholder='Enter your phone number'
               name='phone number'
               className={classname("from-control",{"is-invalid": errors.password})}
               ref={register({
                required:"",
                minLenght:{
                    value:"",
                    message:""
                }
               })}
               />
            </from>
            
    
    </div>
    </>
  )
}

export default Contact
