import React from 'react'

const ContactUs = () => {
  return (
    <div className='min-h-screen py-12 pt-40 bg-gray-900'>
      <h1 className='text-lg md:text-7xl text-center font-sans font-bold mb-8 text-white'>Contact Us</h1>
      <p className='text-gray-50 text-sm text-neutral-600 dark:text-neutral-400 w-[50%] mx-auto text-center'>We're here to help! Whether you have questions about our courses, need support, or just want to say hello — feel free to reach out. 
        Our team is always ready to assist you with any queries. Use the contact form below or email us directly. We aim to respond within 24 hours on business days. </p>
    <div className='w-[50%] mx-auto flex flex-col gap-5 mt-6'>
        <input className='bg-black w-full placeholder-nuetral-50 p-4 border-gray-600' 
        type="text" 
        placeholder="Your email address"
        />
        <textarea className='bg-black w-full placeholder-nuetral-50 p-4 border-gray-600 h-40' 
        name="" 
        id=""
        placeholder="Your Message"
        ></textarea>
    </div>
    <h1>hjkhhre</h1>
    </div>
  )
}

export default ContactUs
