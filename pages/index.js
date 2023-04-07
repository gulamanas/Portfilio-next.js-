import Head from 'next/head';
import About from '../components/home/about';
import TechTools from '../components/home/tech_tools';
import Navigation from '../components/Navigation';
import Image from 'next/image';

import profile from '../assets/anas-dp.png';

export default function Home() {
  return (
    <div className='font-sans'>
      <Head>
        <title>Personal Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
        <link rel='preconnect' href='https://fonts.googleapis.com' />
        <link rel='preconnect' href='https://fonts.gstatic.com' crossorigin />
        <link
          href='https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500&display=swap'
          rel='stylesheet'
        />
      </Head>

      <main className=''>
        <Navigation />
        <header className=''>
          <div>
            <span className='text-4xl font-semibold text-[#0087CA]'>
              Hello!
            </span>
            <br />
            My Name is <span>Anas</span>
            <br />
            and I&apos;m a<span>FrontEnd Developer.</span>
          </div>
          <div className='images'>
            <Image src={profile} alt='Profile pic' width='auto' height='auto' />
          </div>
        </header>
        <About />
        <TechTools />
      </main>
    </div>
  );
}
