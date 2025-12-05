import React from "react";
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa6";

const Footer = () => {
  return (
    <footer className="w-full py-4 bg-black-100/55 text-white flex justify-center gap-6">
      <a
        href="mailto:durailingam69@gmail.com"
        rel="noopener noreferrer"
      >
        <FaEnvelope size={24} />
      </a>
      <a href="https://github.com/Durai69" target="_blank" rel="noopener noreferrer">
        <FaGithub size={24} />
      </a>
      <a
        href="https://www.linkedin.com/in/durailingam/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={24} />
      </a>
    </footer>
  );
};

export default Footer;