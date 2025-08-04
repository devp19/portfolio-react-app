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
import { Tabs } from "@/components/ui/tabs";

export default function ResDexPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [exiting, setExiting] = useState(false);
  
    const [activeTab, setActiveTab] = useState("All");
  
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


          {/* Project Title & Description */}
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
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              My Innovation's
            </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Directory of my innovative projects and research showcasing my journey as an impact-driven innovator. Each project reflects my commitment to creating meaningful solutions that address real-world challenges.
            </p>
          </div>

          {/* Filter Tabs */}
<div
  className="flex gap-2 mt-6"
  style={{ color: fadedText, fontSize: "0.85rem" }}
>
  {["All", "Research", "Full-Stack", "AI"].map((tab) => (
    <button
      key={tab}
      onClick={() => setActiveTab(tab)}
      className={`px-4 py-1 rounded-full transition-all duration-300 ${
        activeTab === tab
          ? lightMode
            ? "bg-gray-200 text-black"
            : "bg-gray-800 text-white"
          : lightMode
          ? "hover:bg-gray-100"
          : "hover:bg-gray-900"
      }`}
      style={{
        border: "none",
        cursor: "pointer",
      }}
    >
      {tab}
    </button>
  ))}
</div>


        
        </div>
      </main>
    </>
  );
}
