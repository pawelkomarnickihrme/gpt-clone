import React from 'react';
import MySVG from './UI/robot.svg';

function Header() {
  return (
    <header>
      <h1>CHAT GPT CLONE</h1>
      <img src={MySVG} alt="Robot" />
    </header>
  );
}

export default Header;
