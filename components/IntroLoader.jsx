"use client";

import { useEffect, useState } from "react";

const SPIN_MS = 4200;
const CONVERGE_MS = 1300;
const ZOOM_MS = 1100;

export default function IntroLoader() {
  const [phase, setPhase] = useState("spin");

  useEffect(() => {
    const reduced =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    document.body.style.overflow = "hidden";

    if (reduced) {
      const timeoutId = setTimeout(() => {
        setPhase("done");
        document.body.style.overflow = "";
      }, 500);

      return () => {
        clearTimeout(timeoutId);
        document.body.style.overflow = "";
      };
    }

    const spinTimeout = setTimeout(() => setPhase("converge"), SPIN_MS);
    const convergeTimeout = setTimeout(() => setPhase("zoom"), SPIN_MS + CONVERGE_MS);
    const doneTimeout = setTimeout(() => {
      setPhase("done");
      document.body.style.overflow = "";
    }, SPIN_MS + CONVERGE_MS + ZOOM_MS);

    return () => {
      clearTimeout(spinTimeout);
      clearTimeout(convergeTimeout);
      clearTimeout(doneTimeout);
      document.body.style.overflow = "";
    };
  }, []);

  if (phase === "done") return null;

  const converging = phase === "converge" || phase === "zoom";

  return (
    <div className="intro-overlay" aria-hidden="true">
      <div className={`intro-disc intro-disc--a ${converging ? "intro-disc--converge" : ""}`} />
      <div className={`intro-disc intro-disc--b ${converging ? "intro-disc--converge" : ""}`} />
      <div className={`intro-ball ${phase === "zoom" ? "intro-ball--zoom" : ""}`} />
      <div className={`intro-caption ${phase === "spin" ? "intro-caption--visible" : ""}`}>
        preparing the page
      </div>
    </div>
  );
}