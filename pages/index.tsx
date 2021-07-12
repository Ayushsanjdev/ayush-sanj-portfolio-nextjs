// import { useState } from "react"
import { motion } from "framer-motion"
import Blogs from "../components/blogs"
import Header from "../components/head"
import Introduction from "../components/introduction"
import Projects from "../components/projects"

const Home = () => {

  // const[initial, setInitial] = useState('home')
  // const [home, setHome] = useState(false)
  // const [projects, setProjects] = useState(false)
  // const [blogs, setBlogs] = useState(false)


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
<<<<<<< HEAD
      {/* <Projects/>
      <Blogs/> */}
=======
      <Projects/>
      <Blogs/>
>>>>>>> cffc60a1e0e366afe6c2d0882266992a5dc7c147
    </motion.div>
  );
};

export default Home;
