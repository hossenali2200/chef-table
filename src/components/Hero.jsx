import React from 'react'

const Hero = () => {
  return (
    <div> 
      <div class="max-w-screen-xl md:h-[600px] rounded-3xl mx-auto relative bg-gradient-to-r from-purple-600 to-blue-600 h-screen text-white overflow-hidden">
  <div class="absolute inset-0">
    <img src="https://images.unsplash.com/photo-1694444398997-f8de6de50223?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="Background Image" class="object-cover object-center w-full h-full " />
    <div class="absolute inset-0 bg-black opacity-50"></div>
  </div>
  
  <div class="relative z-10 flex flex-col justify-center items-center h-full text-center">
    <h1 class="text-4xl font-bold leading-tight mb-4">Discover an exceptional cooking <br />
    class tailored for you!</h1>
    <p class="text-lg font-semibold text-gray-300 mb-8">Learn and Master Basic Programming, Data Structures, Algorithm, OOP, Database and solve 500+ coding <br />
    problems to become an exceptionally well world-class Programmer.</p>
   <div className='flex justify-center gap-2'>
   <a href="#" class="bg-green-400 text-gray-900 hover:bg-green-300 py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Explore Now</a>
   <a href="#" class="  text-white border-2 border-white hover:bg-green-300 hover:text-black py-3 px-6 rounded-full text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Our Feedback</a>
   </div>
  </div>
</div>

    </div>
  )
}

export default Hero