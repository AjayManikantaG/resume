import { useState, useEffect } from 'react';

const Header = () => {
  const [isHamburgerActive, setIsHamburgerActive] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);

  useEffect(() => {
    setIsContentLoaded(true);
  }, []);

  return (
    <header className='header fadeInDown'>
      <div className='header-container'>
        <div className='header-container--left'>
          <a href='/resume/'>
            <img tabIndex={0} src='./AJ-logo__Lines.svg' alt='AJ Logo' />
            <img tabIndex={0} src='./Ajay_coding.gif' alt='AJ Logo' />
          </a>
          {/* <p>AJAY MANIKANTA</p> */}
        </div>
        <div className='header-container--right'>
          <nav className='header-navigation'>
            <ul>
              <li tabIndex={0}>About</li>
              <li tabIndex={0}>Experience</li>
              <li tabIndex={0}>Work</li>
              <li tabIndex={0}>Contact</li>
            </ul>
          </nav>
          <div className='header-resume-container'>
            <a
              target='_blank'
              href='./Resume.pdf'
              className='header-resume--btn'
            >
              RESUME
            </a>
          </div>
          <div className='header-mobile-navigation'>
            <div
              className={`menu-btn ${isHamburgerActive ? 'active' : ''}`}
              onClick={() => setIsHamburgerActive(!isHamburgerActive)}
            >
              <span></span>
            </div>

            {isContentLoaded && (
              <nav
                className={`header-mb-navigation ${
                  isHamburgerActive ? 'fadeInDown' : 'fadeOutUp'
                }`}
              >
                <ul>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    About
                  </li>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    Experience
                  </li>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    Work
                  </li>
                  <li
                    tabIndex={0}
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    Contact
                  </li>
                </ul>
                <div>
                  <a
                    target='_blank'
                    href='./Resume.pdf'
                    className='header-resume--btn'
                    onClick={() => setIsHamburgerActive(!isHamburgerActive)}
                  >
                    RESUME
                  </a>
                </div>
              </nav>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
