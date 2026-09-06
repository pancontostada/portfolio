import initials from '../assets/initials.webp'
import { Outlet, NavLink } from 'react-router-dom'
import { useLayoutEffect, useRef, useState } from 'react'

export default function Layout(){
    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef(null)
    const lastScrollTop = useRef(0)
    const style = {
        fontWeight: 'bold'
    }

    function handleScroll(event){ 
        const scrollTop = event.currentTarget.scrollTop 
        const scrollDifference = scrollTop - lastScrollTop.current 

        if (scrollTop <= 0) {
            setIsHeaderVisible(true)
        } else if (Math.abs(scrollDifference) >= 4) {
            setIsHeaderVisible(scrollDifference < 0)
        }

        lastScrollTop.current = scrollTop 
    }

    useLayoutEffect(() => { 
        const updateHeaderHeight = () => {
            setHeaderHeight(headerRef.current?.offsetHeight ?? 0)
        }

        updateHeaderHeight() //run the fn
        const resizeObserver = new ResizeObserver(updateHeaderHeight)
        resizeObserver.observe(headerRef.current)

        return () => resizeObserver.disconnect()
    }, [])

    return(
        <div className='h-dvh flex flex-col'>
            <div className='shrink-0 overflow-hidden transition-[height] duration-300' style={{ height: isHeaderVisible ? headerHeight : 0 }}> 
                <header ref={headerRef} className={`flex bg-blue-100 justify-between p-4 items-center lg:p-8 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}> 
                    <NavLink to=".">
                        <img src={initials} className='w-12'/>
                    </NavLink>
                    <nav className='flex'>
                        <NavLink to="/" style={ ({isActive}) => isActive ? style : null} className='pl-4 text-lg'>Home</NavLink>
                        <NavLink to="about" style={ ({isActive}) => isActive ? style : null} className='pl-4 text-lg'>About</NavLink>
                        <NavLink to="philosophy" style={ ({isActive}) => isActive ? style : null}  className='pl-4 text-lg'>Philosophy</NavLink>
                    </nav>
                </header>
            </div>
            <div className='min-h-0 flex-1 overflow-y-auto' onScroll={handleScroll}> 
                <Outlet />
            </div>
        </div>
    )
}