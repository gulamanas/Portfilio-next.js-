import React, { useState } from 'react';
import SmallProjects from './smallProjects/SmallProjects';

const Tab1 = () => {
  return <h2 className='bg-gray-200'>Tab 1 content</h2>;
};

const Tab2 = () => {
  return <h2 className='bg-gray-200'>Tab 2 content</h2>;
};

const Tab3 = () => {
  return <h2 className='bg-gray-200'>Tab 3 content</h2>;
};

const SplittedTab = () => {
  const [activeTab, setActiveTab] = useState('tab1');
  const handleTabClick = tab => {
    setActiveTab(tab);
  };
  return (
    <div className='mt-7'>
      <ul className='flex justify-between'>
        <li
          className={`${
            activeTab === 'tab1' ? 'active bg-gray-200' : ''
          } p-3 border-2 cursor-pointer`}
          onClick={() => handleTabClick('tab1')}
        >
          Small Projects
        </li>
        <li
          className={`${
            activeTab === 'tab2' ? 'active bg-gray-200' : ''
          } p-3 border-2 cursor-pointer`}
          onClick={() => handleTabClick('tab2')}
        >
          Tab 2
        </li>
        <li
          className={`${
            activeTab === 'tab3' ? 'active bg-gray-200' : ''
          } p-3 border-2 cursor-pointer`}
          onClick={() => handleTabClick('tab3')}
        >
          Tab 3
        </li>
      </ul>
      {activeTab === 'tab1' && <SmallProjects />}
      {activeTab === 'tab2' && <Tab2 />}
      {activeTab === 'tab3' && <Tab3 />}
    </div>
  );
};

export default SplittedTab;
