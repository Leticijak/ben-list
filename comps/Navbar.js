import React from "react"
import Link from "next/link"
import Image from "next/image"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <Image src="/org.png" width={60} height={60} />
      </div>
      <Link href="/">
        <a className="links">Home</a>
      </Link>
      <Link href="/about">
        <a className="links">About</a>
      </Link>
      <Link href="/ninjas">
        <a className="links">Ninjas</a>
      </Link>
    </nav>
  )
}

export default Navbar
