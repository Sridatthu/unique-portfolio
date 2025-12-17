import React from 'react'
import { ExperienceCard } from './ExperienceCard'
import Box from '../common/Box'

export const Experience = () => {
  return (
   <Box className='mt-20'>
     <div className='flex flex-col '>
        <h2 className='text-3xl font-semibold'>Experience</h2>
        <ExperienceCard/>
    </div>
   </Box>
  )
}
