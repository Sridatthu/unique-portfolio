import Image from 'next/image'
import React from 'react'
import { Skill } from '../common/Skill';
import { ExperienceConfig } from '@/config/Experience';

export const ExperienceCard = () => {
  return (
    <div className='flex flex-col  gap-4 mt-4 p-4 '>
        <div className=' flex flex-col md:flex-row md:justify-between md:items-center'>
            <div className='flex gap-4  '>
                 <Image src='/assets/ten.webp' alt='TEN Logo' width={40} height={40} className='rounded-md h-12 w-12 object-cover  hover:scale-95 transition-all duration-300 ease-in-out cursor-pointer'/>
                <div className='flex flex-col '>
                    <div className='text-base font-mono font-semibold'>The Entrepreneurship Network</div>
                    <div className=' text-[#9898A2] text-sm font-mono font-medium'>Frontend Developer.</div>
                </div>
            </div>
            <div className='flex flex-col md:items-center md:mt-0 mt-2'>
                <div className='text-sm font-mono font-medium'>August 2025 - Present</div>
                <div className='text-[#9898A2] text-sm font-mono font-medium'>India (Remote)</div>
            </div>
        </div>
        <div className='flex flex-col gap-4 px-1 '>
            <div className='font-semibold text-base font-mono'>Technologies & Tools</div>
            <div className="flex flex-wrap gap-2">
                {ExperienceConfig.skills.map((skill, index) => {
              return (
                <Skill
                  key={index}
                  SkillLogo={skill.logo}
                  SkillTitle={skill.title}
                />
              );
            })}
            </div>
        </div>
        <div className='flex flex-col gap-2 px-1 '>
            <p className='text-sm font-mono text-justify dark:text-[#A1A1A1] '>
            - Developed and maintained responsive web applications using  <span className='font-bold'>Next.js</span>, <span className='font-bold'>React</span>, <span className='font-bold'>TypeScript</span> and <span className='font-bold'>Tailwind CSS</span>, ensuring optimal performance and user experience across devices.
            </p>
            <p className='text-sm font-mono text-justify dark:text-[#A1A1A1] '>- Integrated and optimized backend API connections, implementing efficient data fetching strategies and error handling mechanisms.</p>
            <p className='text-sm font-mono text-justify dark:text-[#A1A1A1]'>- Enhanced user experience and interface design through implementation of consistent design systems, accessibility standards, and performance optimizations.</p>
            <p className='text-sm font-mono text-justify dark:text-[#A1A1A1]'>- Analyze technical capabilities and provide optimal solutions.</p>
        </div>
    </div>
  )
}
