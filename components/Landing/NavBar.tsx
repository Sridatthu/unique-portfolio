import Link from "next/link";
import Box from "../common/Box";
import { Button } from "../ui/button";
import Image from "next/image";
import { navBarConfig } from "@/config/NavBar";
import { ThemeToggleButton } from "../common/ThemeSwitch";

export const NavBar = () => {
  return (
    <Box className="sticky top-0 z-20 rounded-md py-4 btn-inner-shadow">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Link href="/">
            <Image src={navBarConfig.logo.src} alt={navBarConfig.logo.alt} width={navBarConfig.logo.width} height={navBarConfig.logo.height} className="size-12 rounded-md border border-gray-200 transition-all duration-300 
            ease-in-out hover:scale-90"/>
          </Link>
        </div>
        <div className="flex items-center gap-4">
          <ThemeToggleButton variant="circle" start="top-left" blur />
        </div>
      </div>
    </Box>
  );
};
