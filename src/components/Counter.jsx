import React from 'react'
import { useState } from 'react';

function Counter() {
  
   let [counter, setCounter] = useState(15)

    function addValue(){
         counter = counter + 1;
        setCounter(counter);
    }

    function removeValue(){
       if(counter > 0){
        setCounter(counter-1);
       }else{
           return 0;
       }
    }

  return (
    <>
    <section style={{backgroundColor: "red",marginTop:"12px" , borderRadius:"5px", border: "2px solid black"}}>
      <h1>COUNTER VALUE</h1>
      <h1>Counter Value {counter}</h1>

      <button
      onClick={addValue}
      >Add Value</button>
      <br></br>
      <button
       onClick={removeValue}
      >Remove value</button>
      </section>
    </>
  )
}

export default Counter
