import MDXIcon from "@/components/technologies/MDXIcon";
import MongoDB from "@/components/technologies/MongoDB";
import Motion from "@/components/technologies/Motion";
import NextJs from "@/components/technologies/NextJs";
import NodeJs from "@/components/technologies/NodeJs";
import PostgreSQL from "@/components/technologies/PostgreSQL";
import Prisma from "@/components/technologies/Prisma";
import ReactIcon from "@/components/technologies/ReactIcon";
import Shadcn from "@/components/technologies/Shadcn";
import SocketIo from "@/components/technologies/SocketIo";
import TailwindCss from "@/components/technologies/TailwindCss";
import TypeScript from "@/components/technologies/TypeScript";
import Vercel from "@/components/technologies/Vercel";

export interface Project {
  title: string;
  description: string;
  image: string;
  video?: string;
  link: string;
  technologies: { name: string; icon: React.ReactNode }[];
  github?: string;
  live: string;
  details: boolean;
  projectDetailsPageSlug: string;
  isWorking: boolean;
}

export const projects: Project[] = [
  {
    title: 'Magical Draw',
    description:
      'A comprehensive realtime collaborative drawing tool',
    image: '/projects/magicaldraw.png',
    video: 'https://ik.imagekit.io/hwj18u8hq/magicaldraw.mp4?tr=orig',
    link: 'https://magicaldraw.vercel.app/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      { name: 'Node.js', icon: <NodeJs key="nodejs" /> },
      { name:"PostreSql", icon:<PostgreSQL key="postgresql" />  },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name:"Prisma", icon:<Prisma key="prisma" />  },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    { name: 'Vercel', icon: <Vercel key="vercel" /> },
    { name: 'Socket.IO', icon: <SocketIo key="socketio" /> },
    ],
    github: 'https://github.com/Sridatthu/MagicBoard',
    live: 'https://magicaldraw.vercel.app/',
    details: true,
    projectDetailsPageSlug: '/projects/magicaldraw',
    isWorking: true,
  },
  {
    title: 'Datthu UI',
    description:
      'A UI library for building modern web applications',
    image: '/projects/datthuui.png',
    video: 'https://ik.imagekit.io/hwj18u8hq/datthuui.mp4?tr=orig',
    link: 'https://ui.datthu.site/',
    technologies: [
      { name: 'Next.js', icon: <NextJs key="nextjs" /> },
      { name: 'TypeScript', icon: <TypeScript key="typescript" /> },
      {name:"Motion",icon:<Motion key="motion" />},
      { name: 'MDX', icon: <MDXIcon key="mdx" /> },
      { name: 'React', icon: <ReactIcon key="react" /> },
      { name: 'Tailwind CSS', icon: <TailwindCss key="tailwindcss" /> },
      { name: 'shadcn/ui', icon: <Shadcn key="shadcn" /> },
    { name: 'Vercel', icon: <Vercel key="vercel" /> },
    ],
    github: 'https://github.com/Sridatthu/datthuui',
    live: 'https://ui.datthu.site/',
    details: true,
    projectDetailsPageSlug: '/projects/datthui',
    isWorking: true,
  }
];
