import { motion } from 'framer-motion'
import Link from 'next/link';

interface Props {
  
}

const Blogs = (props: Props) => {

  const allBlogs = [
    {name: 'git commits best practices: 2021', href: '#'},
    {name: 'firebase host and deploy: 2021', href: '#'}
  ];

  return (
    <motion.div className="text-center">
      <h3 className="text-3xl font-semibold ">Blogs</h3>
      <motion.section>
        {allBlogs.map((blogs) => (
          <a key={blogs.name} href={blogs.href} className="px-10" >
            {blogs.name}
          </a>
        ))}
        <Link href="/"><a>home</a></Link>
      </motion.section>
    </motion.div>
  )
}

export default Blogs
