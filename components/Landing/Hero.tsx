import Box from "../common/Box";
import Image from "next/image";
import { HeroConfig } from "@/config/Hero";
import { Skill } from "../common/Skill";
import { Socials } from "../common/SocialLinks";
import NowPlaying from "../common/SpotifyPlayer";
import { WordRotate } from "../ui/word-rotate";
import IndiaFlag from "../Svgs/IndianFlag";

export const Hero = () => {
  return (
    <Box className="mx-auto max-w-5xl">
      <div className="flex flex-col gap-4">
        <div className="flex gap-4 items-center">
          <div>
            <Image
              src={HeroConfig.avatar}
              alt={HeroConfig.name}
              width={100}
              height={100}
              className="size-24 rounded-full border-3 border-gray-150 dark:border-gray-400 transition-all duration-300 
            ease-in-out hover:scale-90"
            />
          </div>
          <div className="flex flex-col items-baseline">
            <div className="flex gap-2 items-center">
              <h1 className="font-mono text-3xl font-medium">{HeroConfig.name}</h1>
              <a className="hover:scale-110 transition-all duration-300 ease-in-out cursor-pointer " href="https://india.gov.in/" target="_blank" rel="noopener noreferrer"><IndiaFlag width={25} height={15} /></a>
            </div>
            <WordRotate words={HeroConfig.jobTitle} className="text-[#9898A2] font-mono" />
          </div>
        </div>

        <div className="flex mt-4">
            <div className="font-mono text-base text-left md:text-justify dark:text-[#A1A1A1] px-4 ">
                I built intearactive and responsive web applications using modern technologies.with a strong focus on clean code and best practices.
            </div>

        </div>
        <div className="flex items-center gap-2 mt-2 px-4">
          <Socials />
        </div>
        <div className="px-3">
          <NowPlaying />
        </div>
      </div>
    </Box>
  );
};
