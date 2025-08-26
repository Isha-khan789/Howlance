import React, { useState, useEffect } from "react";
import logo from "../assets/Logo_white.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo1 from "../assets/Logo_black.png";
import { FaUser } from "react-icons/fa";
// import logo from "../assets/York.png";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  let logoSrc;

  if (scrolled && hovered) {
    logoSrc = logo1; // scrolled + hover
  } else if (scrolled && !hovered) {
    logoSrc = logo; // scrolled, not hover
  } else if (!scrolled && hovered) {
    logoSrc = logo1; // not scrolled + hover
  } else {
    logoSrc = logo1; // not scrolled, not hover
  }

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

    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);

    return () => {
      document.removeEventListener("click", handleClickOutside);
      window.removeEventListener("scroll", handleScroll);
    };
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
        { label: "SaaS Demo Scheduling", href: "#" },
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
      className={`font-display  fixed hover:bg-black hover:text-white top-0 left-0 z-20 w-full transition-colors duration-300 ${
        scrolled ? "bg-black/50 text-white" : "bg-white text-black"
      } group`}
    >
      <nav className="flex justify-between items-center px-6 py-1">
        <a
          href="/"
          onMouseEnter={() => setHovered(true)}
          onMouseLeave={() => setHovered(false)}
        >
          <img
            src={logoSrc}
            className="h-20 w-auto transition-all duration-300"
            alt="logo"
          />
        </a>

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center  space-x-6 text-lg ">
          {navItems.map((item) => (
            <div key={item.name} className="relative">
              <button
                onClick={() => toggleDropdown(item.name)}
                className="font-normal  cursor-pointer  underline underline-offset-8 decoration-transparent hover:text-gray-500 transition-all"
              >
                {item.name}
              </button>

              {openDropdown === item.name && item.dropdown && (
                <div
                  className={`absolute left-0 mt-2  w-60 shadow-lg rounded-lg transition-all duration-300 ${
                    scrolled ? "bg-gray-800 text-white" : "bg-black text-white"
                  }`}
                >
                  <ul className="py-2">
                    {item.dropdown.map((link) => (
                      <li key={link.label}>
                        {link.label === "Real Estate - Profit Engines" ? (
                          <Link
                            to="/real-estate"
                            className="block px-4 py-2 text-sm hover:text-gray-400 transition-all"
                          >
                            {link.label}
                          </Link>
                        ) : (
                          <a
                            href={link.href}
                            className="block px-4 py-2 text-sm hover:text-gray-400 transition-all"
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

        {/* Contact Button */}
        {/* Desktop Buttons */}
        {/* D{/* Desktop Buttons */}
        <div className="hidden md:flex space-x-4 items-center">
          <div
            className={`px-8 py-2 font-semibold flex items-center rounded-full  gap-2 transition-all duration-300
      text-black
      group-hover:text-black
      group-hover:bg-white
      ${scrolled ? "text-white" : "text-black"}
    `}
          >
            <FaUser />
            Login
          </div>

          <button
            className={`px-8 py-2 font-semibold transition-all duration-300 rounded-full       group-hover:text-black group-hover:bg-white

    ${scrolled ? "bg-white text-black " : "bg-black text-white   "}
    hover:bg-black hover:text-white
 
  `}
          >
            7-Days Trial
          </button>

          <button
            className={`px-8 py-2 font-semibold transition-all duration-300 rounded-full       group-hover:text-black group-hover:bg-white

    ${scrolled ? "bg-white text-black " : "bg-black text-white   "}
    hover:bg-black hover:text-white
 
  `}
          >
            Contact
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="text-2xl focus:outline-none"
          >
            {mobileOpen ? <CgClose /> : <CgMenuRight />}
          </button>
        </div>
        {mobileOpen && (
          <div
            className={`absolute top-full left-0 w-full bg-white shadow-md text-black md:hidden flex flex-col items-start px-6 py-4 space-y-3`}
          >
            {navItems.map((item) => (
              <div key={item.name} className="w-full">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="w-full text-left font-semibold font-display py-2"
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
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
