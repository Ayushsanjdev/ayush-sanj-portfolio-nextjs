import { motion } from "framer-motion";
import Header from "../components/head";
import Overview from "../components/overview";
import Head from "next/head";
import Blogs from "./blogs";
import About from "./about";
import Projects from "./projects";

const Home = () => {
  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.4 },
  };

  return (
    <motion.div
      className="max-w-5xl mx-auto dark:bg-gray-800 dark:text-white"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <Head>
        <title>Ayush Sanj Portfolio - Next App</title>
      </Head>
      <Header />
      <Overview variants={variants} />
      <About />
      <Projects />
      <Blogs />
    </motion.div>
  );
};

export default Home;
