"use client";
import Image from "next/image"
import { motion } from "motion/react"
interface SkillProps {
  SkillLogo: string,
  SkillTitle: string
}
export const Skill = ({ SkillLogo, SkillTitle }: SkillProps) => {
  return (
    <motion.div
      drag
      dragConstraints={{ top: 0, left: 0, right: 0, bottom: 0 }}
      dragTransition={{ bounceStiffness: 500, bounceDamping: 15 }}
      whileDrag={{ cursor: "grabbing" }}
      className={`flex relative items-center gap-2 rounded-md border dark:border-white/30 border-black/20 px-2 py-1 btn-inner-shadow transition-all duration-300 
            ease-in-out hover:scale-90 cursor-grab bg-[#F2F2F2] dark:bg-[#2F2F2F] `}>
      <div className="flex items-center">
        <Image src={SkillLogo} alt={SkillTitle} width={20} height={20} className="size-5" />
      </div>
      <div className="flex items-center font-sans font-medium text-base">
        {SkillTitle}
      </div>
    </motion.div>
  )
}
