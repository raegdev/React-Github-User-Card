import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    cards: []
  }

  componentDidMount(){
    //axios to pull data from github
    axios.get('https://api.github.com/users/Rae-Glazier')
      .then(res => {
        console.log(res);
      })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );

  }
}

export default App;
