"use client";

import React, { useMemo, useState } from "react";
import Image from "next/image";
import dynamic from "next/dynamic";

export default function CanopyDemo() {


  return (
    <main className="min-h-dvh bg-white text-[#0d0d0d] px-[clamp(20px,5vw,72px)] py-16">
     

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
      <section className="grid grid-cols-1 gap-8 md:grid-cols-2">
        {/* Left card */}
        <a href="#" className="block">
          <div className="overflow-hidden rounded-[28px] border border-[#e6e7eb] bg-[#f1f2f4]">
            <div className="relative w-full pb-[52%] bg-[#e9ebef]">
              <Image
                src="/images/room-bg.jpg"
                alt=""
                fill
                className="object-cover"
                priority
              />
              {/* overlays */}
              <div className="pointer-events-none absolute left-[12%] right-[12%] top-[22%] flex items-end gap-6">
                <Image
                  src="/images/bike-overlay.jpg"
                  alt=""
                  width={760}
                  height={420}
                  className="rounded-xl border border-black/5 shadow-[0_10px_30px_rgba(0,0,0,0.18)]"
                />
                <Image
                  src="/images/map-overlay.png"
                  alt=""
                  width={480}
                  height={240}
                  className="-ml-16 translate-y-5 drop-shadow-[0_10px_24px_rgba(0,0,0,0.22)]"
                />
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-3 px-1 pt-3 text-[14px] text-[#6b727c]">
            <p className="m-0 text-[#1a1a1a]">Red Bull TV for visionOS</p>
            <p className="m-0 text-[#8b919a]">Immersive Media</p>
          </div>
        </a>

        {/* Right card */}
        <a href="#" className="block">
          <div className="overflow-hidden rounded-[28px] border border-[#e6e7eb] bg-[#f1f2f4]">
            <div className="relative w-full pb-[52%] bg-gradient-to-b from-[#f0f1f4] to-[#e6e7eb]">
              <div className="absolute inset-0 flex items-center justify-center gap-7 px-[5%]">
                <Image
                  src="/images/iphone-mock.png"
                  alt=""
                  width={180}
                  height={360}
                  className="object-contain"
                />
                <Image
                  src="/images/mac-mock.png"
                  alt=""
                  width={640}
                  height={380}
                  className="object-contain"
                />
                <Image
                  src="/images/vision-pro.png"
                  alt=""
                  width={220}
                  height={140}
                  className="object-contain"
                />
              </div>
            </div>
          </div>
          <div className="flex items-baseline gap-3 px-1 pt-3 text-[14px] text-[#6b727c]">
            <p className="m-0 font-semibold text-[#1a1c20]">SixD</p>
            <p className="m-0 text-[#8b919a]">SwiftUI & Interaction Design</p>
          </div>
        </a>
      </section>
    </main>
  );
}
