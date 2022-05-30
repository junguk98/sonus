import React from 'react';
import Logo from './Logo';
import '../../styles/header.scss';
import { BsSearch } from 'react-icons/bs';

const Header = () => {
  return (
    <div className="header">
      <Logo />
      <nav className="header-nav">
        <button>
          <BsSearch className="search" />
        </button>
      </nav>
    </div>
  );
};
export default Header;
