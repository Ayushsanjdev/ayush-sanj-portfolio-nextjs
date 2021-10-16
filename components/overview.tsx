import Image from "next/image";
import cover from "../public/cover.svg";
import { motion } from "framer-motion";

interface Props {
  variants: any;
}

export const list = {
  visible: { opacity: 1 },
  hidden: { opacity: 0 },
};

export const item = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: -100 },
};

export const item2 = {
  visible: { opacity: 1, x: 0 },
  hidden: { opacity: 0, x: 100 },
};

const Overview = (variants: Props) => {
  return (
    <section className="mt-8 sm:flex block text-center sm:justify-between sm:gap-4 mx-auto max-w-7xl  sm:px-6 lg:px-8 h-auto w-full">
      <motion.div
        transition={{ duration: 1 }}
        initial="hidden"
        animate="visible"
        variants={item}
        className="sm:text-center lg:text-left block self-center"
      >
        <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
          <span className="block xl:inline dark:text-white">
            I'm Ayush Sanj
          </span>
          <span className="block text-indigo-700 text-center text-4xl font-extralight dark:text-indigo-500">
            Frontend Dev
          </span>
        </h1>
        <p className="mt-3 text-base text-center sm:max-w-min text-gray-500 sm:mt-5 sm:text-lg  sm:mx-auto md:mt-5 md:text-xl lg:mx-0 dark:text-yellow-100">
          Turning designs into a functional, <br />
          aesthetically pleasing user interface
        </p>
        <motion.ul
          variants={list}
          initial="hidden"
          animate="visible"
          className="flex justify-center p-4"
        >
          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know react"
              src="https://img.icons8.com/color/48/000000/react-native.png"
            />
          </motion.li>

          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know javascript"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            />
          </motion.li>

          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know html5"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            />
          </motion.li>

          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know npm package tool"
              src="https://img.icons8.com/color/48/000000/npm.png"
            />
          </motion.li>

          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know firebase"
              src="https://img.icons8.com/color/48/000000/firebase.png"
            />
          </motion.li>

          <motion.li variants={item} transition={{ duration: 1.5 }}>
            <img
              alt="I know css3"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />
          </motion.li>
        </motion.ul>
      </motion.div>
      <motion.div
        initial="hidden"
        transition={{ duration: 1.1 }}
        animate="visible"
        variants={item2}
        whileHover={{
          scale: 1.1,
          transition: { duration: 1.5 },
        }}
        whileTap={{ scale: 0.9 }}
        className="w-2/5 hidden sm:block"
      >
        <Image alt="logo" src={cover} className="w-full" />
      </motion.div>
    </section>
  );
};

export default Overview;
