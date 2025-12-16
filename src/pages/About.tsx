import React from 'react';
import Particle3DBackground from '../components/Particle3DBackground';

const About: React.FC = () => {
  const skills = [
    { name: 'React', level: 90 },
    { name: 'Node.js', level: 90 },
    { name: 'MongoDB', level: 90 },
    { name: 'SQL', level: 80 },
    { name: 'TypeScript', level: 85 },
    { name: 'JavaScript', level: 95 },
    { name: 'AWS', level: 50 },
    { name: 'Docker', level: 50 },
    { name: 'HTML/CSS', level: 90 },
    { name: 'Tailwind CSS', level: 85 },
    { name: 'Git', level: 80 },
    { name: 'Figma', level: 70 },
  ];

  const experiences = [
    {
      title: 'Lead Developer | Full Stack Developer',
      company: 'Efito Solutions (Pvt) Ltd',
      period: 'Aug 2023 - Sep 2025',
      description: 'Led the development of multiple USA-based projects, providing technical direction, mentoring engineers, and conducting code reviews to ensure high-quality, scalable deliverables. Built and integrated cloud-native and serverless solutions using React, Node.js, TypeScript, and AWS, including S3-based document handling with event-driven processing and automated workflows. Developed AI-powered CRM features and real-time communication capabilities by integrating services such as VAPI, N8N, Twilio, Vonage, and Zoom, along with automated scheduling, notifications, and transcription. Focused on delivering performant, secure, and user-centric applications with modern tooling and responsive UI design.',
    },
    {
      title: 'Associate Software Engineer',
      company: 'Kingslake (Pvt) Ltd',
      period: 'Sep 2022 - Aug 2023',
      description: 'Contributed to the development of a Transport Management System by enhancing frontend and backend functionality using React.js and Node.js. Improved application performance through frontend load optimization, backend endpoint tuning, database connection pooling, and Node.js clustering to leverage multi-core processing. Strengthened system reliability with robust exception handling and ensured API quality through comprehensive documentation and testing using Swagger.',
    },
    {
      title: 'Software Engineering Intern',
      company: 'Panaceata (Pvt) Ltd',
      period: 'Aug 2020 - Feb 2021',
      description: 'Collaborated closely with supervisors and team members to implement frontend features using Angular and backend functionality with Node.js. Worked with Sequelize ORM and both SQL and MongoDB databases to manage and query data efficiently. Contributed to bug fixes, feature testing, and best practices, supporting the successful on-time delivery of multiple projects while gaining strong experience in a professional team based development environment.',
    },
  ];

  const certificates = [
    {
      title: 'AWS Cloud Technical Essentials',
      provider: 'Amazon Web Services · Coursera',
      issued: 'November 9, 2025',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/H6G1N5Y5B6SY',
    },
    {
      title: 'Migrating to the AWS Cloud',
      provider: 'Amazon Web Services · Coursera',
      issued: 'November 21, 2025',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/68C6YJ84O7Z1',
    },
    {
      title: 'Architecting Solutions on AWS',
      provider: 'Amazon Web Services · Coursera',
      issued: 'December 7, 2025',
      credentialUrl: 'https://www.coursera.org/account/accomplishments/verify/2D2KFVJ972LF',
    },
  ];

  return (
    <div className="bg-gray-50 dark:bg-gray-900 transition-colors duration-300 relative">
      <Particle3DBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 dark:text-white mb-6">
            About Me
          </h1>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            I'm a passionate Full Stack Developer with over 3 years of experience creating 
            modern and scalable web applications. I specialize in React.js and Node.js, 
            working extensively with TypeScript to deliver high-quality solutions.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Background Story */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-600 dark:text-gray-300">
              <p>
                My name is Sahan. I completed my Advanced Level examination in the Mathematics stream, 
                achieving two As and one C. After that, I pursued a Diploma in Software Engineering 
                at Esoft Metro Campus, which helped me build a solid foundation in programming and 
                system design.
              </p>
              <p>
                I was then selected for the Bachelor's Degree program in Software Engineering at the 
                University of Kelaniya. During my studies, I completed an internship at Panaceata (Pvt) Ltd, 
                where I gained hands-on experience in web application development using Angular, React, 
                and Node.js.
              </p>
              <p>
                After graduating, I joined Kingslake (Pvt) Ltd as an Associate Software Engineer, 
                contributing to several web applications built with React and Node.js using TypeScript. 
                Later, I joined Efito Solutions (Pvt) Ltd as a Software Engineer and worked on multiple 
                U.S.-based projects, including a software system called Lavni USA.
              </p>
              <p>
                I eventually took on the role of Lead Engineer, where I led the development of a CRM 
                application for BuilderBid, a U.S. company. In this role, I guided my team to deliver 
                high-quality, efficient solutions that successfully met customer requirements.
              </p>
            </div>
          </div>

          {/* Skills */}
          <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
            <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-6">
              Technical Skills
            </h2>
            <div className="space-y-4">
              {skills.map((skill, index) => (
                <div key={index}>
                  <div className="flex justify-between items-center mb-2">
                    <span className="text-gray-700 dark:text-gray-300 font-medium">
                      {skill.name}
                    </span>
                    <span className="text-gray-500 dark:text-gray-400 text-sm">
                      {skill.level}%
                    </span>
                  </div>
                  <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2">
                    <div 
                      className="bg-primary-600 h-2 rounded-full transition-all duration-1000 ease-out"
                      style={{ width: `${skill.level}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Experience Timeline */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mb-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Professional Experience
          </h2>
          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="relative pl-8 border-l-2 border-primary-200 dark:border-primary-800">
                <div className="absolute -left-2 top-0 w-4 h-4 bg-primary-600 rounded-full"></div>
                <div className="bg-gray-50 dark:bg-gray-700 p-6 rounded-lg">
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {exp.title}
                  </h3>
                  <p className="text-primary-600 dark:text-primary-400 font-medium mb-2">
                    {exp.company}
                  </p>
                  <p className="text-gray-500 dark:text-gray-400 text-sm mb-3">
                    {exp.period}
                  </p>
                  <p className="text-gray-600 dark:text-gray-300">
                    {exp.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Certifications
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {certificates.map((certificate, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border border-primary-200 dark:border-primary-800 rounded-2xl p-6 flex flex-col justify-between bg-gradient-to-br from-white via-primary-50/70 to-white dark:from-gray-900 dark:via-primary-900/40 dark:to-gray-900 shadow-xl shadow-primary-100/70 dark:shadow-primary-900/20 transition-transform duration-300 hover:-translate-y-1 hover:shadow-2xl hover:shadow-primary-200/70"
              >
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-primary-500/10 via-primary-400/5 to-transparent pointer-events-none" />

                <div>
                  <div className="w-14 h-14 rounded-2xl bg-primary-100 dark:bg-primary-900 flex items-center justify-center mb-5 mx-auto md:mx-0 ring-4 ring-primary-200/80 dark:ring-primary-900/50">
                    <svg
                      className="w-7 h-7 text-primary-600 dark:text-primary-300"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={1.5}
                        d="M9 12l2 2 4-4m5 2a9 9 0 11-18 0 9 9 0 0118 0z"
                      />
                    </svg>
                  </div>
                  <p className="text-primary-600 dark:text-primary-400 text-sm font-semibold mb-2">
                    {certificate.provider}
                  </p>
                  <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    {certificate.title}
                  </h3>
                  <p className="text-gray-500 dark:text-gray-400 text-sm">
                    Issued {certificate.issued}
                  </p>
                </div>
                <a
                  href={certificate.credentialUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-8 inline-flex items-center justify-center gap-2 px-6 py-3 border-2 border-primary-600 bg-primary-600 text-white rounded-2xl text-sm font-semibold tracking-wide shadow-lg shadow-primary-300/40 hover:shadow-primary-400/60 hover:-translate-y-0.5 transition-all duration-300"
                >
                  View Credential
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={1.5}
                      d="M5 12h14m0 0l-4-4m4 4l-4 4"
                    />
                  </svg>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Personal Interests */}
        <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8 mt-16">
          <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-8 text-center">
            Beyond Code
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Reading</h3>
              <p className="text-gray-600 dark:text-gray-300">I love reading tech blogs, design books, and staying updated with the latest industry trends.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Travel</h3>
              <p className="text-gray-600 dark:text-gray-300">Exploring new places and cultures helps me gain fresh perspectives and inspiration.</p>
            </div>
            
            <div className="text-center">
              <div className="w-16 h-16 bg-primary-100 dark:bg-primary-900 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">Photography</h3>
              <p className="text-gray-600 dark:text-gray-300">Capturing moments and finding beauty in everyday life through the lens of a camera.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
