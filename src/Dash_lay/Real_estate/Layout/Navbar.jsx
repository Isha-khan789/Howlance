import React, { useState, useEffect } from "react";
import logo from "../../../assets/Logo_white.png";
import logo1 from "../../../assets/Logo_black.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaQuestion } from "react-icons/fa6";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const logoSrc = mobileOpen ? logo : logo;
  const toggleDropdown = (name) => {
    setOpenDropdown((prev) => (prev === name ? null : name));
  };
  const closeDropdown = () => setOpenDropdown(null);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (!e.target.closest("nav")) closeDropdown();
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, []);

  const navItems = [
    {
      name: "Services",
      dropdown: [
        { label: "LinkedIn Outreach", href: "#" },
        { label: "Appointment Setting", href: "#" },
        { label: "Qualification Call", href: "#" },
        { label: "Multi-Channel Outreach", href: "#" },
        { label: "Web Development", href: "#" },
        { label: "Mobile App Development", href: "#" },
      ],
    },
    {
      name: "Industry-Specific Solutions",
      dropdown: [
        { label: "Real Estate - Profit Engines", href: "/real-estate" },
        { label: "SaaS - Every Meeting, A Wing", href: "#" },
      ],
    },
    {
      name: "Business Stages",
      dropdown: [
        { label: "Startups", href: "#" },
        { label: "Small and Midsized", href: "#" },
        { label: "Enterprises", href: "#" },
      ],
    },
    { name: "Hire VA" },
    { name: "Pricing" },
    {
      name: "Company",
      dropdown: [
        { label: "About", href: "#" },
        { label: "Careers", href: "/Careers" },
      ],
    },
  ];

  return (
    <header
      className="font-display fixed top-0 left-0 z-50 w-full transition-colors duration-300 
          text-white 
           "
    >
      <nav className="flex justify-between items-center px-6 py-2 md:py-4">
        {/* Logo */}
        <Link to="/">
          <img
            src={logoSrc}
            alt="logo"
            className="h-20 w-auto transition-all duration-300"
          />
        </Link>

        {/* Desktop Menu */}
        <div className="hidden lg:flex items-center space-x-4">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="font-normal cursor-pointer hover:opacity-80 transition"
              >
                {item.name}
              </button>

              {openDropdown === item.name && item.dropdown && (
                <div
                  className={`absolute left-0 mt-2 w-60 shadow-lg rounded-lg overflow-hidden transition ${
                    scrolled ? "bg-gray-900 text-white" : "bg-black text-white"
                  }`}
                >
                  <ul className="py-2">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        {link.label === "Real Estate - Profit Engines" ? (
                          <Link
                            to="/real-estate"
                            className="block px-4 py-2 text-sm hover:bg-white/10"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="block px-4 py-2 text-sm hover:bg-white/10"
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

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center space-x-2">
          {/* Help */}
          <div className="relative">
            <button
              onClick={() => toggleDropdown("help")}
              className={`relative group flex items-center justify-center w-10 h-10 cursor-pointer rounded-full hover:bg-white/10 transition ${
                scrolled ? "text-white" : "text-[#2F2C2B]"
              }`}
            >
              <FaQuestion className="text-lg text-white" />
              {/* Tooltip */}
              <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-[#2F2C2B] rounded pointer-events-none opacity-0 group-hover:opacity-100 transition">
                Help
              </span>
            </button>

            {openDropdown === "help" && (
              <div
                className={`absolute right-0 mt-2 w-44 shadow-lg rounded-lg overflow-hidden transition ${
                  scrolled
                    ? "bg-gray-900 text-white"
                    : "bg-[#2F2C2B] text-white"
                }`}
              >
                <ul className="py-2 text-sm">
                  <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                    Help Center
                  </li>
                  <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                    Support
                  </li>
                  <li className="px-4 py-2 hover:bg-white/10 cursor-pointer">
                    Contact Us
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Login */}
          <div
            className={` group relative px-6 py-2 flex items-center gap-2 cursor-pointer rounded-full hover:opacity-80 transition ${
              scrolled ? "text-white" : "text-white"
            }`}
          >
            <FaUser />
            <span className="absolute -bottom-8 left-1/2 -translate-x-1/2 px-2 py-1 text-xs text-white bg-[#2F2C2B] rounded pointer-events-none opacity-0 group-hover:opacity-100 transition">
              Login
            </span>{" "}
          </div>
        </div>

        {/* Mobile Toggle */}
        <div className="lg:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl"
          >
            {mobileOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full bg-white text-[#2F2C2B] shadow-md flex flex-col items-start px-6 py-4 space-y-3 lg:hidden">
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left font-semibold py-2"
                >
                  {item.name}
                </button>
                {openDropdown === item.name && item.dropdown && (
                  <ul className="pl-4 flex flex-col space-y-1">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        {link.label === "Real Estate - Profit Engines" ? (
                          <Link
                            to="/real-estate"
                            className="block py-1 hover:text-gray-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="block py-1 hover:text-gray-700"
                            onClick={() => setMobileOpen(false)}
                          >
                            {link.label}
                          </a>
                        )}
                      </li>
                    ))}
                  </ul>
                )}
              </div>
            ))}

            {/* Mobile Help */}
            <div className="w-full">
              <button
                onClick={() => toggleDropdown("help")}
                className="w-full text-left font-semibold py-2 flex items-center gap-2"
              >
                <FaQuestion /> Help
              </button>
              {openDropdown === "help" && (
                <ul className="pl-4 flex flex-col space-y-1 text-sm">
                  <li className="py-1 hover:text-gray-700">Help Center</li>
                  <li className="py-1 hover:text-gray-700">Support</li>
                  <li className="py-1 hover:text-gray-700">Contact Us</li>
                </ul>
              )}
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
