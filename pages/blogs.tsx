import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import Header from "../components/head";

interface Props {}

const Blogs = (props: Props) => {
  const allBlogs = [
    {
      name: "git commits best practices: 2021",
      href: "https://learnwithayush.hashnode.dev/git-commits-as-a-beginner-best-practices-2021-1",
      image:
        "https://learnwithayush.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1619931852966%2Fpy-0VtnO3.jpeg%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
    },
    {
      name: "firebase host and deploy: 2021",
      href: "https://learnwithayush.hashnode.dev/hosting-and-deploying-step-by-step-explained-firebase-2021",
      image:
        "https://learnwithayush.hashnode.dev/_next/image?url=https%3A%2F%2Fcdn.hashnode.com%2Fres%2Fhashnode%2Fimage%2Fupload%2Fv1620534653568%2FYPHmKp1Wy.png%3Fw%3D1600%26h%3D840%26fit%3Dcrop%26crop%3Dentropy%26auto%3Dcompress%2Cformat%26format%3Dwebp&w=3840&q=75",
    },
  ];

  return (
    <>
      <Header />
      <motion.div className="text-center">
        <h3 className="text-3xl font-semibold ">Blogs</h3>
        <motion.section className="grid grid-cols-2 justify-center my-8">
          {allBlogs.map((blogs) => (
            <a
              target="_blank"
              key={blogs.name}
              href={blogs.href}
              className="px-10"
            >
              {/* <Image src={blogs.image} alt={blogs.name} /> */}
            </a>
          ))}
        </motion.section>
      </motion.div>
    </>
  );
};

export default Blogs;
