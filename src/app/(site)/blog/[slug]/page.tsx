
import { notFound } from "next/navigation";
import Image from "next/image";
import { Icon } from "@iconify/react";
import Link from "next/link";
import HeroSub from "@/components/SharedComponents/HeroSub";
import { blogs} from "@/app/api/data";
import { Metadata } from "next";
import blog1 from "@/../public/images/blog/service-1.webp";
import blog2 from "@/../public/images/blog/service-2.webp";
import blog3 from "@/../public/images/blog/service-3.webp";
const recentPosts=[
    {
        image:blog1,
        title:"Entrepreneur Mindset: Habits that drive success" ,
        date:"01 Oct 2025"
    },
       {
        image:blog2,
        title:"Innovative strategies for business growth" ,
        date:"15 Oct 2025"
    },
       {
        image:blog3,
        title:"Leadership lessons for modern entrepreneurs" ,
        date:"22 Oct 2025"
    }
]

import blog01 from "@/../public/images/blogdetails/blog-1.webp";
import blog02 from "@/../public/images/blogdetails/blog-2.webp";
export const metadata: Metadata={
    title:"Bog Details | Axora",
}
// type Props={
//     params:{slug:string};
// }
// const BlogDetails=async({params}:Props)=>{
// const blog=blogs.find((b)=>b.slug === params.slug);
// if(!blog) return notFound();
//  const breadcrumbLinks = [
//     { href: "/", text: "Home" },
//     { href: "/blog", text: "Blog Details" },
//   ];


  type Props = {
  params: Promise<{ slug: string }>;
};

