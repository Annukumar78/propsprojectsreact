import React from 'react'

import {useForm, useFieldArray} from 'react-hook-form'

const UserInformation = (props)=> {
  const {register, control} = props;
  const{append, fields, remove} = useFieldArray({
    control,
    name:"users"
  });
   return (
 
    <div>
     <div>
      { fields.map((item,index) =>(
        <div key={item.id}>
        <label htmlFor="username">Username</label>
        <input
        type='text'
        className='from-control'
        placeholder='Enter user name'
        id='username'
        name={`users[${index}].username`}
        ref={register()}
        defaultValue={item.username}
        />
        <label htmlFor="username">Email</label>
        <input
        type='email'
        className='from-control'
        placeholder='Enter user email'
        id='username'
        name={`users[${index}].email`}
        ref={register()}
        defaultValue={item.email}
        />
        <label htmlFor="username">Password</label>
        <input
        type='password'
        className='from-control'
        placeholder='Enter user password'
        id='username'
        name={`users[${index}].password`}
        ref={register()}
        defaultValue={item.password}
        />
        <select
         className='btn'
        id='state'
        ref={register()}
        name={`users[${index}].state`}
        defaultValue={item.state}
        >
            <label>Select Your State</label>
            <option>Delhi</option>
            <option>madhayaPredesh</option>
            <option>Hariyana</option>
            <option>Haridwar</option>
        </select>
        <button className='btn bg-red-600' onClick={() =>remove(index)}>Delete</button>
     </div>
      ))     
       }
    
            <button
            type='add'
            onClick={() =>append({
                username:"",
                email:"",
                password:"",
                state:"",
            })}
            >
             Add User
            </button>
            </div>
    </div>

    );
};

function RegisterDynamicFrom() {
    const{register, handleSubmit , control} = useForm()

    const basicInfoMation = (
     <div>
        <div>
            <label htmlFor="username">Username</label>
            <input
            type='text'
            className='from-control'
            placeholder='Enter user name'
            id='username'
            name='username'
            ref={register}
            />
            <label htmlFor="username">Email</label>
            <input
            type='email'
            className='from-control'
            placeholder='Enter user email'
            id='username'
            name='email'
            ref={register}
            />
            <label htmlFor="username">Password</label>
            <input
            type='password'
            className='from-control'
            placeholder='Enter user password'
            id='username'
            name='password'
            ref={register}
            />
        </div>
    </div>
    
    )

    const onSubmit =(data) =>{
        console.log(data)
    }
  return (
    <div>

       
      <from onSubmit={handleSubmit(onSubmit)}>
        {basicInfoMation}
        <UserInformation register={register}  control={control}/>
      </from>
    </div>
  )
}

export default RegisterDynamicFrom
