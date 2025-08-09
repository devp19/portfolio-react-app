"use client";

import Image from "next/image";
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";
import CustomCursor from "../../CustomCursor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { LiaGithub } from "react-icons/lia";
import { FaLinkedin, FaLink } from "react-icons/fa6";

export default function ResDexPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [exiting, setExiting] = useState(false);
  
  const [loaded, setLoaded] = useState(false);
  
  const [lightMode, setLightMode] = useState(false);
  
  useEffect(() => {
    setLightMode(localStorage.getItem("theme") === "light");
  }, []);

  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    document.body.style.overflow = isMobile ? "hidden" : "";

    const timeout = setTimeout(() => setLoaded(true), 50);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.cursor = "";
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [isMobile]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => {
      router.push("/innovation");
    }, 200); 
  };

  const textColor = lightMode ? "#111" : "#111";
  const fadedText = lightMode ? "#444" : "#444";
  const fadedLabel = lightMode ? "#666" : "#666";
  const bgColor = lightMode ? "#ffffff" : "#ffffff";

  return (
    <>

      <main
        className={`min-h-screen px-6 py-12 font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        <div className="max-w-2xl mx-auto space-y-12">
           <button
            onClick={handleBack}
            className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer"
            style={{ color: fadedText }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Back
            <span
              className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current
                         origin-left scale-x-0
                         transition-transform duration-300
                         group-hover:scale-x-100"
            />
          </button>
<p
              style={{
                color: fadedLabel,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              Last Updated: August, 4th, 2025
            </p>
          <div
            style={{
              background: "#fff",
              borderRadius: "0.75rem",
              overflow: "hidden",
              marginTop: "1.25rem",
            }}
          >
            <Image
              src="/final-lyra.png"
              alt="Lyra Screenshot"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>

          <div>
            <p
              style={{
                color: fadedLabel,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              Project
            </p>
             <h1
                          style={{
                            fontSize: "1.5rem",
                            marginBottom: "0.5rem",
                            display: "flex",
                            alignItems: "center",
                            gap: "0.5rem",
                          }}
                        >
                          Lyra
                          <a
                            href="https://lyra-ide.vercel.app"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ResDex GitHub"
                            style={{paddingLeft: "1rem"}}
                          >
                            <FaLink
                              size={15}
                              color={textColor}
                            />{" "}
                          </a>
                          <a
                            href="https://github.com/devp19/lyra"
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label="ResDex GitHub"
                          >
                            <LiaGithub
                              size={20}
                              color={textColor}
                            />{" "}
                          </a>
                         
                        </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Lyra is a privacy-first, open-source cloud IDE designed for modern developers seeking power, flexibility, and control. It seamlessly integrates advanced AI features, live code execution, and GitHub syncing—all within a secure, user-centric platform where your code and keys never leave your device. With Lyra, you get limitless, agentic coding without vendor lock-in or compromise on privacy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconCalendar size={"0.8rem"} color={textColor} /> Details
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>August 2025 – Present</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconStack2 size={"0.8rem"} color={textColor} /> Tech Stack
              </h3>
              <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Cloudflare Workers AI</li>
                <li>CodeMirror</li>
                <li>xTerm.js</li>
              </ul>
            </div>

            <div>
              <h3
                style={{
                  color: fadedLabel,
                  fontSize: "0.8rem",
                  marginBottom: "0.5rem",
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "0.5rem",
                }}
              >
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Table of Contents
              </h3>
                <ul style={{ color: fadedText, fontSize: "0.8rem" }}>
                  <li>Introduction</li>
                  <li>Project Motive</li>
                  <li>Tech Stack Selection</li>
                  <li>How It Works</li>
                  <li>Future Plans</li>
                </ul>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
