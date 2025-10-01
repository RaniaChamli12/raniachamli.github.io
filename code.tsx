import React, { useState } from 'react';
import { motion } from 'framer-motion';

const PortfolioWebsite = () => {
  const [selectedCertificate, setSelectedCertificate] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const certificates = [
    {
      id: 1,
      title: "AI for Beginners",
      platform: "HP LIFE",
      issueDate: "Oct 1, 2025",
      serialNo: "8ec60c39-eb59-471e-b216-6ee3677795c3",
      description: "Covering the basics of AI concepts, data importance, business applications, and ethical implications."
    },
    {
      id: 2,
      title: "Introduction to Data Science",
      platform: "Cisco Networking Academy",
      issueDate: "Mar 15, 2025",
      description: "Fundamentals of data science principles and techniques."
    },
    {
      id: 3,
      title: "Networking Basics",
      platform: "Cisco Networking Academy",
      issueDate: "Mar 27, 2025",
      description: "Essential networking concepts and infrastructure."
    },
    {
      id: 4,
      title: "Python Essentials 1",
      platform: "OpenEDG Python Institute",
      issueDate: "Mar 5, 2025",
      description: "Core Python programming fundamentals."
    },
    {
      id: 5,
      title: "Python Essentials 2",
      platform: "OpenEDG Python Institute",
      issueDate: "Mar 7, 2025",
      description: "Advanced Python programming concepts."
    },
    {
      id: 6,
      title: "Better Management with Artificial Intelligence",
      platform: "LinkedIn Learning",
      issueDate: "Feb 26, 2025",
      duration: "45 minutes",
      certificateId: "620f660a1c987c872e0f5ff603ac942fa9f3c01609ec4bc52d0ea1b3147157e8",
      description: "Mieux manager grâce à l'intelligence artificielle"
    },
    {
      id: 7,
      title: "Manager's Guide to Career Conversations in the Age of AI",
      platform: "LinkedIn Learning",
      issueDate: "Mar 3, 2025",
      duration: "58 minutes",
      certificateId: "6f0415b5dbb893bd024155e7263d28182d80b6279fd7b171f784d5a92fad95b2",
      description: "Le guide du manager pour les conversations de carrière à l'ère de l'IA"
    }
  ];

  const skills = [
    { name: "Python", level: 90 },
    { name: "Data Science", level: 85 },
    { name: "SQL", level: 80 },
    { name: "Machine Learning", level: 75 },
    { name: "Data Visualization", level: 85 },
    { name: "Algorithms", level: 80 },
    { name: "Git", level: 75 },
    { name: "Communication", level: 90 },
    { name: "Management", level: 85 }
  ];

  const openCertificateModal = (certificate: any) => {
    setSelectedCertificate(certificate);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedCertificate(null);
  };

  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Animated background elements */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-pink-500/10 rounded-full blur-3xl"></div>
        <div className="absolute top-3/4 right-1/4 w-96 h-96 bg-pink-500/5 rounded-full blur-3xl"></div>
        
        {/* Network lines */}
        <svg className="absolute inset-0 w-full h-full opacity-20" viewBox="0 0 100 100">
          <path
            d="M10,10 C30,30 70,30 90,10"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,90 C30,70 70,70 90,90"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
          />
          <path
            d="M10,50 C50,10 50,90 90,50"
            stroke="url(#gradient)"
            strokeWidth="0.5"
            fill="none"
          />
          <defs>
            <linearGradient id="gradient" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ff0080" />
              <stop offset="100%" stopColor="#ff8a00" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-center z-10"
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-pink-400 to-pink-600 bg-clip-text text-transparent">
            Rania Chamli
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Data Scientist & AI Specialist passionate about transforming data into intelligent solutions
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-pink-600 text-white rounded-lg font-semibold hover:bg-pink-700 transition-colors"
              onClick={() => document.getElementById('certificates')?.scrollIntoView({ behavior: 'smooth' })}
            >
              View Certificates
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-pink-600 text-pink-400 rounded-lg font-semibold hover:bg-pink-600/10 transition-colors"
            >
              Download CV
            </motion.button>
          </div>
        </motion.div>
      </section>

      {/* Certificates Section */}
      <section id="certificates" className="py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-400"
          >
            Certificates & Achievements
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {certificates.map((cert, index) => (
              <motion.div
                key={cert.id}
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800 hover:border-pink-500/30 transition-all cursor-pointer"
                onClick={() => openCertificateModal(cert)}
              >
                <h3 className="text-xl font-semibold text-pink-400 mb-2">{cert.title}</h3>
                <p className="text-gray-400 mb-2">{cert.platform}</p>
                <p className="text-sm text-gray-500 mb-3">Issued: {cert.issueDate}</p>
                {cert.duration && (
                  <p className="text-sm text-gray-500 mb-3">Duration: {cert.duration}</p>
                )}
                <p className="text-gray-300 text-sm line-clamp-2">{cert.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-20 px-4 bg-gray-900/30">
        <div className="max-w-6xl mx-auto">
          <motion.h2
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
            className="text-3xl md:text-4xl font-bold text-center mb-12 text-pink-400"
          >
            Skills & Expertise
          </motion.h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-gray-900/50 backdrop-blur-sm rounded-xl p-6 border border-gray-800"
              >
                <div className="flex justify-between items-center mb-2">
                  <h3 className="text-lg font-semibold text-white">{skill.name}</h3>
                  <span className="text-pink-400">{skill.level}%</span>
                </div>
                <div className="w-full bg-gray-800 rounded-full h-2">
                  <div
                    className="bg-gradient-to-r from-pink-500 to-pink-600 h-2 rounded-full transition-all duration-1000"
                    style={{ width: `${skill.level}%` }}
                  ></div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Certificate Modal */}
      {isModalOpen && selectedCertificate && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={closeModal}
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gray-900 rounded-xl p-6 max-w-2xl w-full border border-pink-500/30"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-2xl font-bold text-pink-400 mb-4">{selectedCertificate.title}</h3>
            <div className="space-y-3 mb-6">
              <p><span className="text-gray-400">Platform:</span> {selectedCertificate.platform}</p>
              <p><span className="text-gray-400">Issue Date:</span> {selectedCertificate.issueDate}</p>
              {selectedCertificate.duration && (
                <p><span className="text-gray-400">Duration:</span> {selectedCertificate.duration}</p>
              )}
              {selectedCertificate.serialNo && (
                <p><span className="text-gray-400">Serial No:</span> {selectedCertificate.serialNo}</p>
              )}
              {selectedCertificate.certificateId && (
                <p><span className="text-gray-400">Certificate ID:</span> {selectedCertificate.certificateId}</p>
              )}
              <p className="text-gray-300 mt-4">{selectedCertificate.description}</p>
            </div>
            <div className="flex gap-4">
              <button className="px-4 py-2 bg-pink-600 text-white rounded hover:bg-pink-700 transition-colors">
                View Certificate
              </button>
              <button className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:border-pink-500 transition-colors">
                Download PDF
              </button>
              <button
                className="px-4 py-2 border border-gray-600 text-gray-300 rounded hover:border-pink-500 transition-colors ml-auto"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </motion.div>
        </motion.div>
      )}

      {/* Footer */}
      <footer className="py-8 px-4 text-center text-gray-500">
        <p>© 2025 Rania Chamli. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;
