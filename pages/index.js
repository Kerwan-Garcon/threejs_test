// import Head from "next/head"
// import Image from "next/image"
// import styles from "../styles/Home.module.css"
// import * as THREE from "three"
import Scene from "@/component/three/Scene"
import WebGL from "@/component/three/WebGL"
import Link from "next/link"
import { useEffect } from "react"

export default function Home() {
  const colorMenu = "red"
  const absolute = "absolute"
  const relative = "relative"
  return (
    <>
      <Scene style={{ position: relative }} />
      <Link href="/LinePage">
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
