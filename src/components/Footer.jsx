import React from "react";

import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Products", path: "/products" },
  { name: "Categories", path: "/categories" },
  { name: "Occasions", path: "/occasions" },
  { name: "Contact", path: "/contact" },
  { name: "About", path: "/about" },
  { name: "Terms & Conditions", path: "/terms" },
  { name: "Privacy Policy", path: "/privacy" },
  { name: "FAQs", path: "/faqs" },
];

export default function Footer() {
  const [email, setEmail] = useState("");

  return (
    <footer className="bg-[#27272A] text-white mt-30">
      <div className="mx-auto max-w-7xl px-6 py-10">
        <div className="flex justify-between">
          {/* Col 1 — Logo & brand */}
          <div className="flex gap-5 ">
            {/* Col 1 — Logo */}
            <div className="flex flex-col items-center gap-3">
              <img
                src="src/assets/flower.png"
                alt="Rose logo"
                className="h-70 w-70 object-contain"
              />
              <div>
                <p className="text-sm font-semibold text-[#FFA3B9]">
                  Rose E-Commerce App
                </p>
                <p className="text-xs text-gray-400">
                  All rights reserved | 2025
                </p>
              </div>
            </div>

            {/* Col 2 —  Nav links */}
            <div>
              <p className="mb-3 text-sm font-semibold text-[#FFA3B9]">
                Discover our website
              </p>
              <ul className="space-y-1">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      to={link.path}
                      className="text-sm text-gray-300 transition hover:text-white"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          {/* Col 3 — Newsletter */}
          <div>
            <p className="text-[#FFA3B9] mb-1 text-base font-bold">
              Get <span className="text-[#FBEAEA]">20%</span> Off Discount Coupon
            </p>
            <p className="mb-4 text-xs text-gray-400">
              By subscribing to our newsletter
            </p>

            <div className="flex items-center overflow-hidden rounded-full border-none bg-[#52525B]">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                className="flex-1 bg-transparent px-4 py-2.5 text-sm text-white placeholder-gray-500 outline-none"
              />
              <button className="cursor-pointer flex items-center gap-1.5 rounded-full bg-[#FBEAEA] px-4 py-2.5 text-sm font-medium text-[#741C21] m-0.5 placeholder-[#A1A1AA]">
                Subscribe
                <ArrowRight size={14} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
