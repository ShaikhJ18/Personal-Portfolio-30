import Image from "next/image";
import Hero from "@/components/Hero";
import Navbar from "@/components/Navbar"
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
      <div className="relative flex flex-col  h-[300vh] items-center justify-center bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
      <TracingBeam>
    <div className=
        "flex flex-col w-full bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
      <Projects/>
    </div>
      </TracingBeam>
      </div>
      <div className=
          "flex flex-col w-full bg-zinc-50 dark:bg-zinc-900  text-slate-950 transition-bg">
        <Contact/>
      </div>
   </>
  );
}
