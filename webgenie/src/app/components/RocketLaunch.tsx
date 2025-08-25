"use client";

import { useMemo } from "react";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import rocketAnimation from "@/../../public/rocket.json";

const Lottie = dynamic(() => import("lottie-react"), { ssr: false });

interface RocketLaunchProps {
  smokeCount?: number;
}

export default function RocketLaunch({ smokeCount = 10 }: RocketLaunchProps) {
  const smoke = useMemo(() => Array.from({ length: smokeCount }, (_, i) => i), [smokeCount]);

  return (
    <motion.div className="absolute inset-0 z-20 pointer-events-none">
      {/* Overlay */}
      <motion.div
        className="absolute inset-0 bg-white z-10"
        initial={{ clipPath: "inset(0% 100% 0% 0%)" }}
        animate={{ clipPath: "inset(0% 0% 0% 0%)" }}
        transition={{ duration: 3.2, ease: "easeInOut" }}
      />

      {/* Rocket + smoke */}
      <motion.div
        className="absolute left-[-20%] top-1/2 -translate-y-1/2 z-30"
        initial={{ x: "-10vw", opacity: 0 }}
        animate={{ x: ["-10vw", "30vw", "150vw"], opacity: 1 }}
        transition={{ duration: 2.8, ease: [0.3, 0.3, 0.3, 1] }}
      >
        <div className="absolute -left-10 top-1/2 -translate-y-1/2">
          {smoke.map((i) => (
            <motion.span
              key={i}
              className="absolute block h-10 w-10 rounded-full bg-slate-400/60 blur-xl"
              initial={{ x: -20, y: 0, opacity: 0.8, scale: 0.9 }}
              animate={{
                x: [-20 - i * 2, -50 - i * 6, -90 - i * 10],
                y: [0, i % 2 === 0 ? 10 : -10, i % 3 === 0 ? 24 : -18],
                opacity: [0.8, 0.4, 0],
                scale: [0.9, 1.3, 1.6],
              }}
              transition={{ duration: 2 + i * 0.1, ease: "easeOut" }}
              style={{ left: -i * 6, top: (i % 5) * 8 }}
            />
          ))}
        </div>

        <motion.div
          className="relative"
          initial={{ rotate: -4, scale: 1.8 }}
          animate={{ rotate: [-4, 4, -2, 2, 0], scale: [1.8, 2.2, 2] }}
          transition={{ duration: 3, ease: [0.2, 0.8, 0.2, 1] }}
        >
          <div className="h-[220px] w-[220px] rotate-90">
            <Lottie animationData={rocketAnimation} loop autoplay className="w-64 h-64" />
          </div>

          <motion.div
            className="absolute left-[-28px] top-1/2 h-16 w-8 -translate-y-1/2 rounded-full"
            style={{
              background: "radial-gradient(50% 60% at 50% 25%, #ffe680 0%, #ff9900 45%, #ff3b00 80%)",
              filter: "blur(6px)",
            }}
            animate={{
              scaleY: [1, 1.4, 0.9, 1.3, 1],
              scaleX: [1, 0.9, 1.1, 0.95, 1],
              opacity: [0.9, 1, 0.85, 1],
              x: [-2, -4, -1, -3, -2],
            }}
            transition={{ repeat: Infinity, duration: 0.22 }}
          />
        </motion.div>
      </motion.div>

      {/* Shake effect */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        animate={{ x: [0, -6, 6, -4, 4, 0], y: [0, 3, -3, 2, -2, 0] }}
        transition={{ repeat: Infinity, duration: 0.18 }}
      />
    </motion.div>
  );
}
