"use client";

import Image from "next/image";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/navbar";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useState, useEffect, useRef } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { cn } from "@/lib/utils";
import {
  IconAdjustmentsBolt,
  IconCloud,
  IconCurrencyDollar,
  IconEaseInOut,
  IconHeart,
  IconHelp,
  IconRouteAltLeft,
  IconTerminal2,
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";


const projects = [
    {
        title: "RESDEX",
        image: "/resdex.png",
        desc: "A centralized research hub that empowers students to showcase their work, build academic portfolios, and connect with peers and institutions. ResDex streamlines research discovery and visibility, creating a unified platform that bridges emerging talent with opportunity across the academic landscape.",
        github: "https://github.com/devp19/resdex",
        link: "https://resdex.ca",
        linkedin: "https://www.linkedin.com/posts/devp19_just-wrapped-up-an-incredible-weekend-at-activity-7343044428422332417-ItRx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM",
      },
      {
    title: "HOTSPOTS-AI",
    image: "/HotSpots3.png",
    desc: "A geospatial ML pipeline using a Gemini‑tuned Random Forest to synthesize Land Surface Temperature (LST), NDVI, and 3D building‐density data for urban heat vulnerability mapping.",
    github: "https://github.com/devp19/hotspots-ai",
    link: "https://hotspots-ai.vercel.app/",
    linkedin: "https://www.linkedin.com/posts/devp19_the-recent-heat-across-the-city-of-toronto-activity-7345587728895328257-vc3u?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM",
  },
  {
    title: "PERCEPTA",
    image: "/percepta2.png",
    desc: "A real-time visual intelligence pipeline combining OpenCV image processing, YOLOv5 object detection, and context-aware NLP to generate AI-driven scene comprehension.",
    github: 'https://example.com',
  },
  {
    title: "QONNECTR",
    image: "/qonnectr2.png",
    desc: "A cross-device QR identity exchange system with JWT-secured Auth0 OAuth2 flow, Firestore-based user state persistence, and dynamic SVG generation for real-time profile sharing at scale.",
    github: "https://github.com/devp19/qonnectr",
    link: "https://qonnectr.vercel.app/",
    linkedin: "https://www.linkedin.com/posts/devp19_what-better-way-to-kick-off-2025-than-activity-7287567295676104704-xo8M?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM",
  },
  {
    title: "MYBUDDY",
    image: "/mybuddy.png",
    desc: "A generative AI wellness assistant that combines NLP and real-time speech-to-text to simulate therapeutic conversations. MyBuddy interprets spoken input and generates empathetic, context-aware responses, offering accessible mental health support through natural, reflective dialogue.",
    github: "https://github.com/devp19/mybuddy",
    linkedin: "https://www.linkedin.com/posts/devp19_this-past-weekend-i-had-the-incredible-opportunity-activity-7157891977940807680-KbtK?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM",
  },
  
  {
    title: "STOCKEYE",
    image: "/stockeye.png",
    desc: "A Discord bot using Discord.js for automated financial research: web‑scraping corporate metrics, integrating LLM‑driven summaries, generating private “portfolio” channels, and planning ML‑enabled stock‑movement prediction from time‑series data ",
    github: "https://github.com/devp19/stockeye",
},
  {
    title: "NEAR FANTASY",
    image: "/near.png",
    desc: "A decentralized fantasy sports platform that merges real-world gameplay with blockchain-backed digital ownership. NEAR Fantasy leverages smart contracts and wallet-based identity to let users draft, trade, and compete using tokenized player assets in real-time.",
    github: "https://github.com/devp19/near-fantasy",
},
  {
    title: "CITCO",
    image: "/citco.png",
    desc: "A web-based research analytics platform that examines the relationship between public funding and academic impact among Canadian computer science researchers. Citco cross-references grant data with citation records, allowing users to filter by year, institution, or domain and visualize 15-year trends. ",
    github: "https://github.com/devp19/citco",
},
];

export default function Projects() {
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
                <a href="https://x.com/_devp" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                    <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
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
                  {navItems.map((item, idx) => (
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
                    <a href="https://github.com/devp19" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                      </svg>
                    </a>
                    <a href="https://linkedin.com/in/devp19" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                      </svg>
                    </a>
                    <a href="https://x.com/_devp" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-neutral-800 transition cursor-pointer">
                      <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="white" viewBox="0 0 16 16">
                        <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
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
                src="/resdex-cover.png"
                alt="ResDex Cover"
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
              {/* <SpinningText
                className="mb-4 left-11 mb-14"
                fontSize={8}
                radius={4}
                duration={18}
              >
                ResDex • ResDex • ResDex •
              </SpinningText> */}
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
                  ResDex
                </TextAnimate>
                <span className="flex items-center gap-2 ml-3">
                  {/* GitHub */}
                  <a href="https://github.com/devp19/resdex" aria-label="GitHub" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#444" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                  {/* LinkedIn */}
                  <a href="https://www.linkedin.com/posts/devp19_just-wrapped-up-an-incredible-weekend-at-activity-7343044428422332417-ItRx?utm_source=share&utm_medium=member_desktop&rcm=ACoAAESdXuYB0L4oy78G6IDR6GZO4HCCkvrnPuM" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#444" viewBox="0 0 16 16">
                      <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                    </svg>
                  </a>
                  {/* X/Twitter */}
                  <a href="https://x.com/_devp" aria-label="X" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#444" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                  {/* External Link */}
                  <a href="https://resdex.ca" aria-label="External Link" target="_blank" rel="noopener noreferrer" className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer">
                    <FiExternalLink size={18} color="#444" />
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
                Building a cutting-edge, student-centric research platform that empowers users to collaborate, review, and share their research.
              </TextAnimate>

              {/* Project Details Section - Two Column Layout */}
              <div className="w-full mt-10 grid grid-cols-1 md:grid-cols-2 gap-10">
                {/* Left Column: Timeline & Tools */}
                <div>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconCalendar size={17} className="text-white" /> Timeline
                  </h3>
                  <p className="text-[#b0b0b0] mb-7 text-sm">11 Months, August 2024 - Present</p>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconStack2 size={17} className="text-white" /> Stack
                  </h3>
                  <ul className="text-[#b0b0b0] space-y-1 text-sm">
                    <li>Next.js</li>
                    <li>Typescript</li>
                    <li>PostgreSQL</li>
                    <li>Prisma</li>
                    <li>Tailwind CSS</li>
                    <li>Vercel</li>
                  </ul>
                </div>
                {/* Right Column: Overview */}
                <div>
                  <h3 className="text-white text-lg font-regular mb-3 flex items-center gap-2">
                    <IconInfoCircle size={17} className="text-white" /> Overview
                  </h3>
                  <p className="text-[#b0b0b0] mb-3 text-sm">
                    ResDex is a modern, student-focused research platform designed to make academic collaboration and discovery seamless.
                  </p>
                  <p className="text-[#b0b0b0] mb-3 text-sm">
                    The platform enables users to showcase their research, build a professional portfolio, and connect with peers and institutions. With a robust tech stack and intuitive UI, ResDex bridges the gap between emerging talent and opportunity.
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

function FeaturesSectionDemo() {
  const features = [
    {
      title: "Built for developers",
      description:
        "Built for engineers, developers, dreamers, thinkers and doers.",
      icon: <IconTerminal2 />,
    },
    {
      title: "Ease of use",
      description:
        "It's as easy as using an Apple, and as expensive as buying one.",
      icon: <IconEaseInOut />,
    },
    {
      title: "Pricing like no other",
      description:
        "Our prices are best in the market. No cap, no lock, no credit card required.",
      icon: <IconCurrencyDollar />,
    },
    {
      title: "100% Uptime guarantee",
      description: "We just cannot be taken down by anyone.",
      icon: <IconCloud />,
    },
    {
      title: "Multi-tenant Architecture",
      description: "You can simply share passwords instead of buying new seats",
      icon: <IconRouteAltLeft />,
    },
    {
      title: "24/7 Customer Support",
      description:
        "We are available a 100% of the time. Atleast our AI Agents are.",
      icon: <IconHelp />,
    },
    {
      title: "Money back guarantee",
      description:
        "If you donot like EveryAI, we will convince you to like us.",
      icon: <IconAdjustmentsBolt />,
    },
    {
      title: "And everything else",
      description: "I just ran out of copy ideas. Accept my sincere apologies",
      icon: <IconHeart />,
    },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3  relative z-10 py-10 max-w-7xl mx-auto">
      {features.slice(0, 3).map((feature, index) => (
        <Feature key={feature.title} {...feature} index={index} />
      ))}
    </div>
  );
}

function Feature({
  title,
  description,
  icon,
  index,
}: {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}) {
  return (
    <div
      className={cn(
        "flex flex-col py-10 relative group/feature dark:border-neutral-800 border-none",
        (index === 0) && "lg:border-l dark:border-neutral-800",
        // No border-b or border-r for a clean look
      )}
    >
      {/* No hover overlay */}
      <div className="mb-4 relative z-10 px-10 text-white">
        {icon}
      </div>
      <div className="text-lg font-bold mb-2 relative z-10 px-10">
        <div className="absolute left-0 inset-y-0 h-6 w-1 rounded-tr-full rounded-br-full bg-neutral-700" />
        <span className="inline-block text-white">
          {title}
        </span>
      </div>
      <p className="text-sm text-white max-w-xs relative z-10 px-10">
        {description}
      </p>
    </div>
  );
}
