import { motion } from 'framer-motion'
import Link from 'next/link'

interface Props {
  
}

const Projects = (props: Props) => {

  const allProjects = [
    {name: "Snapbook", href: "snapbook.vercel.app"},
    {name: "Memoguy", href: "memoguy.vercel.app"},
    {name: "TodoApp", href: "todoapp.vercel.app"}
  ];

  return (
    <motion.div className="mx-auto my-0 text-center font-semibold text-3xl">
      <h1>Projects</h1>
      <motion.section>
        {allProjects.map((project) => (
          <a key={project.name} href={project.href} className="text-xs px-10">
            {project.name}
          </a>
        ))}
        <Link href="/">
          Back to home
        </Link>
      </motion.section>
    </motion.div>
  )
}

export default Projects
