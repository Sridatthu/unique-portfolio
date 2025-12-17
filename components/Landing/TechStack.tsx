import React from 'react'
import { Marquee } from '../ui/marquee'
import Image from 'next/image'

const Skills= [
  {
name:"java",
image:"/svg/java.svg"
  },
  {
    name:"springboot",
    image:"/svg/spring-icon.svg"
  },
  {
    name:"javascript",
    image:"/svg/javascript.svg"
  },
   {
        name: "typescript",
        image: "/svg/typescript-icon.svg"
    },
    {
        name: "nextjs",
        image: "/svg/nextjs-icon.svg"
    },
    {
        name: "react",
        image: "/svg/react.svg"
    },
    {
        name: "tailwindcss",
        image: "/svg/tailwindcss-icon.svg"
    },
    {
      name:"postresql",
      image:"/svg/postgresql.svg"
    },{
      name:"mongodb",
      image:"/svg/mongodb-icon.svg"
    },{
      name:"Mysql",
      image:"/svg/mysql.svg"
    }
    
]
const Tools=[
  {
    name:"vercel",
    image:"/svg/vercel-icon.svg"
  },
  {
    name:"github",
    image:"/svg/github.webp"
  },
  {
    name:"docker",
    image:"/svg/docker.svg"
  },
  {
    name:"shadcn",
    image:"/svg/shadcn.webp"
  },
  {
    name:"postman",
    image:"/svg/postman.webp"
  },
  {
    name:"redux",
    image:"/svg/redux.svg"
  },
  {
    name:"motion",
    image:"/svg/motion.svg"
  },{
    name:"nodejs",
    image:"/svg/nodejs.svg"
  }
]

const SkillCard=(props:{name:string,image:string})=>{
  return(
   <div className="flex relative items-center gap-2 rounded-md border dark:border-white/30 border-black/20 px-2 py-1 btn-inner-shadow transition-all duration-300 
            ease-in-out   bg-[#F2F2F2] dark:bg-[#2F2F2F] ">
     <div className="flex items-center">
            <Image src={props.image} alt={props.name} width={20} height={20} className="size-4 md:size-5 " />
          </div>
          <div className="flex items-center font-sans font-medium text-sm md:text-base">
            {props.name}
          </div>
   </div>
  )
}

export const TechStack = () => {
  return (
    <div className='flex flex-col px-4 mt-3'>
       <h2 className='text-3xl font-semibold'>TechStack</h2>
        <div className='mt-4 relative w-full flex flex-col items-center justify-center overflow-hidden '>
          <Marquee pauseOnHover className="[--duration:20s]">
              {Skills.map((skill,index)=>(
                <SkillCard key={index} name={skill.name} image={skill.image} />
              ))}
          </Marquee> 
          <Marquee reverse pauseOnHover className="[--duration:20s]">
              {Tools.map((tool,index)=>(
                <SkillCard key={index} name={tool.name} image={tool.image} />
              ))}
          </Marquee> 

           <div className="from-background pointer-events-none absolute inset-y-0 -left-4 w-1/4 bg-gradient-to-r"></div>
      <div className="from-background pointer-events-none absolute inset-y-0 -right-4 w-1/4 bg-gradient-to-l"></div> 
        </div>
    </div>
  )
}
