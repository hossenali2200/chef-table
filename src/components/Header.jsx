import React from 'react';
import { FaRegCircleUser } from "react-icons/fa6";

const Header = () => {
  return (
    <div>
      <nav className="bg-white border-gray-200 dark:bg-gray-900  ">
        <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
          <a href="#" className="flex items-center">
            <img src="https://flowbite.com/docs/images/logo.svg" className="h-8 mr-3 hidden md:block" alt="Flowbite Logo" />
            <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">Chef Table</span>
          </a>
          <div className='hidden md:block'>
            <ul className='flex justify-around items-center gap-2'>
                <li className='text-xl font-semibold bg-slate-500 text-slate-50 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-500 rounded-lg '>Home</li>
                <li className='text-xl font-semibold bg-slate-500 text-slate-50 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-500 rounded-lg '><a>Recipe</a></li>
                <li className='text-xl font-semibold bg-slate-500 text-slate-50 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-500 rounded-lg '>About</li>
                <li className='text-xl font-semibold bg-slate-500 text-slate-50 px-4 py-2 cursor-pointer transition-all duration-300 ease-in-out hover:scale-110 hover:bg-green-500 rounded-lg '><a>Search</a></li>
                 
            </ul>
          </div>
          <div className="relative flex justify-center items-center gap-4">
            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
              <svg className="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z" />
              </svg>
              <span className="sr-only">Search icon</span>
             
             
            </div>
            
            <input
              type="text"
              id="search-navbar"
              className="block w-full p-3 pl-10 text-sm text-gray-900 border border-gray-300 rounded-2xl bg-gray-50 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Search "
                // Capture search input
            />
            <div className='border-2 border-green-400 rounded-full p-1 bg-green-500 text-3xl  '>
              <FaRegCircleUser className='' />
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Header;
