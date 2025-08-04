"use client";

import Image from "next/image";
import { IconCalendar, IconStack2, IconInfoCircle, icons } from "@tabler/icons-react";
import { FaTerminal } from "react-icons/fa6";
import { MdLocationSearching, MdOutlineViewInAr, MdOutlineSmartToy, MdArrowRightAlt } from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { IoBookOutline, IoQrCode } from "react-icons/io5";

import CustomCursor from "../CustomCursor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { Tabs } from "@/components/ui/tabs";
import { link } from "fs";

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

  const projects = [
  { title: "Lyra", tags: ["AI", "Full-Stack"], description: "Lyra is a privacy-first, open-source cloud IDE that lets you create, edit, run, and preview code right in your browser.", icon: <FaTerminal size={15} color={textColor} />, link: "/innovation/lyra" },
  { title: "ResDex", tags: ["Full-Stack", "Research"], description: "A centralized research hub that empowers students to showcase their work, build academic portfolios, and connect with peers and institutions.", icon: <IoBookOutline size={15} color={textColor} />, link: "/innovation/resdex" },
  { title: "HotSpots AI", tags: ["AI", "Full-Stack", "Research"], description: "Exploring urban heat vulnerability and tree planting priorities in Toronto for sustainable development through machine-learning for data-driven insights.", icon: <MdLocationSearching size={15} color={textColor} /> },
  { title: "Percepta", tags: ["Research"], description: "Deep-dive into heatmap based identification for documents with inbuilt keyword injection at dense areas to enhance visibility.", icon: <MdOutlineViewInAr size={15} color={textColor} /> },
  { title: "QonnectR", tags: ["Full-Stack"], description: "QonnectR is a platform designed to simplify networking and project collaboration through QR code identification.", note: "DeltaHacks XI Winner", icon: <IoQrCode size={15} color={textColor} /> },
  { title: "MyBuddy", tags: ["AI"], description: "A generative AI wellness assistant that combines NLP and real-time speech-to-text to simulate therapeutic conversations.", icon: <MdOutlineSmartToy size={15} color={textColor} /> },
  { title: "Citco", tags: ["Research"], description: "A web-based research analytics platform that examines the relationship between public funding and academic impact among Canadian computer science researchers.", icon: <SlGraph size={15} color={textColor} /> },
];


  const filteredProjects =
  activeTab === "All"
    ? projects
    : projects.filter((proj) => proj.tags.includes(activeTab));

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
              Project Directory
            </p>
            <h1 style={{ fontSize: "1.5rem", marginBottom: "0.5rem" }}>
              Intersection of Innovation & Research
            </h1>
            <p style={{ fontSize: "0.8rem", color: fadedText }}>
              Directory of my innovative projects and research showcasing my
              journey as an impact-driven innovator. Each project reflects my
              commitment to creating meaningful solutions that address
              real-world challenges.
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
                      : "bg-gray-200 text-black"
                    : lightMode
                    ? "hover:bg-gray-100"
                    : "hover:bg-gray-200"
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

          {/* Project Grid */}
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
  {filteredProjects.map((project, index) => (
    <div
  key={index}
  className="relative p-6 transition duration-300 ease-in-out hover:scale-[1.015] cursor-pointer"
  style={{ borderBottom: "1px solid gray" }}
  onClick={() => {
    
    if (project.link) {
      setExiting(true);
    setTimeout(() => {
      router.push(project.link);
    }, 600);
    }
  }}

>

    <div className="mb-3">{project.icon}</div>

      <h3
      className="font-regular"
        style={{
          fontSize: "1rem",
          color: textColor,
          
        }}
      >
        {project.title}
      </h3>
      <p className="font-regular text-muted mt-2" style={{ fontSize: "0.85rem", color: fadedLabel }}>
        {project.description}
      </p>
      <br></br>
      <p className="font-regular text-muted mb-20" style={{ fontSize: "0.85rem", color: fadedLabel, fontStyle: "italic" }}>
        {project.note}
      </p>

        <p
  style={{
    fontSize: "0.75rem",
    color: fadedLabel,
    position: "absolute",
    bottom: "1rem",
    
  }}
>
  {project.tags.join(" • ")}
</p>


  <p
  style={{
    fontSize: "0.75rem",
    color: fadedLabel,
    position: "absolute",
    bottom: "1rem",
    right: "1rem",
    display: "inline-flex",
    alignItems: "center",
    gap: "0.25rem",
    
  }}
>
  Read More <MdArrowRightAlt size={15} color={textColor} />
</p>

    </div>
  ))}
</div>


        </div>
      </main>
    </>
  );
}
