"use client";

import { useState, useEffect } from "react";
import { SITE_NAME } from "@/lib/constants";

const NAV_LINKS = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Doctors", href: "#doctors" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [hidden, setHidden] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // Show solid background once past the hero area
      setScrolled(currentScrollY > 100);

      // Hide on scroll down, show on scroll up (ignore tiny movements near top)
      if (currentScrollY < 80) {
        setHidden(false);
      } else if (currentScrollY > lastScrollY + 4) {
        setHidden(true);
      } else if (currentScrollY < lastScrollY - 4) {
        setHidden(false);
      }

      lastScrollY = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const textColor = scrolled ? "text-text-primary" : "text-white";
  const barColor = scrolled ? "bg-text-primary" : "bg-white";

  return (
    <>
      <nav
        className={`fixed top-0 w-full h-[60px] z-50 transition-transform duration-300 ease-in-out ${
          hidden ? "-translate-y-full" : "translate-y-0"
        } ${scrolled ? "bg-white shadow-sm" : "bg-transparent"}`}
      >
        <div className="mx-auto max-w-[1120px] h-full flex items-center justify-between px-[30px]">
          <a
            href="/"
            className={`font-heading text-[22px] md:text-[26px] font-black tracking-[-0.52px] uppercase ${textColor}`}
          >
            FormV<span className="normal-case">i</span>ta
          </a>

          {/* Hamburger - shown on all sizes like MEDVi */}
          <button
            onClick={() => setIsOpen(true)}
            className="flex flex-col justify-center gap-[5px] w-[34px] h-[33px] p-[6px]"
            aria-label="Open menu"
          >
            <span className={`w-full h-[2px] rounded-full ${barColor}`} />
            <span className={`w-full h-[2px] rounded-full ${barColor}`} />
          </button>
        </div>
      </nav>

      {/* Mobile drawer overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 z-50"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full max-w-[400px] bg-white z-50 transform transition-transform duration-300 ease-in-out ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex justify-end p-[20px]">
          <button
            onClick={() => setIsOpen(false)}
            className="w-[34px] h-[34px] flex items-center justify-center"
            aria-label="Close menu"
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#242220" strokeWidth="2">
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          </button>
        </div>
        <div className="flex flex-col gap-[24px] px-[30px] pt-[20px]">
          {NAV_LINKS.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[18px] font-semibold text-text-primary"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#weight-loss"
            onClick={() => setIsOpen(false)}
            className="inline-flex items-center justify-center rounded-[500px] bg-brand-teal text-white text-[12px] font-semibold uppercase tracking-[0.6px] px-[50px] h-[43px] mt-[16px]"
          >
            Get Started
          </a>
        </div>
      </div>
    </>
  );
}
