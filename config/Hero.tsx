

interface SkillProps {
    logo: string,
    title: string
}
export const HeroConfig = {
    name: "Sri Datthu Goud",
    avatar: "/assets/logo.png",
    jobTitle: ["FullStack Developer", "Software Engineer", "Tech Enthusiast"],
    skills: [
        {
            logo: "/svg/react.svg",
            title: "React"
        },
        {
            logo:"/svg/spring-icon.svg",
            title:"SpringBoot"
        },
        {
            logo:"/svg/java.svg",
            title:"Java"
        },
        {
            logo:"/svg/javascript.svg",
            title:"JavaScript"
        },
        {
            logo:"/svg/nodejs-icon.svg",
            title:"NodeJs"
        },
        {
            logo:"/svg/tailwindcss-icon.svg",
            title:"Tailwind Css"
        },
        {
            logo:"/svg/nextjs-icon.svg",
            title:"NextJs"
        },
        {
            logo:"/svg/typescript-icon.svg",
            title:"TypeScript"
        },
        {
            logo:"/svg/mysql.svg",
            title:"MySQL"
        },
        {
            logo:"/svg/mongodb-icon.svg",
            title:"MongoDB"
        },
        {
            logo:"/svg/postgresql.svg",
            title:"PostgreSQL"
        },
        {
            logo:"/svg/vercel-icon.svg",
            title:"Vercel"
        },

    ] as SkillProps[],
    links:[]
}