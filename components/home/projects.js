import Image from 'next/image';
import React from 'react';
import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import projectImage from '../../assets/fitness.png';

const Projects = () => {
  return (
    <div className=' '>
      <h3 className='text-5xl font-semibold mt-7 text-center'>Projects</h3>
      <div className='container mt-7 w-64 h-auto'>
        <div className='image_container w-64 h-auto '>
          <Image
            src={projectImage}
            alt='Fitness page'
            width='auto'
            height='auto'
          />
        </div>
        <div className='second_container'>
          <div className='flex justify-between items-center'>
            <p>Fitness</p>
            <ul className='flex gap-3'>
              <li className='w-3 h-3 overflow-hidden'>
                <FontAwesomeIcon icon={faGithub} />
              </li>
              <li className='w-3 h-3 overflow-hidden'>
                <FontAwesomeIcon icon={faShare} />
              </li>
            </ul>
          </div>
          <p>
            A Fitness Landing page to show the details of a gym house and book
            your appointment
          </p>
          <ul className='flex justify-between'>
            <li>HTML</li>
            <li>CSS</li>
            <li>JavaScript</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Projects;
