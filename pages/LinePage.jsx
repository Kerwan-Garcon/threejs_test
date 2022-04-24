import LineScene from "@/component/three/LineScene"
import Link from "next/link"

export default function Home() {
  const colorMenu = "red"
  const absolute = "absolute"
  const relative = "relative"
  return (
    <>
      <LineScene style={{ position: relative }} />
      <Link href="/">
        <a
          style={{ color: colorMenu, position: absolute, top: 0 }}
          className=""
        >
          Go to home
        </a>
      </Link>
    </>
  )
}
