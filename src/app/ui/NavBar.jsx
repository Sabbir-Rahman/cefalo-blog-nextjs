'use client';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBlog } from '@fortawesome/free-solid-svg-icons';
import '../public/css/navbar.css';
import { useState } from 'react';
import NavLinks from './nav-links';

const NavBar = () => {
  const [isSmallMenuOpen, setIsSmallMenuOpen] = useState(false);
  return (
    <div>
      <nav className="navbar-bg">
        <div className="navbar-flex">
          <FontAwesomeIcon icon={faBlog} style={{ color: '#35a29f' }} />
          <span className="navbar-logo-text">&nbsp;Bloggie</span>

          <div className="flex md:order-2">
            <label className="relative inline-flex items-center cursor-pointer">
              <input type="checkbox" value="" className="sr-only peer" />
              <div className="change-theme-btn peer peer-checked:after:border-white after:content-[''] peer-checked:bg-teal peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800"></div>
              <span className="mr-5 ml-3 text-sm font-medium text-gray-900 dark:text-gray-300">
                Change Theme
              </span>
            </label>
            <button
              onClick={() => console.log('clicked')}
              type="button"
              className="navbar-sm-btn"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <button
              onClick={() => setIsAuthOngoing(true)}
              className="text-lg mt-1 ml-5  text-dark-teal dark:text-mint hover:underline"
            >
              Login
            </button>
          </div>
          <div
            className={`items-center justify-between ${
              !isSmallMenuOpen && 'hidden'
            } w-full md:flex md:w-auto md:order-1`}
          >
            <ul className="navbar-list">
              <NavLinks />
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
