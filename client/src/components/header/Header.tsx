import React from 'react';
import Logo from './Logo';
import '../../styles/header.scss';
import { BsSearch, BsMoonFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="header-nav-left">
        <a className="menu-btn">Home</a>
        <a className="menu-btn">Top 50</a>
      </nav>
      <nav className="header-nav-right">
        <a className="circle-btn">
          <BsSearch className="search" />
        </a>
        <a className="circle-btn">
          <BsMoonFill className="moon" />
        </a>
        <a className="menu-btn">Upload</a>
        <a>
          <BiUserCircle className="user-svg" />
        </a>
      </nav>
    </div>
  );
};
export default Header;