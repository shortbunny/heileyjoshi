import React from "react";
import { useParams } from "react-router-dom";
import { motion } from "framer-motion";
import "../index.css";

const workData = {
  coj: {
    title: "COJ — Student Job Matching Platform",
    subtitle: "A full-stack platform connecting students with clients using intelligent matching workflows.",
    problem: "Students struggle to find relevant work, while companies struggle to efficiently identify suitable candidates.",
    solution: "Designed and implemented a scalable job matching platform with structured workflows, intelligent filtering, and clean system architecture.",
    tech: ["React", "Node.js", "Express", "PostgreSQL", "REST APIs", "Authentication", "System Design"],
    impact: "Streamlined the hiring process, reduced friction for students, and enabled scalable growth for future expansion.",
  },
  airwallex: {
    title: "Mini Airwallex — Fintech Transaction Engine",
    subtitle: "A simplified payment processing engine focused on performance, scalability, and security.",
    problem: "Modern fintech platforms require fast, reliable, and secure transaction processing systems.",
    solution: "Built a modular transaction pipeline with API-based architecture and scalable processing layers.",
    tech: ["Node.js", "Express", "PostgreSQL", "REST APIs", "System Architecture", "Security Design"],
    impact: "Demonstrated how high-volume financial transactions can be processed efficiently while maintaining reliability and security.",
  },
  data: {
    title: "Data Intelligence Suite",
    subtitle: "A predictive analytics system for uncovering trends using regression and clustering.",
    problem: "Raw data is difficult to interpret without structured analysis and predictive models.",
    solution: "Built data pipelines and predictive models to surface meaningful insights and trends.",
    tech: ["Python", "Machine Learning", "Regression", "Clustering", "Data Visualization"],
    impact: "Enabled data-driven decision-making and clear visual communication of complex insights.",
  },
};

// Motion variants
const containerVariants = {
  show: { transition: { staggerChildren: 0.15 } }
};
const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: { opacity: 1, y: 0, transition: { type: "spring", stiffness: 120 } }
};

const Work = () => {
  const { slug } = useParams();
  const project = workData[slug];

  if (!project) return <div className="work">Project not found.</div>;

  const { title, subtitle, problem, solution, tech, impact } = project;

  return (
    <motion.main
      className="work"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
    >
      {/* HERO */}
      <motion.section
        className="project-hero"
        initial={{ y: 30, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 0.1, duration: 0.6 }}
      >
        <p className="project-eyebrow">Selected Work</p>
        <div className="section-divider"></div>
        {/* Bouncing title letters */}
        <h1>
          {title.split("").map((char, i) => (
            <motion.span
              key={i}
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: i * 0.05 }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <p className="project-subtitle">{subtitle}</p>

        {/* Scroll hint */}
        <motion.p
          className="scroll-hint"
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          Browse Project <span className="arrow">↓</span>
        </motion.p>
      </motion.section>

      {/* PROBLEM */}
      <motion.section
        className="project-section"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>The Problem</h2>
        <p>{problem}</p>
      </motion.section>

      {/* SOLUTION */}
      <motion.section
        className="project-section highlight"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>The Solution</h2>
        <p>{solution}</p>
      </motion.section>

      {/* TECH */}
      <motion.section
        className="project-section"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Tech & Architecture</h2>
        <motion.ul
          className="tech-list"
          variants={containerVariants}
          initial="hidden"
          animate="show"
        >
          {tech.map((t, i) => (
            <motion.li
              key={i}
              variants={itemVariants}
              whileHover={{ scale: 1.05, y: -2, textShadow: "0px 0px 8px rgba(207,116,134,0.5)" }}
            >
              {t}
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* IMPACT */}
      <motion.section
        className="project-section highlight"
        initial={{ y: 40, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <h2>Impact</h2>
        <p>{impact}</p>
      </motion.section>
    </motion.main>
  );
};

export default Work;