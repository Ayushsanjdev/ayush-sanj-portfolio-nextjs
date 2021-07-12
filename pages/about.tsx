import React from 'react'
import Link from 'next/link'

interface Props {
  
}

const About = (props: Props) => {
  return (
    <div>
      <p>This is about</p>
      <Link href="/">
        <a>home</a>
      </Link>
    </div>
  )
}

export default About
