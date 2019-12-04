import React from 'react';
// import logo from './logo.svg';
import './App.css';
import axios from 'axios';
import styled from 'styled-components';

const Title = styled.h1`
  font-size: 2em;
  text-align: center;
  color: palevioletred;
`;

const Header = styled.div`
  padding: 4em;
  background: papayawhip;
  margin: 0 2%;
`;

const Card = styled.div`
  padding: 4em;
  background: lightgrey;
  margin: 2%
`;

const Follower = styled.div`
  margin: 10%;
  padding: 5%;
  text-align: center;
  background: lightblue;
  
`;

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
        <Header>
         <Title> Github User Card</Title>
        </Header>
        
        <Card>
          <img width='300px' src={this.state.userCard.avatar_url} key={this.state.userCard.id} alt={this.state.userCard.login} />
          <h2>Name: {this.state.userCard.name}</h2>
          <h4>Username: {this.state.userCard.login} </h4>
          <h4>Location: {this.state.userCard.location}</h4>
          <h4>Bio: {this.state.userCard.bio}</h4>
        </Card>
        
        <Card>
          {this.state.followerCard.map ( (follower) => {
            return(
              <Follower>
                <img width='200px' src={follower.avatar_url} key={follower.id} alt={follower.login}/>
                <h2>Username: {follower.login}</h2>
              </Follower>
              )
            
          })}
        </Card>
       

      </div>
    );

  }
}

export default App;
