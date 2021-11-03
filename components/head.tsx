import { Disclosure, Menu } from "@headlessui/react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";
import Image from "next/image";
import Profile from "../public/profile.jpg";
import Link from "next/link";
import { motion } from "framer-motion";
import NarutoSign from "../public/naruto-sign.png";

const navigation = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Projects", href: "/projects" },
  { name: "Blogs", href: "/blogs" },
];

function classNames(...classes: any) {
  return classes.filter(Boolean).join(" ");
}

const Header = () => {
  return (
    <Disclosure
      as="nav"
      className="dark:bg-gray-800 dark:text-white max-w-5xl mx-auto"
    >
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex items-center justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <span className="block lg:hidden">
                    <Image className="" width={40} height={40} src={NarutoSign} alt="my leaf logo" />
                  </span>
                  <span className="hidden lg:block">
                    <Image className="" width={40} height={40} src={NarutoSign} alt="my leaf logo" />
                  </span>
                </div>
                <div className="hidden sm:block sm:ml-6">
                  <div className="flex space-x-4">
                    {navigation.map((item) => (
                      <Link href={item.href} key={item.name}>
                        <a
                          href={item.href}
                          key={item.name}
                          className={classNames(
                            "text-black dark:text-white hover:bg-gray-700 hover:text-white",
                            "px-3 py-2 rounded-md text-sm font-medium"
                          )}
                        >
                          {item.name}
                        </a>
                      </Link>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <Menu as="div" className="ml-3 relative">
                  <div>
                    <Image
                      className="rounded-full"
                      width={33}
                      height={33}
                      src={Profile}
                      alt="owner image"
                    />
                  </div>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <motion.div className="px-2 pt-2 pb-3 flex w-min ml-4 mb-2 rounded dark:bg-gray-900">
              {navigation.map((item) => (
                <Link href={item.href} key={item.name}>
                  <a
                    href={item.href}
                    key={item.name}
                    className={classNames(
                      "text-black dark:text-white hover:bg-gray-700 hover:text-white",
                      "px-3 py-2 rounded-md text-sm font-medium"
                    )}
                  >
                    {item.name}
                  </a>
                </Link>
              ))}
            </motion.div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};

export default Header;
