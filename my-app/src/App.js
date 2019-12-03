import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';

class App extends React.Component {

  state = {
    userCard: [],
    followerCard: []
  }

  componentDidMount(){
    console.log('cDM is running')
    //axios to pull data from github
    axios.get('https://api.github.com/users/Rae-Glazier')
      .then(res => {
        console.log(res);

        this.setState({ userCard: res.data });
      });

    axios.get('https://api.github.com/users/Rae-Glazier/followers')  
      .then(res => {
        this.setState({ followerCard: res.data })
      })
  }

  render() {
    
    return (
      <div className="App">
        <header className="App-header">
         <h1> Github User Card</h1>
        </header>
        
        <div className='user-card'>
          <h2>Name: {this.state.userCard.name}</h2>
          <h3>Username: {this.state.userCard.login} </h3>
          <h3>Location: {this.state.userCard.location}</h3>
          <h3>Bio: {this.state.userCard.bio}</h3>
        </div>
        
        <div className='follower-card'>
          {this.state.followerCard.map ( (follower) => {
            return(
              <>
                <h2>Name: {follower.name}</h2>
                <h3>Username: {follower.login} </h3>
                <h3>Location: {follower.location}</h3>
                <h3>Bio: {follower.bio}</h3>
              </>
              )
            
          })}
        </div>
       

      </div>
    );

  }
}

export default App;
