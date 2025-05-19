"use client";

import { FaEnvelope, FaLock } from "react-icons/fa";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-orange-200 to-blue-400 px-4">
      <div className="bg-white p-8 rounded-3xl shadow-2xl w-full max-w-md border border-gray-300">
        <h1 className="text-4xl font-extrabold text-center text-blue-700 mb-8 tracking-wide">
          Welcome Back
        </h1>

        <form className="space-y-6">
          <div className="relative">
            <label htmlFor="email" className="sr-only">Email Address</label>
            <FaEnvelope className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              id="email"
              name="email"
              type="email"
              placeholder="Email Address"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm 
                         transition duration-300"
              required
            />
          </div>

          <div className="relative">
            <label htmlFor="password" className="sr-only">Password</label>
            <FaLock className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-400" />
            <input
              id="password"
              name="password"
              type="password"
              placeholder="Password"
              className="w-full pl-10 pr-4 py-3 rounded-xl border border-gray-300 
                         focus:outline-none focus:ring-4 focus:ring-blue-300 shadow-sm 
                         transition duration-300"
              required
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-blue-600 to-blue-400 
                       hover:from-blue-700 hover:to-blue-500 text-white py-3 rounded-xl 
                       font-bold shadow-lg transition-transform transform hover:scale-105"
          >
            Log In
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-gray-600">
          Don’t have an account?{" "}
          <Link href="/signup" className="text-blue-600 hover:underline">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
}
