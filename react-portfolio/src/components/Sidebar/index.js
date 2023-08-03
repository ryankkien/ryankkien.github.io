import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import './index.scss'

function Sidebar() {
  const [letterClass, setLetterClass] = useState('');

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass('text-animate-hover');
    }, 0);

    return () => clearTimeout(timer); // Clear the timer when the component is unmounted
  }, []); // An empty dependency array ensures this effect runs only once

  return (
    <div className="top-bar">
      <nav>
        <NavLink exact="true" activeClassName="active" to='/' className={letterClass}>
          🏠
          <span class="tooltip">home</span>
        </NavLink>
        <NavLink exact="true" activeClassName="active" className={`about-link ${letterClass}`} to='/about'>
          👤
          <span class="tooltip">about me</span>
        </NavLink>
        <NavLink exact="true" activeClassName="active" className={`about-link ${letterClass}`} to='/experience'>
          🛠️
          <span class="tooltip">experience</span>
        </NavLink>
        <NavLink exact="true" activeClassName="active" className={`contact-link ${letterClass}`} to='/contact'>
          📧
          <span class="tooltip">contact</span>
        </NavLink>
        <span className="divider">|</span>
        <ul>
          <li>
            <a target="_blank" rel="noreferrer" href="https://www.linkedin.com/in/ryan-kien-63019517b/">
              <FontAwesomeIcon icon={faLinkedin} color="8FC2E8" />
            </a>
          </li>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://github.com/ryankkien">
                    <FontAwesomeIcon icon={faGithub} color="8FC2E8" />
                </a>
            </li>
            <li>
                <a target="_blank"
                    rel="noreferrer"
                    href="https://twitter.com/ryankkien">
                    <FontAwesomeIcon icon={faTwitter} color="8FC2E8" />
                </a>
            </li>
        </ul>
    </nav>
    </div>

    );
  }

export default Sidebar;