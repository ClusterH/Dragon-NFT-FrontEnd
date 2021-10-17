import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import WalletConnector from '../WalletConnection';

const Container = styled.div`
  width: 100%;

  .header {
    background-size: cover;
    height: auto;
    position: absolute;
    z-index: 9;
    left: 0;
    right: 0;
    top: 0;
  }
  .header .container {
    position: relative;
    z-index: 1;
  }
  .header-wrap {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 42px 0px;
  }
  .header-wrap .menu {
    display: none;
    position: absolute;
    width: 100%;
    right: 0;
    top: 100%;
    padding: 15px;
    background: #363636;
  }
  .header-wrap .menu.menu-active {
    display: block;
  }

  .address-string {
    font-family: 'Arial', sans-serif;
    color: #e1c55b;
    font-size: 20px;
    line-height: 23px;
    position: absolute;
    right: 0;
    top: 45px;
    padding: 0 13px 0;
  }
  .logoImg {
    width: 230px;
  }

  @media (min-width: 768px) {
    .header-wrap .nav-toggle {
      display: none;
    }
    .header-wrap .menu {
      display: flex;
      background: none;
      position: static;
      padding: 1px 0px 1px 7px;
      align-items: center;
    }

    .navbar-brand {
      width: auto;
    }
    .header-wrap .menu li {
      padding-right: 38px;
      padding-left: 38px;
    }
    .header-wrap .menu li:last-child {
      padding-right: 0;
    }
  }

  .header-wrap .menu a {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.25px;
    line-height: 1.3;
    font-family: 'Cinzel', serif;
    color: #fff;
  }
  .header-wrap .menu a:hover {
    color: #ffd58c;
  }
  .nav-link a.active {
    color: #ffd58c;
  }

  .header-wrap .nav-toggle {
    font-size: 1.8rem;
    font-weight: 700;
    letter-spacing: 0.25px;
    line-height: 1.3;
    font-family: 'Cinzel', serif;
    display: flex;
    align-items: center;
    justify-content: center;
    color: darkgoldenrod;
  }

  .header-wrap .nav-toggle svg {
    width: 30px;
    height: 30px;
    margin-right: 8px;
  }

  @media (max-width: 767px) {
    .header-wrap {
      padding: 15px 0px;
    }
    .header {
      background: #100d0d;
      position: fixed;
    }

    .header .navbar-brand {
      width: 77px;
    }
    .nav-icon1 {
      width: 24px;
      display: flex;
      align-items: center;
    }
    .nav-icon1 span[data-v-03265654] {
      background-color: #e6b670;
      border-radius: 2px;
      content: '';
      position: absolute;
      top: 35px;
      right: 16px;
      width: 24px;
      height: 4px;
      transition: all 0.2s ease-in-out;
    }

    .nav-icon1 span:after {
      background-color: #e6b670;
      border-radius: 2px;
      content: '';
      height: 4px;
      width: 24px;
      position: absolute;
      top: 8px;
    }
    .nav-icon1 span:before {
      background-color: #e6b670;
      border-radius: 2px;
      content: '';
      height: 4px;
      width: 24px;
      position: absolute;
      top: -8px;
    }

    .header-wrap .menu {
      position: fixed;
      text-align: right;
      width: 227px;
      flex-flow: wrap;
      right: 0;
      top: 88px;
      height: 100%;
      background: #100d0d;
    }
    .header-wrap .menu li {
      padding: 18px 0;
      width: 100%;
    }
    .header-wrap .menu a {
      font-size: 4vw;
    }
  }

  @media only screen and (min-width: 768px) and (max-width: 1024px) {
    .header .logo-img {
      width: 100px;
    }
    .header-wrap .menu a {
      font-size: 1.3rem;
    }
    .header-wrap .menu li {
      padding-right: 10px;
      padding-left: 10px;
    }
    .header-wrap {
      padding: 25px 9px;
    }
    .navbar-brand {
      width: 100px;
    }
  }

  @media only screen and (min-width: 1025px) and (max-width: 1326px) {
    .header-wrap .menu li {
      padding-right: 15px;
      padding-left: 15px;
    }
    .home-banner {
      padding: 200px 0 80px;
    }

    .header-wrap .menu li:last-child {
      padding-right: 0;
    }

    .header-wrap .nav-toggle {
      font-size: 1.8rem;
      font-weight: 700;
      letter-spacing: 0.25px;
      line-height: 1.3;
      font-family: 'Cinzel', serif;
      display: flex;
      align-items: center;
      justify-content: center;
      color: darkgoldenrod;
    }
  }
`;

const Header = () => {
  return (
    <Container>
      <header className='header'>
        <div className='container'>
          <div className='header-wrap'>
            <a className='navbar-brand' href='/'>
              <img src='assets/images/logo.png' alt='logo' className='logoImg' />
            </a>
            <nav className='dropdown'>
              <a className='nav-toggle nav-icon1'>
                <span></span>
              </a>
              <ul className='menu'>
                <li className='nav-link'>
                  <NavLink to='/bank-vaults'>Bank Vaults</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/plains'>The Plains</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/inn'>The Inn</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/marketplace'>Marketplace</NavLink>
                </li>
                <li className='nav-link'>
                  <NavLink to='/rankings'>Rankings</NavLink>
                </li>
                <WalletConnector />
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </Container>
  );
};

export default Header;
