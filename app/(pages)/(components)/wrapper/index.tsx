'use client'

import cn from 'clsx'
import type { LenisOptions } from 'lenis'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'
import { Canvas } from '~/libs/webgl/components/canvas'
import type { themeNames } from '~/styles/config.mjs'
import { Footer } from '../footer'
import { Lenis } from '../lenis'
import s from './page-config.module.css'

interface WrapperProps extends React.HTMLAttributes<HTMLDivElement> {
  theme?: (typeof themeNames)[number]
  lenis?: LenisOptions
  webgl?: boolean | object
}

export function Wrapper({
  children,
  theme = 'dark',
  className,
  lenis,
  webgl,
  ...props
}: WrapperProps) {
  const pathname = usePathname()

  // biome-ignore lint/correctness/useExhaustiveDependencies: we need to trigger on path change
  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
  }, [pathname, theme])

  return (
    <>
      {webgl && <Canvas root {...(typeof webgl === 'object' && webgl)} />}
      <main className={cn(s.main, className)} {...props}>
        {children}
        <script>
          {`document.documentElement.setAttribute('data-theme', '${theme}');`}
        </script>
      </main>
      <Footer />
      {lenis && <Lenis root options={lenis} />}
    </>
  )
}
