import Image from 'next/image'
import React from 'react'
import { SocialLinks } from '@/config/Social'

export const Socials = () => {
  return (
    <div className='flex items-center gap-4'>
        {SocialLinks.map((social,index)=>(
            <a href={social.url} key={index} className='hover:scale-110 transition-all duration-300 ease-in-out relative'>
                <Image src={social.icon} alt={social.name} width={28} height={28} className={`dark:invert`}/>
            </a>
        ))}
    </div>
  )
}
