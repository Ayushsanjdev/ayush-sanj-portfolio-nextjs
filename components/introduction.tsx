import Image from 'next/image'
import cover from '../public/cover.svg'
import { motion } from 'framer-motion'


const Introduction = () => {

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0.4 },
  };

  const list = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  const item = {
    visible: { opacity: 1, x: 0 },
    hidden: { opacity: 0, x: -100 },
  };

  return(
    <section className="flex justify-between gap-8 mt-10 mx-auto my-0 max-w-7xl px-4 sm:mt-12 sm:px-6 lg:px-8">
        <div className="sm:text-center lg:text-left block self-center">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">I'm Ayush Sanj</span>{" "}
            <span className="block text-indigo-700 font-light text-center">
              Frontend Dev
            </span>
          </h1>
          <p className="mt-3 text-base text-center max-w-min text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Turning designs into a functional, <br />
            aesthetically pleasing user interface
          </p>
          <motion.ul
            variants={list}
            initial="hidden"
            animate="visible"
            className="flex justify-center p-4"
          >
            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/react-native.png" />
            </motion.li>

            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/javascript--v1.png" />
            </motion.li>

            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/html-5--v1.png" />
            </motion.li>

            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/npm.png" />
            </motion.li>

            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/firebase.png" />
            </motion.li>

            <motion.li variants={item}>
              <img src="https://img.icons8.com/color/48/000000/css3.png" />
            </motion.li>
          </motion.ul>
        </div>
        <motion.div
          whileHover={{
            scale: 1.2,
            transition: { duration: 1 },
          }}
          whileTap={{ scale: 0.9 }}
          className="w-1/2"
        >
          <Image alt="logo" src={cover} className="w-full" />
        </motion.div>
      </section>
  )
}

export default Introduction;