import "./App.css";
import React from "react";
import MyList from "./components/List";

export class App extends React.Component {
  
  constructor(props){
    super(props);
    this.state={
      time : new Date(),
    }
  }

  timer 

  update(){
    this.setState({
      time : new Date()
    })
  }

  componentDidMount(){
    this.timer = setInterval(() => this.update(),1000)
  }

  componentWillUnmount(){
    clearInterval(this.timer)
  }

  render() {
    return <div className="App">
      <h1>{this.state.time.toLocaleDateString()+' '+ this.state.time.toLocaleTimeString()}</h1>
      <MyList/>
    </div>;
  }
}

export default App;
