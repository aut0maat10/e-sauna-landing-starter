import React from 'react'

const Navbar: React.FC = () => {
  return (
    <div className="w-full sticky top-0 bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between p-4">
        <div className="text-xl font-bold">Logo</div>
        <div className="flex space-x-4">
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Link 1
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Link 2
          </a>
          <a href="#" className="text-gray-700 hover:text-gray-900">
            Link 3
          </a>
        </div>
      </div>
    </div>
  )
}

export default Navbar
