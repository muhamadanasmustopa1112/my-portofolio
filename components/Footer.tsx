import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer id="contact" className="bg-gray-900 text-white py-8 text-center">
      <p className="mb-4">Thank you for visiting my portfolio!</p>
      <a
        href="mailto:yourname@example.com"
        className="text-blue-400 hover:text-blue-600"
      >
        Contact Me
      </a>
    </footer>
  );
};

export default Footer;
