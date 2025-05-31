'use client'
import Link from 'next/link';
import { useState } from 'react';
export default function Menu (){

        const [isMenuOpen, setIsMenuOpen] = useState(false);
    return (


    <div className=" bg-white overflow-hidden">
      {/* Menu Button */}
      <button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="fixed top-6 left-6 z-50 p-3 bg-white shadow-lg rounded-full hover:shadow-xl transition-all duration-300 transform hover:scale-105"
      >
        <div className="w-6 h-6 relative">
          <span className={`absolute top-0 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'rotate-45 top-2.5' : 'top-0'}`}></span>
          <span className={`absolute top-2.5 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
          <span className={`absolute bottom-0 left-0 w-full h-0.5 bg-gray-900 transition-all duration-300 ${isMenuOpen ? '-rotate-45 bottom-2.5' : 'bottom-0'}`}></span>
        </div>
      </button>

      {/* Sliding Menu */}
      <div className={`fixed top-0 left-0 h-full w-80 bg-white shadow-2xl z-40 transform transition-transform duration-500 ease-in-out ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'}`}>
        <div className="p-8 h-full overflow-y-auto">
          {/* Menu Header */}
          <div className="mb-12 pt-16">
            <h2 className="text-3xl font-light text-gray-900 mb-2">Florence Henry</h2>
            <p className="text-gray-600 italic">Navigation</p>
            <div className="w-16 h-px bg-gray-400 mt-4"></div>
          </div>

          {/* Menu Items */}
          <nav className="space-y-6">
            <Link href="/" className="group block py-3 border-b border-gray-100 hover:border-gray-300 transition-all duration-300">
              <span className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Présentation</span>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">L'artiste et son univers</p>
            </Link>
            
            <Link href="/galerie" className="group block py-3 border-b border-gray-100 hover:border-gray-300 transition-all duration-300">
              <span className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Galerie</span>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Collection d'œuvres 2023-2024</p>
            </Link>
            
            <Link href="/videos" className="group block py-3 border-b border-gray-100 hover:border-gray-300 transition-all duration-300">
              <span className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Atelier</span>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Visites et processus créatif</p>
            </Link>
            
            {/* <Link href="/contacts" className="group block py-3 border-b border-gray-100 hover:border-gray-300 transition-all duration-300">
              <span className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Acquisitions</span>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Acheter une œuvre</p>
            </Link> */}
            
            <Link href="/contacts" className="group block py-3 border-b border-gray-100 hover:border-gray-300 transition-all duration-300">
              <span className="text-xl font-light text-gray-900 group-hover:text-gray-600 transition-colors duration-300">Contact</span>
              <p className="text-sm text-gray-500 mt-1 group-hover:text-gray-600 transition-colors duration-300">Prendre rendez-vous</p>
            </Link>
          </nav>

          {/* Menu Footer */}
          <div className="mt-16 pt-8 border-t border-gray-200">
            <div className="space-y-4">
              <div>
                <p className="text-sm font-medium text-gray-900">Atelier</p>
                <p className="text-sm text-gray-600">12 Rue des Artistes<br />75018 Paris</p>
              </div>
              <div>
                <p className="text-sm font-medium text-gray-900">Contact</p>
                <p className="text-sm text-gray-600">florence@henry-art.fr<br />+33 1 42 52 78 90</p>
              </div>
            </div>
            
            <div className="mt-8 flex space-x-4">
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                <span className="text-xs text-gray-600">IG</span>
              </a>
              <a href="#" className="w-8 h-8 bg-gray-100 rounded-full flex items-center justify-center hover:bg-gray-200 transition-colors duration-300">
                <span className="text-xs text-gray-600">FB</span>
              </a>
            </div>
          </div>
        </div>
      </div>

      </div>
    )

}