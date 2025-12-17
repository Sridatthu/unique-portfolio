import React from 'react'
import { ProjectCard } from '../common/ProjectCard'
import Box from '../common/Box'

export const Project = () => {
  return (
   <Box className='mt-20'>
     <div className='flex flex-col h-full'>
      <h2 className='text-3xl font-semibold'>Projects</h2>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
      </div>
    </div>
   </Box>
  )
}
