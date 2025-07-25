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
import SmoothCursor from "../CustomCursor"; // adjust path if needed

export default function ResDexPage() {
  return (
    <>
          <SmoothCursor />
    
    <main className="min-h-screen bg-black text-white px-6 py-12 font-sans">
      
      <div className="max-w-2xl mx-auto space-y-12">
        {/* Back button */}
        <a className="text-gray-400 cursor-pointer hover:text-white" href="/">
          ← Back
        </a>

        {/* Hero Image */}
        <div className="bg-white rounded-xl overflow-hidden mt-5">
          <Image
            src="/fidelitycover.jpg" // Replace with actual image path
            alt="ResDex Screenshot"
            width={400}
            height={300}
            className="w-full object-cover"
          />
        </div>

        {/* Project Title & Description */}
        <div>
           <p className="text-gray-500 mb-2 text-sm">
              Internship
            </p>
          <h1 className="text-2xl mb-2">Fidelity Investments</h1>
          <p className="text-gray-300" style={{ fontSize: "0.8rem" }}>
Fidelity Investments is the third-largest asset manager globally, with over $12 trillion in assets under administration and $4.5 trillion in AUM. Ranked just behind BlackRock and Vanguard, Fidelity offers industry-leading services in wealth management, brokerage, and retirement planning. Known for its innovation and strong focus on technology, it remains a top name in global finance.
          </p>
        </div>

        {/* Info Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 text-sm">
          {/* Timeline */}
          <div>
            <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
               <IconCalendar size={"0.8rem"} className="text-white" /> Details
            </h3>
<ul className="space-y-1 text-gray-300" style={{ fontSize: "0.8rem" }} >
              <li>Hybrid Work Environment</li>
              <li>Toronto Office</li>
              <li>4 Months</li>
              <li>May - September 2025</li>
            </ul>
            
                      </div>

          {/* Stack */}
         <div>
            <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
               <IconStack2 size={"0.8rem"} className="text-white" /> Tech Stack
            </h3>
<ul className="space-y-1 text-gray-300" style={{ fontSize: "0.8rem" }} >
              <li>Power Automate</li>
              <li>Power BI</li>
              <li>Microsoft Azure</li>
              <li>Python</li>
              <li>Power Apps</li>
            </ul>
            
                      </div>

 {/* Overview */}
          <div>
           <h3 className="text-gray-500 mb-2 text-sm text-white inline-flex items-center gap-2">
                    <IconInfoCircle size={"0.8rem"} className="text-white" /> Overview
                  </h3>
            <p className="mb-2 text-gray-300" style={{ fontSize: "0.8rem" }}>
As an Automation Analyst at Fidelity, I lead end-to-end development of cloud workflows using Power Automate and Azure. I work closely with stakeholders to gather requirements, design solutions, and manage the full software development lifecycle; from planning and building to testing and deployment. My work helps teams automate tasks, improve efficiency, and reduce manual effort.
            </p>
          </div>
        </div>
      </div>
    </main>
      </>
      );
}
