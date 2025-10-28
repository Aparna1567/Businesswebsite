

import HeroSub from "@/components/SharedComponents/HeroSub"
import Link from "next/link";
import { Icon } from "@iconify/react";
import {portfolio} from "@/app/api/data";
import Image from "next/image";

const Page=()=>{
     const breadcrumbLinks=[
            {href:"/",text:"Home"},
            {href:"/portfolio",text:"Portfolio"}
        ];

const grouped=portfolio.reduce((acc:any[], _, i)=>{
    if (i%2===0) acc.push(portfolio.slice(i,i+2));
    return acc;
},[])


    return(
        <>
          <HeroSub title="Portfolio" description='' breadcrumbLinks={breadcrumbLinks} />
       <div className='bg-light py-14 lg:py-18 xl:py-22'>
         <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 space-y-6' >
            {grouped.map((pair,rowIndex)=>(
                <div className="portfolio-wrapper w-full flex flex-col lg:flex-row gap-5" key={rowIndex} >
                    {pair.map((item,i)=>{
                        const isLarge=
                        (rowIndex % 2 === 0 && i === 0) || 
                        (rowIndex % 2 !== 0 && i === 1);
                        return (
                            <Link key={item.id} href={`/portfolio/${item.slug}`} className={`relative rounded-2xl overflow-hidden group cursor-pointer ${isLarge ? "w-full lg:w-[70%]" : " w-full lg:w-[30%]" }`}>
                                <Image src={item.image} alt={item.title} width={isLarge ? 800 : 600} height={isLarge ? 500 : 400} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/60 transition-all duration-300" />
                                <div className={`absolute text-white ${isLarge ? "bottom-8 left-8" : "bottom-4 left-4"}`}>
                                    <span className="border border-border px-2 rounded-sm ">{item.category}</span>
                                    <h3 className={`font-unbounded font-medium mt-2 ${isLarge ? "text-3xl" : "text-lg"}`}>
                                        {item.title}
                                    </h3>

                                </div>
                            </Link>
                        )
                    })}
                </div>
            ))}
            
            </div>
         </div>
       
        </>
    )
}
export default Page