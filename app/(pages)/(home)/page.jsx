'use client'

import { Canvas } from '@react-three/fiber'
import { WebGLShader } from './(components)/shader/webgl'

export default function Page() {
  return (
      <Canvas style={{ width: '100%', height: '100vh' }}>
        <WebGLShader />
      </Canvas>
  )
}
