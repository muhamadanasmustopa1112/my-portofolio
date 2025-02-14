import React from 'react';

const Header: React.FC = () => {
  return (
    <header className="fixed top-0 left-0 w-full bg-white shadow-md z-50">
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-gray-900">My Portfolio</h1>
        <nav className="space-x-6">
          <a href="#about" className="text-gray-700 hover:text-blue-600">About</a>
          <a href="#projects" className="text-gray-700 hover:text-blue-600">Projects</a>
          <a href="#contact" className="text-gray-700 hover:text-blue-600">Contact</a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
