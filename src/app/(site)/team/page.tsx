
"use client"

import Team from '@/components/Home/Team';
import HeroSub from '@/components/SharedComponents/HeroSub';

export default function Page(){
    const breadcrumbLinks=[
        {href:"/",text:"Home"},
        {href:"/team",text:"Team"}
    ];
    return(
        <>
        <HeroSub title="Team" description='' breadcrumbLinks={breadcrumbLinks} />
        <Team />
        
        </>
    )
}