const BlogDetails = async ({ params }: Props) => {
  const resolvedParams = await params;
  const blog = blogs.find((b) => b.slug === resolvedParams.slug);
  if (!blog) return notFound();

  const breadcrumbLinks = [
    { href: "/", text: "Home" },
    { href: "/blog", text: "Blog Details" },
  ];
    return(
        <>
         <HeroSub title={blog.title} description="Explore our latest articles" breadcrumbLinks={breadcrumbLinks} />

         <section className="pb-20">
            <div className='container mx-auto lg:max-w-(--breakpoint-xl) md:max-w-(--breakpoint-md) px-4 gap-5 flex items-center flex-col lg:flex-row' >
            <div className="lg:w-[60%] w-full">
                <div className="bg-white p-5 rounded-2xl">
                    <Image src={blog.image} alt={blog.title} width={800} height={400} className="w-full h-[400px] object-cover rounded-2xl" />
                    <h4 className="font-unbounded font-medium uppercase text-3xl py-5">{blog.title}</h4>
                    <p className="pb-4 text-pera-dark text-16 leading-6">
                       In today’s competitive landscape, businesses must continuously adapt and innovate to thrive. 
    Unlocking Business Potential means identifying untapped opportunities and leveraging innovative 
    solutions to drive growth, enhance efficiency, and foster lasting success. At Bexon, we believe 
    that success is not just about working harder—it’s about working smarter. By harnessing cutting-edge 
    technologies, data-driven insights, and creative problem-solving, we provide businesses with the 
    tools and strategies needed to stay ahead.
                    </p>
                    <p>The curve. Whether you are looking to streamline operations, enhance customer experiences, or explore new market opportunities, our tailored solutions are designed to empower your business to achieve unparalleled success. With a focus on sustainability, scalability and adaptability, we help your business</p>
                    <div className="border border-border rounded-lg p-5 bg-dark/30">
                        <Icon icon="tabler:quote" width="60" height="60" className="mb-5" />
                        <h5 className="text-black font-semibold font-chakrapetch leading-6">
                            The true entrepreneur is a door, not a dreamer. Innovation is the catalyst that transforms ideas into reality. In today's fast-paced world, success depends not on just surviving change.
                        </h5>
                        <span className="w-full tet-end block font-semibold font-unbounded">-Kevin Hooks</span>
                    </div>
                    <h4 className="font-unbounded py-5">
                        Kye lessons of Business Potential</h4>
                       <p>
                        Unlocking your business potential requirees more than just vision and ambition-it involves strategic thinking,adaptability, and an unwavering commitment to growth. Over time, successful businesses have learned essential lessons that allow them to not only survive but thrive in an ever-changing marketplace.One of the most important lessons is understanding the need for continuous innovation.
                       </p>

        
  <div className="flex gap-3 flex-wrap md:flex-nowrap py-8">
    <Image src={blog01} alt="blog-image" width={200} height={200}
      className="w-full rounded-lg h-full" />
    <Image src={blog02} alt="blog-image" width={200} height={200}
      className="w-full rounded-lg h-full" />
  </div>

  <p className="pb-4 text-para-dark text-16 leading-6">
    Lastly, effective leadership that inspires and motivates employees,
    customers, and stakeholders is essential in steering the business toward
    achieving its full potential. By applying these lessons, businesses can
    unlock new opportunities, overcome obstacles, and reach new levels of
    success.
  </p>
        <ul className="grid grid-cols-2 gap-5">
        <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Embrace Innovation</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Scalable systems</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Customer centric approach</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Resilience</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Effective Leadership</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Continuous Learning</span>

        </li>
         <li className="flex items-center gap-2">
            <Icon icon="material-symbols:check-rounded" width="24" height="24" className="bg-prim text-white rounded-full p-0.5" />
            <span >Operational efficiency</span>

        </li>
        </ul>
        <h4 className="font-unbounded pb-5 pt-8">Leave a comment</h4>
        <p>Your email address will not be published. Required fields are marked</p>
        <form>
            <textarea placeholder="Enter your comments" rows={8} className="border border-border p-5 mb-5" required>
               
            </textarea>
             <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3" >
                    <input type="text" placeholder="Enter Name" className="border border-border px-5 h-[45px]" required/>
                    <input type="text" placeholder="Enter Email" className="border border-border px-5 h-[45px]" required/>
                    <input type="text" placeholder="Enter Website" className="border border-border px-5 h-[45px]" required/>
                </div>
                <div className="space-x-2 py-5">
                    <input type="checkbox" />
                    <span>Save my name, email and website in this browser for the next time I comment.</span>

                </div>
                <button className="text-white bg-dark h-[50px] text-16 lg:text-sm w-fit rounded-full font-chakrapetch font-semibold flex gap-2 ps-4 pe-2 py-2 justify-center items-center tracking-wider group cursor-pointer">
                    Post a comment
                    <Icon icon="tabler:arrow-right" width="24" height="24" className="bg-prim text-white rounded-full h-full w-[35px] p-1.5 group-hover:-rotate-45 transition duration-300" />

                </button>
        </form>
                </div>
                </div>
                 <div className="lg:w-[40%] lg:self-start w-full top-20 space-y-5 lg:sticky">
                    <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                          <h4 className="text-black pb-5">Recent post</h4>
                                                <div className="flex flex-col gap-4">
                                                    {recentPosts.map((post,i)=>(
                        
                                                        <div key={i} className="flex items-center gap-3">
                                                            <Image src={post.image} alt={post.title} width={200} height={200} className="w-[250px] h-[100px] object-cover rounded-xl" />
                                                             <div>
                                                            <h4 className="font-chakrapetch pb-2 text-18 font-semibold"> {post.title}</h4>
                                                            <span className="uppercase text-pera-dark">{post.date}</span>
                                                        </div>                               
                                                        </div>
                                                       
                                                    ))}
                                                </div>
                        
                                            </div>
                                            <div className="border border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                                                <h4 className="text-black pb-5">Categories</h4>
                                                <ul className="flex flex-col gap-2">
                                                    <li className="flex justify-between items-center"><span>Business</span>(3)</li>
                                                    <li className="flex justify-between items-center"><span>Corportae</span>(4)</li>
                                                    <li className="flex justify-between items-center"><span>Design</span>(2)</li>
                                                    <li className="flex justify-between items-center"><span>Innovation</span>(1)</li>
                                                </ul>
                                            </div>
                                            <div className="border-gray-100 shadow-lg bg-white p-5 rounded-xl">
                                                <h4 className="text-black pb-5">Tags</h4>
                                                <div className="flex flex-wrap gap-2">
                                                    {["Branding","Business","Consulting","Design","Innovate","Lead","Marketing"].map((tag)=>(
                                                        <span key={tag} className="border border-border px-3 py-0.5 rounded-sm hover:bg-pera-dark hover:border-transparent hover:text-white transition-colors duration-300">
                                                            {tag}
                                                        </span>
                                                    ))}
                                                </div>
                                        
                    </div>
                 </div>
            </div>

         </section>
        </>
    )
}
export default BlogDetails