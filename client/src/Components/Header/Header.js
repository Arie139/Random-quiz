import React, { useState, useEffect } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

// CSS
import './Header.css';

// Asset
import logo from '../../images/logo.png';

function Header({ userToken, setUserToken }) {
  const { pathname } = useLocation();
  console.log(pathname);
  const [currentPathname, setCurrentPathname] = useState(pathname);
  // logout and remove token from localStorage
  const logout = () => {
    localStorage.removeItem('token');
    setUserToken(null);
  };
  const [showNav, setShowNav] = useState(false);
  const handleClick = () => setShowNav(!showNav);

  useEffect(() => {
    if (currentPathname !== pathname) {
      setShowNav(false);
    }
  }, [currentPathname, pathname]);

  const guestLink = (
    <div className='nav' id={showNav ? '' : 'hide'}>
      <NavLink to='/'>
        <span>Home</span>
      </NavLink>
      <NavLink to='login'>
        <span className='button'>Login</span>
      </NavLink>

      <NavLink to='signup'>
        <span className='button'> Signup</span>
      </NavLink>
    </div>
  );

  const authLink = (
    <div className='nav' id={showNav ? '' : 'hide'}>
      <NavLink to='/'>
        <span>Home</span>
      </NavLink>
      <NavLink to='quiz'>
        <span>Start Quiz</span>
      </NavLink>
      <NavLink to='results'>
        <span>Results</span>
      </NavLink>
      <NavLink to='leaderboard'>
        <span>Leaderboard</span>
      </NavLink>

      <NavLink to='!#' onClick={logout}>
        <span className='button'>Logout</span>
      </NavLink>
    </div>
  );

  return (
    <div className='fixed'>
      <div className='header'>
        <img src={logo} alt='Random Quiz' />
        <div className='menu'>
          <div
            onClick={handleClick}
            className='mobile-navbar'
            id={showNav ? '' : 'active'}
          >
            {showNav ? (
              <i className='far fa-window-close'></i>
            ) : (
              <i className='fas fa-bars'></i>
            )}
          </div>
          {userToken !== null ? authLink : guestLink}
        </div>
      </div>
    </div>
  );
}

export default Header;
