import React from 'react'
import yamove from '../assets/yamove.png'
import auth from '../assets/auth.png'
import quizzical from '../assets/quizzical.png'
import tenzies from '../assets/tenzies.png'
import notes from '../assets/notes.png'

const Work = () => {
    return (
        <div name='work' className='w-full md:h-screen text-gray-300 bg-[#0a192f]'>
            {/* container */}
            <div className='max-w-[1000px] mx-auto p-4 flex flex-col justify-center w-full h-full'>
                {/* title section */}
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 text-gray-300 border-pink-600 '>Work</p>
                    <p className='py-6'>// Check some of my recent work</p>
                </div>

                {/* projects */}
                <div
                    className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>
                    {/* each card */}
                    <div style={{ backgroundImage: `url(${yamove})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hower effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>

                            <span className='px-2 flex text-2xl font-bold text-white tracking-wider '>
                                Depot Mangement System [php]
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/NemiYunn/YaMove">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>
                    {/* card 2 */}
                    <div style={{ backgroundImage: `url(${auth})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hower effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>

                            <span className='px-2 flex text-2xl font-bold text-white tracking-wider '>
                               Authentication App [MERN]
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/NemiYunn/MERN-AUTH">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>

                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${quizzical})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hower effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='px-2 flex text-2xl font-bold text-white tracking-wider '>
                               Quizzical Application [React]
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/NemiYunn/Quizzical">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${tenzies})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hower effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='px-2 flex text-2xl font-bold text-white tracking-wider '>
                               Tenzies Game App [React]
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/NemiYunn/Tenzies">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                    <div style={{ backgroundImage: `url(${notes})` }}
                        className='shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div'>
                        {/* hower effects */}
                        <div className='opacity-0 group-hover:opacity-100 '>
                            <span className='px-2 flex text-2xl font-bold text-white tracking-wider '>
                               Notes Application [React]
                            </span>
                            <div className='pt-8 text-center '>
                                <a href="/">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Demo
                                    </button>
                                </a>
                                <a href="https://github.com/NemiYunn/Notes-App">
                                    <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>
                                        Code
                                    </button>
                                </a>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default Work