"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "../lib/apiClient";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/auth/login", { email, password });
      localStorage.setItem("token", res.data.token);

      // Thông báo + điều hướng
      setMessage("✅ Login success!");
      setTimeout(() => {
        router.push("/StartPage"); // chuyển qua /home
      }, 800); // delay 0.8s để user thấy thông báo
    } catch (err: any) {
      setMessage(err.response?.data?.message || "❌ Login failed");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <form
        onSubmit={handleLogin}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-800">
          Web Builder Login
        </h2>

        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-600 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-600"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600 mb-1">
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-700 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-500 text-white py-2.5 rounded-lg font-medium hover:bg-green-600 transition duration-200"
        >
          Login
        </button>

        {message && (
          <p
            className={`mt-4 text-center text-sm ${
              message.includes("success") ? "text-green-600" : "text-red-500"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-500">
          Don’t have an account?{" "}
          <a href="/register" className="text-green-600 hover:underline">
            Sign up
          </a>
        </p>
      </form>
    </div>
  );
}
