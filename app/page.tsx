'use client'
import React, { useEffect, useState, lazy, Suspense } from 'react'
import content from '../content/page-content.json'
import Navbar from './navbar'
import HeroMain from './hero-main'
import Marquee from './Marquee'

export default function Home() {
  const [components, setComponents] = useState([])

  useEffect(() => {
    setComponents(content.components)
  }, [])

  const renderComponent = (component: any) => {
    switch (component.type) {
      case 'hero':
        return <HeroMain {...component.content} />
      case 'marquee':
        return <Marquee {...component.content} />
      case 'custom':
        const { componentName, props } = component.content
        const CustomComponent = lazy(() => import(`./${componentName}`))
        return (
          <Suspense fallback={<div>Loading...</div>}>
            <CustomComponent {...props} />
          </Suspense>
        )
      default:
        return null
    }
  }

  return (
    <div className="w-full grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen gap-16 font-[family-name:var(--font-geist-sans)]">
      <Navbar />
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        {components.map((component, index) => (
          <React.Fragment key={index}>
            {renderComponent(component)}
          </React.Fragment>
        ))}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>Footer</p>
      </footer>
    </div>
  )
}
