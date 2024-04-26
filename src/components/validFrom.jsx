import React from 'react'
import {useFrom} from 'react-hook-form'
import classNames from 'classnames'

function validFrom() {
    const{Register, HandleSubmit, errors, getValues} = useFrom({})

    const onSubmit =(valid) =>{
        console.log(valid)
    }
  return (
    <div>
      <form onSubmit={HandleSubmit(onSubmit)}>
      <label htmlFor=''> Email</label>
      <input 
       type='email'
       placeholder='Enter Email'
       className={classNames("form-control", {"is-invalid":errors.email})}
       name='email'
       id='email'
       ref={Register({
        required:"this feild is required",
        pattern:{
           value:"/\b[w.-]+@[w.-]+.w{2,4}\b/",
           message:"this is invalid email"
        }
       })}
      />
      {errors.email && (<div className='invalid-feedback'>{errors.email.message}</div>)}

      <label htmlFor=''> Password</label>
      <input 
       type='password'
       placeholder='Enter your password'
       className={classNames("form-control", {"is-invalid":errors.password})}
       name='password'
       id='pass'
       ref={Register({
        required:"this feild is required",
        pattern:{
           value:"/\b[w.-]+@[w.-]+.w{2,4}\b/",
           message:"this is  not a invalid password"
        }
       })}
      />
      {errors.password && (<div className='invalid-feedback'>{errors.password.message}</div>)}

      <label htmlFor=''> Conform Password</label>
      <input 
       type='password'
       placeholder='Enter confirm password'
       className={classNames("form-control", {"is-invalid":errors.password})}
       name='password'
       id='password'
       ref={Register({
        required:"this field is required",
        validate:value =>value === getValues("password") || "password does not match",
        pattern:{
           value:"/\b[w.-]+@[w.-]+.w{2,4}\b/",
           message:"this is  not a confirm password"
        }
       })}
      />
      {errors.email && (<div className='invalid-feedback'>{errors.password.message}</div>)}
      <button type="submit"> Create Account</button>
      </form>
    </div>
  )
}

export default validFrom
