import React from 'react';
import './App.css';
import Output from './components/Output';
import Controls from './components/Controls';
import Inputs from './components/Inputs'
import Crypt from './base'

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

function sleep(ms : number) {
  return new Promise((solve : any,rej : any) => {
    setTimeout(() => {
      solve()
    }, ms)
  })
}

class App extends React.Component <{}, {
  values : Array<string>,
  text : Array<string>,
  result : string,
  runState : number
}> {

  constructor(props : any) {
    super(props)

    this.state = {
      values : [ "Meet me at elephant lake", "", "" ],
      text : [],
      result : "Waiting for input...",
      runState : -1
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

  waitValue = (value : number) => {
    return new Promise( async (solve : any, reject : any) => {
      while (this.state.runState !== value && !(this.state.runState === -2 || this.state.runState === -3)) {
        await sleep(50)
      }

      solve(this.state.runState === -2)
    })
  } 

  initSteps = async () => {
    var { e, n, d} = Crypt.generate(250)
    var Public : any, Private : any
    this.addLine("Generated E: " + e)
    
    let stopped = await this.waitValue(1)
    if (stopped) return;

    if (this.state.values[1] === "") {
      this.addLine("Generated Public: " + n)
      Public = n
    } else {
      this.addLine("Using defined public: " + this.state.values[1])
      Public = Crypt.encode(this.state.values[1])
    }

    stopped = await this.waitValue(2)
    if (stopped) return;

    if (this.state.values[2] === "") {
      this.addLine("Generated Private: " + d)
      Private = d
    } else {
      this.addLine("Using defined private: " + this.state.values[2])
      Private = Crypt.encode(this.state.values[2])
    }

    stopped = await this.waitValue(3)
    if (stopped) return;

    this.addLine("Encrypting '" + this.state.values[0] + "' with '" + Public + "'")
    let out = Crypt.encrypt(Crypt.encode(this.state.values[0]), Public, e)

    this.addLine("Output: " + out)

    stopped = await this.waitValue(4)
    if (stopped) return;

    this.addLine(`Decrypting with:  ${ (this.state.values[1] !== "") ? "the input " + this.state.values[1] : "the generated " + Private }`)

    stopped = await this.waitValue(5)
    if (stopped) return;

    const result = Crypt.decode(Crypt.decrypt(out, Private, Public))
    this.addLine("Decrypted as: " + result)
    
    this.setState({
      result : result
    })
  
  }

  buttonPressed = async (type : string) => {
    if (this.state.runState === -2 || this.state.runState === -3) {

      await this.setState({
        runState : -1
      })
    }

    if (type === "step") {
      await this.setState({
        runState : this.state.runState + 1
      })

      alert("State is " + this.state.runState)
    
      if (this.state.runState === 0) {
       this.initSteps() 
      }
    } else if (type === "run") {
      this.setState({
        runState : -3
      })

      this.initSteps()
    } else if (type === "stop") {
      this.setState({
        text: [],
        result : "Waiting for input...",
        runState : -2
      })
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
