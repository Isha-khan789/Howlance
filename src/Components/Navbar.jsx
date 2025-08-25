import React, { useState, useEffect } from "react";
import logo from "../assets/4.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleDropdown = (dropdownName) => {
    setOpenDropdown(openDropdown === dropdownName ? null : dropdownName);
  };

  const closeDropdown = () => setOpenDropdown(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) {
        closeDropdown();
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    {
      name: "Services",
      dropdown: [{ label: "LinkedIn Lead Generation", href: "#" }],
    },
    {
      name: "Industry-Specific Solutions",
      dropdown: [
        { label: "Real Estate - Profit Engines", href: "/real-estate" },
        { label: "SaaS Demo Scheduling", href: "#" },
      ],
    },
    {
      name: "Hire VA",
    },
    {
      name: "Company",
      dropdown: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
      ],
    },
  ];

  return (
    <header className="font-display fixed top-0 left-0 z-20 w-full bg-white text-black transition-colors duration-300 hover:bg-black hover:text-white group">
      <nav className="flex justify-between items-center px-6 py-3">
        {/* Logo (Left) */}
        <a href="/">
          <img
            src={logo}
            className="h-20 w-auto transition-all duration-300 group-hover:invert"
            alt="logo"
          />
        </a>

        {/* Centered Nav Items */}
        <div className="hidden md:flex items-center space-x-10 text-lg absolute left-1/2 transform -translate-x-1/2">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="font-normal underline underline-offset-8 decoration-transparent hover:text-white transition-all"
              >
                {item.name}
              </button>

              {openDropdown === item.name && item.dropdown && (
                <div className="absolute left-0 mt-2 w-60 bg-white text-black group-hover:bg-gray-900 group-hover:text-white shadow-lg rounded-lg transition-all duration-300">
                  <ul className="py-2">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        {link.label === "Real Estate - Profit Engines" ? (
                          <Link
                            to="/real-estate"
                            className="block px-4 py-2 text-sm hover:text-white transition-all"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="block px-4 py-2 text-sm hover:text-white transition-all"
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Contact Button (Right) */}
        <button className="hidden md:block bg-[black] px-8 py-2 hover:bg-white hover:text-black rounded-full text-white font-semibold transition-all">
          Contact
        </button>

        {/* Mobile Menu Toggle */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl focus:outline-none"
          >
            {mobileOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
