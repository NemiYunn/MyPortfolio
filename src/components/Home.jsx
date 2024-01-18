import React from 'react'
import { HiArrowNarrowRight } from 'react-icons/hi'

const Home = () => {
  return (
    <div name='home' className='w-full h-screen bg-[#0a192f]'>
      {/* container */}
      <div className='max-w-[1000px] mx-auto px-8 flex flex-col 
        justify-center h-full'>
        <p className='text-pink-600'>Hi, my name is</p>
        <h1 className='text-4xl sm:text-7xl font-bold text-[#ccd6f6]'>Nethmi Yuganjana</h1>
        <h2 className='text-3xl sm:text-6xl font-bold text-[#8892b0] py-2'>I'm a Full Stack Developer 🚀</h2>
        <p className='text-[#8892b0] py-3 max-w-[700px]'> I'm a recent IT grad diving into the world of full-stack
          web development. From crafting beautiful front-end interfaces
          to building robust back-end solutions, I bring a passion for
          clean code and creative problem-solving. Fluent in JavaScript,
          React, and more, I'm excited to turn ideas into digital realities.
          Let's connect and build something awesome together! 💻🌐 #WebDeveloper #CodingEnthusiast</p>
        <div>
          <button className='text-white group border-2 px-6 py-3 my-2 flex 
          items-center hover:bg-pink-600 hover:border-pink-600'> 
          View Work 
          <span className='group-hover:rotate-90 duration-300'>
          <HiArrowNarrowRight className='ml-3'/> 
          </span>
          </button>
        </div>

      </div>
    </div>
  )
}

export default Home