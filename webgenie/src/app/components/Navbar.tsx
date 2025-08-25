"use client";
import Link from "next/link";
import { useState } from "react";
import { Menu, User } from "lucide-react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full fixed top-0 z-50 bg-white bg-opacity-95 shadow-md backdrop-blur-sm">
      <nav className="container mx-auto flex justify-between items-center py-3 px-4">
        {/* Logo + Project name */}
        <Link href="/" className="flex items-center space-x-2">
          <img src="/logo.png" alt="logo" className="w-8 h-8" />
          <span className="font-bold text-lg text-gray-900">Web Builder</span>
        </Link>

        {/* Desktop menu */}
        <div className="hidden md:flex space-x-6 text-gray-900 font-medium">
          <Link href="/templates" className="hover:text-blue-600">
            Templates
          </Link>
          <Link href="/my-sites" className="hover:text-blue-600">
            My Sites
          </Link>
          <Link href="/billing" className="hover:text-blue-600">
            Billing
          </Link>
          <Link href="/help" className="hover:text-blue-600">
            Help / Docs
          </Link>
        </div>

        {/* User avatar */}
        <div className="relative">
          <button
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}
          >
            <User className="w-6 h-6 text-gray-900" />
          </button>

          {isOpen && (
            <div className="absolute right-0 mt-2 w-40 bg-white border rounded-lg shadow-lg">
              <Link
                href="/profile"
                className="block px-4 py-2 text-gray-900 hover:bg-gray-100"
              >
                Profile
              </Link>
              <button className="w-full text-left px-4 py-2 text-gray-900 hover:bg-gray-100">
                Logout
              </button>
            </div>
          )}
        </div>

        {/* Mobile menu button */}
        <button
          className="md:hidden ml-4 text-gray-900"
          onClick={() => setIsOpen(!isOpen)}
        >
          <Menu className="w-6 h-6" />
        </button>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t">
          <Link href="/templates" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
            Templates
          </Link>
          <Link href="/my-sites" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
            My Sites
          </Link>
          <Link href="/billing" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
            Billing
          </Link>
          <Link href="/help" className="block px-4 py-2 text-gray-900 hover:bg-gray-100">
            Help / Docs
          </Link>
        </div>
      )}
    </header>
  );
}
