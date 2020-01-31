import React from 'react';
import { Switch, Route } from 'react-router-dom';

import './App.css';
import Login from './components/Login';
import Header from './components/Header';
import PrivateRoute from './components/PrivateRoute';
import FriendsList from './components/FriendsList';
import AddNewFriend from './components/AddNewFriend';



function App() {
  return (
    <div className="App">
        <Header />
      <Switch>
        <Route path="/login" component={Login} />
        <PrivateRoute path="/friends" component={FriendsList} />
        <PrivateRoute path="/addfriend" component={AddNewFriend}/>
        
      </Switch>
    </div>
  );
}

export default App;
