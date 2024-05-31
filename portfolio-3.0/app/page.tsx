import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
import About from "@/components/About"
import Certifications from "@/components/Certifications"
import Contact from "@/components/Contact"
import {TracingBeam} from "@/components/ui/tracing-beam";
import { AuroraBackground } from "@/components/ui/aurora-background";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <>
    <AuroraBackground>
    <Navbar/>
    <Hero/>
      </AuroraBackground>
      <div className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
        <h1 className="text-white text-center text-5xl shadow-lg  font-bold shadow-lg">About Me</h1>
        <About/>
      </div>
      <div className="flex flex-col  h-[300vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
      <TracingBeam>
      <div className=
        "flex flex-col w-full bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
      <h1 className="text-white text-center text-5xl shadow-lg  font-bold shadow-lg">Projects</h1>
      <Projects/>
      </div>
      </TracingBeam>
      </div>
      <div className="flex flex-col items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
        <h1 className="text-white text-center text-5xl shadow-lg  font-bold shadow-lg">Certifications</h1>
        <Certifications />
      </div>
      <div className=
          "w-full bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
        <h1 className="text-white text-center text-5xl shadow-lg  font-bold shadow-lg">Contact Me</h1>
        <Contact/>
      </div>

   </>
  );
}
