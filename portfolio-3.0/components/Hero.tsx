"use client";
import { TypewriterEffect } from "./ui/typewriter-effect";

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
  return (
    <div className="flex bg-black flex-col items-center justify-center h-[40rem] ">
      <TypewriterEffect words={words} />
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 space-x-0 md:space-x-4 mt-10">
        <button className="w-40 h-10 rounded-xl bg-blue-400 border dark:border-white border-transparent text-white text-sm">
          Hire Me
        </button>
        <button className="w-40 h-10 rounded-xl bg-white text-black border border-black  text-sm">
          Download Resume
        </button>
      </div>
    </div>
  );
}
