import logo from './logo.svg';
import './App.css';
import React from "react";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {response: {}};
  }

  callAPI() {
      // Calling Express API Here
      fetch("/api")
          .then(res => res.json())
          .then(res => {
            this.setState({response: res});
          })
  }

  componentWillMount() {
      this.callAPI();
  }

  render(){
    return (
      <div className="App">
        <h2 className="App-intro">{this.state.response.message}</h2>
      </div>
    );
  }

}

export default App;
