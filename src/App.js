import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import { login, logout, selectUser } from './features/userSlice';
import { useDispatch, useSelector } from 'react-redux';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch(selectUser);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        // Logged In 
        console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        }));
      } else {
        //Logged Out
        dispatch(logout);
      }
    })

    return unsubscribe;
  }, []);

  return (
    <div className="app">
      <Router>
      {!user ? (
        <LoginScreen />
      ) : (
        <Switch>
          <Route path="/profile">
            <ProfileScreen />
          </Route>
          <Route exact path="/">
            <HomeScreen />
          </Route>
        </Switch>
      )}
      </Router>

    </div>
  );
}

export default App;