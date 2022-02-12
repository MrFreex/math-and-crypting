import React from 'react';
import './App.css';
import Output from './components/Output';
import Controls from './components/Controls';
import Inputs from './components/Inputs'
import Crypt from './base'
import bigInt from 'big-integer';

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



class App extends React.Component <{}, {
  values : Array<string>,
  text : Array<string>,
  result : string
}> {

  constructor(props : any) {
    super(props)

    this.state = {
      values : [ "Meet me at elephant lake", "", "" ],
      text : [],
      result : "Processing..."
    }
  }

  valueCh = (num: number, text : string) => {
    let actual = this.state.values
    actual[num] = text
    this.setState({
      values : actual
    })
  }

  addLine = (line : string) => {
    var copy = this.state.text
    copy.push(line)
    this.setState({
      text: copy
    })
  }

  buttonPressed = (type : string) => {

    const message = 'Hello, World!';

// Generate Crypt keys
    const keys = Crypt.generate(250);

    if (type === "run") {
      var { e, n, d} = Crypt.generate(250)
      var Public : any, Private : any
      this.addLine("Generated E: " + e)

      if (this.state.values[1] === "") {
        this.addLine("Generated Public: " + n)
        Public = n
      } else {
        this.addLine("Using defined public: " + this.state.values[1])
        Public = bigInt(this.state.values[1])
      }

      if (this.state.values[2] === "") {
        this.addLine("Generated Private: " + d)
        Private = d
      } else {
        this.addLine("Using defined private: " + this.state.values[2])
        Private = bigInt(this.state.values[2])
      }

      this.addLine("Encrypting '" + this.state.values[0] + "' with '" + Public + "'")
      let out = Crypt.encrypt(Crypt.encode(this.state.values[0]), Public, e)

      this.addLine("Output: " + out)

      this.addLine(`Decrypting with:  ${ this.state.values[1] !== "" ? "the input " + this.state.values[1] : "the generated " + Private }`)

      this.addLine("Decrypted as: " + Crypt.decode(Crypt.decrypt(out, Private, Public)))
    }
  }

  render(): React.ReactNode {
    return (
      <div className="App" style={style.app}>
        <Output lines={this.state.text} result={this.state.result} ></Output>
        <div style={style.appgrid}>
          <Controls cb={this.buttonPressed}></Controls>
          <Inputs valueCh={this.valueCh}></Inputs>
        </div>
      </div>
    );
  }  
}

export default App;
