import React, { useContext, useEffect, useState } from 'react';
// sidebar context
import { SidebarContext } from '../contexts/SidebarContext';
// cart context
import { CartContext } from '../contexts/CartContext';
// import icons
import { BsBag } from 'react-icons/bs';
// import link
import { Link } from 'react-router-dom';
// import logo
import Logo from '../img/logo.svg';

const Header = () => {
  // header state
  const [isActive, setIsActive] = useState(false);
  // navbar state
  const [isNavbarActive, setIsNavbarActive] = useState(false);

  const { isOpen, setIsOpen } = useContext(SidebarContext);
  const { itemAmount } = useContext(CartContext);

  // open mobile navbar
  const handleClick = () => {
    setIsNavbarActive(!isNavbarActive);
  };

  // event listener
  useEffect(() => {
    window.addEventListener('scroll', () => {
      window.scrollY > 60 ? setIsActive(true) : setIsActive(false);
    });
  });
  return (
    <header
      className={`${
        isActive ? 'bg-white shadow-md' : 'bg-none'
      } fixed w-full z-20 py-3 md:py-1 transition-all`}
    >
      <div className='container mx-auto flex items-center justify-between h-full'>
        {/* logo */}
        <Link to={'/'}>
          <div>
            <img className='w-[55px] md:w-[70px]' src={Logo} alt='Logo' />
          </div>
        </Link>
        {/* nav */}
        <nav className='hidden md:flex items-center space-x-8'>
          <Link
            to={'/'}
            className='text-gray-800 text-lg font-semibold hover:text-gray-900 transition-all'
          >
            Home
          </Link>
          <Link
            to={'/about'}
            className='text-gray-800 text-lg font-semibold hover:text-gray-900 transition-all'
          >
            About
          </Link>
          <Link
            to={'/contact'}
            className='text-gray-800 text-lg font-semibold hover:text-gray-900 transition-all'
          >
            Contact
          </Link>
        </nav>

        {/* cart and navbar */}
        <div className='flex justify-center items-center gap-2'>
        {/* cart */}
        <div
          onClick={() => setIsOpen(!isOpen)}
          className='cursor-pointer flex relative'
          >
          <BsBag className='text-2xl' />
          <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
            {itemAmount}
          </div>
        </div>

        {/* mobile nav */}
        <div
          onClick={() => handleClick()}
          className='md:hidden cursor-pointer'
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M4 6h16M4 12h16M4 18h16'
            />
          </svg>
        </div>

        {/* nav mobile */}
        <div
          className={`${
            isNavbarActive ? 'block top-0' : 'hidden -top-full'
            } md:hidden absolute left-0 w-full h-screen py-10 bg-white z-20 duration-300 ease-in-out text-xl`}
        >

          {/* close nav mobile */}
          <div
            onClick={() => handleClick()}
            className='cursor-pointer relative'
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6 absolute right-7 -bottom-4'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M6 18L18 6M6 6l12 12'
              />
            </svg>
          </div>

          <div className='flex flex-col items-center justify-center h-full'>
            <Link
              to={'/'}
              onClick={() => handleClick()}
              className='text-gray-800 hover:text-gray-900 py-5 transition-all'
            >
              Home
            </Link>
            <Link
              to={'/about'}
              onClick={() => handleClick()}
              className='text-gray-800 hover:text-gray-900 py-5 transition-all'
            >
              About
            </Link>
            <Link
              to={'/contact'}
              onClick={() => handleClick()}
              className='text-gray-800 hover:text-gray-900 py-5 transition-all'
            >
              Contact
            </Link>

            <div
              onClick={() => setIsOpen(!isOpen)}
              className='cursor-pointer flex relative my-5'
            >
              <BsBag className='text-2xl' />
              <div className='bg-red-500 absolute -right-2 -bottom-2 text-[12px] w-[18px] h-[18px] text-white rounded-full flex justify-center items-center'>
                {itemAmount}
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
