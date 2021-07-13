import { motion } from 'framer-motion'
import Link from 'next/link';
import Header from '../components/head';

interface Props {
  
}

const Blogs = (props: Props) => {

  const allBlogs = [
    {name: 'git commits best practices: 2021', href: '#'},
    {name: 'firebase host and deploy: 2021', href: '#'}
  ];

  return (
    <>
      <Header/>
        <motion.div className="text-center">
          <h3 className="text-3xl font-semibold ">Blogs</h3>
          <motion.section>
            {allBlogs.map((blogs) => (
              <a key={blogs.name} href={blogs.href} className="px-10" >
                {blogs.name}
              </a>
            ))}
          </motion.section>
        </motion.div>
    </>
  )
}

export default Blogs
