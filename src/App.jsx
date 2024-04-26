import React from "react";
import "./App.css";
import Card from "./components/Card";
import Sdata from "./Sdata";
import Counter from "./components/Counter";
import Hooks from "./components/Hooks";
import From from "./components/UseContext/Form";
import {useFrom , FromProvider} from 'react-hook-form'

function App() {
  const method = useFrom()
  return (
    <>
      <Card 
      channel={Sdata[0].channel}
      btnText={Sdata[0].btnText}
      image={Sdata[0].image}
      title={Sdata[0].title}
      />

      <Card 
       channel={Sdata[1].channel}
       btnText={Sdata[1].btnText}
       image={Sdata[1].image}
       title={Sdata[1].title}
      />

      <Card 
      channel={Sdata[2].channel}
      btnText={Sdata[2].btnText}
      image={Sdata[2].image}
      title={Sdata[2].title}
      />
      <Card 
      channel={Sdata[3].channel}
      btnText={Sdata[3].btnText}
      image={Sdata[3].image}
      title={Sdata[3].title}
      />
      <Card 
      channel={Sdata[4].channel}
      btnText={Sdata[4].btnText}
      image={Sdata[4].image}
      title={Sdata[4].title}
      />
      <Counter />
      <Hooks />
      <FromProvider {...method}>
        <From mrthod={method} />
      </FromProvider>
     
    </>
  );
}

export default App;
