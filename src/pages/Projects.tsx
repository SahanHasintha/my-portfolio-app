import React from 'react';
import Particle3DBackground from '../components/Particle3DBackground';

const Projects: React.FC = () => {
  const efitoProjects = [
    {
      id: 1,
      title: 'Lavni',
      company: 'Efito Solutions (Pvt) Ltd',
      position: 'Team Lead & Software Engineer',
      description: 'This USA based medical platform connects therapists and clients, enabling secure appointment scheduling and live therapy sessions. Built with React on the frontend and Node.js with TypeScript on the backend, I initially contributed as a full-stack developer, where one of my key responsibilities was designing and implementing the video calling system. Due to stability and quality issues with the existing Zoom SDK integration, I researched and introduced an alternative solution using the Vonage Express SDK, successfully delivering a more reliable video calling experience. Over time, I transitioned into a team lead role, guiding the development team, driving architectural improvements, and overseeing feature enhancements. The application was hosted on AWS EC2, utilized S3 for media uploads, and leveraged AWS Lambda with S3 triggers to automatically generate session transcriptions using Deepgram, ensuring a scalable and efficient system.Used MongoDB as the primary database with Mongoose as the ODM to model and manage data related.',
      image: '',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Mongoose', 'Vonage SDK', 'AWS EC2', 'S3', 'Lambda', 'Deepgram'],
      github: '',
      live: '',
      featured: true,
    },
    {
      id: 2,
      title: 'Insurance Tracking for BuilderBid',
      company: 'Efito Solutions (Pvt) Ltd',
      position: 'Team Lead & Software Engineer',
      description: 'I led a USA based construction industry project focused on automating subcontractor insurance verification. The application allowed construction companies (around 250) to add subcontractors and upload their insurance documents, which were stored in an S3 bucket using presigned URLs. The system scanned uploaded insurance PDFs to extract expiry dates and insurance amounts, and automatically sent reminder emails to subcontractors when policies were nearing expiration. Initially, we experimented with multiple AI models (including Mistral OCR and GPT models) for data extraction, but due to occasional inaccuracies, we ultimately used n8n\'s built-in PDF data extraction tools, which provided more reliable results and streamlined email automation through n8n workflows.Used MongoDB as the primary database with Mongoose as the ODM to model and manage data related..',
      image: '',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Mongoose', 'AWS S3', 'AWS Lambda', 'Deepgram', 'n8n', 'PDF Processing', 'AI/OCR', 'Email Automation'],
      github: '',
      live: '',
      featured: true,
    },
    {
      id: 3,
      title: 'CRM for BuilderBid',
      company: 'Efito Solutions (Pvt) Ltd',
      position: 'Team Lead & Software Engineer',
      description: 'Developed a web based platform using React and Node.js with TypeScript that enables USA based construction companies to create and manage their own AI-powered virtual assistants for web chat, web calls, and phone calls. The system integrates VAPI AI to power conversational assistants and allows companies to upload custom knowledge bases to personalize responses. Implemented Twilio integration to display and manage available phone numbers, enabling companies to purchase and assign phone numbers to specific AI assistants. Built features for configuring custom greeting and farewell messages, selecting assistant voices using ElevenLabs, and managing assistant settings. Additionally, developed session tracking views to monitor and review interactions that occurred with each AI assistant, providing visibility into usage and engagement.Used MongoDB as the primary database with Mongoose as the ODM to model and manage data related to companies, assistants, phone numbers, and session history.',
      image: '',
      technologies: ['React', 'Node.js', 'TypeScript', 'MongoDB', 'Mongoose', 'VAPI AI', 'Twilio', 'ElevenLabs', 'AI Assistants'],
      github: '',
      live: '',
      featured: true,
    },
  ];

  const kingslakeProjects = [
    {
      id: 4,
      title: 'Transport Management System',
      company: 'Kingslake (Pvt) Ltd',
      position: 'Associate Software Engineer',
      description: 'I worked on a Transport Management System built with React on the frontend and Node.js with TypeScript on the backend, where my primary focus was backend development. I used Swagger for API documentation and seamless communication between frontend and backend teams, ensuring clarity and consistency across the platform. I optimized backend endpoints for faster response times and better scalability, implemented robust exception handling to improve system reliability, and created a database connection pool to reduce latency and improve query performance. Additionally, I configured Node.js clustering to leverage multiple CPU cores, enhancing overall system efficiency and scalability, while also contributing to frontend load optimization to improve user experience.',
      image: '',
      technologies: ['React', 'Node.js', 'TypeScript', 'Swagger', 'Database Pooling', 'Node.js Clustering', 'Performance Optimization'],
      github: '',
      live: '',
      featured: true,
    },
  ];

  const panaceataProjects = [
    {
      id: 5,
      title: 'KLP Day Care Management System (USA)',
      company: 'Panaceata (Pvt) Ltd',
      position: 'Software Engineering Intern',
      description: 'Contributed as a member of the development team to the KLP Day Care Management System, a U.S.-based application designed to streamline and automate day care center operations. The system supports key functionalities such as child enrollment, attendance tracking, and billing management, enabling efficient day-to-day administration. Developed an intuitive and responsive user interface using Angular to ensure a smooth user experience, while leveraging Node.js on the backend to handle business logic, data processing, and system workflows. This project strengthened my full-stack development skills and my ability to build scalable solutions tailored to the operational needs of the childcare industry.',
      image: '',
      technologies: ['Angular', 'Node.js', 'Full-Stack Development', 'Child Care Management', 'Billing System'],
      github: '',
      live: '',
      featured: true,
    },
    {
      id: 6,
      title: 'Tenaga Parking System',
      company: 'Panaceata (Pvt) Ltd',
      position: 'Software Engineering Intern',
      description: 'I contributed to the Tenega Parking System, a local Sri Lankan project designed to improve parking management in the Colombo area. The system enhanced user convenience by providing real-time parking availability, booking, and payment processing. I worked as a full-stack developer, using Angular to build a responsive and user-friendly front end, and Node.js on the back end to handle server-side logic, data management, and system integrations. This project strengthened my experience in developing scalable and efficient solutions tailored to urban infrastructure needs.',
      image: '',
      technologies: ['Angular', 'Node.js', 'Real-time Systems', 'Payment Processing', 'Urban Infrastructure'],
      github: '',
      live: '',
      featured: true,
    },
  ];

  const ongoingClientProjects = [
    {
      id: 7,
      title: 'BA Architects',
      company: 'Ongoing Client Projects – Australia',
      position: 'Frontend Developer',
      description: 'I am currently working on client projects based in Australia, including a frontend-only website for BA Architects, an architectural firm in Queensland. The application is being developed using React with TypeScript, focusing on a clean, modern, and responsive user interface that aligns with the company\'s brand identity. The project is in an active phase, with requirements and design details still being discussed and refined in close collaboration with the client. To share a live demo during the ongoing requirement discussions, the site is currently hosted using Amazon S3 static website hosting and delivered via CloudFront for fast and reliable access. The project remains in an active development phase with continuous client collaboration.',
      image: '',
      technologies: ['React', 'TypeScript', 'AWS S3', 'CloudFront', 'Responsive Design'],
      github: '',
      live: 'https://d1geyf6hxyp0hv.cloudfront.net/',
      featured: true,
    },
    {
      id: 8,
      title: 'Wynnum Mini Supermarket',
      company: 'Ongoing Client Projects – Australia',
      position: 'Full Stack Developer',
      description: 'I am currently working on a client project for a mini supermarket, where I am developing both the frontend and backend of the application. The frontend is built using React with TypeScript, while the backend is developed with NestJS and TypeScript, using PostgreSQL as the database. At this stage, a few frontend pages are hosted on an AWS EC2 instance to demonstrate progress. I have set up GitHub Actions for CI/CD to automate builds and deployments, and I use Docker for local development to run PostgreSQL without requiring a local installation, ensuring a consistent and efficient development environment.',
      image: '',
      technologies: ['React', 'TypeScript', 'NestJS', 'PostgreSQL', 'AWS EC2', 'GitHub Actions', 'Docker', 'CI/CD'],
      github: '',
      live: 'http://15.134.39.65/',
      featured: true,
    },
  ];

  const personalProjects = [
    {
      id: 9,
      title: 'Pearl Code',
      description: 'I created the basic front end of the application using React, with Tailwind CSS for styling to ensure a clean and responsive user interface. During development, I also used Cursor AI to assist with coding, which helped speed up the implementation process and improve code accuracy. This experience allowed me to enhance my skills in modern front-end technologies while efficiently combining AI-assisted development with practical design practices.',
      image: '/Pearl_code.png',
      technologies: ['React', 'Tailwind CSS', 'Cursor AI'],
      github: 'https://github.com',
      live: 'https://d2irq3dis4tdms.cloudfront.net/',
      featured: true,
    },
    {
      id: 10,
      title: 'Hotel Management System',
      description: 'I developed a web application to manage hotel-related information such as room rates, banquet hall details, and special offers. Hotels can create their own accounts, add their details, and have them displayed on a public hotel listing page, making it easier for customers to explore and compare options.',
      image: '',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
      github: 'https://github.com/SahanHasintha/Hotel-website',
      live: '',
      featured: false,
    },
    {
      id: 11,
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

  const featuredPersonalProjects = personalProjects.filter(project => project.featured);
  const otherPersonalProjects = personalProjects.filter(project => !project.featured);

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <Particle3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Projects
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Here are some of the projects I've worked on. Each one represents 
            a unique challenge and an opportunity to learn and grow as a developer.
          </p>
        </div>

        {/* Efito Solutions Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Efito Solutions (Pvt) Ltd - Team Lead & Software Engineer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {efitoProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {project.position} at {project.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Kingslake Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Kingslake (Pvt) Ltd - Associate Software Engineer
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {kingslakeProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {project.position} at {project.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Panaceata Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Panaceata (Pvt) Ltd - Software Engineering Intern
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {panaceataProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-medium">
                    {project.position} at {project.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-primary-100 dark:bg-primary-900 text-primary-700 dark:text-primary-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Ongoing Client Projects */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Ongoing Client Projects – Australia
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {ongoingClientProjects.map((project) => (
              <div key={project.id} className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-6 hover:shadow-xl transition-shadow duration-300 border-l-4 border-green-500">
                <div className="mb-3">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-1">
                    {project.title}
                  </h3>
                  <p className="text-green-600 dark:text-green-400 text-sm font-medium">
                    {project.position} • {project.company}
                  </p>
                </div>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {project.description}
                </p>
                
                {/* Technologies */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, index) => (
                    <span 
                      key={index}
                      className="px-3 py-1 bg-green-100 dark:bg-green-900 text-green-700 dark:text-green-300 text-sm rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Action Button */}
                {project.live && (
                  <div className="flex gap-3">
                    <a
                      href={project.live}
                      className="w-full bg-green-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-green-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Personal Projects - Featured */}
        <div className="mb-16">
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Featured Personal Projects
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {featuredPersonalProjects.map((project) => (
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
                    <a
                      href={project.live}
                      className="w-full bg-primary-600 text-white px-4 py-2 rounded-lg text-center font-medium hover:bg-primary-700 transition-colors duration-300"
                    >
                      Live Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Other Personal Projects */}
        <div>
          <h2 className="text-3xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Other Personal Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
            {otherPersonalProjects.map((project) => (
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
                      {project.id === 11 ? 'Backend Code' : 'View Code'}
                    </a>
                    {project.id === 11 && project.githubFrontend && (
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
