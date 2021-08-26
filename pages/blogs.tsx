import { motion } from "framer-motion"
import Image from "next/image"
import Link from "next/link"
import Header from "../components/head"
import { list, item, item2 } from "../components/overview"

interface Props {}

const Blogs = (props: Props) => {
  const allBlogs = [
    {
      name: "Git commits best practices: 2021",
      href: "https://learnwithayush.hashnode.dev/git-commits-as-a-beginner-best-practices-2021-1",
      detail: 'Git best practices u should learn to do every day. Here are the most useful ones -> What Is a Commit in Git? git commit -m "this is a commit message" The "commit" command is used to save your changes to the local repository. Using commits has to be ...'
    },
    {
      name: "Firebase host and deploy: 2021",
      href: "https://learnwithayush.hashnode.dev/hosting-and-deploying-step-by-step-explained-firebase-2021",
      detail: "Here I will be showing you step by step: How to host and deploy any web app using firebase -> What is Firebase? Firebase is a Backend as a Service - Baas platform that helps you build your Full-stack web app, Android, and Ios by providing their backe..."
    },
  ];

  return (
    <>
      <Header />
      <motion.div initial="hidden" 
        variants={list} transition={{duration: 1}}
        animate="visible" 
        className="text-center grid grid-cols-2 justify-center px-4 py-12">
      {allBlogs.map((blogs) => (
        <motion.section key={blogs.name} initial="hidden"
          animate="visible"
          variants={item2}
          transition={{ duration: 1 }} className="w-10/12 mx-auto">
            <a
              target="_blank"
              rel="noreferrer"
              key={blogs.name}
              href={blogs.href}
              className=""
            >
              <h1 className="text-3xl text-left font-semibold">{blogs.name}</h1>
            </a>
            <p className="py-2 font-normal text-left">{blogs.detail}</p>
        </motion.section>
        ))}
      </motion.div>
    </>
  );
};

export default Blogs;
