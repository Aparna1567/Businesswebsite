"use client"
import {solutionData} from "@/app/api/data";
import {Swiper,SwiperSlide} from "swiper/react";
import {Autoplay,Navigation} from "swiper/modules";
import { Icon } from '@iconify/react';
import Link from 'next/link';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const Solution:React.FC=()=> {
  return (
    <>
        <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
            <div className='container px-4 space-y-14 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) ' >
                <div className="solution-content flex justify-between items-start lg:items-end gap-2 flex-col lg:flex-row">
                <div>
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl realtive font-chakrapetch capitalise ps-5 pe-3'>Our Solution</span>
                <h2 className='w-full lg:3/4 mt-4 font-chakrapetch lg:text-35 font-semibold'>
                    Tailor-Made Business Solutions for Modern Corporates
                </h2>
                </div>
                 <Link 
                                    href="/services" 
                                    className='text-white bg-dark text-sm h-[50px] lg:text-16 w-fit 
                                            rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'>
                                                Explore More
                                    <Icon icon="tabler:arrow-right" width="24" height="24"
                                    className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300' />
                                    </Link>
                
            </div>
            <div className="relative mt-10">
                <Swiper 
                        modules={[Navigation,Autoplay]}
                        spaceBetween={20}
                        slidesPerView={1}
                        navigation
                        loop={true}
                        pagination={{clickable:true}}
                        autoplay={{delay:4000,disableOnInteraction:false}}
                        breakpoints={{
                            640:{slidesPerView:1},
                            768:{slidesPerView:2},
                            1024:{slidesPerView:3},
                            1280:{slidesPerView:4},
                        }} className='solution-wrapper'>
                            {solutionData.map((solution,index)=>(
                                <SwiperSlide key={index}>
                                    <div className='solution-item w-full bg-white shadow-xl p-5 space-y-6 rounded-xl border group hover:bg-prim
                                        transition-all duration-500 h-[400px] flex flex-col justify-between'>
                                           <h4 className="group-hover:text-white transition-colors duration-500 font-medium font-unbounded text-18">
                                            {solution.title}
                                            </h4>
                                            <div className="solution-icon border border-dark w-[70px] h-[70px] rounded-full mx-auto
                                                    flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360">
                                                        <Icon 
                                                            icon={solution.icon}
                                                            width="32"
                                                            height="32"
                                                            className="group-hover:text-white transition-colors duration-500"                                                        
                                                        
                                                        />            
                                                    </div>
                                                    <p className="text-pera-dark font-normal group-hover:text-white transition-colors duration-500">
                                                        {solution.description}
                                                    </p>
                                                    <Link 
                                    href="/about" 
                                    className='text-white bg-dark text-sm h-[50px] lg:text-16 w-fit 
                                            rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'>
                                                Learn More
                                    <Icon icon="tabler:arrow-right" width="24" height="24"
                                    className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300' />
                                    </Link>
                                        </div>
                                </SwiperSlide>
                            ))}
                        </Swiper>
            </div>
            </div>
        </section>
    
    </>
  )
}

export default Solution