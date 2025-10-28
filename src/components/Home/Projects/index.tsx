"use client"
import { Autoplay,FreeMode } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import Link from 'next/link';
import { Icon } from '@iconify/react';
import React from "react";
import {projects} from "@/app/api/data";

const Projects:React.FC=()=>{
    return(
        <>
          <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
            <div className='container px-4 space-y-14 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) ' >
                <div className="company-content  w-full text-center">
                
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl realtive font-chakrapetch capitalise ps-5 pe-3'>
                        Our Projects</span>
                <h2 className='w-full mt-4 font-chakrapetch lg:text-35 font-semibold'>
                   Breakibg Boundaries, Building Dreams.
                </h2>
                
                </div>
                </div>
                <div className="relative mt-10">
               <Swiper modules={[Autoplay]} spaceBetween={50} slidesPerView={1.5} centeredSlides={true} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false, }}
                >
                    
                    {/* <Swiper
                       modules={[Autoplay]}
                      spaceBetween={30}
                      slidesPerView={3}
                     
                        loop={true}
                    //  allowTouchMove={false}
                     
                  autoplay={{delay:2000,disableOnInteraction:false}}
                                               breakpoints={{
                                                   320:{slidesPerView:2},
                                                   640:{slidesPerView:3},
                                                   758:{slidesPerView:4},
                                                   1024:{slidesPerView:5},
                                               }} className='companies-swiper relative' > */}
                       {
                        projects.concat(projects).map((project,index)=>(
                            <SwiperSlide key={index}>
                                <div className="project-item flex flex-col sm:flex-row justify-center
                                items-center w-full bg-white shadow-2xl p-5 rounded-xl gap-5 h-auto lg:h-[550px]">
                                    <div className="project-image w-full sm:w-[50%] h-full">
                                        <Image 
                                        src={project.image} width={350} height={350} alt="project-item" 
                                        className="w-full h-full object-cover rounded-xl"

                                             />
                                    </div>
                                    <div className="project-content w-full sm:w-[50%] " >
                                        <span className="bg-white border border-prim rounded-sm px-2 text-prim font-chakrapetch font-medium">
                                            {project.category}
                                        </span>
                                        <h4 className="font-unbounded text-16 lg:text-24 pt-2 pb-4">{project.title}</h4>
                                        <p className="text-prim-dark font-normal text-14 pb-5">
                                            {project.description}
                                        </p>
                                          <Link 
                                    href={project.link} 
                                    className='text-white bg-dark text-sm h-[50px] lg:text-16 w-fit 
                                            rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'>
                                                Learn More
                                    <Icon icon="tabler:arrow-right" width="24" height="24"
                                    className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300' />
                                    </Link>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))
                       }
                    </Swiper>
                </div>

                </section>
        </>
    )
}
export default Projects