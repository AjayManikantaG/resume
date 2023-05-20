import { FaGithub, FaLinkedinIn, FaCodepen } from 'react-icons/fa';
import { SiCodesandbox } from 'react-icons/si';

const Footer = () => {
  return (
    <footer className='footer'>
      <div className='footer-container'>
        <div className='footer-socialmedia--icons'>
          <ul>
            <li>
              <a href='https://github.com/AjayManikantaG' target='_blank'>
                <FaGithub size={25} />
              </a>
            </li>
            <li>
              <a
                href='https://www.linkedin.com/in/ajay-manikanta-17b731110/'
                target='_blank'
              >
                <FaLinkedinIn size={25} />
              </a>
            </li>
            <li>
              <a href='https://codepen.io/ajay_krishna' target='_blank'>
                <FaCodepen size={25} />
              </a>
            </li>
            <li>
              <a
                href='https://codesandbox.io/u/ajaykrishna1123'
                target='_blank'
              >
                <SiCodesandbox size={25} />
              </a>
            </li>
          </ul>
        </div>
        <p>Copyright © 2023 Ajay Manikanta. All rights reserved</p>
      </div>
    </footer>
  );
};

export default Footer;
