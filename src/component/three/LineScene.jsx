import { useEffect, useRef } from "react"
import * as THREE from "three"

const LineScene = (props) => {
  const mountRef = useRef(null)

  useEffect(() => {
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(
      45,
      window.innerWidth / window.innerHeight,
      1,
      500
    )
    camera.position.set(0, 0, 100)
    camera.lookAt(0, 0, 0)

    const renderer = new THREE.WebGLRenderer()

    renderer.setSize(window.innerWidth - 15, window.innerHeight)

    mountRef.current?.appendChild(renderer.domElement)

    const points = []
    points.push(new THREE.Vector3(-10, 0, 0))
    points.push(new THREE.Vector3(0, 10, 0))
    points.push(new THREE.Vector3(10, 0, 0))

    const geometry = new THREE.BufferGeometry().setFromPoints(points)
    const material = new THREE.LineBasicMaterial({ color: 0x0000ff })
    const line = new THREE.Line(geometry, material)

    scene.add(line)
    renderer.render(scene, camera)

    let onWindowResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener("resize", onWindowResize, false)

    return () => mountRef.current?.removeChild(renderer.domElement)
  }, [])

  return <div id="canvaLine" ref={mountRef}></div>
}

export default LineScene
