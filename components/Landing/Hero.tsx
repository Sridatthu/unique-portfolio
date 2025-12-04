
import Box from '../common/Box'
import Image from 'next/image'
import { MorphingText } from '../ui/morphing-text'
import { HeroConfig } from '@/config/Hero'
import { Skill } from '../common/Skill'
import { Socials } from '../common/SocialLinks'

export const Hero = () => {
  return (
    <Box className='mx-auto max-w-5xl'>
        <div className='flex flex-col gap-4'>
            <div className='flex gap-4'>
                <div>
                    <Image src={HeroConfig.avatar} alt={HeroConfig.name} width={100} height={100} className="size-24 rounded-md border border-gray-200 transition-all duration-300 
            ease-in-out hover:scale-90"/>
                </div>
            </div>
            <div>
                <h1 className='font-mono text-2xl font-bold'>Hi, I'm {HeroConfig.name}</h1>
            </div>
            <div className='flex gap-1 items-center mt-6'>
                <span className="font-mono">I'Build</span>
               <div className='h-7 w-24 relative'> <MorphingText  texts={HeroConfig.jobTitle} /> </div>
            </div>
            <div className=' flex flex-col gap-2 mt-6'>
                <div className='font-mono font-bold'>Skills :</div>
                <div className='flex flex-wrap gap-2'>
                    {HeroConfig.skills.map((skill,index)=>{
                        return <Skill key={index} SkillLogo={skill.logo} SkillTitle={skill.title} />
                    })}
                </div>
            </div>
            <div className='flex items-center gap-2 mt-6'>
             <Socials />
            </div>
        </div>
    </Box>
  )
}
