import React from "react"
import Head from "next/head"
import Link from "next/link"
import styles from "../../styles/Ninjas.module.css"

const NinjasPage = ({ ninjas }) => {
  return (
    <>
      <Head title="About| Ninja">
        <title>Ninjas | Ninja</title>
        <meta name="keywords" content="best thing ever" />
        <link rel="shortcut icon" type="image/png" href="./org.png" />
      </Head>
      <div>
        <h1>All Ninjas</h1>
        {ninjas.map((ninja) => (
          <Link href={`/ninjas/${ninja.id}`} key={ninja.id}>
            <a className={styles.single}>
              <h3>{ninja.name}</h3>
            </a>
          </Link>
        ))}
      </div>
    </>
  )
}

export default NinjasPage

export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users")

  const data = await res.json()

  return {
    props: {
      ninjas: data,
    },
  }
}
