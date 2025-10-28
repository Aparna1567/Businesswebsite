"use client"
import { Autoplay,FreeMode } from "swiper/modules"
import { Swiper,SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Image from "next/image";
import React from "react";
import {companies} from "@/app/api/data";

const Companies:React.FC=()=>{
    return(
        <>
          <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
            <div className='container px-4 space-y-14 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) ' >
                <div className="company-content  w-full text-center">
                
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl realtive font-chakrapetch capitalise ps-5 pe-3'>
                        Our Partners</span>
                <h2 className='w-full mt-4 font-chakrapetch lg:text-35 font-semibold'>
                    Join Over <span className="bg-dark text-white px-2 rounded-sm">1000+</span>
                    Companie with Axora Here
                </h2>
                
                </div>
                </div>
                <div className="relative mt-10">
               <Swiper modules={[Autoplay]} spaceBetween={30} slidesPerView={3} loop={true} autoplay={{ delay: 2000, disableOnInteraction: false, }}
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
                        {companies.map((company,index)=>(
                            <SwiperSlide key={index}>
                                <div className="companies-item h-[100px] w-full bg-white shadow-xl px-8 rounded-xl flex items-center justify-center cursor-pointer">
                                    <Image 
                                        src={company.image}
                                        alt={`brand-${index+1}`}
                                        width={150}
                                        height={80}
                                        className="object-contain"
                                    />
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>

                </section>
        </>
    )
}
export default Companies