import Link from 'next/link'
import Image from 'next/image'
import profile from '../public/profile.jpg'
import { motion } from 'framer-motion'

const Header = () => {

  const navigation = [
    { name: "Home", href: "/" },
    { name: "About me", href: "/about" },
    { name: "Projects", href: "/projects" },
    { name: "Blogs", href: "/blogs" },
  ];

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
            {navigation.map((links) => (
              <Link key={links.name} href={links.href}>
              <a
                key={links.name} href={links.href}
                className="font-medium text-gray-500 hover:text-gray-900 align-middle"
              >
                {links.name}
              </a></Link>
            ))}
        </nav>
      </header>
  )
}

export default Header