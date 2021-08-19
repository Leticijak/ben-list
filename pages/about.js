import React from "react"
import Layout from "../comps/Layout"
import Head from "next/head"

const AboutPage = () => {
  return (
    <>
      <Head title="About| Ninja">
        <title>About | Ninja</title>
        <meta name="keywords" content="best thing ever" />
        <link rel="shortcut icon" type="image/png" href="./org.png" />
      </Head>

      <div>
        <h1>About</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          voluptates, numquam quo enim quasi veritatis repellendus magnam ea
          perferendis magni libero maiores quis sequi veniam voluptatum a,
          ducimus reiciendis ex? Dolore ratione perspiciatis fuga autem dolorem
          delectus necessitatibus, eum dicta nihil facere iste ullam labore
          quis. Adipisci labore quam impedit.
        </p>

        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit
          voluptates, numquam quo enim quasi veritatis repellendus magnam ea
          perferendis magni libero maiores quis sequi veniam voluptatum a,
          ducimus reiciendis ex? Dolore ratione perspiciatis fuga autem dolorem
          delectus necessitatibus, eum dicta nihil facere iste ullam labore
          quis. Adipisci labore quam impedit.
        </p>
      </div>
    </>
  )
}

export default AboutPage
