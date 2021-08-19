import React from "react"
import Link from "next/link"

const Navbar = () => {
  return (
    <nav>
      <div className="logo">
        <h1>Ninja List</h1>
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
