import React from "react";
import "../Stylesheet/Contact.css";
import { motion } from "framer-motion";
import Navbar from "../Components/Navbar";
import Footer from "./Footer";

const Contact = () => {
  const animationVariants = [
    { initial: { opacity: 0, x: -100 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, y: 50 }, animate: { opacity: 1, y: 0 } },
    { initial: { opacity: 0, x: 100 }, animate: { opacity: 1, x: 0 } },
    { initial: { opacity: 0, y: -50 }, animate: { opacity: 1, y: 0 } },
  ];

  const contactOptions = [
    {
      icon: "💬",
      title: "Chat my support",
      description: "i am here to help",
      link: "https://wa.me/+2347034418309",
      linkText: "Chat on Whatsapp",
    },
    {
      icon: "📧",
      title: "Send me a mail",
      description: "Speak to me via mail",
      link: "mailto:anisimon755@yahoo.com",
      linkText: "anisimon755@yahoo.com",
    },
    {
      icon: "📞",
      title: "Call me",
      description: "Mon-Sat from 8am to 6pm",
      link: "tel:+2347034418309",
      linkText: "+234 7034418309",
    },
    {
      icon: "🔗",
      title: "Social Media",
      description: "Connect with me.",
      links: [
        { icon: "🌐", url: "./https://web.facebook.com/Eminel55555" },
        { icon: "📸", url: "./https://x.com/Aninwa_undies" },
        { icon: "🎵", url: "./https://www.linkedin.com/in/ASC-cm" },
        { icon: "🐦", url: "./mailto:anisimon755@gmail.com" },
      ],
    },
  ];

  return (
    <>
      <Navbar />
      <section className="contact-sect">
        <div className="contact-head">
          <span className="subtitle">Get in touch</span>
          <h1>I would like to hear from you.</h1>
          <p>
            I am here to help! Whether you have questions about my services,
            need support, or want to make enquiries about space/functions, feel
            free to reach out through any of the options below.
          </p>
        </div>
        <div className="contact-options">
          {contactOptions.map((option, index) => (
            <motion.div
              className="contact-card"
              key={index}
              initial={
                animationVariants[index % animationVariants.length].initial
              }
              animate={
                animationVariants[index % animationVariants.length].animate
              }
              transition={{ duration: 0.8, delay: index * 0.3 }}
            >
              <div className="icon">{option.icon}</div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              {option.link ? (
                <a href={option.link} target="_blank" rel="noopener noreferrer">
                  {option.linkText}
                </a>
              ) : (
                <div className="social-icons">
                  {option.links.map((link, i) => (
                    <a
                      key={i}
                      href={link.url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {link.icon}
                    </a>
                  ))}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Contact;
