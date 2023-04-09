import React from 'react';
import {
  faFacebook,
  faInstagram,
  faTwitter,
  faLinkedin,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const Footer = () => {
  return (
    <div className='flex flex-col items-center gap-3'>
      <ul className='socials flex gap-3 items-center'>
        {iconData.map(data => {
          return (
            <li key={data.id}>
              <a href=''>
                <FontAwesomeIcon width='30' icon={data.icon} />
              </a>
            </li>
          );
        })}
      </ul>
      <p>Made with ❤️ by Gulam Anas</p>
      <p>Copyright © 2023</p>
    </div>
  );
};

const iconData = [
  { id: 1, icon: faFacebook },
  { id: 2, icon: faInstagram },
  { id: 3, icon: faTwitter },
  { id: 4, icon: faLinkedin },
];

export default Footer;
