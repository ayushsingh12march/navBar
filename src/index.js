import React,{Component} from "react";
import ReactDOM from "react-dom";
import ParentNavbar from './components/ParentNavbar'
import "./styles.css";

class App extends Component {
  state={
    name :"Home"
  }
  changeName=(linkName)=>{
    this.setState({
      name :linkName
    })
  }
  render(){
  return (
    <div className="App">
      <ParentNavbar changeName={this.changeName}/>
      <h1>Hello {this.state.name}</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
