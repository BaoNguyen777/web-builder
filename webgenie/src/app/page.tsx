"use client";

import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { useRouter } from "next/navigation";
import RocketLaunch from "@/components/RocketLaunch";

export default function Home() {
  const [launch, setLaunch] = useState(false);
  const router = useRouter();

  const startLaunch = () => {
    setLaunch(true);
    setTimeout(() => router.push("/login"), 2000);
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-gray-50 relative overflow-hidden">
      <h1 className="text-4xl font-bold text-blue-600 mb-4">🚀 Welcome to WebGenie</h1>
      <p className="text-lg text-gray-700 mb-6 text-center">Tạo website mini của bạn chỉ với vài cú click!</p>

      <div className="flex gap-4">
        <button onClick={startLaunch} className="px-6 py-2 rounded-2xl bg-blue-600 text-white hover:bg-blue-700">
          Bắt đầu ngay
        </button>
        <button className="px-6 py-2 rounded-2xl bg-gray-200 hover:bg-gray-300">Xem demo</button>
      </div>

      <AnimatePresence>{launch && <RocketLaunch />}</AnimatePresence>
    </main>
  );
}
