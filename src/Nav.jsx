import React from 'react';
import './Nav.css';

const Nav = ({ onNavClick }) => {
  return (
    <>
      <div className='divId'>
        <h1>Drona's</h1>
        <ul>
            <li onClick={() => onNavClick('home')}>Home</li>
            <li onClick={() => onNavClick('about')}>Who We?</li>
            <li onClick={() => onNavClick('products')}>Our Products</li>
            <li onClick={() => onNavClick('contact')}>Contact</li>
        </ul>
      </div>
    </>
  );
};

export default Nav;
