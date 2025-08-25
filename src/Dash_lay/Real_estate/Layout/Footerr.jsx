import React from "react";
import footerlogo from "../../../assets/Black_logo.png";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa6";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { CiLinkedin } from "react-icons/ci";
import { motion } from "framer-motion";
import { fadeIn } from "../../../Utilities/animation.js";
const Footer = () => {
  return (
    <motion.div
      className="py-12 bg-black px-8"
      variants={fadeIn("right", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.7 }}
    >
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
        {/* Logo + About + Socials */}
        <div className="space-y-6 mr-14 order-last md:order-first">
          <div className="flex items space-x-2">
            <img src={footerlogo} className="w-35 h-auto" alt="Logo" />
          </div>

          <p className="text-white font-display">
            Where business dream become reality
          </p>

          <div className="flex space-x-4">
            <div className="flex space-x-4 my-4 md:my-0 text-white text-xl">
              <a
                className="w-14 h-14 flex items-center justify-center rounded-full border-2 hover:bg-[#1877F2] border-white mb-4"
                href=" https://www.facebook.com/howlance.official/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaFacebookF className="cursor-pointer hover:text-white " />
              </a>
              <a
                className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-[#C13584] border-2 border-white mb-4"
                href="https://www.instagram.com/howlance.pk?igsh=aDEzbHJ0YnRwZTI="
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaInstagram className="cursor-pointer hover:text-white " />
              </a>
              <a
                className="w-14 h-14 flex items-center justify-center rounded-full hover:bg-[#0A66C2] border-2 border-white mb-4"
                href="https://www.linkedin.com/company/howlance/?viewAsMember=true"
                target="_blank"
                rel="noopener noreferrer"
              >
                <CiLinkedin className="cursor-pointer hover:text-white " />
              </a>
            </div>
          </div>
        </div>

        {/* Company Links */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Company</h3>
          <ul className="grid grid-cols-2 md:block gap-2">
            <li>
              <a href="#home" className="hover:underline text-white">
                About us
              </a>
            </li>
            <li>
              <a href="#services" className="hover:underline text-white">
                Success Stories
              </a>
            </li>
            <li>
              <a href="#contact" className="hover:underline text-white">
                Our People
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-white">
                Pricing
              </a>
            </li>
            <li>
              <a href="#about" className="hover:underline text-white">
                Careers
              </a>
            </li>
          </ul>
        </div>

        {/* Industries */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Industries</h3>
          <ul className="grid grid-cols-2 md:block gap-2">
            <li>
              <a href="#" className="hover:underline text-white">
                Fintech
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Crypto
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                SaaS
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                Healthcare
              </a>
            </li>
            <li>
              <a href="#" className="hover:underline text-white">
                eCommerce
              </a>
            </li>
          </ul>
        </div>

        {/* Contact */}
        <div className="space-y-6">
          <h3 className="text-xl font-semibold mb-4 text-white">Contact Us</h3>
          <ul className="space-y-3">
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-gray-500" />
              <p className="text-white">+1 786 885 9809</p>
            </li>
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-gray-500" />
              <p className="text-white">contact@howlance.com</p>
            </li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default Footer;
