import Image from 'next/image';
import profile from '../../assets/anas-dp.png';

const Header = () => {
  return (
    <header className='flex flex-col lg:flex-row items-center justify-around h-screen'>
      <div className='text-3xl lg:text-5xl font-semibold leading-snug'>
        <span className=' text-[#0087CA]'>Hello!</span>
        <br />
        My Name is <span className='text-[#0087CA]'>Anas</span>
        <br />
        and I&apos;m a <br />
        <span className='text-[#0087CA]'>FrontEnd Developer.</span>
        <br />
        <button className='mt-3 px-6 py-3 bg-[#0087CA] text-white text-lg rounded-full'>
          Resume
        </button>
      </div>
      <div className='images rounded-full overflow-hidden'>
        <Image src={profile} alt='Profile pic' width='auto' height='auto' />
      </div>
    </header>
  );
};

export default Header;
