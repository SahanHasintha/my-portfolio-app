import React from 'react';
import Particle3DBackground from '../components/Particle3DBackground';

const Projects: React.FC = () => {
  const projects = [
    {
      id: 1,
      title: 'Pearl Code',
      description: 'I created the basic front end of the application using React, with Tailwind CSS for styling to ensure a clean and responsive user interface. During development, I also used Cursor AI to assist with coding, which helped speed up the implementation process and improve code accuracy. This experience allowed me to enhance my skills in modern front-end technologies while efficiently combining AI-assisted development with practical design practices.',
      image: '/Pearl_code.png',
      technologies: ['React', 'Tailwind CSS', 'Cursor AI'],
      github: 'https://github.com',
      live: 'https://d2irq3dis4tdms.cloudfront.net/',
      featured: true,
    },
    {
      id: 2,
      title: 'Construction Management System',
      description: 'I developed a basic web front end for a construction company to help them organize their information in a more structured and efficient way. The application was built using React for the front-end framework and Tailwind CSS for modern, responsive styling. I also utilized Cursor AI during the development process, which streamlined coding tasks and enhanced overall productivity. This project strengthened my ability to combine clean design with practical functionality.',
      image: '/Construction.png',
      technologies: ['React', 'Tailwind CSS', 'Cursor AI'],
      github: 'https://github.com',
      live: 'https://d1geyf6hxyp0hv.cloudfront.net/',
      featured: true,
    },
    {
      id: 3,
      title: 'Hotel Management System',
      description: 'I developed a web application to manage hotel-related information such as room rates, banquet hall details, and special offers. Hotels can create their own accounts, add their details, and have them displayed on a public hotel listing page, making it easier for customers to explore and compare options.',
      image: '',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/SahanHasintha/Hotel-website',
      live: '',
      featured: false,
    },
    {
      id: 4,
      title: 'Car Selling Application',
      description: 'I designed a web application that allows users to post their vehicle ads easily. The system includes an organized structure to manage car brands, categories, and models, ensuring a smooth and user-friendly experience for both sellers and buyers.',
      image: '',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/SahanHasintha/Selling_app_api',
      githubFrontend: 'https://github.com/SahanHasintha/Selling_app_front',
      live: '',
      featured: false,
    },
  ];

  const featuredProjects = projects.filter(project => project.featured);
  const otherProjects = projects.filter(project => !project.featured);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <Particle3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            My Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents 
            a unique challenge and an opportunity to learn and grow as a developer.
          </p>
        </div>

        {/* Featured Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
                {/* Project Image */}
                <div className="h-48 bg-gray-200 dark:bg-gray-700 flex items-center justify-center overflow-hidden">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover"
                    onError={(e) => {
                      const target = e.target as HTMLImageElement;
                      target.style.display = 'none';
                      const fallback = target.nextElementSibling as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }}
                  />
                  <div className="w-full h-full bg-gray-200 dark:bg-gray-700 flex items-center justify-center" style={{ display: 'none' }}>
                    <svg className="w-16 h-16 text-gray-400 dark:text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                  </div>
                </div>
                
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    {project.id > 2 && (
                      <a
                        href={project.github}
                        className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-center font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                      >
                        View Code
                      </a>
                    )}
                    <a
                      href={project.live}
                      className={`${project.id <= 2 ? 'w-full' : 'flex-1'} bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-300`}
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Projects */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-3">
                    {project.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-300 text-sm mb-4 leading-relaxed">
                    {project.description}
                  </p>
                  
                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech, index) => (
                      <span 
                        key={index}
                        className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-xs rounded-full"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  {/* Action Buttons */}
                  <div className="flex gap-2">
                    <a
                      href={project.github}
                      className="flex-1 bg-gray-900 dark:bg-white text-white dark:text-gray-900 px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-800 dark:hover:bg-gray-100 transition-colors duration-300"
                    >
                      {project.id === 4 ? 'Backend Code' : 'View Code'}
                    </a>
                    {project.id === 4 && project.githubFrontend && (
                      <a
                        href={project.githubFrontend}
                        className="flex-1 bg-primary-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-primary-700 transition-colors duration-300"
                      >
                        Frontend Code
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center">
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4">
              Interested in working together?
            </h3>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              I'm always open to discussing new opportunities and interesting projects. 
              Let's create something amazing together!
            </p>
            <a 
              href="mailto:sahanhpathirana@gmail.com"
              className="inline-block bg-primary-600 hover:bg-primary-700 text-white font-semibold px-8 py-3 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
            >
              Get In Touch
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
