"use client";
import React ,{useEffect, useRef, useState} from 'react';
import Logo from './Logo';
import Link from "next/link";
import { Icon } from '@iconify/react';
import { headerData } from './Navigation/menuData';
import HeaderLink from './Navigation/headerLinks';
import Sidebar from './Sidebar';
import MobileHeaderLink from './Navigation/mobileheaderLinks';

const Header:React.FC=()=> {
const [sticky,setSticky]=useState(false);
const [isOpenSidebar,setIsOpenSidebar]=useState(false);
const [navbarOpen,setNavbarOpen]=useState(false);
const mobileMenuRef=useRef<HTMLDivElement>(null);

 useEffect(()=>{
  const handleScroll=()=>{
    setSticky(window.scrollY > 100);
  };
  window.addEventListener("scroll",handleScroll);
  return ()=> window.removeEventListener("scroll",handleScroll);
 },[])
  return (
    <>
    <header className={`fixed h-24 px-4 top-5 left-[2.5%] py-1 z-50 w-[95%] flex navbar
      items-center transition-all duration-500 rounded-3xl ${sticky ? "bg-black/80 backdrop-blur-lg shadow-lg w-[90%]" : "bg-white/10 backdrop-blur-sm"}`}>
      <div className="container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) flex justify-between items-center xl:gap-16 lg:gap-8 py-6">
        <div className="text-white">
          <Logo />
         
        </div>
         <nav className='hidden lg:flex grow items-center justify-center space-x-10 text-base'>
            {headerData.map((item,index)=>(
              <HeaderLink key={index} item={item}/>
            ))}
          </nav>
          <div className="nva-right gap-4 hidden lg:flex items-center">
            <Link href="/contact" className='text-white bg-dark h-[50px] rounded-full font-chakraPetch font-semibold flex gap-2 ps-4 pe-2 py-2 w-auto justify-center items-center tracking-wider group'>
            Let's Talk
            <Icon icon="tabler:arrow-right" width="24" height="24" 
            className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300'  />
            </Link>
            <button onClick={()=>setIsOpenSidebar(true)}
              className='block p-2 cursor-pointer group' aria-label='Toggle mobile menu'>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
            </div>
             <button onClick={()=>setNavbarOpen(!navbarOpen)} className='lg:hidden block p-2 cursor-pointer group' aria-label='Toggle mobile menu'>
                <span className="block w-6 h-0.5 bg-white"></span>
                <span className="block w-4 h-0.5 bg-white mt-1.5 transition-all duration-300 ease-in-out group-hover:w-6"></span>
                <span className="block w-6 h-0.5 bg-white mt-1.5"></span>
            </button>
          </div>
           </header>
     
      <div ref={mobileMenuRef} className={`lg:hidden fixed top-0 right-0 h-screen w-full sm:w-[50%] lg:w-[40%]
        shadow-2xl bg-dark-blur backdrop-blur-lg p-10 z-50 transform transition-transform overflow-y-scroll duration-500 
        ease-in-out ${navbarOpen ? "-translate-x-0" : "translate-x-[110%]"}
        `}>
          <div className="text-white flex justify-between items-center w-full">
            <Logo />
            <button onClick={()=>setNavbarOpen(false)} aria-label="Close mobile menu">
              <svg 
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                >
                  <path 
                    fill="none" stroke='currentColor' strokeLinecap='round'
                    strokeLinejoin='round' strokeWidth="2" d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
            </button>
          </div>
          <nav className='py-4 flex items-start flex-col'>
            {headerData.map((item,index)=>(
              <MobileHeaderLink key={index} item={item} />
            ))}
          </nav>
          {/* search */}
                          <h3 className='font-chakrapetch pb-3'>Search Now!</h3>
                          <form className='search-box relative flex'>
                              <input type="text" placeholder='Search Here...' className='bg-white ps-3 h-[45px]' required />
                              <button type="submit" className='absolute right-0 h-full border-1 border-border cursor-pointer'>
                                  <Icon icon="ei:search" width="50" height="30" />
                              </button>
                          </form>
                          {/* contact info */}
                          <h3 className='font-chakrapetch pb-3 pt-8 '>Contact Info!</h3>
                          <div className="space-y-3">
                              <div>
                                  <span className='text-pera-light font-chakrapetch'>phone</span>{" "}
                                  <br />
                                  <Link href="/contact" className='text-white font-unbounded font-normal'>
                                  (+91) 1232 3456</Link>
          
                              </div>
                              <div>
                                  <span className='text-pera-light font-chakrapetch'>Email</span>{" "}
                                  <br />
                                  <Link href="/contact" className='text-white font-unbounded font-normal'>
                                  info@axora.com</Link>
          
                              </div>
                              <div>
                                  <span className='text-pera-light font-chakrapetch'>Email </span> {" "}
                                  <br />
                                  <Link href="/contact" className='text-white font-unbounded font-normal'>
                                  FF - 42 , Procube Complex Vadodara</Link>
          
                              </div>
                          </div>
                          {/* Social */}
                          <h3 className='font-chakrapetch pb-3 pt-8 '>Follow Us</h3>
                          <div className="social-icons flex gap-3">
                              <Link href="/https://www.facebook.com/">
                              <Icon 
                                  icon="gg:facebook" width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-blue-600 transition duration-500 hover:translate-y-1'
                              />
                              
                              </Link>
                               <Link href="/https://www.instagram.com/">
                              <Icon 
                                  icon="mdi:instagram" width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-pink-500 transition duration-500 hover:translate-y-1'
                              />
                              
                              </Link>
                               <Link href="/https://www.youtube.com/">
                              <Icon 
                                  icon="mdi:youtube" width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-red-500 transition duration-500 hover:translate-y-1'
                              />
                              </Link>
                               <Link href="/https://www.linkedin.com/">
                              <Icon 
                                  icon="basil:linkedin-solid" width="30" height="30" className='text-white p-1 rounded-sm cursor-pointer bg-blue-400 transition duration-500 hover:translate-y-1'
                              />
                              </Link>
                          </div>
           </div>
      <Sidebar isOpenSidebar={isOpenSidebar} setIsOpenSidebar={setIsOpenSidebar} />
      </>
  )
}
export default Header
