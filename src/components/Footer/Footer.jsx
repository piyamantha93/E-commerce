import React from "react";
import footerLogo from "../../assets/logo.png";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaMobileAlt,
  FaEnvelope,
} from "react-icons/fa";

const FooterLinks = [
  { title: "Home", link: "/#" },
  { title: "About", link: "/#about" },
  { title: "Contact", link: "/#contact" },
  { title: "Blog", link: "/#blog" },
];

const Footer = () => {
  return (
    <footer className="bg-gray-100 text-gray-800">
      <div className="container mx-auto py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Company Logo & Description */}
          <div className="flex flex-col">
            <img src={footerLogo} alt="Logo" className="w-24 mb-4" />
            <p className="text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos,
              rerum.
            </p>
          </div>

          {/* Navigation Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Navigation</h3>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title}>
                  <a
                    href={link.link}
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Extra Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Useful Links</h3>
            <ul className="space-y-2">
              {FooterLinks.map((link) => (
                <li key={link.title + "extra"}>
                  <a
                    href={link.link}
                    className="hover:text-blue-600 transition-colors duration-300"
                  >
                    {link.title}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter & Social Links */}
          <div>
            <h3 className="text-xl font-bold mb-4">Stay Connected</h3>
            <p className="text-gray-700 mb-4">
              Subscribe to our newsletter for latest updates.
            </p>
            <div className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-3 py-2 rounded-l-md border border-gray-400 focus:outline-none"
              />
              <button className="bg-blue-500 text-white px-4 py-2 rounded-r-md hover:bg-blue-600 transition">
                Subscribe
              </button>
            </div>
            <div className="flex items-center gap-4 mt-6">
              <a href="#" className="hover:text-blue-600">
                <FaFacebook className="text-2xl" />
              </a>
              <a href="#" className="hover:text-pink-500">
                <FaInstagram className="text-2xl" />
              </a>
              <a href="#" className="hover:text-blue-700">
                <FaLinkedin className="text-2xl" />
              </a>
              <a href="#" className="hover:text-red-600">
                <FaEnvelope className="text-2xl" />
              </a>
            </div>
            <div className="mt-6">
              <div className="flex items-center gap-3">
                <FaLocationArrow />
                <p className="text-gray-700">Sri Lanka, Nugegoda</p>
              </div>
              <div className="flex items-center gap-3 mt-3">
                <FaMobileAlt />
                <p className="text-gray-700">+94 123456789</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Footer Bar */}
      <div className="bg-gray-300 py-4">
        <div className="container mx-auto text-center text-gray-600 text-sm">
          &copy; {new Date().getFullYear()} Veloria. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
