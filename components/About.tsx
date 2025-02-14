import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="max-w-4xl mx-auto space-y-6 py-12">
      <h2 className="text-3xl font-bold text-center mb-8">About Me</h2>

      <div className="flex flex-col md:flex-row items-center md:items-start space-y-6 md:space-y-0 md:space-x-8">


        <div className="text-center md:text-left">
          <p className="text-lg">
          I have experience in building various web applications using modern frameworks such as Laravel, CodeIgniter, Next.js, React.js, and Vue.js. Additionally, I have a strong understanding of database management using MySQL and PostgreSQL.
          </p>
          <br />
          <p>
            Skills:
          </p>
          <ul className='list-disc pl-5 space-y-2'>
            <li>
                Frontend Development: Proficient in React.js, Next.js, and Vue.js to create responsive and interactive user interfaces.
            </li>
            <li>
                Backend Development: Experienced in using PHP with Laravel and CodeIgniter frameworks to develop efficient backend systems.
            </li>
            <li>
                Database Management: Skilled in managing data using MySQL and PostgreSQL.
            </li>
            <li>
                Version Control: Familiar with Git for collaboration and source code management.
            </li>
            <li>
                PWA Development: Experienced in developing Progressive Web Apps (PWA) using Next.js.
            </li>
          </ul>
          <br />
          <p>
            I am constantly striving to learn and enhance my skills in web development to provide innovative and efficient solutions for every project I undertake
          </p>
        </div>
      </div>
    </section>
  );
};

export default About;
