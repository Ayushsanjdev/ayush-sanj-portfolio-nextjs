import Image from 'next/image'
import cover from '../public/cover.svg' 

const Home = () => {
  return (
    <div>
    <header>
      <Image alt="logo" src={cover} />
    </header>
  </div>
  ) 
}

export default Home