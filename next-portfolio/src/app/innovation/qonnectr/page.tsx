"use client";

import Image from "next/image";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/navbar";
import { TextAnimate } from "@/components/magicui/text-animate";
import { useState, useEffect, useRef } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";

export default function QonnectrPage() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Innovation", link: "/innovation" },
    { name: "Contact", link: "/contact" },
  ];

  const [dominantColor, setDominantColor] = useState<string>("#3bb3e6");
  const imgRef = useRef<HTMLImageElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;
    import("colorthief").then(({ default: ColorThief }) => {
      const img = imgRef.current;
      if (img && img.complete) {
        try {
          const colorThief = new ColorThief();
          const color = colorThief.getColor(img);
          setDominantColor(`rgb(${color[0]},${color[1]},${color[2]})`);
        } catch (e) {}
      }
    });
  }, []);

  return (
    <>
      <SmoothCursor />
      <div
        className="min-h-screen w-full flex flex-col items-center justify-center text-white px-4"
        style={{
          backgroundColor: "rgb(10,10,10)",
        }}
      >
        {/* Navbar (full homepage version) */}
        <div className="w-full z-[9999]">
          <Navbar className="mt-7">
            {/* Desktop Nav */}
            <NavBody>
              <div className="flex items-center justify-between w-full">
                <div className="flex items-center gap-4">
                  <Image src="/profile.png" alt="Logo" width={32} height={32} className="rounded-full" />
                </div>
                <NavItems items={navItems} />
              </div>
              <div className="absolute top-2 right-6 z-[10000] flex items-center gap-2 pointer-events-auto">
                <a href="https://github.com/devp19/qonnectr" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                  </svg>
                </a>
                <a href="https://qonnectr.vercel.app/" aria-label="External Link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M6.354 5.5H9.5a.5.5 0 0 1 0 1H6.354l.823.823a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 1 1 .707.707l-.823.823zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/>
                  </svg>
                </a>
              </div>
            </NavBody>
            {/* Mobile Nav */}
            <MobileNav>
              <MobileNavHeader>
                <div className="flex items-center gap-4">
                  <Image src="/profile.png" alt="Logo" width={32} height={32} className="rounded-full" />
                </div>
                <div className="flex items-center gap-2">
                  <MobileNavToggle isOpen={mobileMenuOpen} onClick={() => setMobileMenuOpen((v) => !v)} />
                </div>
              </MobileNavHeader>
              <MobileNavMenu isOpen={mobileMenuOpen} onClose={() => setMobileMenuOpen(false)} className="bg-[rgba(10,10,10,0.7)] backdrop-blur-md">
                <div className="flex flex-col w-full gap-4">
                  {navItems.map((item) => (
                    <a
                      key={item.name}
                      href={item.link}
                      className="w-full px-4 py-3 rounded-lg text-base font-medium text-white hover:bg-neutral-800 transition"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  ))}
                  <div className="flex flex-row gap-3 mt-2">
                    <a href="https://github.com/devp19/qonnectr" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                    <a href="https://qonnectr.vercel.app/" aria-label="External Link" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M6.354 5.5H9.5a.5.5 0 0 1 0 1H6.354l.823.823a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 1 1 .707.707l-.823.823zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/>
                      </svg>
                    </a>
                  </div>
                </div>
              </MobileNavMenu>
            </MobileNav>
          </Navbar>
        </div>
        {/* Top Section */}
        <div className="w-full flex justify-center">
          <div className="flex flex-col items-center w-full max-w-2xl mx-auto px-4 py-16">
            {/* Back arrow link */}
            <div className="w-full mb-2">
              <a
                href="/innovation"
                className="inline-flex items-center gap-1 text-[#2a2a2a] text-base font-medium hover:text-white transition-all duration-150"
              >
                <span className="text-xl">&#8592;</span> Back
              </a>
            </div>
            <div className="mt-8 flex justify-center items-center w-full">
              {/* Glowy noisy background matching image color */}
              <div className="absolute inset-0 z-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none">
                <div className="w-full h-full rounded-xl blur-2xl scale-105" style={{ background: dominantColor, opacity: 0.6 }} />
                <div className="absolute inset-0 w-full h-full rounded-xl mix-blend-overlay opacity-40" style={{ backgroundImage: 'url("/noise.png")', backgroundSize: 'cover' }} />
              </div>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                ref={imgRef}
                src="/qonnectr2.png"
                alt="Qonnectr Cover"
                width={600}
                height={320}
                className="rounded-xl shadow-lg object-contain w-full max-w-2xl relative z-10"
                crossOrigin="anonymous"
                onLoad={async (e) => {
                  try {
                    const ColorThief = (await import("colorthief")).default;
                    const colorThief = new ColorThief();
                    const color = colorThief.getColor(e.currentTarget);
                    setDominantColor(`rgb(${color[0]},${color[1]},${color[2]})`);
                  } catch (err) {}
                }}
              />
            </div>
            <div className="flex flex-col items-start w-full mt-6">
              <TextAnimate
                animation="blurIn"
                as="h1"
                by="word"
                duration={1.1}
                className="text-white/80 text-sm mt-3 leading-relaxed flex-1 line-clamp-4 text-left"
              >
                Project
              </TextAnimate>
              <div className="flex items-center gap-3 mb-4 mt-2">
                <TextAnimate
                  animation="blurIn"
                  as="h1"
                  by="word"
                  duration={1.1}
                  className="text-4xl md:text-5xl font-regular text-left"
                >
                  Qonnectr
                </TextAnimate>
                <span className="flex items-center gap-2 ml-3">
                  <a href="https://github.com/devp19/qonnectr" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#444" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  <a href="https://qonnectr.vercel.app/" aria-label="External Link" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#444" viewBox="0 0 16 16">
                      <path d="M6.354 5.5H9.5a.5.5 0 0 1 0 1H6.354l.823.823a.5.5 0 1 1-.707.707l-1.5-1.5a.5.5 0 0 1 0-.707l1.5-1.5a.5.5 0 1 1 .707.707l-.823.823zM8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm0-1A7 7 0 1 1 8 1a7 7 0 0 1 0 14z"/>
                    </svg>
                  </a>
                </span>
              </div>
              <TextAnimate
                animation="blurIn"
                as="p"
                by="word"
                duration={1.1}
                className="text-lg text-white/80 text-left"
              >
                Cross-device QR identity exchange system with JWT-secured Auth0 OAuth2 flow, Firestore-based user state persistence, and dynamic SVG generation for real-time profile sharing at scale.
              </TextAnimate>

              {/* Project Details Section - Two Column Layout */}
              <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Timeline & Tools */}
                <div>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconCalendar size={17} className="text-white" /> Development Timeline
                  </h3>
                  <p className="text-[#b0b0b0] mb-7 text-sm">3 Months, March 2024 - May 2024</p>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconStack2 size={17} className="text-white" /> Stack
                  </h3>
                  <ul className="text-[#b0b0b0] space-y-1 text-sm">
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>Auth0</li>
                    <li>Firebase Firestore</li>
                    <li>SVG</li>
                    <li>Vercel</li>
                  </ul>
                </div>
                {/* Right Column: Overview */}
                <div>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconInfoCircle size={17} className="text-white" /> Overview
                  </h3>
                  <p className="text-[#b0b0b0] mb-3 text-sm">
                    Qonnectr is a cross-device identity exchange platform that leverages QR codes and secure authentication to enable real-time profile sharing at events and meetups.
                  </p>
                  <p className="text-[#b0b0b0] mb-3 text-sm">
                    The system uses Auth0 for OAuth2 authentication, Firestore for persistent user state, and dynamic SVG generation for instant, scalable QR code sharing. Built on Next.js and deployed on Vercel, Qonnectr makes networking seamless and secure.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
} 