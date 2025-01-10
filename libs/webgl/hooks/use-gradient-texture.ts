import { useEffect, useMemo, useState } from 'react'
import { CanvasTexture, LinearFilter } from 'three'

export function useGradient(colors: string[]) {
  const [canvas] = useState(() => document.createElement('canvas'))
  const texture = useMemo(() => {
    const texture = new CanvasTexture(canvas)
    texture.minFilter = LinearFilter
    texture.magFilter = LinearFilter

    return texture
  }, [canvas])

  useEffect(() => {
    const ctx = canvas.getContext('2d')

    if (!ctx) return
    const gradient = ctx.createLinearGradient(0, 0, canvas.width, 0)

    if (colors.length > 1) {
      colors.forEach((color, i) => {
        gradient.addColorStop(i / (colors.length - 1), color)
      })
      ctx.fillStyle = gradient
    } else {
      ctx.fillStyle = colors[0]
    }

    ctx.fillRect(0, 0, canvas.width, canvas.height)

    texture.needsUpdate = true
  }, [colors, texture, canvas])

  return texture
}
