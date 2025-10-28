"use client"

import { Icon } from '@iconify/react';
import Link from 'next/link';
import Image from 'next/image';
const Commitment:React.FC=()=> {
    const tags=["Growth","Success","Innovate","Lead","Focus","Impact","Tech"];
  return (
    <>
        <section className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22 bg-prim-light'>
            <div className='container px-4 space-y-8 mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) ' >
                <div className="commitment-content bg-white p-8 rounded-2xl">
                <div>
                    <span className='sub-title text-14 bg-prim text-white py-1 rounded-xl realtive font-chakrapetch capitalise ps-5 pe-3'>
                        Choose the Best

                    </span>
                <h2 className='mt-4 font-chakrapetch lg:text-35 font-semibold'>
                    Commited Delivering Measurable Results and Building from the Lasting Relationships through out trust and innovation and corporate shared
                    Learn More
                </h2>
                </div>
                 <Link 
                                    href="/services" 
                                    className='text-white bg-dark text-sm h-[50px] lg:text-16 w-fit 
                                            rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 
                                            justify-center items-center tracking-wider group mt-5'>
                                                Learn More
                                    <Icon icon="tabler:arrow-right" width="24" height="24"
                                    className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300' />
                                    </Link>
                
            </div>
            <div className="grid gap-8 grid-cols-1 lg:grid-cols-2 xl:grid-cols-3">
                <div className='w-full bg-white p-8 rounded-2xl'>
                    <h2 className='font-chakrapetch lg:text-24 font-semibold mb-5'>
                        Rebranding strategy for a Growing
                    </h2>
                    <div className='w-fit items-center pt-8 flex pb-10 overflow-hidden'>
                        <Image 
                            src="/images/commitment/user1.jpg"
                            alt="avatar-image"
                            width={100}
                            height={200}
                            className='object-cover w-[100px] h-[100px] rounded-full scale-105 border-4 border-white shadow-xl translate-x-3'
                        />
                        <Image 
                            src="/images/commitment/user2.jpg"
                            alt="avatar-image"
                            width={100}
                            height={200}
                            className='object-cover w-[120px] h-[120px] rounded-full border-4 border-white shadow-xl z-2 scale-110'
                        />
                        <Image 
                            src="/images/commitment/user3.jpg"
                            alt="avatar-image"
                            width={100}
                            height={200}
                            className='object-cover w-[100px] h-[100px] rounded-full border-4 border-white shadow-xl z-0 -translate-x-3'
                        />
                    </div> 
                    <div className='flex gap-5'>
                        <span className='text-5xl font-semibold'>200</span>
                        <p className='text-pera-dark'>
                            Satisfied customers work with our axora
                        </p>
                    </div>
                </div>
                <div className='w-full bg-white p-8 rounded-2xl'>
                    <h2 className='font-chakrapetch lg:text-24 font-semibold mb-5'>
                        Rebranding strategy for a Growing
                    </h2>
                    <div className='w-full h-[230px]'>
                        <Image src="/images/commitment/strategy-chart.webp" width={350} height={350} alt="strategy-chart-image" className='w-full h-full object-contain mx-auto' />
                    </div>
                    </div>
                <div className='w-full bg-white p-8 rounded-2xl flex flex-col items-start justify-between'>
                    <div className='mb-8'><h2 className='font-chakrapetch lg:text-24 font-semibold pb-1'>
                        Rebranding strategy for a Growing
                    </h2>
                    <p>
                        Our team are always available to addressed our concerns, providing quick solutions. 
                    </p>
                    </div>
                    <ul className='flex flex-wrap gap-3 w-full'>
                        {tags.map((tag,index)=>(
                            <li key={index} className='border border-white rounded-md overflow-hidden cursor-pointer'>
                                <span className='bg-black/10 blackdrop-blur-sm px-3 py-1 inline-block text-sm font-medium'>
                                {tag}
                                </span>
                                
                                 </li>
                        ))}
                    </ul>
                </div>
            </div>

            </div>
        </section>
    
    </>
  )
}

export default Commitment