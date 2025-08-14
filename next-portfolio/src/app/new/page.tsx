"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function CanopyDemo() {


  return (
    <main className="min-h-dvh bg-white text-[#0d0d0d] px-[clamp(20px,5vw,72px)] py-16">

<video
  src="./cube.mov"
  autoPlay
  loop
  muted
  playsInline
  style={{
    width: "60px",
    height: "60px",
    border: "none",
    outline: "none",
    background: "transparent",
    display: "block",
    marginBottom: "20px",
    marginTop: '100px'
  }}
/>


      <section className="mb-7 max-w-[900px]">
        <p className="font-light text-[clamp(18px,2.8vw,28px)] leading-tight text-[#808080]">
          Hello, I&apos;m <span className="text-[#1a1a1a]">Dev Patel.</span>
        </p>
        <br />
        <p className="font-light mt-2 text-[clamp(14px,2.2vw,16px)] text-[#808080]">
          Developing Solutions at{" "}
          <a className="text-[#1a1a1a] no-underline" href="#">
            Fidelity.
          </a>
        </p>
        <p className="font-light mt-2 text-[clamp(14px,2.2vw,16px)] text-[#808080]">
          Studying Computer Science at{" "}
          <a className="text-[#1a1a1a] no-underline" href="#">
            TorontoMet.
          </a>
        </p>
        <p className="font-light mt-2 text-[clamp(14px,2.2vw,16px)] text-[#808080]">
          Passionate about{" "}
          <a className="text-[#1a1a1a] no-underline" href="#">
            Distributed Systems, LLM&apos;s & Finance.
          </a>
        </p>
      </section>

      {/* Projects grid */}
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2 mt-30">
        {/* Left card */}
        <a href="#" className="block">
          <div className="overflow-hidden rounded-[28px] border border-[#e6e7eb] bg-[#f1f2f4]" style={{ maxHeight: "340px" }}>
              <img
                src="./final-lyra.png"
                alt=""
                className="object-cover"
              />
              
          </div>
          <div className="flex items-baseline gap-3 px-1 pt-3 text-[15px] font-light text-[#6b727c]">
            <p className="m-0 text-[#1a1a1a]">Lyra</p>
            <p className="ml-[4px] text-[#8b919a]">Cloud AI-Integrated Code Editor</p>
          </div>
        </a>

        <a href="#" className="block">
          <div className="overflow-hidden rounded-[28px] border border-[#e6e7eb] bg-[#f1f2f4]" style={{ maxHeight: "340px" }} >
              <img
                src="./resdex-hero2.png"
                alt=""
                className="object-cover"
              />
              
          </div>
          <div className="flex items-baseline gap-3 px-1 pt-3 text-[15px] font-light text-[#6b727c]">
            <p className="m-0 text-[#1a1a1a]">ResDex</p>
            <p className="ml-[4px] text-[#8b919a]">Educational Social-Media Platform</p>
          </div>
        </a>

      </section>
    </main>
  );
}
