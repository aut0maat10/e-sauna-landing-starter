'use client'
import React from 'react'

interface HeroMainProps {
  title: string
  description: string
  ctaText: string
  imageSrc: string
  layout: string
}

const HeroMain: React.FC<HeroMainProps> = ({
  title,
  description,
  ctaText,
  imageSrc,
  layout,
}) => {
  const isTextLeft = layout === 'text-left'

  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
      <div
        className={`flex-1 p-5 md:p-10 text-center ${
          isTextLeft
            ? 'md:text-left order-last md:order-first'
            : 'md:text-right order-first md:order-last'
        }`}
      >
        <h1 className="text-4xl md:text-5xl font-bold mb-2">{title}</h1>
        <p className="text-lg md:text-xl mb-4">{description}</p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          {ctaText}
        </button>
      </div>
      <div
        className={`flex-1 flex justify-center items-center p-5 md:p-10 ${
          isTextLeft ? 'order-first md:order-last' : 'order-last md:order-first'
        }`}
      >
        {imageSrc && (
          <img
            src={imageSrc}
            alt="Sauna"
            className="max-w-full h-auto rounded-lg"
          />
        )}
      </div>
    </div>
  )
}

export default HeroMain
