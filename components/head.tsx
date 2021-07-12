import Link from 'next/link'
import Image from 'next/image'
import profile from '../public/profile.jpg'
import { motion } from 'framer-motion'

const Header = () => {

<<<<<<< HEAD
  const navigation = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];
=======
  // const navigation = [
    // { name: "Home", href: "#" },
    // { name: "Projects", href: "#" },
    // { name: "Blogs", href: "#" },
  // ];
>>>>>>> cffc60a1e0e366afe6c2d0882266992a5dc7c147


  return (
    <header className="flex justify-between mt-4 px-4 py-4">
        <Image
          alt="my-picture"
          src={profile}
          width={50}
          height={50}
          className="rounded-full"
        />
        <nav className="md:block ml-10 pr-4 space-x-16">
<<<<<<< HEAD
            {navigation.map((links) => (
              <Link key={links.name} passHref={true} href={links.href}>
              <a
                key={links.name} href={links.href}
                className="font-medium text-gray-500 hover:text-gray-900 align-middle"
              >
                {links.name}
              </a></Link>
            ))}
=======
          <Link href="/components/projects">
            {/* {navigation.map((links) => ( */}
              <a
                className="font-medium text-gray-500 hover:text-gray-900 align-middle"
              >
                {/* {links.name} */} Projects
              </a>
            {/* ))} */}
          </Link>
>>>>>>> cffc60a1e0e366afe6c2d0882266992a5dc7c147
        </nav>
      </header>
  )
}

export default Header