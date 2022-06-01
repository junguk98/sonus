import React, { useCallback, useState } from 'react';
import Logo from 'components/header/Logo';
import 'styles/header.scss';
import { BsSearch, BsMoonFill } from 'react-icons/bs';
import { BiUserCircle } from 'react-icons/bi';
import { FiLogIn } from 'react-icons/fi';
import { Link } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { userState } from 'store';
import UserDrawer from '../drawers/UserDrawer';
import { useQuery } from 'react-query';
import { fetchUser } from 'apis/user';

const Header = () => {
  const user = useRecoilValue(userState);
  const [isVisible, setIsVisible] = useState(false);
  const onClose = useCallback(() => {
    setIsVisible((prev) => !prev);
  }, [isVisible]);

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

        {user ? (
          <>
            <Link to="/upload" className="link menu-btn">
              Upload
            </Link>
            <button className="user-btn" onClick={onClose}>
              <BiUserCircle className="user-svg" />
            </button>
            <UserDrawer onClose={onClose} visible={isVisible} />
          </>
        ) : (
          <>
            <Link to="/login" className="link">
              <FiLogIn className="user-svg" />
            </Link>
          </>
        )}
      </nav>
    </div>
  );
};
export default Header;
