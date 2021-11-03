import React from "react";
import { motion } from "framer-motion";
import Header from "../components/head";
import Image from "next/image";
import aboutCover from "../public/about.svg";
import { list, item, item2 } from "../components/overview";

interface Props {}

const About = (props: Props) => {
  return (
    <motion.div
      className="h-screen"
      initial="hidden"
      animate="visible"
      variants={list}
      transition={{ duration: 1 }}
    >
      <section
        className="text-center p-6 top-1/3 left-1/3 right-1/3
          h-auto font-semi-bold sm:grid sm:grid-cols-2 sm:justify-center gap-8 max-w-5xl mx-auto mt-6"
      >
        <motion.section
          initial="hidden"
          animate="visible"
          variants={item}
          transition={{ duration: 1 }}
          className="self-center text-left"
        >
          <h1 className="text-4xl font-bold">Why programming?</h1>
          <br />
          <p className="text-base">
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
          className="hidden sm:block"
        >
          <Image src={aboutCover} alt="aboutMe" className="w-full" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default About;
