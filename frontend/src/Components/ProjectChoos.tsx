import React from 'react'
import logo from "../assets/code-editor-favicon-color.png"
import { WavyBackground } from "./ui/wavy-background";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

import {
  IconBrandCpp,
  IconBrandDjango,
  IconBrandNodejs,
  IconBrandPython,
  IconBrandRust,
  IconBrandFlutter,
  IconBrandReact,
  IconTemplate,
} from "@tabler/icons-react";
 
interface iconProp {
    icoN: React.ReactNode;
  }

const ProjectChoos:React.FC = () => {
  return (
    // <div className="flex flex-col justify-between bg-[#0E0E10] h-lvh w-lvw p-0 m-0">
        <div className="flex flex-col w-lvw justify-between items-center z-10 h-36 fixed">
                <div className="bg-[#292E3E] z-10 w-lvw flex flex-row items-center justify-between h-22">
                <div className="flex flex-row space-x-10 items-center h-12">
                        <div className="flex flex-row h-full items-center gap-2">
                            <a href="http://localhost:5173/"><img src={logo} className="h-6 pl-2"></img></a>
                            <h1 className="text-white font-medium font-serif tracking-widest align-middle">codeSync</h1>
                        </div>
                    </div>
                    <div className="mr-8">
                        <IconTemplate color='white'/>
                    </div>
                </div>
            <WavyBackground className="w-lvw mx-auto pb-40 overflow-scroll pt-12">
                <BentoGrid className="justify-between w-10/12">
                {items.map((item, i) => (
                    <BentoGridItem
                    key={i}
                    title={item.title}
                    description={item.description}
                    header={item.header}
                    icon={item.icon}
                    />
                ))}
                </BentoGrid>
            </WavyBackground>
        </div>
  )
}

const Skeleton :React.FC<iconProp>=({icoN}) => (
    <div className="flex w-full h-full min-h-[6rem] rounded-xl bg-gradient-to-br from-neutral-200 dark:from-[#ff1b6b] dark:to-[#68c26f] to-[#1c44c8] justify-center items-center">
        {icoN}</div>
  );
  const items = [
    {
      title: "React Framework",
      description: "The library for web and native user interfaces",
      header:  <Skeleton icoN={<IconBrandReact className="h-20 w-20 align-middle items-center" color='black'/>}/>,
      icon: <IconBrandReact className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Flutter Toolkit",
      description: "Free & open source multiplatform 2D game development in Flutter",
      header:  <Skeleton icoN={<IconBrandFlutter className="h-20 w-20 align-middle items-center"/>}/>,
      icon: <IconBrandFlutter className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Django Framework",
      description: "Django is a back-end server side web framework",
      header:  <Skeleton icoN={<IconBrandDjango className="h-20 w-20 align-middle items-center"/>}/>,
      icon: <IconBrandDjango className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "NodeJs Runtime",
      description:
        "Node.js® is an open-source, JavaScript runtime environment.",
      header:  <Skeleton icoN={<IconBrandNodejs className="h-20 w-20 align-middle items-center"/>}/>,
      icon: <IconBrandNodejs className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "C++",
      description: "C++ is a high-level, general-purpose programming language.",
      header:  <Skeleton icoN={<IconBrandCpp className="h-20 w-20 align-middle items-center"/>}/>,
      icon: <IconBrandCpp className="h-4 w-4 text-neutral-500" />,
    },
    {
      title: "Rust",
      description: "Rust is a multi-paradigm, general-purpose programming language.",
      header:  <Skeleton icoN={<IconBrandRust className="h-20 w-20 align-middle items-center"/>}/>,
      icon: <IconBrandRust className="h-4 w-4 text-neutral-500" />,
    },
    {
        title: "Python",
        description: "Python is a high-level, general-purpose programming language.",
        header:  <Skeleton icoN={<IconBrandPython className="h-20 w-20 align-middle items-center"/>}/>,
        icon: <IconBrandPython className="h-4 w-4 text-neutral-500" />,
      },
  ];

export default ProjectChoos
