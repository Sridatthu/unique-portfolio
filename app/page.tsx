import Box from "@/components/common/Box";
import { Github } from "@/components/common/Github";
import { Experience } from "@/components/Experience/Experience";
import { About } from "@/components/Landing/About";
import { Hero } from "@/components/Landing/Hero";
import { Project } from "@/components/Landing/Project";
import { TechStack } from "@/components/Landing/TechStack";



export default function Home() {
  return (
  <Box className="min-h-screen py-18 ">
    <Hero/>
    <Experience/>
    <Github/>
    <Project />
    <About/>
    <TechStack />
  </Box>
  );
}
