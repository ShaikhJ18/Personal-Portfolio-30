"use client";

import Image from "next/image";
import { Tabs } from "./ui/tabs";

export default function About() {
  const tabs = [
    {
      title: "About Me",
      value: "product",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-3xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>About Me</p>
          <p>
            I am a second year Computer Science student at the University of Guelph minoring in Mathematics. I am aspiring to become a skilled Software Engineer that writes clean and efficient code. I am looking forward to working at a company where I can apply my Mathematics and Computer Science skills to build something truly amazing. I am a dependable and friendly student searching for a Co-op position to apply my skills to help build outstanding software. I currently reside in Mississauga Ontario where I have been living for my whole life. I like the balance between urban cities and rural countrysides. I am a hardworking individual and can accomplish anything as long as I work hard.
          </p>
        </div>
      ),
    },
    {
      title: "Hobbies",
      value: "services",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Hobbies</p>
          <DummyContent />
        </div>
      ),
    },
    {
      title: "Skills",
      value: "playground",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Skills</p>
          <ul>
            <li>HTML 5</li>
            <li>CSS</li>
            <li>JavaScript</li>
            <li>Java</li>
            <li>Python</li>
            <li>C</li>
            <li>R</li>
            <li>C++</li>
            <li>C#</li>
            <li>SQL</li>
          </ul>
        </div>
      ),
    },
    {
      title: "Education",
      value: "content",
      content: (
        <div className="w-full overflow-hidden relative h-full rounded-2xl p-10 text-xl md:text-4xl font-bold text-white bg-gradient-to-br from-blue-700 to-violet-900">
          <p>Education</p>
          <ul>
            <li>Erindale Secondary Schoo</li>
            <li>University of Guelph</li>
          </ul>
        </div>
      ),
    },
  ];

  return (
    <div className="h-[20rem] md:h-[40rem] [perspective:1000px] relative b flex flex-col max-w-5xl mx-auto w-full  items-start justify-start my-40">
      <Tabs tabs={tabs} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <Image
      src="/linear.webp"
      alt="dummy image"
      width="1000"
      height="1000"
      className="object-cover object-left-top h-[60%]  md:h-[90%] absolute -bottom-10 inset-x-0 w-[90%] rounded-xl mx-auto"
    />
  );
};
