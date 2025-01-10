'use client'

import { useThree } from '@react-three/fiber'
import { useState } from 'react'
import { VoronoiMaterial } from './material'

// @refresh reset

export function WebGLShader() {
  const viewport = useThree((state) => state.viewport)

  const [material] = useState(new VoronoiMaterial({
    color: 0xff0000
  }))

  return (
    <mesh
      scale={[viewport.width * 0.5, viewport.height * 0.5, 1]}
      material={material} // this doesn't trigger onBeforeRender
    >
      <planeGeometry />
      {/* <primitive attach="material" object={material} /> */}
    </mesh>
  )
}
