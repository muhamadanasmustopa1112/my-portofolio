import React from 'react';
import Image from 'next/image';

const Projects: React.FC = () => {
  const projects = [
    {
      title: 'Sistem Kuota Point Mahasiswa',
      description: 'Create a feature for the daily student point quota system',
      image: '/img/kuota.jpg',
    },
    {
      title: 'Sistem Presensi QR Code & Face Recognation ',
      description: 'The Presence System uses QR Code and face recognition and also provides employee submissions',
      image: '/img/absen.jpg',
    },
    {
      title: '3D Room Tour ',
      description: 'Real estate room tour using three js',
      image: '/img/room-tour.jpg',
    },
    {
      title: 'Penilaian Pegawai',
      description: 'Employee appraisal system for 1 year',
      image: '/img/tup.jpg',
    },
  ];

  return (
    <section id="projects" className="max-w-6xl mx-auto py-12">
      <h2 className="text-3xl font-bold text-center mb-8">My Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {projects.map((project, index) => (
          <div key={index} className="p-6 border rounded-lg shadow-lg bg-white">
            <div className="mb-4">
              <Image
                src={project.image}
                alt={project.title}
                width={400}
                height={250}
                className="rounded-lg object-cover w-full"
              />
            </div>
            <h3 className="text-2xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-700">{project.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
