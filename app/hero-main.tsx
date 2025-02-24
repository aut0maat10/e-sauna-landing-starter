import React from 'react'

const HeroMain: React.FC = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between p-5 md:p-10">
      <div className="flex-1 p-5 md:p-10 text-center md:text-left">
        <h1 className="text-4xl md:text-5xl font-bold mb-2">
          Welcome to Electric Sauna
        </h1>
        <p className="text-lg md:text-xl mb-4">
          This is a landing page template.
        </p>
        <button className="px-4 py-2 text-white bg-blue-500 rounded hover:bg-blue-700">
          Get Started
        </button>
      </div>
      <div className="flex-1 flex justify-center items-center p-5 md:p-10">
        <img
          src="https://picsum.photos/id/180/500/500"
          alt="Sauna"
          className="max-w-full h-auto rounded-lg"
        />
      </div>
    </div>
  )
}

export default HeroMain
