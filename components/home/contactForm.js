import React from 'react';

const ContactForm = () => {
  return (
    <div>
      <h3 className='text-5xl font-semibold mt-7 text-center'>Contact Us</h3>
      <form className='mt-7 sm:px-32'>
        <div className='flex flex-col gap-3'>
          <input
            type='text'
            placeholder='Full Name'
            className='border-2 px-3 py-4'
          />
          <input
            type='text'
            placeholder='Phone'
            className='border-2 px-3 py-4'
          />
          <input
            type='email'
            placeholder='Email'
            className='border-2 px-3 py-4'
          />
          <textarea
            type='text'
            placeholder='Message'
            className='border-2 px-3 py-4'
          ></textarea>
        </div>
        <button className='mt-3 px-6 py-3 border border-blue-300'>
          Submit
        </button>
      </form>
    </div>
  );
};

export default ContactForm;
