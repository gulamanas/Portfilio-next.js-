import Head from 'next/head';
import About from '../components/home/about';
import TechTools from '../components/home/tech_tools';
import Navigation from '../components/Navigation';
import Header from '../components/home/header';
import Projects from '../components/home/projects';
import Footer from '../components/Footer';
import ContactForm from '../components/home/contactForm';

export default function Home() {
  return (
    <div className='font-sans'>
      <Head>
        <title>Personal Portfolio</title>
        <meta name='description' content='Generated by create next app' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <Navigation />
      <main className='px-8 lg:px-40'>
        <Header />
        <About />
        <TechTools />
        <Projects />
        <ContactForm />
      </main>
      <Footer />
    </div>
  );
}
