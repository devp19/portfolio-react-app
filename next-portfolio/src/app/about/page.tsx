"use client";

import Image from "next/image";
import { Navbar, NavBody, NavItems } from "@/components/ui/navbar";
import { SpinningText } from "@/components/magicui/spinning-text";

export default function About() {
  // Sample nav items (same as main page)
  const navItems = [
    { name: "Home", link: "/" },
    { name: "Work", link: "#work" },
    { name: "About", link: "/about" },
    { name: "Contact", link: "#contact" },
  ];

  return (
    <div
      className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4"
      style={{
        background: "rgb(10,10,10)",
        backgroundImage:
          "radial-gradient(circle at 100% 100%, rgba(244,156,105,0.55) 0%, rgba(205,65,64,0.38) 20%, rgba(102,16,32,0.22) 42%, rgba(10,10,10,1) 70%)",
      }}
    >
      {/* Navbar (copied from main page) */}
      <div className="fixed left-0 w-full z-[9999]" style={{ top: '2rem', position: 'fixed' }}>
        <Navbar>
          <NavBody>
            <div className="flex items-center justify-between w-full">
              <div className="flex items-center gap-4">
                <Image src="/profile.png" alt="Logo" width={32} height={32} className="rounded-full" />
              </div>
              <NavItems items={navItems} />
            </div>
            {/* Social icons absolutely positioned top right */}
            <div className="absolute top-2 right-6 z-[10000] flex items-center gap-2 pointer-events-auto">
              <a href="https://github.com/devp19" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                </svg>
              </a>
              <a href="https://linkedin.com/in/devp19" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                </svg>
              </a>
              <a href="https://x.com/devp19" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                  <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                </svg>
              </a>
            </div>
          </NavBody>
        </Navbar>
      </div>
      {/* Top Section */}
      <div className="max-w-6xl w-full mx-auto flex flex-col items-start pt-40 pb-16">
        <div className="mb-2">
          <SpinningText
            className="mb-4 left-11 mb-14"
            fontSize={8}
            radius={4}
            duration={18}
          >
            Innovator • Thinker • Builder •
          </SpinningText>
        </div>
        <h1 className="text-4xl md:text-5xl font-regular mb-4">about me.</h1>
        <p className="text-lg text-white/80">
          i build intelligent, real-world solutions <br></br>automation analyst @ fidelity investments, cs @ torontomet, cofounder @ resdex
        </p>
      </div>
      {/* About Card Section */}
      <div className="max-w-6xl w-full mx-auto flex flex-col items-center pb-24">
        <div className="bg-white/5 rounded-2xl shadow-lg border border-white/10 flex flex-col md:flex-row w-full p-8 gap-8">
          <div className="flex flex-col items-center md:items-start md:w-1/3">
            <div className="w-28 h-28 rounded-full overflow-hidden border-2 border-white/20 mb-4">
              <Image src="/profile.png" alt="Profile" width={112} height={112} className="object-cover w-full h-full" />
            </div>
            <span className="text-xl font-semibold">Dev Patel</span>
            <span className="text-sm text-white/60 mt-1">Automation Analyst @ Fidelity Investments</span>
          </div>
          <div className="flex-1 flex flex-col gap-4 justify-center">
            <h2 className="text-2xl font-semibold mb-2">Bio</h2>
            <p className="text-white/80 text-base leading-relaxed">
              I'm a passionate software engineer from Toronto, Ontario, currently studying Computer Science at Toronto Metropolitan University. I love building intelligent, real-world solutions and have a strong interest in AI, automation, and applied research. My journey started with robotics in grade school and has led me to work on impactful projects in both academic and professional settings.
            </p>
            <div className="flex flex-row gap-8 mt-4">
              <div className="flex flex-col items-center">
                <span className="text-base mb-2">Years Coding</span>
                <span className="text-3xl font-bold">7+</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base mb-2">GPA</span>
                <span className="text-3xl font-bold">3.94</span>
              </div>
              <div className="flex flex-col items-center">
                <span className="text-base mb-2">Major Projects</span>
                <span className="text-3xl font-bold">5</span>
              </div>
            </div>
            <div className="flex flex-wrap gap-3 mt-6">
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">TypeScript</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">React</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">Next.js</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">AI/ML</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">Automation</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">UI/UX</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">Cloud</span>
              <span className="px-4 py-2 rounded-full bg-white/10 text-white/80 text-sm font-medium">Robotics</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
} 