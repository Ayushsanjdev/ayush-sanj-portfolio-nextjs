import { motion } from "framer-motion"
import Header from "../components/head"
import Overview from "../components/overview"

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
      <Header />
      <Overview variants={variants} />
    </motion.div>
  );
};

export default Home;
