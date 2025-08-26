import React, { useState, useEffect } from "react";
import logo from "../../../assets/Logo_black.png";
// import logo1 from "../../../assets/Logo_White.png";
import { CgMenuRight, CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import logo1 from "../../../assets/Logo_white.png";
const Navbar = () => {
  const [openDropdown, setOpenDropdown] = useState(null); // desktop dropdown
  const [mobileOpen, setMobileOpen] = useState(false); // mobile menu
  const [mobileDropdown, setMobileDropdown] = useState(null); // mobile dropdown
  // const [scrolled, setScrolled] = useState(false);
  // const [showlogo setShowlogo]=useState()
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
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
    { name: "Hire VA", href: "/hire-va" },
    {
      name: "Company",
      dropdown: [
        { label: "About", href: "/about" },
        { label: "Careers", href: "/careers" },
      ],
    },
  ];

  return (
    <header
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className={`fixed top-0 mt-3 left-0 z-20 w-full  font-display cursor-pointer`}
    >
      {/* Navbar Container (Desktop & Mobile Button) */}
      <div className="w-[90%] max-w-7xl mx-auto transition-colors duration-300">
        <nav className="flex items-center justify-between px-4 md:px-6 py-2 md:py-3 relative hover:bg-black hover:text-white bg-white text-black rounded-full shadow-md group">
          {/* Logo */}
          <Link to="/">
            <img
              src={hovered && mobileOpen ? logo : logo}
              alt="logo"
              className="h-12 md:h-16 w-auto transition-all duration-300"
            />
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex flex-1 justify-center items-center space-x-10 text-md">
            {navItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() =>
                    setOpenDropdown(
                      openDropdown === item.name ? null : item.name
                    )
                  }
                  className="font-normal underline underline-offset-8 decoration-transparent hover:text-gray-500 transition-all"
                >
                  {item.name}
                </button>
                {openDropdown === item.name && item.dropdown && (
                  <div className="absolute left-1/2 -translate-x-1/2 mt-2 w-60 bg-white text-black shadow-lg rounded-lg transition-all duration-300">
                    <ul className="py-2">
                      {item.dropdown.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.href}
                            className="block px-4 py-2 text-sm hover:text-gray-400 transition-all"
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
            <div
              className="px-8 py-2 font-semibold flex items-center rounded-full  gap-2 transition-all duration-300
                  text-black
                  group-hover:text-white
                  
                }"
            >
              <FaUser />
              Login
            </div>
            <button
              className="px-8 py-2 font-semibold transition-all duration-300 rounded-full    bg-black text-white   group-hover:text-black group-hover:bg-white

    hover:bg-black hover:text-white
 
  }"
            >
              7-Days Trial
            </button>
            <button
              className="px-8 py-2 font-semibold transition-all duration-300 rounded-full    bg-black text-white   group-hover:text-black group-hover:bg-white

    hover:bg-black hover:text-white
 
  }"
            >
              Contact
            </button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="text-2xl focus:outline-none transition-transform duration-300"
            >
              {mobileOpen ? <CgClose /> : <CgMenuRight />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden absolute top-full left-1/2 mt-4 transform -translate-x-1/2 w-[90%] max-w-md bg-white shadow-md px-4 py-4 space-y-4 z-30 rounded-3xl">
          {navItems.map((item) => (
            <div key={item.name}>
              <button
                onClick={() =>
                  setMobileDropdown(
                    mobileDropdown === item.name ? null : item.name
                  )
                }
                className="w-full text-left font-normal py-2"
              >
                {item.name}
              </button>

              {mobileDropdown === item.name && item.dropdown && (
                <div className="pl-4 space-y-2">
                  {item.dropdown.map((link) => (
                    <Link
                      to={link.href}
                      key={link.label}
                      className="block text-sm text-black hover:text-gray-700"
                      onClick={() => {
                        setMobileOpen(false);
                        setMobileDropdown(null);
                      }}
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
            <FaUser /> Login
          </Link>

          <button className="w-full px-6 py-2 border-2 border-black rounded-md font-semibold bg-white text-black hover:bg-black hover:text-white transition-all">
            7-Days Trial
          </button>

          <button className="w-full px-6 py-2 rounded-md font-semibold bg-black text-white hover:bg-white hover:text-black transition-all">
            Contact
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;
