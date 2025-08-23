"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import apiClient from "../lib/apiClient";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const router = useRouter();

  const handleRegister = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const res = await apiClient.post("/auth/register", { email, password });

      if (res.status === 201) {
        setMessage("✅ Register success! Redirecting to login...");
        setTimeout(() => {
          router.push("/login");
        }, 1000);
      } else {
        setMessage(res.data?.message || "⚠️ Something went wrong.");
      }
    } catch (error: any) {
      setMessage(error.response?.data?.message || "❌ Register failed.");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-50 to-gray-200">
      <form
        onSubmit={handleRegister}
        className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-md"
      >
        <h2 className="text-3xl font-bold text-center mb-6 text-gray-900">
          Create an Account
        </h2>

        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-sm font-semibold text-gray-800 mb-1"
          >
            Email address
          </label>
          <input
            id="email"
            type="email"
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-600"
          />
        </div>

        <div className="mb-6">
          <label
            htmlFor="password"
            className="block text-sm font-semibold text-gray-800 mb-1"
          >
            Password
          </label>
          <input
            id="password"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:ring-2 focus:ring-green-500 focus:outline-none placeholder:text-gray-600"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2.5 rounded-lg font-medium hover:bg-green-700 transition duration-200"
        >
          Register
        </button>

        {message && (
          <p
            className={`mt-4 text-center text-sm font-medium ${
              message.includes("success") ? "text-green-700" : "text-red-600"
            }`}
          >
            {message}
          </p>
        )}

        <p className="mt-6 text-center text-sm text-gray-700">
          Already have an account?{" "}
          <a href="/login" className="text-green-700 font-semibold hover:underline">
            Login
          </a>
        </p>
      </form>
    </div>
  );
}
