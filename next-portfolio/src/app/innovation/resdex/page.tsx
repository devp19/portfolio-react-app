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
        className={`min-h-screen px-6 py-12 font-sans transition-all duration-700 ease-in-out ${
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
              src="/resdex-hero2.png"
              alt="ResDex Screenshot"
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
              Startup
            </p>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              ResDex
            </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              ResDex is a centralized research discovery platform that connects
              students with academic opportunities. Designed to break down
              institutional barriers, it enables users to showcase their
              research portfolios, discover projects, and collaborate across
              disciplines. With real-time search, secure authentication, and
              streamlined networking features, ResDex makes finding and sharing
              research as intuitive as social media—bridging the gap between
              student talent and academic access.
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
                <li>Co-Founder & Founding Engineer</li>
                <li>12 Months</li>
                <li>August 2024 – Present</li>
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
                <li>Next.js</li>
                <li>TypeScript</li>
                <li>Amazon S3</li>
                <li>Supabase</li>
                <li>Firestore</li>
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
                As the co-founder and founding engineer behind ResDex, I drive
                both technical architecture and product direction. I built the
                platform using Next.js and Supabase with a focus on scalable
                database design, secure auth, and real-time features. I lead
                end-to-end development—from API design to UI—while guiding the
                vision to make research more accessible for students.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
