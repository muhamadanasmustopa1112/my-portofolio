import React from 'react';
import Image from 'next/image';

const Hero: React.FC = () => {
  return (
    <section className="h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white">
      <div className="text-center max-w-5xl">
        <div className="flex justify-center mb-6">
          <Image
            src="/img/anas.jpg" 
            alt="Profile Picture"
            width={150}
            height={150}
            className="rounded-lg border-4 border-white shadow-lg"
          />
        </div>
        <h1 className="text-5xl font-bold mb-4">Hi, I’m Muhamad Anas Mustopa</h1>
        <p className="text-lg mb-6">
            I am a Fullstack Developer with over 2 years of experience, specializing in Frontend and Backend development, particularly with PHP and JavaScript technologies.

        </p>
        <a
          href="#projects"
          className="px-6 py-3 bg-white text-blue-600 font-bold rounded-md shadow-lg hover:bg-gray-200"
        >
          View My Work
        </a>
      </div>
    </section>
  );
};

export default Hero;
