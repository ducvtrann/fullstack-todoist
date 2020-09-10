import React from 'react';
import Logo from '../../assets/images/logo.png';
import { FaPizzaSlice } from 'react-icons/fa';

export const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo">
          <img src={Logo} alt="Todoist" />
        </div>
        <div className="settings">
          <ul>
            <li>+</li>
            <li>
              <FaPizzaSlice />
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
};
