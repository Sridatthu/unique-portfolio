import React from 'react'
import { ProjectCard } from '../common/ProjectCard'
import Box from '../common/Box'
import { Project, projects } from '@/config/Project'

export const ProjectList = () => {
  return (
   <Box className='mt-20'>
     <div className='flex flex-col h-full'>
      <h2 className='text-3xl font-semibold'>Projects</h2>
      <div className='mt-8 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-2'>
         {projects.map((project: Project) => (
        <ProjectCard key={project.title} project={project} />
      ))}
      </div>
    </div>
   </Box>
  )
}
