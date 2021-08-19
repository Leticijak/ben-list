import Link from "next/link"
import { useEffect } from "react"
import { useRouter } from "next/router"
const NotFound = () => {
  const router = useRouter()

  useEffect(() => {
    setTimeout(() => {
      router.push("/")
    }, 3000)
  }, [])
  return (
    <div className="not-found">
      <h1>Ooopps.....</h1>
      <h2>Page you are looking for doesn't seem to exist</h2>
      <p>Go back to the </p>
      <Link href="/">
        <a className="btn"> Home</a>
      </Link>
    </div>
  )
}

export default NotFound
