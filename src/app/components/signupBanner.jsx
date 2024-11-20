"use client"
import Link from "next/link";
import React, { useState } from "react";

const SignUpBanner = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleClose = () => {
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="fixed bottom-4 end-4 z-50 flex items-center justify-center gap-4 rounded-lg bg-[#4D1A2D] px-5 py-3 text-white transition-opacity duration-300 ease-in-out"
    >
      <Link
        href="/Signup"
        target="_blank"
        rel="noreferrer"
        className="text-sm font-medium hover:opacity-75"
      >
        Hey! Sign up for postgait.com 👋 
      </Link>

      <button
        onClick={handleClose}
        className="rounded bg-white/20 p-1 hover:bg-white/10"
      >
        <span className="sr-only">Close</span>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </button>
    </aside>
  );
};

export default SignUpBanner;
