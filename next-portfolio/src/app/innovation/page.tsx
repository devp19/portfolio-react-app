"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { motion } from "framer-motion";        
import {
  IconCalendar,
  IconStack2,
  IconInfoCircle,
  icons,
} from "@tabler/icons-react";
import { FaTerminal } from "react-icons/fa6";
import {
  MdLocationSearching,
  MdOutlineViewInAr,
  MdOutlineSmartToy,
  MdArrowRightAlt,
} from "react-icons/md";
import { SlGraph } from "react-icons/sl";
import { IoBookOutline, IoQrCode } from "react-icons/io5";

import CustomCursor from "../CustomCursor";

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

    document.body.style.overflow = isMobile ? "hidden" : "";

    const timeout = setTimeout(() => setLoaded(true), 50);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [isMobile]);

  const handleBack = () => {
    setExiting(true);
    setTimeout(() => router.push("/"), 600);
  };

  const textColor  = lightMode ? "#111" : "#111";
  const fadedText  = lightMode ? "#444" : "#444";
  const fadedLabel = lightMode ? "#666" : "#666";
  const bgColor    = lightMode ? "#ffffff" : "#ffffff";

  const projects = [
    {
      title: "Lyra",
      tags: ["AI", "Full-Stack"],
      description:
        "Lyra is a privacy-first, open-source cloud IDE that lets you create, edit, run, and preview code right in your browser.",
      icon: <FaTerminal size={15} color={textColor} />,
      link: "/innovation/lyra",
    },
    {
      title: "ResDex",
      tags: ["Full-Stack", "Research"],
      description:
        "A centralized research hub that empowers students to showcase their work, build academic portfolios, and connect with peers and institutions.",
      icon: <IoBookOutline size={15} color={textColor} />,
      link: "/innovation/resdex",
    },
    {
      title: "HotSpots AI",
      tags: ["AI", "Full-Stack", "Research"],
      description:
        "Exploring urban heat vulnerability and tree planting priorities in Toronto for sustainable development through machine-learning for data-driven insights.",
      icon: <MdLocationSearching size={15} color={textColor} />,
    },
    {
      title: "Percepta",
      tags: ["Research"],
      description:
        "Deep-dive into heat-map based identification for documents with in-built keyword injection at dense areas to enhance visibility.",
      icon: <MdOutlineViewInAr size={15} color={textColor} />,
    },
    {
      title: "QonnectR",
      tags: ["Full-Stack"],
      description:
        "QonnectR is a platform designed to simplify networking and project collaboration through QR code identification.",
      note: "DeltaHacks XI Winner",
      icon: <IoQrCode size={15} color={textColor} />,
    },
    {
      title: "MyBuddy",
      tags: ["AI"],
      description:
        "A generative AI wellness assistant that combines NLP and real-time speech-to-text to simulate therapeutic conversations.",
      icon: <MdOutlineSmartToy size={15} color={textColor} />,
    },
    {
      title: "Citco",
      tags: ["Research"],
      description:
        "A web-based research analytics platform that examines the relationship between public funding and academic impact among Canadian computer-science researchers.",
      icon: <SlGraph size={15} color={textColor} />,
    },
  ];

  const filteredProjects =
    activeTab === "All"
      ? projects
      : projects.filter((proj) => proj.tags.includes(activeTab));

  return (
    <>

      <main
        className={`min-h-screen px-6 py-12 font-sans transition-all duration-700 ease-in-out ${
          loaded && !exiting ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
        style={{ background: bgColor, color: textColor }}
      >
        <div className="max-w-2xl mx-auto space-y-12">
          <button
            onClick={handleBack}
            className="relative group border-none bg-none text-[0.9rem] pb-0.5 cursor-pointer"
            style={{ color: fadedText }}
            onMouseOver={(e) => (e.currentTarget.style.color = textColor)}
            onMouseOut={(e) => (e.currentTarget.style.color = fadedText)}
          >
            ← Home
            <span
              className="absolute left-0 -bottom-0.5 h-0.25 w-full bg-current
                         origin-left scale-x-0
                         transition-transform duration-300
                         group-hover:scale-x-100"
            />
          </button>

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
              My contributions to making the world of technology more accessible and impactful, showcasing projects that simplify complex problems and drive positive change.


              <br />
              <br />
              <span className="italic">
                Note: I'm still working on adding the remaining project
                read-more pages! Until then, feel free to check out my GitHub:&nbsp;
                <a
                  href="https://github.com/devp19"
                  target="_blank"
                  className="underline"
                >
                  github.com/devp19
                </a>
              </span>
            </p>
          </div>

          <div
            className="relative flex gap-2 mt-6"
            style={{ fontSize: "0.85rem", color: fadedText }}
          >
            {["All", "Research", "Full-Stack", "AI"].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
className="
  relative z-10 px-4 py-1 rounded-full select-none
  bg-transparent                       /* starting state  */
  transition-colors duration-900 ease-out   /* smooth fade */
  hover:bg-[#f3f4f6]                   /* target color on hover */
"
                style={{ border: "none", cursor: "pointer" }}
              >
                {activeTab === tab && (
                  <motion.span
                    layoutId="pill"
                    className="absolute -z-99 inset-0 rounded-full"
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                    style={{
                      background: lightMode ? "#e5e7eb" : "#d1d5db", 
                    }}
                  />
                )}
                <span className={activeTab === tab ? "text-black" : ""}>
                  {tab}
                </span>
              </button>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
            {filteredProjects.map((project, index) => (
              <div
              
                key={index}
                className="relative p-6 transition duration-300 ease-in-out hover:scale-[1.015] hover:cursor-pointer"
                style={{ borderBottom: "1px solid gray", height: "300px"}}
                onClick={() => {
                  if (project.link) {
                    setExiting(true);
                    setTimeout(() => router.push(project.link), 200);
                  }
                }}
              >
                <div className="mb-3">{project.icon}</div>

                <h3
                  className="font-regular"
                  style={{ fontSize: "1rem", color: textColor, cursor: 'pointer' }}
                >
                  {project.title}
                </h3>

                <p
                  className="font-regular mt-2 mb-20"
                  style={{ fontSize: "0.85rem", color: fadedLabel, cursor: 'pointer' }}
                >
                  {project.description}
                </p>

                {/* {project.note && (
                  <>
                    <br />
                    <p
                      className="font-regular italic pb-10"
                      style={{
                        fontSize: "0.85rem",
                        color: fadedLabel,
                      }}
                    >
                      {project.note}
                    </p>
                  </>
                )} */}

                <p
                  style={{
                    fontSize: "0.75rem",
                    color: fadedLabel,
                    position: "absolute",
                    bottom: "1rem",
                    cursor: 'pointer',
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
                    cursor: 'pointer'
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
