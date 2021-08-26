import { motion } from "framer-motion"
import Image from "next/image"
import Header from "../components/head"
import snapbookPic from "../public/snapbook.png"
import memoguyPic from "../public/memoguy.png"
import todoappPic from "../public/todoapp.png"
import { list, item, item2 } from '../components/overview'

interface Props {}

const Projects = (props: Props) => {
  const allProjects = [
    {
      name: "Snapbook - Image App",
      href: "https://snapbook.vercel.app",
      image: snapbookPic,
      details:
        "(CRUD) Used stack REACT Js in which I have used vercel to host and firebase as backend also...",
    },
    {
      name: "Memoguy - Note App",
      href: "https://memoguy.vercel.app",
      image: memoguyPic,
      details:
        "(CRUD) Used stack REACT Js in which I have used firebase as backend and hosted on vercel. Added debounce function & React-quill...",
    },
    {
      name: "TodoApp - Task App",
      href: "https://todoapp.vercel.app",
      image: todoappPic,
      details:
        "(CRUD) Todo app made with reactjs and firebase as baas. I also have added more tools like material ui...",
    },
  ];

  return (
    <>
      <Header />
      <motion.div initial="hidden" animate="visible" variants={list}
        transition={{duration: 1.5}}
        className="mx-auto my-0 text-center bg-gradient-to-tl font-semibold text-3xl">
          {allProjects.map((project) => (
            <motion.section className="my-8 grid grid-cols-2 mb-8 gap-12 justify-center" 
              initial="hidden" animate="visible" variants={item}
              transition={{duration: 1}} key={project.name}>
              <motion.a
                target="_blank"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                key={project.name}
                href={project.href}
                className="text-xl px-10"
              >
                {/* on hover show code or live option - feat task*/}

              <Image
                src={project.image}
                alt={project.name}
                className="rounded-md"
              />
              </motion.a>
              <motion.p className="text-2xl w-4/5 self-center"
                initial="hidden" animate="visible" variants={item2} transition={{duration: 1.2}}>
                {project.name} <br/>
                  <span className="text-base text-gray-700">
                    {project.details}
                  </span>
              </motion.p>
            </motion.section>
          ))} 
      </motion.div>
    </>
  );
};

export default Projects;