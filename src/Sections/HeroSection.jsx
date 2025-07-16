import React from "react";
import { motion } from "framer-motion";
import PropTypes from "prop-types";

const HeroSection = ({
  imageSrc,
  headline,
  subtext,
  buttonText,
  onButtonClick,
}) => {
  return (
    <section className="hero-section">
      <div className="hero-overlay" />
      <div className="hero-inner">
        <motion.div
          className="hero-content"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1 }}
        >
          <h1>{headline}</h1>
          {subtext && <p>{subtext}</p>}

          {buttonText && (
            <motion.button
              className="hero-button"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onButtonClick}
            >
              {buttonText}
            </motion.button>
          )}
        </motion.div>
        {imageSrc && (
          <motion.img
            src={imageSrc}
            alt="hero"
            className="hero-img"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          />
        )}
      </div>
    </section>
  );
};

HeroSection.propTypes = {
  imageSrc: PropTypes.string,
  headline: PropTypes.string.isRequired,
  subtext: PropTypes.string,
  buttonText: PropTypes.string,
  onButtonClick: PropTypes.func,
};

HeroSection.defaultProps = {
  imageSrc: "",
  subtext: "",
  buttonText: "",
  onButtonClick: () => {},
};

export default HeroSection;
