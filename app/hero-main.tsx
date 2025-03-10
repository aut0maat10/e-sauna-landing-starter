'use client'
import React, { useEffect, useState } from 'react'
import content from '../content/page-content.json'

const HeroMain: React.FC = () => {
  const [heroContent, setHeroContent] = useState({
    title: '',
    description: '',
    ctaText: '',
    imageSrc: '',
    layout: 'text-left',
  })

  useEffect(() => {
    setHeroContent(content.hero)
  }, [])

  const isTextLeft = heroContent.layout === 'text-left'

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
      <div
        className={`flex-1 p-5 md:p-10 text-center ${
          isTextLeft
            ? 'md:text-left order-last md:order-first'
            : 'md:text-right order-first md:order-last'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          {heroContent.title}
        </h1>
        <p className="text-lg md:text-xl mb-4">{heroContent.description}</p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          {heroContent.ctaText}
        </button>
      </div>
      <div
        className={`flex-1 flex justify-center items-center p-5 md:p-10 ${
          isTextLeft ? 'order-first md:order-last' : 'order-last md:order-first'
        }`}
      >
        {heroContent.imageSrc && (
          <img
            src={heroContent.imageSrc}
            alt="Sauna"
            className="max-w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  )
}

export default HeroMain
