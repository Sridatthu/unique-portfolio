"use client";
import { Project } from "@/config/Project";
import React, { useState } from "react";
import { Card, CardContent, CardHeader } from "../ui/card";
import Image from "next/image";
import {
  Dialog,
  DialogContent,
  DialogTitle,
  DialogTrigger,
} from "../ui/dialog";
import { Globe, PlayCircle } from "lucide-react";
import Link from "next/link";
import { Tooltip, TooltipContent, TooltipTrigger } from "../ui/tooltip";
import Github from "../Svgs/Github";

interface ProjectCardProps {
  project: Project;
}
export const ProjectCard = ({ project }: ProjectCardProps) => {
  const [dialogOpen, setDialogOpen] = useState<boolean>(false);
  return (
    <Card className="group h-full w-full overflow-hidden transition-all p-0 pb-4 border-gray-100 shadow-none dark:border-gray-800">
      <CardHeader className="p-0">
        <div className="group relative aspect-video overflow-hidden">
          <Image
            src={project.image}
            alt={project.title}
            width={1920}
            height={1080}
            className="h-full w-full object-cover"
          />
          {project.video && (
            <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
              <DialogTrigger asChild>
                <div className="absolute inset-0 flex cursor-pointer items-center justify-center bg-black/20 opacity-0 transition-opacity duration-300  group-hover:opacity-100 hover:backdrop-blur-xs">
                  <button className="flex size-16 justify-center items-center rounded-full bg-white/20 backdrop-blur-sm transist-colors duration-200 group-hover:cursor-pointer hover:bg-white/30">
                    <PlayCircle />
                  </button>
                </div>
              </DialogTrigger>
              <DialogContent className="max-w-5xl w-full p-0 border-0">
                <div className="aspect-video w-full">
                  <video
                    src={project.video}
                    controls
                    autoPlay
                    loop
                    className="h-full w-full object-cover rounded-lg"
                  />
                </div>
                <DialogTitle className="sr-only">{project.title}</DialogTitle>
              </DialogContent>
            </Dialog>
          )}
        </div>
      </CardHeader>

      <CardContent className="px-6">
        <div className="space-y-4">
          <div className="flex items-center justify-between ">
            <Link href={project.projectDetailsPageSlug}>
              <h3 className="text-2xl font-semibold font-mono  leading-tight group-hover:text-primary hover:cursor-pointer">
                {project.title}
              </h3>
            </Link>
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger>
                  <Link
                    href={project.link}
                    target="_blank"
                    className=" flex size-6 items-center justify-center hover:text-primary transition-colors"
                  >
                    <Globe />
                  </Link>
                </TooltipTrigger>
                <TooltipContent>
                  <p>View Website</p>
                </TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger>
                  {project.github && (
                    <Link
                      className=" flex size-6 items-center justify-center hover:text-primary transition-colors"
                      href={project.github}
                      target="_blank"
                    >
                      <Github />
                    </Link>
                  )}
                </TooltipTrigger>
                <TooltipContent>
                  <p>View GitHub</p>
                </TooltipContent>
              </Tooltip>
            </div>
          </div>
           <p className="text-gray-800 dark:text-gray-400 font-mono text-sm line-clamp-3">{project.description}</p>
           <div>
            <h4 className="text-sm font-medium mb-2 font-mono ">
              Technologies
            </h4>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((technology, index) => (
                <Tooltip key={index}>
                  <TooltipTrigger>
                    <div className="size-6 hover:scale-120 transition-all duration-300 hover:cursor-pointer">
                      {technology.icon}
                    </div>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{technology.name}</p>
                  </TooltipContent>
                </Tooltip>
              ))}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
