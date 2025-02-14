import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-12">
      <div className="text-center mb-6">
        <h3 className="text-xl font-bold">Thank you for visiting my portfolio!</h3>
        <p className="text-gray-400 mt-2">Feel free to reach out to me anytime!</p>
      </div>

      <div className="flex justify-center space-x-4 mb-6">
        <a
          href="mailto:anasfebrian0@gmail.com"
          className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-md shadow-md hover:bg-blue-600 transition duration-300"
        >
          Contact Me
        </a>
      </div>

      <div className="flex justify-center space-x-6 text-gray-400">
        <a
          href="https://github.com/muhamadanasmustopa1112"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaGithub size={24} />
        </a>
        <a
          href="https://linkedin.com/in/muhamadanasmustopa"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-white transition duration-300"
        >
          <FaLinkedin size={24} />
        </a>
      </div>

      <p className="text-gray-500 text-sm mt-8 text-center">&copy; 2025 Muhamad Anas Mustopa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
