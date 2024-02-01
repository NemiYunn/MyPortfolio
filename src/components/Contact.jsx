import React from 'react'

const Contact = () => {
  return (
    <div name='contact' className='w-full h-screen bg-[#0a192f] flex justify-center items-center p-10'>
        <form action="https://getform.io/f/0685f4cb-c6a5-47e2-9ccc-6154619d82dd" method='POST' className='flex flex-col max-w-[600px] w-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Contact</p>
                <p className='text-gray-300 py-4'>// Submit the form below or shoot me an email - mgnethmiyuganjana@gmail.com</p>
            </div>
            <input className='p-2 bg-[#ccd6f6]' type="text" name="name" id="" placeholder='Name' />
            <input className='my-4 p-2 bg-[#ccd6f6] ' type="email" name="email" placeholder='Email' id="" />
            <textarea className='bg-[#ccd6f6] p-2' name="message" id=""  rows="10" placeholder='Message'></textarea>
            <button className='text-white border-2 hover:border-pink-600 hover:bg-pink-600 px-4 py-3 my-8 mx-auto flex items-center'>
                Let's Collaborate
            </button>
        </form>
    </div>
  )
}

export default Contact