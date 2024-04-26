import React from "react";
import BasicFrom from "./BasicFrom";
import AddressForm from "./AddressForm";
import Contact from "./Contact";

const From = () =>{
    const {method} = props;
   return (
    <>
    <from onSubmit={method.handleSubmit(onSubmit)}>
    <BasicFrom />
    <AddressForm />
    <Contact />
    <button type="submit"> Submit From </button>
    </from>
    </>
   )
}

export default From