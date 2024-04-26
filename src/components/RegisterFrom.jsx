import React from "react";
import { useForm } from "react-hook-form";
import classnames from "classnames";

function RegisterFrom(errors) {
  const { register, handleSubmit  } = useForm();

  //mode:"onChange" 
  //mode:"onTouch"
  //mode: "blur"
  //mode:"onClick"

  const onSubmit = (pass) =>{
    console.log(pass)
  }

  return (
    <>
      
    </>
  );
}

export default RegisterFrom;
