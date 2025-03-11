'use client'
import React from 'react'

interface CustomComponentProps {
  exampleProp: string
}

const CustomComponent: React.FC<CustomComponentProps> = ({ exampleProp }) => {
  return (
    <div>
      <h1 className={'text-5xl'}>Custom Component</h1>
      <p>{exampleProp}</p>
    </div>
  )
}

export default CustomComponent
