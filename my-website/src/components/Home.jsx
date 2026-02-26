import React from "react";
import "../index.css";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const Home = () => {
  const ProjectCard = ({ title, desc, tags, link }) => (
    <Link to={link} className="project-card">
      <h3>{title}</h3>
      <p>{desc}</p>
      <div className="tags">
        {tags.map((tag, i) => (
          <span key={i}>{tag}</span>
        ))}
      </div>
    </Link>
  );

  return (
    <main className="home">

      {/* HERO */}
      <section className="hero">
        <motion.p
          className="hero-eyebrow"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          Hello, I’m
        </motion.p>

        <motion.h1
          className="hero-title"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          Heiley <span>Joshi</span>
        </motion.h1>

        <motion.p
          className="hero-subtitle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          I build minimal, clean, and interactive web experiences.
        </motion.p>

        <div className="hero-actions">
          <a href="#projects" className="btn primary">View Work</a>
          <a href="#about" className="btn secondary">About Me</a>
        </div>
      </section>

      <motion.p
        className="scroll-hint"
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.8 }}
      >
        Browse Work <span className="arrow">↓</span>
      </motion.p>

      {/* FEATURE STRIP */}
      <section className="features">
        <Feature title="Product Thinking" text="I build solutions, not just features." />
        <Feature title="System Design" text="Scalable, thoughtful architecture." />
        <Feature title="Creative Flair" text="Because software should feel human." />
      </section>

      {/* PROJECTS */}
      <section id="projects" className="projects">
        <h2 className="section-title">Freshly Crafted Projects</h2>

        <div className="project-grid">
          <ProjectCard
            title="COJ Platform"
            desc="A job-matching system connecting students & clients."
            tags={["React", "Node", "System Design"]}
            link="/work/coj"
          />

          <ProjectCard
            title="Mini Airwallex"
            desc="A simplified fintech transaction system."
            tags={["APIs", "Architecture", "Security"]}
            link="/work/airwallex"
          />

          <ProjectCard
            title="Data Intelligence Suite"
            desc="Predictive analytics platform using regression & clustering."
            tags={["Python", "ML", "Data Science"]}
            link="/work/data"
          />
        </div>

      </section>

      {/* ABOUT */}
      <motion.section
        className="about"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.6 }}
      >
        <div className="about-card">
          <h2>About Me</h2>
          <p>
            I’m <span>Heiley</span>, a software engineer building minimal, interactive web experiences.
            I love <span>clean design</span> with subtle motion to make projects shine.
          </p>
        </div>
      </motion.section>

      {/* CTA */}
      <section className="cta">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.6 }}
        >
          Let’s Work Together
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Got a project in mind? I’d love to hear from you.
        </motion.p>
        <motion.a
          href="mailto:heileyvjoshi@gmail.com"
          className="cta-btn"
          whileHover={{ scale: 1.05, boxShadow: "0 12px 30px rgba(207,116,134,0.3)" }}
          transition={{ type: "spring", stiffness: 200 }}
        >
          Say Hello
        </motion.a>
      </section>

      <footer className="footer">
        <p>© 2026 Heiley Joshi. All rights reserved.</p>
        <p>
          <a href="mailto:heileyvjoshi@gmail.com">Email</a> |
          <a href="https://linkedin.com/in/heileyjoshi">LinkedIn</a> |
          <a href="https://github.com/heileyjoshi">GitHub</a>
        </p>
      </footer>

    </main>
  );
};

const Feature = ({ title, text }) => (
  <div className="feature-card">
    <h3>{title}</h3>
    <p>{text}</p>
  </div>
);

const ProjectCard = ({ title, desc, tags }) => (
  <div className="project-card">
    <h3>{title}</h3>
    <p>{desc}</p>

    <div className="tags">
      {tags.map((tag, i) => (
        <span key={i}>{tag}</span>
      ))}
    </div>
  </div>
);

export default Home;