import Image from "next/image";
import cover from "../public/cover.svg";
import profile from "../public/profile.jpg";

const navigation = [
  { name: 'Home', href: '#' },
  { name: 'Projects', href: '#' },
  { name: 'RWD', href: '#' },
  { name: 'Blogs', href: '#' },
]

const Home = () => {
  return (
    <div className="w-11/12 mx-8">
      <header className="flex">
        <Image
          alt="my-picture"
          src={profile}
          width={50}
          height={50}
          className="rounded-full"
        />
        <nav className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
          {navigation.map((item) => (
            <a key={item.name} href={item.href} className="font-medium text-gray-500 hover:text-gray-900">
              {item.name}
            </a>
          ))}
        </nav>
      </header>
      <section className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
        <div className="sm:text-center lg:text-left">
          <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
            <span className="block xl:inline">I'm Ayush Sanj</span>{' '}
            <span className="block text-indigo-600 xl:inline">Frontend Dev</span>
          </h1>
          <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
            Turning designs into a functional, aesthetically
             pleasing user interface
          </p>
        </div>
      </section>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <Image alt="logo" src={cover} className="h-56 w-full object-cover sm:h-72 md:h-96 lg:w-full lg:h-full" />
      </div>
    </div>
  );
};

export default Home;
