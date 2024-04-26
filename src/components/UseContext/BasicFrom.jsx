import React from 'react'
import classname from "classnames"
import {useFromContext} from 'react-hook-form'

function BasicFrom() {
    const{register, handleSubmit, errors} = useFromContext()

    const onSubmit =(value)=>{
        console.log(value)
    }
  return (
    <>
       <div className=''>
            <from onSubmit={handleSubmit(onSubmit)}>
              <label htmlFor="fnameull">FullName</label>
              <input
               type="text" 
               placeholder='Enter your name'
               name='fullname'
               className={classname("from-control",{"is-invalid": errors.fullname})}
               ref={register({
                required:"",
                minLenght:{
                    value:"",
                    message:""
                }
               })}
               />
              <label htmlFor="fnameull">Email</label>
              <input
               type="email" 
               placeholder='Enter your email'
               name='email'
               className={classname("from-control",{"is-invalid": errors.email})}
               ref={register({
                required:"",
                minLenght:{
                    value:"",
                    message:""
                }
               })}
               />
              <label htmlFor="fnameull">Password</label>
              <input
               type="password" 
               placeholder='Enter your password'
               name='password'
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

export default BasicFrom
