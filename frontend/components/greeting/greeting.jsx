import React from 'react';
import { Link } from 'react-router';

const userGreeting = (currentUser, logout) => (
  <div>
    <h1>Welcome { currentUser.username }</h1>
    <button onClick={ logout }>Logout</button>
  </div>
);

const sessionLinks = () => {
  return (
    <div>
    <Link to="/login">Login</Link>
    <br/>
    <Link to="/signup">Signup</Link>
  </div>
  );
};

const Greeting = ({ currentUser, logout }) => {
  return(
    currentUser ? userGreeting(currentUser, logout) : sessionLinks()
  );
};

export default Greeting;
