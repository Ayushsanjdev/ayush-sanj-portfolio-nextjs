import { motion } from "framer-motion";
import Image from "next/image";
import gitImg from "../public/git.jpg";
import firebaseImg from "../public/firebase.jpg";
import { list, item, item2 } from "../components/overview";

interface Props {}

const Blogs = (props: Props) => {
  const allBlogs = [
    {
      name: "Git commits best practices: 2021",
      href: "https://learnwithayush.hashnode.dev/git-commits-as-a-beginner-best-practices-2021-1",
      detail:
        "Git best practices u should learn to do every day. Here are the most usefu...",
    },
    {
      name: "Firebase host and deploy: 2021",
      href: "https://learnwithayush.hashnode.dev/hosting-and-deploying-step-by-step-explained-firebase-2021",
      detail:
        "Here I will be showing you step by step: How to host and deploy any web app usin...",
    },
  ];

  return (
    <>
      <h1 className="nav-border">Blogs</h1>
      <motion.div
        initial="hidden"
        variants={list}
        transition={{ duration: 1 }}
        animate="visible"
        className="text-center block sm:flex sm:justify-center sm:gap-4 px-4 py-4 max-w-5xl mx-auto h-screen self-center"
      >
        {allBlogs.map((blogs) => (
          <motion.section
            key={blogs.name}
            initial="hidden"
            animate="visible"
            variants={item2}
            transition={{ duration: 1 }}
            className="sm:w-2/3 mx-auto"
          >
            <a
              target="_blank"
              rel="noreferrer"
              key={blogs.name}
              href={blogs.href}
              className=""
            >
              <motion.div>
                <h3 className="sm:text-3xl text-2xl py-4 text-left font-semibold">
                  {blogs.name}
                </h3>
                <Image
                  src={
                    blogs.name === "Git commits best practices: 2021"
                      ? gitImg
                      : firebaseImg
                  }
                  alt={blogs.name}
                />
              </motion.div>
            </a>
            <p className="py-2 font-thin text-base text-left">{blogs.detail}</p>
          </motion.section>
        ))}
      </motion.div>
    </>
  );
};

export default Blogs;
