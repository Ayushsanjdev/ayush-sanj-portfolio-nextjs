import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import Header from "../components/head";
import Image from "next/image";
import aboutCover from "../public/about.svg";

interface Props {}

const About = (props: Props) => {
  return (
    <motion.div className="relative">
      <Header />
      <Image
        src={aboutCover}
        className="text-center w-11/12 absolute opacity-70"
      />
      <p className="top-1/3 left-1/3 right-1/3 bottom-1/3 absolute">
        Having fascinated by computers and technology 
        pushed me to choose programming. A development-oriented career 
        in the world of information technology, where I can research, 
        develop and implement my skills, thoughts, dreams, and ideas.
      </p>
    </motion.div>
  );
};

export default About;
