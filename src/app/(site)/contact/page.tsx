
"use client"
import { Icon } from '@iconify/react';
import Link from 'next/link';

import HeroSub from '@/components/SharedComponents/HeroSub';

export default function Page(){
    const breadcrumbLinks=[
        {href:"/",text:"Home"},
        {href:"/contact",text:"Contact"}
    ];
    return(
        <>
        <HeroSub title="Contact" description='' breadcrumbLinks={breadcrumbLinks} />

             <div className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22'>
         <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5' >
                    <div className='contact-wrapper grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-4 gap-5'>
                        <div className="contact-item w-full bg-white shadow-xl p-5 h-[230px] space-y-6 rounded-xl border group hover:bg-prim
                                        transition-all duration-500  flex flex-col justify-between text-center">
                            <div className="contact-icon  border border-dark w-[70px] h-[70px] rounded-full mx-auto
                                                    flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 ">
                                <Icon icon="tdesign:location" width="24" height="24" className='group-hover:text-white transition-colors duration-500'  />
                                </div>
                                 <div className="contact-info">
                                <h4 className='font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors'>Our Location</h4>
                                <p className='text-gray-500 group-hover:text-white duration-300 transition-colors'>45-Renner Burg, West Rond, MT 94259-302</p>
                                </div>
                                
                            </div>  

                        <div className="contact-item w-full bg-white shadow-xl p-5 h-[230px] space-y-6 rounded-xl border group hover:bg-prim
                                        transition-all duration-500  flex flex-col justify-between text-center">
                            <div className="contact-icon  border border-dark w-[70px] h-[70px] rounded-full mx-auto
                                                    flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 ">
                                <Icon icon="ic:outline-email" width="24" height="24" className='group-hover:text-white transition-colors duration-500'  />
                                </div>
                                 <div className="contact-info">
                                <h4 className='font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors'>Email Us</h4>
                                <p className='text-gray-500 group-hover:text-white duration-300 transition-colors'>webdesign@gmail.com
                                    webdesign@gmail.com
                                </p>
                                </div>
                                
                            </div>      

                        <div className="contact-item w-full bg-white shadow-xl p-5 h-[230px] space-y-6 rounded-xl border group hover:bg-prim
                                        transition-all duration-500  flex flex-col justify-between text-center">
                            <div className="contact-icon  border border-dark w-[70px] h-[70px] rounded-full mx-auto
                                                    flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 ">
                                <Icon icon="material-symbols:call-outline-sharp" width="24" height="24" className='group-hover:text-white transition-colors duration-500'  />
                                </div>
                                 <div className="contact-info">
                                <h4 className='font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors'>
                                    Call Us</h4>
                                <p className='text-gray-500 group-hover:text-white duration-300 transition-colors'>
                                    +1 (009) 566-5789
                                    +1 (009) 577-7676
                                    </p>
                                </div>
                                
                            </div>  

                        <div className="contact-item w-full bg-white shadow-xl p-5 h-[230px] space-y-6 rounded-xl border group hover:bg-prim
                                        transition-all duration-500  flex flex-col justify-between text-center">
                            <div className="contact-icon  border border-dark w-[70px] h-[70px] rounded-full mx-auto
                                                    flex justify-center items-center prim-grident transition-transform duration-500 group-hover:rotate-y-360 ">
                                <Icon icon="hugeicons:chat" width="24" height="24" className='group-hover:text-white transition-colors duration-500'  />
                                </div>
                                 <div className="contact-info">
                                <h4 className='font-unbounded text-18 pb-2 group-hover:text-white duration-300 transition-colors'>
                                    Live chat</h4>
                                <p className='text-gray-500 group-hover:text-white duration-300 transition-colors'>
                                    livechat@bexon.com <br />
                                    <Link href="/contact">Need Help?</Link>
                                    </p>
                                </div>
                                
                            </div>              
                    </div>
         </div>
        </div>
        <div className='bg-light overflow-hidden py-14 lg:py-18 xl:py-22'>
         <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5' >
            
            <div className='flex flex-col lg:flex-row w-full gap-5'>
                <div className="w-full lg:w-[50%] bg-white rounded-2xl shadow-sm p-8">
                    <h2 className='text-2xl font-semibold text-gray-800 mb-8 font-unbounded'>
                        Feel free to get in touch or visit our Location.
                    </h2>
                    <form className='grid md:grid-cols-2 gap-6'>
                        <div>
                            <label className='block text-gray-600 font-medium mb-2'>Full Name</label>
                            <input type="text" placeholder='Enter your Name' className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2' />
                        </div>
                        <div>
                            <label className='block text-gray-600 font-medium mb-2'>Email Address</label>
                            <input type="email" placeholder='Enter your Email' className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2' />
                        </div>

                        <div>
                            <label className='block text-gray-600 font-medium mb-2'>Phone Number</label>
                            <input type="tel" placeholder='Enter your Number' className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2' />
                        </div>

                        <div>
                            <label className='block text-gray-600 font-medium mb-2'>Choose an option</label>
                            <select  className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'>
                                <option>Training & Development</option>
                                <option>IT Support *& maintanence</option>
                                <option>Marketing strategy</option>
                                <option>Busines strategy</option>
                                <option>Customer experience</option>
                            </select>
                        </div>

                        <div className="md:col-span-2">
                            <label className='block text-gray-600 font-medium mb-2'>Type Message</label>
                            <textarea rows={4} placeholder='write your message...' className='w-full border-b border-gray-300 focus:border-teal-50 focus:outline-none py-2'>
                              
                            </textarea>
                        </div>
                           <Link 
                                    href="/contact" 
                                    className='text-white bg-dark text-sm h-[50px] lg:text-16 w-fit 
                                            rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group'>
                                                Send Message
                                    <Icon icon="tabler:arrow-right" width="24" height="24"
                                    className='bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition-all duration-300' />
                                    </Link>
                    </form>
                </div>
                <div className='w-full lg:w-[50%] h-[300px] lg:h-[500px]'>
                    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d236213.0035246995!2d73.00827044332871!3d22.322336995982667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x395fc8ab91a3ddab%3A0xac39d3bfe1473fb8!2sVadodara%2C%20Gujarat!5e0!3m2!1sen!2sin!4v1761296127360!5m2!1sen!2sin" width="100%" height="100%"  loading="lazy" ></iframe>
                </div>
            </div>
            
            </div>
         </div>
        
        </>
    )
}