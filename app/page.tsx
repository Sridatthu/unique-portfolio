import Box from "@/components/common/Box";
import { Github } from "@/components/common/Github";
import { Experience } from "@/components/Experience/Experience";
import { Hero } from "@/components/Landing/Hero";



export default function Home() {
  return (
  <Box className="min-h-screen py-18 ">
    <Hero/>
    <Experience/>
    <Github/>
  </Box>
  );
}
