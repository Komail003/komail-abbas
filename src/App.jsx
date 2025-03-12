import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import './App.scss';

const projects = [
  {
    subtitle: 'Enaam',
    title: 'Lucky Draw System',
    description: 'A MERN stack application managing lucky draw events with real-time updates using React , Node , PostgreSql. For payement integration used Dukan.',
    link: 'https://enaam.pk'
  },
  {
    subtitle: 'Shaamilkar',
    title: 'Installment Management System',
    description: 'A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.',
    link: 'https://shaamilkar.myshopify.com'
  },
  {
    subtitle: 'Shaamilkar',
    title: 'Installment Management Admin Dashboard',
    description: 'A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.',
    link: 'https://admin.shaamilkar.com'
  },
  {
    subtitle: 'Shaamilkar',
    title: 'Customer Application Form',
    description: 'A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.',
    link: 'https://customer.shaamilkar.com'
  },
  {
    subtitle: 'Denaro Link',
    title: 'Asset Management System',
    description: 'A web application for managing assets and liabilities with real-time updates for Australian Governement.',
    link: "https://denarolink.com.au/"
  },
  {
    subtitle: 'Denaro Link',
    title: 'AGE PENSION CALCULATOR',
    description: 'Our Age Pension Calculator can help you determine whether you meet the eligibility criteria for the Age Pension.',
    link: "https://calculators.denarolink.com.au/Age-Pension/"
  },
  {
    subtitle: 'Denaro Link',
    title: 'COMMONWEALTH SENIORS HEALTH CARE CARD CALCULATOR',
    description: 'Our Commonwealth Seniors Health Care Card Calculator can help you determine whether you meet the eligibility criteria for this card.',
    link: "https://calculators.denarolink.com.au/CSHC/"
  },
  {
    subtitle: 'Denaro Link',
    title: 'COMMONWEALTH SENIORS HEALTH CARE CARD CALCULATOR',
    description: 'Our Commonwealth Seniors Health Care Card Calculator can help you determine whether you meet the eligibility criteria for this card.',
    link: "https://calculators.denarolink.com.au/CSHC/"
  },
  {
    subtitle: 'Denaro Link',
    title: 'LOW INCOME HEALTH CARE CARD CALCULATOR',
    description: 'Our Low-Income Health Care Card Calculator can help you determine whether you meet the eligibility criteria for this card.',
    link: "https://calculators.denarolink.com.au/LIHC/"
  },
  {
    subtitle: 'Tax Lynx',
    title: 'Itr Calculator',
    description: 'Tax Lynx is a tax calculator that helps you calculate your income tax return for the year.',
    link: "https://itrcalculator.vercel.app/"
  },
];

const App = () => {
  return (
    <div className="app">
      <header className="header">
        <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 1 }}>
          Syed Komail Abbas Naqvi
        </motion.h1>
        <p>Web Developer | MERN Stack, Next.js</p>
        <div className="social-icons">
          <a href="https://github.com/komail003" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub />
          </a>
          <a href="https://www.linkedin.com/in/komail-abbas-745a681b9/" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin />
          </a>
          <a href="mailto:komailabbas376@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </header>
      <main className="projects">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            whileHover={{ scale: 1.05 }}
          >
            <h2>{project.subtitle}</h2>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            {project.link &&
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            }
          </motion.div>
        ))}
      </main>
      <footer>
        © {new Date().getFullYear()} Syed Komail Abbas Naqvi. All rights reserved.
      </footer>
    </div>
  );
};

export default App;
