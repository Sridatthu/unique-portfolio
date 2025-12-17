"use client"
import { useTheme } from 'next-themes'
import React, { useEffect, useState,cloneElement } from 'react'
import { GitHubCalendar } from "react-github-calendar";
import { Tooltip } from "react-tooltip";
import Box from './Box';
export const Github = () => {
    const {theme} = useTheme();
    const [mounted, setMounted] = useState(false);
     const [isMobile, setIsMobile] = useState(false);
    useEffect(() => {
        setMounted(true);
        const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    }   , []);

    if (!mounted) {
        return null;
    }

  return (
    <Box className='mt-20'>
    <div className='flex flex-col gap-4'>
        <h2 className='text-3xl font-semibold'>Github Activity</h2>
        <div className='flex w-full justify-center font-mono border p-4 rounded-lg btn-inner-shadow'>
             <GitHubCalendar
                username="sridatthu"
                colorScheme={theme === "dark" ? "dark" : "light"}
                blockSize={isMobile ? 6 : 10}
                blockMargin={isMobile ? 2 : 3}
                fontSize={isMobile ? 10 : 12}
                style={{
                  color: theme === "dark" ? "#e5e5e5" : "#171717",
                }}
                renderBlock={(block: any, activity: any) =>
                  cloneElement(block, {
                    "data-tooltip-id": "github-tooltip",
                    "data-tooltip-content": `${activity.count} contributions on ${activity.date}`,
                  })
                }
              />
               <Tooltip
                id="github-tooltip"
                style={{
                  backgroundColor: theme === "dark" ? "#171717" : "#ffffff",
                  color: theme === "dark" ? "#e5e5e5" : "#171717",
                  borderRadius: "8px",
                  padding: "8px 12px",
                  fontSize: "12px",
                  boxShadow: "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                  border: theme === "dark" ? "1px solid #404040" : "1px solid #e5e5e5",
                  opacity: 1,
                }}
              />
        </div>
    </div>
    </Box>
  )
}
