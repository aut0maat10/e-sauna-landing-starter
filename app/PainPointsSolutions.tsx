'use client'
import React from 'react'

interface PainPoint {
  icon: string
  title: string
  description: string
}

interface Solution {
  icon: string
  title: string
  description: string
}

interface PainPointsSolutionsProps {
  title: string
  intro: string
  painPoints: PainPoint[]
  solutionTitle: string
  solutionIntro: string
  solutions: Solution[]
}

const PainPointsSolutions: React.FC<PainPointsSolutionsProps> = ({
  title,
  intro,
  painPoints,
  solutionTitle,
  solutionIntro,
  solutions,
}) => {
  return (
    <div className="w-full p-8 bg-gray-100">
      <h2 className="text-2xl font-bold mb-4">{title}</h2>
      <p className="mb-8">{intro}</p>

      <div className="space-y-6">
        {painPoints.map((point, index) => (
          <div key={index} className="flex items-start space-x-4">
            <span className="text-red-500 text-2xl">{point.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{point.title}</h3>
              <p>{point.description}</p>
            </div>
          </div>
        ))}
      </div>

      <h2 className="text-2xl font-bold mt-12 mb-4">{solutionTitle}</h2>
      <p className="mb-8">{solutionIntro}</p>

      <div className="space-y-6">
        {solutions.map((solution, index) => (
          <div key={index} className="flex items-start space-x-4">
            <span className="text-green-500 text-2xl">{solution.icon}</span>
            <div>
              <h3 className="text-xl font-semibold">{solution.title}</h3>
              <p>{solution.description}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PainPointsSolutions
