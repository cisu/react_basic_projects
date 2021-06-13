import React, {useState, useRef, useEffect} from 'react';
import {FaBars, FaTwitter} from 'react-icons/fa';
import {links, social} from './data';
import logo from './logo.svg';

const Navbar = () => {
  const [showLinks, setShowLinks] = useState(false);

  const linksContainerRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    // check the current height on links
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight);

    if (showLinks) {
      // set the current height on links in links-container if showLinks=true
      linksContainerRef.current.style.height = `${linksHeight}px`;
    } else {
      // if showLinks=false then set the current height=0px remember in css need to set in links-container class  {height: auto !important;} otherwise the links they not display in digger screen size
      linksContainerRef.current.style.height = `0px`;
    }
  }, [showLinks]);

  return (
    <nav>
      <div className='nav-center'>
        <div className='nav-header'>
          <h1>Logo</h1>
          <button
            className='nav-toggle'
            onClick={() => setShowLinks(!showLinks)}
          >
            <FaBars />
          </button>
        </div>

        <div className='links-container' 
        ref={linksContainerRef}
        >
          <ul className='links' 
          ref={linksRef}
          >
            {links.map(link => {
              const {id, url, text} = link;

              return (
                <li key={id}>
                  <a href={url}>{text}</a>
                </li>
              );
            })}
          </ul>
        </div>

        <ul className='social-icons'>
          {social.map(socialIcon => {
            const {id, url, icon} = socialIcon;
            return (
              <li key={id}>
                <a href={url}>{icon}</a>
              </li>
            );
          })}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
