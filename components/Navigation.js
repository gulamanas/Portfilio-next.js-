import React, { useState } from 'react';
import Image from 'next/image';
import logo from '../assets/ga.png';

const Navigation = () => {
  const [nav, setNav] = useState(false);

  const handleResponsive = () => {
    setNav(!nav);
  };

  return (
    <nav className='flex justify-around items-center h-16 bg-white shadow-lg sticky top-0'>
      <div className='w-10 overflow-hidden '>
        <Image src={logo} alt='Logo' width='auto' height='auto' />
      </div>
      <div
        className='navbar sm:hidden cursor-pointer'
        onClick={handleResponsive}
      >
        <div className='div w-6 h-1 bg-red-500 m-1'></div>
        <div className='div w-6 h-1 bg-red-500 m-1'></div>
        <div className='div w-6 h-1 bg-red-500 m-1'></div>
      </div>
      <ul
        id='listItems'
        className={`fixed top-16 left-0 w-full shadow-lg sm:shadow-none ${
          nav ? 'scale-100' : 'scale-y-0 '
        } transition-all origin-top flex flex-col gap-3 bg-white sm:flex-row sm:static sm:justify-between sm:w-auto`}
      >
        {navLinks.map(data => {
          return (
            <li key={data.id}>
              <a href='#'>{data.name}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

const navLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/about' },
  { id: 3, name: 'Project', link: '/project' },
  { id: 4, name: 'Contact Us', link: '/contact' },
];

export default Navigation;
