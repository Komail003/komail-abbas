import React from "react";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import HeroSection from "../Sections/HeroSection";
import heroBg from "../assets/hero.png";
import ContactForm from "../Sections/ContactForm/ContactForm";
const Home = () => {
  const projects = [
    {
      subtitle: "Enaam",
      title: "Lucky Draw System",
      description:
        "A MERN stack application managing lucky draw events with real-time updates using React , Node , PostgreSql. For payement integration used Dukan.",
      link: "https://enaam.pk",
    },
    {
      subtitle: "Shaamilkar",
      title: "Shopify Store",
      description:
        "A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.",
      link: "https://shaamilkar.myshopify.com",
    },
    {
      subtitle: "Shaamilkar",
      title: "Installment Management Admin Dashboard",
      description:
        "A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.",
      link: "https://admin.shaamilkar.com",
    },
    {
      subtitle: "Shaamilkar",
      title: "Customer Application Form",
      description:
        "A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.",
      link: "https://customer.shaamilkar.com",
    },
    {
      subtitle: "Shaamilkar",
      title: "Enterprise Management Dashboard",
      description:
        "A full-featured installment management system with secure payment integration with OneLink and user-friendly dashboards with React ,Node , PostgreSql.",
      link: "https://enterprise.shaamilkar.com",
    },
    {
      subtitle: "Denaro Link",
      title: "Asset Management System",
      description:
        "A web application for managing assets and liabilities with real-time updates for Australian Government.",
      link: "https://denarolink.com.au/",
    },
    {
      subtitle: "Denaro Link",
      title: "AGE PENSION CALCULATOR",
      description:
        "Our Age Pension Calculator can help you determine whether you meet the eligibility criteria for the Age Pension.",
      link: "https://calculators.denarolink.com.au/Age-Pension/",
    },

    {
      subtitle: "Denaro Link",
      title: "COMMONWEALTH SENIORS HEALTH CARE CARD CALCULATOR",
      description:
        "Our Commonwealth Seniors Health Care Card Calculator can help you determine whether you meet the eligibility criteria for this card.",
      link: "https://calculators.denarolink.com.au/CSHC/",
    },
    {
      subtitle: "Denaro Link",
      title: "LOW INCOME HEALTH CARE CARD CALCULATOR",
      description:
        "Our Low-Income Health Care Card Calculator can help you determine whether you meet the eligibility criteria for this card.",
      link: "https://calculators.denarolink.com.au/LIHC/",
    },
    {
      subtitle: "Denaro Link",
      title: "Advisor Link Calculator Management System",
      description:
        "Its a system that manages the submissions from Age Pension Calculator, Commonwealth Seniors Health Care Card Calculator and Low-Income Health Care Card Calculator.",
      link: "http://ec2-3-104-116-88.ap-southeast-2.compute.amazonaws.com/auth/sign-in",
    },
    {
      subtitle: "Tax Lynx",
      title: "Itr Calculator",
      description:
        "Tax Lynx is a tax calculator that helps you calculate your income tax return for the year.",
      link: "https://itrcalculator.vercel.app/",
    },
  ];
  return (
    <div>
      <HeroSection
        imageSrc={heroBg}
        headline="Hi, I’m Syed Komail Abbas Naqvi"
        subtext="Web Developer | MERN Stack | Next.js"
        buttonText="View My Work"
        onButtonClick={() =>
          window.scrollTo({
            top: document.querySelector(".projects").offsetTop,
            behavior: "smooth",
          })
        }
      />
      <header className="header">
        <div className="social-icons">
          <a
            href="https://github.com/komail003"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
          <a
            href="https://www.linkedin.com/in/komail-abbas-745a681b9/"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a href="mailto:komailabbas376@gmail.com" aria-label="Email">
            <FaEnvelope />
          </a>
        </div>
      </header>
      <motion.h1
        className="portfolio-title"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 1 }}
      >
        My Portfolio
      </motion.h1>
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
            {project.link && (
              <a href={project.link} target="_blank" rel="noopener noreferrer">
                View Project
              </a>
            )}
          </motion.div>
        ))}
      </main>
      <ContactForm />
    </div>
  );
};

export default Home;
