import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import Header from '../components/head'
import snapbookPic from '../public/snapbook.png'
import memoguyPic from '../public/memoguy.png'
import todoappPic from '../public/todoapp.png'

interface Props {
}

const Projects = (props: Props) => {

  const allProjects = [
    {name: "Snapbook", href: "snapbook.vercel.app", image: snapbookPic},
    {name: "Memoguy", href: "memoguy.vercel.app", image: memoguyPic},
    {name: "TodoApp", href: "todoapp.vercel.app", image: todoappPic}
  ];

  return (
    <>
      <Header/>
        <motion.div className="mx-auto my-0 text-center font-semibold text-3xl">
          <h1>Projects</h1>
          <motion.section className="grid grid-cols-3 my-8 justify-center" >
            {/* add animation */}
            {allProjects.map((project) => (
              <a key={project.name} href={project.href} className="text-xs px-10">
                <Image src={project.image} alt={project.name} className="rounded-md" />
                {project.name}
              </a>
            ))}
          </motion.section>
        </motion.div>
    </>
  )
}

export default Projects
