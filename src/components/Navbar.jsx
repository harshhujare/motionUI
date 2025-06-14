import React, { useEffect, useState } from 'react'
import Button from './Button'
import { TiLocationArrow } from 'react-icons/ti'
import { useRef } from 'react'
import { useWindowScroll } from 'react-use'

const navitems = ['Nexus', 'vault', 'prologue', 'about', 'contact']

const Navbar = () => {
  const navContainerRef = useRef(null)
  const { y: currentScrollY } = useWindowScroll()
  const [lastScrollY, setLastScrollY] = useState(0)
  const [isVisible, setIsVisible] = useState(true)

  useEffect(() => {
    if (currentScrollY === 0) {
      setIsVisible(true)
      navContainerRef.current?.classList.remove('floating-nav')
    } else if (currentScrollY > lastScrollY) {
      setIsVisible(false)
      navContainerRef.current?.classList.add('floating-nav')
    } else if (currentScrollY < lastScrollY) {
      setIsVisible(true)
      navContainerRef.current?.classList.add('floating-nav')
    }
    setLastScrollY(currentScrollY)
  }, [currentScrollY, lastScrollY])

  return (
    <div 
      ref={navContainerRef} 
      className={`fixed inset-x-0 top-4 h-16 z-50 border-none transition-all duration-700 sm:inset-x-6 ${!isVisible ? '-translate-y-24' : ''}`}
    >
      <header className="absolute w-full top-1/2 -translate-y-1/2">
        <nav className="flex justify-between items-center size-full p-4">
          <div className='flex gap-7 items-center'>
            <img
              src="./img/logo.png" 
              alt="logo" 
              className='w-10'
            />
            <Button 
              id="product-button" 
              tital="Products" 
              righticon={<TiLocationArrow/>}   
              containerClass="!bg-blue-50 md:flex hidden items-center justify-center gap-1"    
            />
          </div>
          
          <div className="flex h-full items-center">
            <div className='hidden md:block'>
              {navitems.map((item) => (
                <a 
                  key={item}
                  className="nav-hover-btn" 
                  href={`#${item.toLowerCase()}`}
                >
                  {item} 
                </a>
              ))}
            </div>
          </div>
        </nav>
      </header>
    </div>
  )
}

export default Navbar