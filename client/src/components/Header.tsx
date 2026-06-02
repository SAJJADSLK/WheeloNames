/* =============================================================
   Header — Wheeloname
   Sticky top nav with logo, links, language switcher, and CTA
   ============================================================= */

import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, Globe } from "lucide-react";
import { useLanguage } from "@/contexts/LanguageContext";

const NAV_LINKS = [
  { label: "My Wheels", href: "/wheels" },
  { label: "Team Generator", href: "/team-generator" },
  { label: "Presets", href: "/presets" },
  { label: "Classroom", href: "/classroom" },
  { label: "Widget", href: "/widget" },
  { label: "Analytics", href: "/analytics" },
  { label: "Customize", href: "/customize" },
  { label: "Trending", href: "/trending" },
];

export default function Header() {
  const [location] = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);
  const { language, setLanguage } = useLanguage();

  return (
    <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 group">
            <img
              src="https://d2xsxph8kpxj0f.cloudfront.net/310519663675103243/Keu92i8at8VAdKDhSKgXT4/wheeloname-favicon-2wzufQWDpYBWNPmEntMmYz.webp"
              alt="Wheeloname"
              className="w-8 h-8 rounded-full shadow-md group-hover:shadow-purple-300 transition-shadow duration-200"
            />
            <span
              className="text-lg font-bold text-gray-900"
              style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
            >
              Wheeloname
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3.5 py-2 rounded-lg text-sm font-medium transition-colors duration-150 ${
                  location === link.href
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* Language Switcher */}
            <div className="ml-2 flex items-center gap-1 border-l border-gray-200 pl-2">
              <button
                onClick={() => setLanguage("en")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  language === "en"
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                EN
              </button>
              <button
                onClick={() => setLanguage("ar")}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                  language === "ar"
                    ? "text-purple-700 bg-purple-50"
                    : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
                }`}
              >
                العربية
              </button>
            </div>

            <Link href="/wheel/new">
              <button className="ml-2 px-4 py-2 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 hover:from-purple-700 hover:to-indigo-700 shadow-sm hover:shadow-purple-200 transition-all duration-200 active:scale-95">
                New Wheel
              </button>
            </Link>
          </nav>

          {/* Mobile hamburger */}
          <button
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 transition-colors"
            onClick={() => setMobileOpen((v) => !v)}
            aria-label="Toggle menu"
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {mobileOpen && (
        <div className="md:hidden border-t border-gray-100 bg-white px-4 py-3 flex flex-col gap-1">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileOpen(false)}
              className="px-3 py-2.5 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-100 transition-colors"
            >
              {link.label}
            </Link>
          ))}

          {/* Mobile Language Switcher */}
          <div className="flex gap-2 mt-2 border-t border-gray-100 pt-2">
            <button
              onClick={() => {
                setLanguage("en");
                setMobileOpen(false);
              }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                language === "en"
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              EN
            </button>
            <button
              onClick={() => {
                setLanguage("ar");
                setMobileOpen(false);
              }}
              className={`flex-1 px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                language === "ar"
                  ? "text-purple-700 bg-purple-50"
                  : "text-gray-600 hover:text-gray-900 hover:bg-gray-100"
              }`}
            >
              العربية
            </button>
          </div>

          <Link href="/wheel/new" onClick={() => setMobileOpen(false)}>
            <button className="mt-3 w-full px-4 py-2.5 rounded-lg text-sm font-semibold text-white bg-gradient-to-r from-purple-600 to-indigo-600 shadow-sm">
              New Wheel
            </button>
          </Link>
        </div>
      )}
    </header>
  );
}
