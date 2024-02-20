import React from "react";
import { FaCalculator ,FaList  , FaCog} from "react-icons/fa";
import "./Navbar.css"; // Create a CSS file for styling.
import { Link } from 'react-router-dom';
import Profile from './Profile';
// import 'bootstrap/dist/css/bootstrap.min.css';

function Navbar() {
  
  const user = {
    username: 'John Doe',
    profilePicture: './profile.jpg',
  };


  return (
    <div className="navbar">
      <div className="nav-item">
        <Link to="/" className="nav-item">
          <FaCalculator className="icon" />
          Cashier
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/Edit" className="nav-item">
         
          <FaList className="icon"/>
          Edit
        </Link>
      </div>
      <div className="nav-item">
        <Link to="/Setting" className="nav-item">
        <FaCog className="icon" />
          Setting
        </Link>
      </div>
      <div className="nav-item">
      <Link to="/ChatGPT" className="nav-item">
        <img src="./ChatGPT-Emblem.png" alt="ChatGPT Emblem" />
        </Link>
      </div>
      <div className="nav-item">
      <Profile username={user.username} profilePicture={user.profilePicture} />
    </div>
    </div>
    
  
  );
}

export default Navbar;
