import React from 'react';
import Image from 'next/image';
import logo from '../assets/ga.png';

const Navigation = () => {
  return (
    <nav className='flex justify-around items-center h-16 bg-white shadow-lg sticky top-0'>
      <div className='w-10 overflow-hidden '>
        <Image src={logo} alt='Logo' width='auto' height='auto' />
      </div>
      <ul className='flex justify-between gap-3'>
        <li>
          <a href='#'>Home</a>
        </li>
        <li>
          <a href='#'>About</a>
        </li>
        <li>
          <a href='#'>Project</a>
        </li>
        <li>
          <a href='#'>Contact</a>
        </li>
      </ul>
    </nav>
  );
};

const navLinks = [
  { id: 1, name: 'Home', link: '/' },
  { id: 2, name: 'About', link: '/' },
];

export default Navigation;
