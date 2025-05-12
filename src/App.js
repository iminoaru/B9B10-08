import React from 'react';
import './App.css';
import Header from './components/header/header';
import Home from './components/home/home';
import Footer from './components/footer/footer'
import Movie from './components/movie/movie';
import Login from './components/login/login';
import Booking from './components/booking/booking';
import Ticket from './components/ticket/ticket';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  // Link
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Header/>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/movie/:movie_id">
            <Movie />
          </Route>
          <Route path="/booking/:movie_id">
            <Booking />
          </Route>
          <Route path="/ticket/:booking_id">
            <Ticket />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
