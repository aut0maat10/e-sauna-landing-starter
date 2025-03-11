/* 
https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
*/
'use client'
import React from 'react'

import Image from 'next/image'

interface MarqueeProps {
  logos: { src: string; alt: string }[]
}

const Marquee: React.FC<MarqueeProps> = ({ logos }) => {
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-5xl inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-marquee items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-marquee items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index + logos.length}>
              <Image src={logo.src} alt={logo.alt} width={100} height={100} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Marquee
