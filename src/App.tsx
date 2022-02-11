import React from 'react';
import logo from './logo.svg';
import './App.css';
import Output from './components/Output';

const style : any = {
  app : {
    display: "grid",
    gridTemplateRows : "70vh",
    gridTemplateColumns : "50% 50%",
    paddingTop : "10%"
  }
}

function App() {
  return (
    <div className="App" style={style.app}>
      <Output></Output>
    </div>
  );
}

export default App;
