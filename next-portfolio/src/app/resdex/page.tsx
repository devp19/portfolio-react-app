"use client";

import Image from "next/image";
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
import CustomCursor from "../CustomCursor";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";

export default function ResDexPage() {
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
    const router = useRouter();
    const [exiting, setExiting] = useState(false);

  useEffect(() => {
    // Detect mobile screen
    const checkMobile = () => setIsMobile(window.innerWidth <= 600);
    checkMobile();
    window.addEventListener("resize", checkMobile);

    // Apply no cursor and scroll behavior
    document.body.style.cursor = "none";
    document.body.style.overflow = isMobile ? "hidden" : "";

    // Trigger fade-in + blur removal
    const timeout = setTimeout(() => setLoaded(true), 50);

    return () => {
      window.removeEventListener("resize", checkMobile);
      document.body.style.cursor = "";
      document.body.style.overflow = "";
      clearTimeout(timeout);
    };
  }, [isMobile]);

  return (
    <>
      {!isMobile && <CustomCursor />}

      <main
        className={`min-h-screen bg-black text-white px-6 py-12 font-sans transition-all duration-1000 ease-out ${
          loaded ? "opacity-100 blur-none" : "opacity-0 blur-sm"
        }`}
      >
        <div className="max-w-2xl mx-auto space-y-12">
          {/* Back button */}
          <button
  onClick={() => {
    setExiting(true);
    setTimeout(() => {
      router.push("/");
    }, 100); // Match this with your CSS transition duration
  }}
  className="text-gray-400 cursor-pointer hover:text-white"
>
  ← Back
</button>


          {/* Hero Image */}
          <div className="bg-white rounded-xl overflow-hidden mt-5">
            <Image
              src="/resdex-cover.png"
              alt="ResDex Screenshot"
              width={400}
              height={300}
              className="w-full object-cover"
            />
          </div>

          {/* Project Title & Description */}
          <div>
            <p className="text-gray-500 mb-2 text-sm">Startup</p>
            <h1 className="text-2xl mb-2">ResDex</h1>
            <p className="text-gray-300" style={{ fontSize: "0.8rem" }}>
              ResDex is a centralized research discovery platform that connects
              students with academic opportunities. Designed to break down
              institutional barriers, it enables users to showcase their
              research portfolios, discover projects, and collaborate across
              disciplines. With real-time search, secure authentication, and
              streamlined networking features, ResDex makes finding and sharing
              research as intuitive as social media; bridging the gap between
              student talent and academic access.
            </p>
          </div>

          {/* Info Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 text-sm">
            {/* Timeline */}
            <div>
              <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
                <IconCalendar size={"0.8rem"} className="text-white" /> Details
              </h3>
              <ul
                className="space-y-1 text-gray-300"
                style={{ fontSize: "0.8rem" }}
              >
                <li>Co-Founder & Founding Engineer</li>
                <li>12 Months</li>
                <li>August 2024 - Present</li>
              </ul>
            </div>

            {/* Stack */}
            <div>
              <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
                <IconStack2 size={"0.8rem"} className="text-white" /> Tech Stack
              </h3>
              <ul
                className="space-y-1 text-gray-300"
                style={{ fontSize: "0.8rem" }}
              >
                <li>Next.js</li>
                <li>Typescript</li>
                <li>Amazon Web Services (S3)</li>
                <li>Supabase</li>
                <li>Firestore</li>
              </ul>
            </div>

            {/* Overview */}
            <div>
              <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
                <IconInfoCircle size={"0.8rem"} className="text-white" /> Overview
              </h3>
              <p className="mb-2 text-gray-300" style={{ fontSize: "0.8rem" }}>
                As the co-founder and founding engineer behind ResDex, I drive
                both technical architecture and product direction. I built the
                platform using Next.js and Supabase with a focus on scalable
                database design, secure auth, and real-time features. I lead
                end-to-end development; from API design to UI, while guiding
                the vision to make research more accessible for students.
              </p>
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
