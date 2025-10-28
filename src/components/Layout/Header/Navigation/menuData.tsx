import { HeaderItem } from "@/type/menu";

export const headerData:HeaderItem[]=[
    {label:"Home",href:"/"},
    {
        label:"Pages",
        href:"#",
        submenu:[
            {label:"About Us",href:"/about"},
            {label:"Team",href:"/team"},
            {label:"Faq",href:"/faq"},
            {label:"Contact",href:"/contact"},
        ]
    },
    {
        label:"Services",
        href:"#",
        submenu:[
            {label:"Services List",href:"/services"},
            {label:"Services Details",href:"/services/web-development"},
            
        ]
    },
      {
        label:"Portfolio",
        href:"/portfolio",
        submenu:[
            {label:"Portfolio",href:"/portfolio"},
            {label:"Portfolio Details",href:"/portfolio/creative-branding-project"},
            
        ]
    },
      {
        label:"Blog",
        href:"/blog",
        submenu:[
            {label:"Blog",href:"/blog"},
            {label:"Blog Details",href:"/blog/entrepreneur-mindset-habits-that-drive-success"},
            
        ]
    },
    {label:"Contact",href:"/contact"},


]