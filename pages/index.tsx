import { motion } from "framer-motion"
import Blogs from "../components/blogs"
import Header from "../components/head"
import Introduction from "../components/introduction"
import Projects from "../components/projects"

const Home = () => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.4 },
  };

  return (
    <motion.div
      className="mx-auto my-0"
      initial="hidden"
      animate="visible"
      variants={variants}
      transition={{ duration: 1.5 }}
    >
      <Header/>
      <Introduction 
        variants={variants} />
      {/* <Projects/>
      <Blogs/> */}
    </motion.div>
  );
};

export default Home;
