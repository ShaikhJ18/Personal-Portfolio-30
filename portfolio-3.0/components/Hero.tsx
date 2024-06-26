"use client";
import { TypewriterEffect, TypewriterEffectSmooth } from "./ui/typewriter-effect";

export default function TypewriterEffectDemo() {
  const words = [
    {
      text: "Hello,",
    },
    {
      text: "My",
    },
    {
      text: "Name",
    },
    {
      text: "is",
    },
    {
      text: "Jawad",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: "Shaikh",
      className: "text-blue-500 dark:text-blue-500",
    },
  ];
  const moreWords = [
    {
      text: "I"
    },{
      text: "Am"
    },
    {
      text: "A"
    },
    {
      text: "Software Developer",
      className: "text-blue-500 dark:text-blue-500"
    }
  ]
  const EvenMoreWords = [
    {
      text: "I"
    },{
      text: "Am"
    },
    {
      text: "A"
    },
    {
      text: "Problem Solver",
      className: "text-blue-500 dark:text-blue-500"
    }
  ]
  const AddiotonallyEvenMoreWords = [
    {
      text: "I"
    },{
      text: "Am"
    },
    {
      text: "An"
    },
    {
      text: "Innovator",
      className: "text-blue-500 dark:text-blue-500"
    }
  ]
  return (
    <div className="flex bg-transparent flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffectSmooth words={words} />
      <TypewriterEffectSmooth words={moreWords}/>
      <TypewriterEffectSmooth words={EvenMoreWords}/>
      <TypewriterEffectSmooth words={AddiotonallyEvenMoreWords}/>
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
      </div>
    </div>
  );
}
