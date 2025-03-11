/* 
https://cruip.com/create-an-infinite-horizontal-scroll-animation-with-tailwind-css/
*/
'use client'
import React from 'react'

import Image from 'next/image'
import Facebook from '@/public/facebook.svg'
import Disney from '@/public/disney.svg'
import Airbnb from '@/public/airbnb.svg'
import Apple from '@/public/apple.svg'
import Spark from '@/public/spark.svg'
import Samsung from '@/public/samsung.svg'
import Quora from '@/public/quora.svg'
import Sass from '@/public/sass.svg'

interface MarqueeProps {
  items: string[]
}

const Marquee: React.FC<MarqueeProps> = ({ items }) => {
  const logos = [
    { src: Facebook, alt: 'Facebook' },
    { src: Disney, alt: 'Disney' },
    { src: Airbnb, alt: 'Airbnb' },
    { src: Apple, alt: 'Apple' },
    { src: Spark, alt: 'Spark' },
    { src: Samsung, alt: 'Samsung' },
    { src: Quora, alt: 'Quora' },
    { src: Sass, alt: 'Sass' },
  ]
  // return (
  //   <div className="w-full flex justify-center items-center">
  //     <div className="w-full max-w-5xl overflow-hidden whitespace-nowrap bg-secondary py-8 [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
  //       <div className="animate-marquee flex w-full justify-around items-center gap-8">
  //         {items.map((item, index) => (
  //           <span key={index} className="max-w-none">
  //             {item}
  //           </span>
  //         ))}
  //       </div>
  //     </div>
  //   </div>
  // )
  return (
    <div className="w-full flex justify-center items-center">
      <div className="max-w-5xl inline-flex w-full flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)]">
        <ul className="flex animate-marquee items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8">
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
        <ul
          className="flex animate-marquee items-center justify-center md:justify-start [&_img]:max-w-none [&_li]:mx-8"
          aria-hidden="true"
        >
          {logos.map((logo, index) => (
            <li key={index}>
              <Image src={logo.src} alt={logo.alt} />
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Marquee
