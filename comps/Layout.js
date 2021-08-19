import React from "react"
import Navbar from "./Navbar"
import Footer from "./Footer"
import { useEffect } from "react"

const Layout = ({ children }) => {
  useEffect(() => console.log("hello"), [])
  return (
    <div className="content">
      <Navbar />
      {children}
      <Footer />
    </div>
  )
}

export default Layout
