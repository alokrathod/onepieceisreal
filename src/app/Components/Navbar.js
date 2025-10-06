"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../../../assets/one_piece_logo.png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="flex items-center justify-between border mx-4 max-md:w-full max-md:w-full border-slate-700 px-6 py-4 rounded-full text-white text-sm">
      <Image src={logo} alt="Logo" width={100} height={40} />

      <div className="hidden md:flex flex-1 items-center justify-center gap-6 ml-7">
        <Link href="/Characters" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Characters
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Characters
          </span>
        </Link>
        <Link
          href="/DevilFruits"
          className="relative overflow-hidden h-6 group"
        >
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Devil Fruits
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Devil Fruits
          </span>
        </Link>
        <Link href="/Bounties" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Bounties
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Bounties
          </span>
        </Link>
        <Link href="/Arcs" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Arcs
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Arcs
          </span>
        </Link>
        <Link href="/Crews" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Organisations
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Crews
          </span>
        </Link>
        <Link href="/movies" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Movies
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Movies
          </span>
        </Link>
        <Link href="/Timeline" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Timeline
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Timeline
          </span>
        </Link>
        <Link href="/Quotes" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Quotes
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Quotes
          </span>
        </Link>
        <Link href="/Trivia" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            Trivia
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            Trivia
          </span>
        </Link>
        <Link href="/WorldMap" className="relative overflow-hidden h-6 group">
          <span className="block group-hover:-translate-y-full transition-transform duration-300">
            World map
          </span>
          <span className="block absolute top-full left-0 group-hover:translate-y-[-100%] transition-transform duration-300">
            World map
          </span>
        </Link>
      </div>

      <div className="hidden ml-14 md:flex items-center gap-4">
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <Link href="/Register">
          <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
            Be a nakama
          </button>
        </Link>
      </div>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden text-gray-600"
        aria-label="Toggle mobile menu"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          viewBox="0 0 24 24"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M4 6h16M4 12h16M4 18h16" />
        </svg>
      </button>

      <div
        className={`absolute ${
          isMobileMenuOpen ? "flex" : "hidden"
        } top-48 text-base left-0 bg-black w-full flex-col items-center gap-4 py-4`}
      >
        <Link className="hover:text-indigo-600" href="#">
          Products
        </Link>
        <Link className="hover:text-indigo-600" href="#">
          Customer Stories
        </Link>
        <Link className="hover:text-indigo-600" href="#">
          Pricing
        </Link>
        <Link className="hover:text-indigo-600" href="#">
          Docs
        </Link>
        <button className="border border-slate-600 hover:bg-slate-800 px-4 py-2 rounded-full text-sm font-medium transition">
          Contact
        </button>
        <button className="bg-white hover:shadow-[0px_0px_30px_14px] shadow-[0px_0px_30px_7px] hover:shadow-white/50 shadow-white/50 text-black px-4 py-2 rounded-full text-sm font-medium hover:bg-slate-100 transition duration-300">
          Get Started
        </button>
      </div>
    </nav>
  );
}
