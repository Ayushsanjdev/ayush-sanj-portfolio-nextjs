import Image from "next/image";
import cover from "../public/cover.svg";
import profile from "../public/profile.jpg";
import { motion } from "framer-motion";

const navigation = [
  { name: "Home", href: "#" },
  { name: "Projects", href: "#" },
  { name: "Blogs", href: "#" },
];

const variants = {
  visible: { opacity: 1 },
  hidden: { opacity: 0.4 }
}

const Home = () => {
  return (
    <motion.div className="mx-auto my-0" 
      initial="hidden" animate="visible" variants={variants}>
      <header className="flex justify-between mt-4 px-4 py-4">
        <Image
          alt="my-picture"
          src={profile}
          width={50}
          height={50}
          className="rounded-full"
        />
        <nav className="md:block ml-10 pr-4 space-x-8">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="font-medium text-gray-500 hover:text-gray-900 align-middle"
            >
              {item.name}
            </a>
          ))}
        </nav>
      </header>
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
          <motion.div animate={{rotate: 360}} transition={{duration: 1.5}} className="flex justify-center p-4">
            <img src="https://img.icons8.com/color/48/000000/react-native.png"/>
            <img src="https://img.icons8.com/color/48/000000/javascript--v1.png"/>
            <img src="https://img.icons8.com/color/48/000000/html-5--v1.png"/>
            <img src="https://img.icons8.com/color/48/000000/npm.png"/>
            <img src="https://img.icons8.com/color/48/000000/firebase.png"/>
            <img src="https://img.icons8.com/color/48/000000/css3.png"/>
          </motion.div>
        </div>
        <motion.div whileHover={{
          scale: 1.2,
          transition: { duration: 1 },}}
          whileTap={{ scale: 0.9 }} className="w-1/2">
          <Image alt="logo" src={cover} className="w-full" />
        </motion.div>
      </section>
    </motion.div>
  );
};

export default Home;
