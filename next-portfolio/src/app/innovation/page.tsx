"use client";

import Image from "next/image";
import { Navbar, NavBody, NavItems, MobileNav, MobileNavHeader, MobileNavToggle, MobileNavMenu } from "@/components/ui/navbar";
import { SpinningText } from "@/components/magicui/spinning-text";
import { TextAnimate } from "@/components/magicui/text-animate";
import { FiGithub, FiExternalLink, FiLinkedin } from "react-icons/fi";
import { BlurFade } from "@/components/magicui/blur-fade";
import { useState } from "react";
import { SmoothCursor } from "@/components/ui/smooth-cursor";
import { IconInfoCircle } from "@tabler/icons-react";
import Link from "next/link";

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
  const [showMessage, setShowMessage] = useState(true);
  const navItems = [
    { name: "Home", link: "/" },
    { name: "About", link: "/about" },
    { name: "Innovation", link: "/innovation" },
    { name: "Contact", link: "/contact" },
  ];

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
        <div className="max-w-6xl w-full mx-auto flex flex-col items-start pt-30 pb-16">
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
          <TextAnimate
            animation="blurIn"
            as="h1"
            by="word"
            duration={1.1}
            className="text-4xl md:text-5xl font-regular mb-4"
          >
            where my creativity meets innovation.
          </TextAnimate>
          <TextAnimate
            animation="blurIn"
            as="p"
            by="word"
            duration={1.1}
            className="text-lg text-white/80"
          >
            full stack developer, machine learning researcher, and robotics enthusiast.
          </TextAnimate>
        </div>
        {/* Projects Grid */}
        <div className="max-w-6xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 pb-24 overflow-visible">
          {projects.map((proj, i) => {
            // Determine the read more link for the project
            const readMoreLink =
              proj.title === "RESDEX"
                ? "/innovation/resdex"
                : proj.title === "HOTSPOTS-AI"
                ? "/innovation/hotspots"
                : proj.title === "PERCEPTA"
                ? "/innovation/percepta"
                : proj.title === "QONNECTR"
                ? "/innovation/qonnectr"
                : proj.title === "MYBUDDY"
                ? "/innovation/mybuddy"
                : proj.title === "STOCKEYE"
                ? "/innovation/stockeye"
                : proj.title === "NEAR FANTASY"
                ? "/innovation/near-fantasy"
                : proj.title === "CITCO"
                ? "/innovation/citco"
                : `/innovation/${proj.title}`;
            return (
              <BlurFade key={i} inView delay={i * 0.08}>
                <Link href={readMoreLink} passHref legacyBehavior>
                  <a
                    className="bg-white/5 rounded-2xl shadow-lg border border-white/10 flex flex-col overflow-visible group transition-all duration-300 h-[500px] focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                    tabIndex={0}
                    aria-label={`Read more about ${proj.title}`}
                    style={{ textDecoration: "none" }}
                  >
                    <div className="w-full h-48 bg-black/30 flex items-center justify-center overflow-hidden rounded-t-2xl">
                      <Image src={proj.image} alt={proj.title} width={400} height={200} className="object-cover w-full h-full rounded-t-2xl transition-transform duration-500 group-hover:scale-110" />
                    </div>
                    <div className="flex flex-col flex-1 p-5">
                      <div className="flex items-center justify-between mb-2">
                        <span className="font-mono text-lg tracking-widest">{proj.title}
                            {proj.title === "QONNECTR" && (
                              <span className="relative inline-block align-middle ml-2 mb-2">
                                <span
                                  className="bg-white text-black text-[11px] font-semibold px-2 py-0.5 rounded-full cursor-help transition-colors duration-200"
                                  onMouseEnter={e => {
                                    const tooltip = e.currentTarget.nextElementSibling;
                                    if (tooltip) tooltip.classList.add('opacity-100');
                                  }}
                                  onMouseLeave={e => {
                                    const tooltip = e.currentTarget.nextElementSibling;
                                    if (tooltip) tooltip.classList.remove('opacity-100');
                                  }}
                                >
                                  1st
                                </span>
                                <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#23272e] text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                                  DeltaHacks XI Winner
                                </span>
                              </span>
                            )}
                            {proj.title === "MYBUDDY" && (
                              <span className="relative inline-block align-middle ml-2 mb-2">
                                <span
                                  className="bg-white text-black text-[11px] font-semibold px-2 py-0.5 rounded-full cursor-help transition-colors duration-200"
                                  onMouseEnter={e => {
                                    const tooltip = e.currentTarget.nextElementSibling;
                                    if (tooltip) tooltip.classList.add('opacity-100');
                                  }}
                                  onMouseLeave={e => {
                                    const tooltip = e.currentTarget.nextElementSibling;
                                    if (tooltip) tooltip.classList.remove('opacity-100');
                                  }}
                                >
                                  2nd
                                </span>
                                <span className="absolute left-1/2 -translate-x-1/2 -top-8 bg-[#23272e] text-white text-xs rounded px-2 py-1 opacity-0 pointer-events-none transition-opacity duration-200 whitespace-nowrap z-50">
                                  SerenityHacks 2nd Best Open-Source Project
                                </span>
                              </span>
                            )}
                          </span>
                        <span className="flex items-center gap-3 ml-2">
                          {proj.github && (
                            <div className="relative">
                              <a
                                href={proj.github}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`GitHub repository for ${proj.title}`}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer"
                                onClick={e => e.stopPropagation()}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                                  <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                                </svg>
                              </a>
                            </div>
                          )}
                          {proj.linkedin && (
                            <div className="relative">
                              <a
                                href={proj.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`LinkedIn post for ${proj.title}`}
                                className="w-10 h-10 flex items-center justify-center rounded-full hover:bg-white/10 transition cursor-pointer"
                                onClick={e => e.stopPropagation()}
                              >
                                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="#e5e7eb" viewBox="0 0 16 16">
                                  <path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854zm4.943 12.248V6.169H2.542v7.225zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248S2.4 3.226 2.4 3.934c0 .694.521 1.248 1.327 1.248zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016l.016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225z"/>
                                </svg>
                              </a>
                            </div>
                          )}
                          {proj.link && (
                            <div className="relative">
                              <a
                                href={proj.link}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Live site for ${proj.title}`}
                                className="text-white/60 hover:text-white transition-colors"
                                onClick={e => e.stopPropagation()}
                              >
                                <FiExternalLink size={18} />
                              </a>
                            </div>
                          )}
                        </span>
                      </div>
                      <p className="text-white/80 text-sm mt-3 leading-relaxed flex-1 line-clamp-4">{proj.desc}</p>
                      <div className="mt-4">
                        <span
                          className="inline-flex items-center gap-1 text-white/80 font-medium text-sm transition-colors duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-orange-400"
                          tabIndex={0}
                          aria-label={`Read more about ${proj.title}`}
                        >
                          Read More
                          <span
                            className="inline-block transition-transform duration-300 group-hover:translate-x-1"
                            aria-hidden="true"
                          >
                            <svg width="18" height="18" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                            </svg>
                          </span>
                        </span>
                      </div>
                    </div>
                  </a>
                </Link>
              </BlurFade>
            );
          })}
        </div>
      {/* Glassy Dismissible Message */}
      {showMessage && (
        <div
          className="fixed bottom-6 right-6 z-[99999] flex items-center gap-3 px-5 py-3 rounded-xl backdrop-blur-md bg-white/20 border border-white/30 shadow-lg text-white transition-all"
          style={{ minWidth: 320 }}
        >
          <IconInfoCircle size={20} className="text-white/80" />
          <span className="text-white/90 text-sm">The [read more] pages are a work in progress. Some features and project explanations may be incomplete!</span>
          <button
            onClick={() => setShowMessage(false)}
            className="ml-2 text-white/60 hover:text-white/90 text-lg font-bold focus:outline-none"
            aria-label="Dismiss message"
            style={{ lineHeight: 1 }}
          >
            ×
          </button>
        </div>
      )}
    </div>
  </>
  );
}
