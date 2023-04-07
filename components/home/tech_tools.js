import React from 'react';
import Image from 'next/image';

import htmlLogo from '../../assets/html.png';
import cssLogo from '../../assets/css.png';
import jsLogo from '../../assets/js.png';
import bootstrapLogo from '../../assets/bootstrap.png';
import reactLogo from '../../assets/react.png';
import sassLogo from '../../assets/sass.png';
import gitLogo from '../../assets/git.png';
import gitHubLogo from '../../assets/github.png';
import reduxLogo from '../../assets/redux.png';
import figmaLogo from '../../assets/figma.png';
import psLogo from '../../assets/photoshop.png';
import xdLogo from '../../assets/xd.png';

const TechTools = () => {
  return (
    <>
      <h3 className='text-5xl font-bold'>Tech & Tools</h3>
      <div className='flex items-center justify-center gap-3 flex-wrap'>
        {toolsLogoData.map(data => {
          return (
            <div
              key={data.id}
              className='inline-flex flex-col justify-center w-32 h-32 bg-[#403E3E] items-center gap-3 rounded-md'
            >
              <div className='w-12 h-12 overflow-hidden'>
                <Image
                  src={data.src}
                  alt={data.alt}
                  width='auto'
                  height='auto'
                />
              </div>
              <div className='text-lg text-[#19C9C6]'>{data.text}</div>
            </div>
          );
        })}
      </div>
    </>
  );
};

const toolsLogoData = [
  {
    id: 1,
    src: htmlLogo,
    alt: 'HTML logo',
    text: 'HTML',
  },
  {
    id: 2,
    src: cssLogo,
    alt: 'CSS logo',
    text: 'CSS',
  },
  {
    id: 3,
    src: jsLogo,
    alt: 'JS logo',
    text: 'JavaScript',
  },
  {
    id: 4,
    src: bootstrapLogo,
    alt: 'BS logo',
    text: 'Bootstrap',
  },
  {
    id: 5,
    src: reactLogo,
    alt: 'React logo',
    text: 'React',
  },
  {
    id: 6,
    src: sassLogo,
    alt: 'Sass logo',
    text: 'Sass',
  },
  {
    id: 7,
    src: gitLogo,
    alt: 'Git logo',
    text: 'Git',
  },
  {
    id: 8,
    src: gitHubLogo,
    alt: 'GitHub logo',
    text: 'GitHub',
  },
  {
    id: 9,
    src: reduxLogo,
    alt: 'Redux logo',
    text: 'Redux',
  },
  {
    id: 10,
    src: figmaLogo,
    alt: 'Figma logo',
    text: 'Figma',
  },
  {
    id: 11,
    src: psLogo,
    alt: 'Photoshop logo',
    text: 'Photoshop',
  },
  {
    id: 12,
    src: xdLogo,
    alt: 'XD logo',
    text: 'Adobe XD',
  },
];

export default TechTools;
