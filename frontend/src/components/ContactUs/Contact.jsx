import React, { useRef } from "react";
import { IoIosMail } from "react-icons/io";
import { FaPhone } from "react-icons/fa";
import { FaAddressCard } from "react-icons/fa";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";

import "./Contact.scss";

const variants = {
  initial: {
    y: 500,
    opacity: 0,
  },
  animate: {
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.1,
    },
  },
};
export default function Contact() {
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_sdk7zuo", "template_383txxc", form.current, {
        publicKey: "aYx0iH-41LeSqfBXX",
      })
      .then(
        () => {
          alert("Message successfully sent!");
          form.current.reset();
        },
        (error) => {
          alert("Failed to send the message, please try again!");
        }
      );
  };

  const form = useRef();
  const ref = useRef();
  const useinview = useInView(ref, { margin: "-100px" });
  return (
    <div>
      <motion.div
        ref={ref}
        className="contact"
        variants={variants}
        initial="initial"
        whileInView="animate"
      >
        <motion.div className="textcont" variants={variants}>
          <motion.div className="text" variants={variants}>
            <motion.h1 variants={variants} data-cursorpointer={true}>
              Reach Out !!
            </motion.h1>
            <h3 data-cursorpointermini={true}>
              Welcome to Team UCSTA_IT's contact page! We're 3rd year B.Tech IT
              students from the University of Calcutta. Excited to showcase our
              skills at HackNITR, we're here to engage with you. Have questions
              or feedback? Reach out!
            </h3>
            <h3 data-cursorpointermini={true}>
            Team Members: Arijit Char, Rivu Basu, Aritra Ganguly, Toufique Islam
            </h3>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h4>
              <IoIosMail />
            </h4>
            <span>arijitchar100@gmail.com</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h4>
              <FaPhone />
            </h4>
            <span>+91 9832745005</span>
          </motion.div>
          <motion.div variants={variants} className="item">
            <h4>
              <FaAddressCard />
            </h4>
            <span>165/1,S Sinthee Rd,Sinthee,Kolkata,West Bengal 700050</span>
          </motion.div>
        </motion.div>
        <div className="formCont">
          <motion.div
            className="mailSVG"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 0 }}
            transition={{ delay: 3, duration: 1 }}
          >
            <svg width="100%" height="100%" viewBox="0 0 24 24">
              <motion.path
                d="M10 19H6.2C5.0799 19 4.51984 19 4.09202 18.782C3.71569 18.5903 3.40973 18.2843 3.21799 17.908C3 17.4802 3 16.9201 3 15.8V8.2C3 7.0799 3 6.51984 3.21799 6.09202C3.40973 5.71569 3.71569 5.40973 4.09202 5.21799C4.51984 5 5.0799 5 6.2 5H17.8C18.9201 5 19.4802 5 19.908 5.21799C20.2843 5.40973 20.5903 5.71569 20.782 6.09202C21 6.51984 21 7.0799 21 8.2V10M20.6067 8.26229L15.5499 11.6335C14.2669 12.4888 13.6254 12.9165 12.932 13.0827C12.3192 13.2295 11.6804 13.2295 11.0677 13.0827C10.3743 12.9165 9.73279 12.4888 8.44975 11.6335L3.14746 8.09863M14 21L16.025 20.595C16.2015 20.5597 16.2898 20.542 16.3721 20.5097C16.4452 20.4811 16.5147 20.4439 16.579 20.399C16.6516 20.3484 16.7152 20.2848 16.8426 20.1574L21 16C21.5523 15.4477 21.5523 14.5523 21 14C20.4477 13.4477 19.5523 13.4477 19 14L14.8426 18.1574C14.7152 18.2848 14.6516 18.3484 14.601 18.421C14.5561 18.4853 14.5189 18.5548 14.4903 18.6279C14.458 18.7102 14.4403 18.7985 14.405 18.975L14 21Z"
                stroke="rgb(203, 178, 106)"
                stroke-width="0.3"
                stroke-linecap="round"
                stroke-linejoin="round"
                initial={{ pathLength: 0 }}
                animate={useinview && { pathLength: 1 }}
                transition={{ duration: 8 }}
              />
            </svg>
          </motion.div>
          <motion.form
            ref={form}
            onSubmit={sendEmail}
            action=""
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 4, duration: 1 }}
          >
            <input
              data-cursorpointermini={true}
              type="text"
              required
              placeholder="Name"
              name="name"
            />
            <input
              data-cursorpointermini={true}
              type="email"
              required
              placeholder="Email"
              name="email"
            />
            <textarea
              required
              rows={8}
              placeholder="Mail Me"
              name="message"
              data-cursorpointermini={true}
            ></textarea>
            <button data-cursorpointer={true}>Send Me Mail</button>
          </motion.form>
        </div>
      </motion.div>
    </div>
  );
}
