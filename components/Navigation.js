import React from 'react';

const Navigation = () => {
  return (
    <nav className='flex justify-around items-center h-16 bg-red-300'>
      <div className='brand'>Portfolio</div>
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

export default Navigation;
