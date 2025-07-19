import React, { useState } from "react";
import { motion } from "framer-motion";

const Pendulum = () => {
  // Swing angle: ±20°
  const swing = {
    rotate: [20, -20, 20],
    transition: {
      duration: 2,
      ease: "easeInOut",
      repeat: Infinity,
      repeatType: "reverse",
    },
  };

  return (
    <motion.div className="pendulum-container" animate={swing}>
      <div className="pendulum-rope" />
      <div className="pendulum-weight" />
    </motion.div>
  );
};

const ContactForm = () => {
  const [values, setValues] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) =>
    setValues({ ...values, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Submitted:", values);
    setValues({ name: "", email: "", message: "" });
  };

  return (
    <div className="contact-wrapper">
      <Pendulum />

      <motion.form
        className="contact-form"
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
      >
        <h2>Get In Touch</h2>

        <label htmlFor="name">
          Name
          <input
            type="text"
            id="name"
            name="name"
            value={values.name}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          Email
          <input
            type="email"
            id="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="message">
          Message
          <textarea
            id="message"
            name="message"
            rows="5"
            value={values.message}
            onChange={handleChange}
            required
          />
        </label>
        {/* <Pendulum className="position-absolute" /> */}
        <motion.button
          type="submit"
          className="submit-btn"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Send Message
        </motion.button>
      </motion.form>
    </div>
  );
};

export default ContactForm;
