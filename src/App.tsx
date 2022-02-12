import React from 'react';
import './App.css';
import Output from './components/Output';
import Controls from './components/Controls';
import Inputs from './components/Inputs'

const style : any = {
  app : {
    display: "grid",
    gridTemplateRows : "70vh",
    gridTemplateColumns : "50% 50%",
    paddingTop : "10%"
  },

  appgrid : {
    display : "grid",
    gridTemplateRows : "6vh auto",
    gridTemplateColumns : "auto"
  }
}

function App() {
  return (
    <div className="App" style={style.app}>
      <Output></Output>
      <div style={style.appgrid}>
        <Controls></Controls>
        <Inputs></Inputs>
      </div>
    </div>
  );
}

export default App;
