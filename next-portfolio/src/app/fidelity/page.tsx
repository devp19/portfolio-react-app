"use client";

import Image from "next/image";
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
} from "@tabler/icons-react";
import CustomCursor from "../CustomCursor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function FidelityPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
  const [exiting, setExiting] = useState(false);
  const [lightMode, setLightMode] = useState<boolean>(() => {
    if (typeof window !== "undefined") {
      return localStorage.getItem("theme") === "light";
    }
    return false;
  });

  const router = useRouter();

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    document.body.style.cursor = "none";
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
      router.push("/");
    }, 600); // match transition duration
  };

  const textColor = lightMode ? "#111" : "#fff";
  const fadedText = lightMode ? "#444" : "#aaa";
  const fadedLabel = lightMode ? "#666" : "#aaa";
  const bgColor = lightMode ? "#ffffff" : "#000000";

  return (
    <>
      {!isMobile && <CustomCursor lightMode={lightMode} />}

      <main
        className={`min-h-screen px-6 py-12 font-sans transition-all duration-500 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{
          background: bgColor,
          color: textColor,
        }}
      >
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Back button */}
          <button
            onClick={handleBack}
            style={{
              color: fadedText,
              cursor: "pointer",
              border: "none",
              background: "none",
              fontSize: "0.9rem",
            }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Back
          </button>

          {/* Hero Image */}
          <div
            style={{
              background: "#fff",
              borderRadius: "0.75rem",
              overflow: "hidden",
              marginTop: "1.25rem",
            }}
          >
            <Image
              src="/fidelitycover.jpg"
              alt="Fidelity Screenshot"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>

          {/* Project Title & Description */}
          <div>
            <p
              style={{
                color: fadedLabel,
                fontSize: "0.8rem",
                marginBottom: "0.5rem",
              }}
            >
              Internship
            </p>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Fidelity Investments
            </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Fidelity Investments is the third-largest asset manager globally,
              with over $12 trillion in assets under administration and $4.5
              trillion in AUM. Ranked just behind BlackRock and Vanguard,
              Fidelity offers industry-leading services in wealth management,
              brokerage, and retirement planning. Known for its innovation and
              strong focus on technology, it remains a top name in global
              finance.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            {/* Timeline */}
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
                <li>Hybrid Work Environment</li>
                <li>Toronto Office</li>
                <li>4 Months</li>
                <li>May - September 2025</li>
              </ul>
            </div>

            {/* Stack */}
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
                <li>Power Automate</li>
                <li>Power BI</li>
                <li>Microsoft Azure</li>
                <li>Python</li>
                <li>Power Apps</li>
              </ul>
            </div>

            {/* Overview */}
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
                <IconInfoCircle size={"0.8rem"} color={textColor} /> Overview
              </h3>
              <p style={{ color: fadedText, fontSize: "0.8rem" }}>
                As an Automation Analyst at Fidelity, I lead end-to-end
                development of cloud workflows using Power Automate and Azure. I
                work closely with stakeholders to gather requirements, design
                solutions, and manage the full software development lifecycle;
                from planning and building to testing and deployment. My work
                helps teams automate tasks, improve efficiency, and reduce
                manual effort.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
