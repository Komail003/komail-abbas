import React from "react";
import { motion, useCycle } from "framer-motion";

const NUM_FLIES = 12;

const random = (min, max) => Math.random() * (max - min) + min;

const Fly = () => {
  // Randomize size, initial position, movement delta, and delay
  const size = random(4, 10);
  const startX = random(0, 100);
  const startY = random(0, 100);
  const moveX = random(-20, 20);
  const moveY = random(-20, 20);
  const delay = random(0, 3);

  return (
    <motion.div
      className="fly"
      style={{
        width: size,
        height: size,
        top: `${startY}%`,
        left: `${startX}%`,
      }}
      initial={{ opacity: 0 }}
      animate={{
        x: [0, moveX, 0],
        y: [0, moveY, 0],
        opacity: [0, 1, 0.3, 1, 0],
      }}
      transition={{
        duration: random(5, 8),
        ease: "easeInOut",
        repeat: Infinity,
        repeatDelay: delay,
      }}
    />
  );
};

const HeroSection = ({ imageSrc, headline, subtext }) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />

      <div className="hero-inner">
        <div className="hero-content">
          <h1>{headline}</h1>
          <p>{subtext}</p>
          <button className="hero-button">Learn More</button>
        </div>

        {imageSrc && (
          <div className="hero-img-wrapper">
            <motion.img
              src={imageSrc}
              alt="hero"
              className="hero-img"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1 }}
            />
            {Array.from({ length: NUM_FLIES }).map((_, i) => (
              <Fly key={i} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default HeroSection;
