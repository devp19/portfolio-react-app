"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { FaXTwitter, FaGithub, FaLinkedin } from "react-icons/fa6";
import { CgArrowTopRight } from "react-icons/cg";
import CustomCursor from "./CustomCursor"; // adjust path if needed

export default function CanopyDemo() {
  const [zooming, setZooming] = useState(false);
  const [lightMode, setLightMode] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [loaded, setLoaded] = useState(false);
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

  const bgColor = lightMode ? "white" : "black";
  const textColor = lightMode ? "black" : "white";
  const iconColor = lightMode ? "#111" : "#fff";

  return (
    <div
      style={{
        background: bgColor,
        minHeight: "100vh",
        width: "100vw",
        position: "relative",
        display: "flex",
        alignItems: isMobile ? "flex-start" : "center",
        justifyContent: "center",
        overflow: "hidden",
        userSelect: "none",
        transition: "background 0.4s ease-in-out",
        paddingTop: isMobile ? "4vh" : 0,
        boxSizing: "border-box",
        opacity: loaded ? 1 : 0,
        filter: loaded ? "blur(0px)" : "blur(12px)",
        transitionProperty: "opacity, filter, background",
        transitionDuration: "1s",
        transitionTimingFunction: "ease-out",
      }}
    >
      {!isMobile && <CustomCursor />}

      {/* Centered GIF */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          width: "100%",
          height: isMobile ? "100vh" : "auto",
          position: isMobile ? "absolute" : "static",
          top: isMobile ? 0 : undefined,
          left: isMobile ? 0 : undefined,
          zIndex: 10,
          pointerEvents: zooming ? "none" : "auto",
        }}
      >
        <img
          src="/asciislower.gif"
          alt="ASCII Art"
          onClick={() => setLightMode((v) => !v)}
          style={{
            opacity: lightMode ? 0.85 : 1,
            width: isMobile ? "120px" : "clamp(180px, 18vw, 180px)",
            height: "auto",
            transition: "transform 0.6s cubic-bezier(.4,2.2,.2,1), filter 0.6s",
            transform: zooming ? "scale(20)" : "scale(1)",
            filter: lightMode ? "invert(1)" : "none",
            display: "block",
            cursor: "pointer",
          }}
          draggable={false}
          title="Toggle light/dark mode"
        />
      </div>

      {/* Bottom-left info */}
      <div
        style={{
          position: "absolute",
          left: isMobile ? "1rem" : "2rem",
          bottom: isMobile ? "1.2rem" : "2rem",
          color: textColor,
          fontSize: isMobile ? "0.93rem" : "0.95rem",
          opacity: 0.85,
          lineHeight: 1.5,
          maxWidth: isMobile ? "92vw" : "500px",
          zIndex: 20,
          textAlign: "left",
          display: "flex",
          flexDirection: "column",
          gap: "0.5em",
        }}
      >
        <div
          style={{
            fontWeight: 300,
            fontSize: isMobile ? "0.88rem" : "0.9rem",
            marginBottom: "0.5em",
            display: "flex",
            alignItems: "center",
            gap: "0.5em",
            justifyContent: "flex-start",
          }}
        >
          Dev Patel
          <a
            href="https://x.com/_devp"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "1em",
            }}
            aria-label="Twitter"
          >
            <FaXTwitter />
          </a>
          <a
            href="https://github.com/devp19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "0.2em",
            }}
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://linkedin.com/in/devp19"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: iconColor,
              opacity: 0.85,
              fontSize: "1.1em",
              marginLeft: "0.2em",
            }}
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
        </div>

        <div
          style={{
            fontWeight: 300,
            fontSize: isMobile ? "0.88rem" : "0.9rem",
            marginBottom: "0.5em",
          }}
        >
          code, cognition &amp; applied research
          <br />
          automation analyst (s25) at
          <a
            href="/fidelity"
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              cursor: "pointer",
              display: "inline-flex",
              alignItems: "center",
              opacity: 0.85,
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            fidelity investments <CgArrowTopRight color={iconColor} />
          </a>
          <br />
          co-founder & founding engineer at
          <a
            href="/resdex"
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              display: "inline-flex",
              cursor: "pointer",
              opacity: 0.85,
              alignItems: "center",
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            resdex <CgArrowTopRight color={iconColor} />
          </a>
          <br />
          honours computer science at
          <a
            target="_blank"
            href="https://www.torontomu.ca/"
            style={{
              textDecoration: "underline",
              fontWeight: 300,
              fontSize: isMobile ? "0.88rem" : "0.9rem",
              color: textColor,
              display: "inline-flex",
              cursor: "pointer",
              opacity: 0.85,
              alignItems: "center",
              marginLeft: "0.2em",
            }}
            tabIndex={0}
          >
            torontomet <CgArrowTopRight color={iconColor} />
          </a>
        </div>
      </div>
    </div>
  );
}
