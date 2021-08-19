import Head from "next/head"
import Image from "next/image"
import styles from "../styles/Home.module.css"
import Link from "next/link"

export default function Home() {
  return (
    <div className="main">
      <h1>Hello</h1>
      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Itaque illum
        perspiciatis officia. Necessitatibus molestiae repellendus quasi,
        voluptatum amet nulla veniam vitae ratione alias error animi neque
        dolore, dicta, ad aliquid in possimus doloribus. Illum libero quas
        soluta aut molestias eaque, at vero nesciunt sed eos laudantium ducimus
        voluptates, eveniet itaque dolorem repellendus aliquam voluptatibus sit?
        Voluptatibus beatae consequuntur omnis id doloribus quia voluptas odit
        eveniet similique sint. Similique atque non natus minus consectetur
        dicta autem harum tempora, assumenda nesciunt in pariatur, repellendus
        id labore, provident fugiat veniam maxime. Aspernatur, maiores accusamus
        aperiam ab sit unde ipsa adipisci placeat eaque
      </p>
      <Link href="/ninjas">
        <a className="links">Go to ninjas</a>
      </Link>
    </div>
  )
}
