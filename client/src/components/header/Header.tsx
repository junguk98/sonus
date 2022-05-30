import React from 'react';
import Logo from './Logo';
import '../../styles/header.scss';
import { BsSearch, BsMoonFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
    <div className="header">
      <Link className="link" to="/">
        <Logo />
      </Link>
      <nav className="header-nav-left">
        <Link to="/" className="link menu-btn">
          Home
        </Link>
        <Link to="/top50" className="link menu-btn">
          Top 50
        </Link>
      </nav>
      <nav className="header-nav-right">
        <Link to="/search" className="link circle-btn">
          <BsSearch className="search" />
        </Link>
        <a className="circle-btn">
          <BsMoonFill className="moon" />
        </a>
        <Link to="/upload" className="link menu-btn">
          Upload
        </Link>
        <Link to="/profile/username" className="link">
          <BiUserCircle className="user-svg" />
        </Link>
      </nav>
    </div>
  );
};
export default Header;
