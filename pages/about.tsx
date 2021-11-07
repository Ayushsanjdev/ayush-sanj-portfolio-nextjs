import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import aboutCover from "../public/about.svg";
import { list, item, item2 } from "../components/overview";

interface Props {}

const About = (props: Props) => {
  return (
    <motion.div
      className=""
      initial="hidden"
      animate="visible"
      variants={list}
      transition={{ duration: 1 }}
    >
      <h1 className="nav-border">About Me</h1>
      <section
        className="text-center top-1/3 left-1/3 right-1/3
         font-semi-bold sm:grid sm:grid-cols-2 sm:justify-center gap-8 max-w-5xl mx-auto mt-6 h-full p-16"
      >
        <motion.section
          initial="hidden"
          animate="visible"
          variants={item}
          transition={{ duration: 1 }}
          className="self-center text-left"
        >
          <h3 className="text-2xl font-extrabold">Why programming?</h3>
          <br />
          <p className="font-thin">
            Having fascinated by computers and technology pushed me to choose
            programming. A development-oriented career in the world of
            information technology, where I can research, develop and implement
            my skills, thoughts, dreams, and ideas.
          </p>
        </motion.section>
        <motion.div
          initial="hidden"
          animate="visible"
          variants={item2}
          transition={{ duration: 1.4 }}
          className="flex"
        >
          <Image src={aboutCover} alt="aboutMe" className="w-full" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
