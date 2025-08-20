import React, { useState, useRef, useEffect } from "react";
import { CiMenuBurger } from "react-icons/ci";
import logo from "./assets/Logo.svg";
import { Link, useLocation } from "react-router-dom";

const navLinks = [
  { href: "#home", label: "Home" },
  { href: "#about", label: "About" },
  { href: "#specials", label: "Specials" },
  { href: "/booking", label: "Reservation" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef();

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  return (
    <nav
      className="relative flex items-center justify-between px-6 py-4 bg-[var(--color-light-gray)]"
      style={{ boxShadow: "0 2px 8px rgba(0,0,0,0.04)" }}
    >
      <img src={logo} alt="logo" />
      {/* Burger icon for mobile */}
      <button
        className="md:hidden p-2 rounded-full hover:bg-[var(--color-primary-dark-green)] hover:text-[var(--color-accent-yellow)] transition"
        aria-label="Open menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        <CiMenuBurger className="text-4xl" />
      </button>

      {/* Desktop nav links */}
      <ul className="hidden md:flex gap-8">
        {navLinks.map((link) => (
          <li key={link.href}>
            <Link
              to={link.href == "/booking" ? `/booking` : `/${link.href}`}
              className="text-lg font-semibold p-2 text-black  hover:bg-[var(--color-primary-dark-green)] hover:text-[var(--color-accent-yellow)] rounded-sm transition"
            >
              {link.label}
            </Link>
          </li>
        ))}
      </ul>

      {/* Mobile menu overlay */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-black/40 md:hidden">
          <div
            ref={menuRef}
            className="absolute left-0 right-0 top-[64px] mx-4 rounded-xl bg-[var(--color-white)] shadow-lg flex flex-col items-center py-6 animate-slideDown"
            style={{
              border: "2px solid var(--color-accent-yellow)",
            }}
          >
            {navLinks.map((link) => (
              <Link
                key={link.href}
                to={link.href == "/booking" ? `/booking` : `/${link.href}`}
                className="block w-full text-center py-3 text-lg font-semibold text-[var(--color-primary-dark-green)] hover:bg-[var(--color-primary-dark-green)] hover:text-[var(--color-accent-yellow)] hover:border-[var(--color-accent-yellow)] hover:border-[2px] hover rounded transition"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
