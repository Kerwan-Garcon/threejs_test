import WebGL from "@/component/three/WebGL"
import { useEffect, useRef, useState } from "react"
import * as THREE from "three"

const Scene = (props) => {
  const mountRef = useRef(null)
  const { style } = props

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      0.1,
      1000
    )
    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth - 15, window.innerHeight)

    mountRef.current?.appendChild(renderer.domElement)

    const geometry = new THREE.BoxGeometry(2, 2, 2)
    const material = new THREE.MeshBasicMaterial({ color: 0xfdbb2d })
    const cube = new THREE.Mesh(geometry, material)

    scene.add(cube)
    camera.position.z = 5

    const animate = (boolean) => {
      requestAnimationFrame(animate)
      if (boolean) {
        cube.rotateZ(0.001).rotateY(0.005).rotateX(0.005)
      } else {
        cube.rotateX(-0.01)
        cube.rotateZ(-0.001)
        cube.rotateY(-0.01)
      }

      renderer.render(scene, camera)
    }

    let onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize, false)
    animate(true)
    return () => mountRef.current?.removeChild(renderer.domElement)
  }, [])

  return <div id="canva" ref={mountRef}></div>
}

export default Scene
