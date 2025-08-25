import React, { useState, useEffect } from "react";
import logo from "../../../assets/4.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";

const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
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
        { label: "SaaS Demo Scheduling", href: "/services/saas" },
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
    {
      name: "Hire VA",
      href: "/hire-va",
    },
    {
      name: "Company",
      dropdown: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <header className="font-display  cursor-pointer fixed top-0 left-0 z-20 w-full mt-3">
      <div className="w-[90%] max-w-7xl  mx-auto bg-white text-black rounded-full shadow-md transition-colors duration-300 hover:bg-black hover:text-white group">
        <nav className="flex items-center justify-between px-6 py-3">
          <a href="/">
            <img
              src={logo}
              className="h-16 w-auto transition-all duration-300 group-hover:invert"
              alt="logo"
            />
          </a>

          <div className="hidden md:flex flex-1 justify-center items-center space-x-10 text-md">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => toggleDropdown(item.name)}
                  className="font-normal underline underline-offset-8 decoration-transparent hover:text-white transition-all"
                >
                  {item.name}
                </button>
                {openDropdown === item.name && item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 bg-white text-black group-hover:bg-gray-900 group-hover:text-white shadow-lg rounded-lg transition-all duration-300">
                    <ul className="py-2">
                      {item.dropdown.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.href}
                            className="block px-4 py-2 text-sm hover:text-white transition-all"
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex space-x-4 items-center">
            <Link
              to="/login"
              className={`px-8 py-2 font-semibold flex items-center gap-2 transition-all duration-300
      text-black
      group-hover:bg-white
      group-hover:text-black
    `}
            >
              <FaUser />
              Login
            </Link>

            <button
              className={`px-8 py-2 border-2 rounded-md border-black font-semibold transition-all duration-300
      bg-white text-black
      group-hover:bg-black group-hover:text-white group-hover:border-white
    `}
            >
              7-Days Trial
            </button>

            <button
              className={`px-8 py-2 font-semibold rounded-md transition-all duration-300
      bg-black text-white
      group-hover:bg-white group-hover:text-black
    `}
            >
              Contact
            </button>
          </div>

          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl focus:outline-none"
            >
              {mobileOpen ? <CgClose /> : <CgMenuRight />}
            </button>
          </div>
        </nav>

        {mobileOpen && (
          <div className="md:hidden w-full bg-white text-black shadow-md px-6 py-4 space-y-4 rounded-b-3xl">
            {navItems.map((item) => (
              <div key={item.name}>
                <button
                  onClick={() =>
                    toggleDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className="w-full text-left font-normal py-2"
                >
                  {item.name}
                </button>
                {openDropdown === item.name && item.dropdown && (
                  <div className="pl-4 space-y-2">
                    {item.dropdown.map((link) => (
                      <Link
                        to={link.href}
                        key={link.label}
                        className="block text-sm text-black hover:text-gray-700"
                        onClick={() => setMobileOpen(false)}
                      >
                        {link.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* Mobile Buttons */}
            <Link
              to="/login"
              className="w-full px-6 py-2 flex items-center justify-center gap-2 font-semibold text-black border border-black rounded-md hover:bg-black hover:text-white transition-all"
            >
              <FaUser />
              Login
            </Link>

            <button className="w-full px-6 py-2 border-2 border-black rounded-md font-semibold bg-white text-black hover:bg-black hover:text-white transition-all">
              7-Days Trial
            </button>

            <button className="w-full px-6 py-2 rounded-md font-semibold bg-black text-white hover:bg-white hover:text-black transition-all">
              Contact
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;
