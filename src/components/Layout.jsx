import initials from '../assets/home/initials.webp'
import { Outlet, NavLink } from 'react-router-dom'
import {useState, useRef, useLayoutEffect} from 'react'

export default function Layout(){

    const [isHeaderVisible, setIsHeaderVisible] = useState(true)
    const [headerHeight, setHeaderHeight] = useState(0)
    const headerRef = useRef(null)
    const lastScrollTop = useRef(0)
    const style = {
        color: 'red'
    }

    function handleScroll(event){
        const scrollTop = event.currentTarget.scrollTop
        const scrollDif = scrollTop - lastScrollTop.current

        if(scrollTop <= 0){
            setIsHeaderVisible(true)
        }else if(Math.abs(scrollDif) >= 4){
            setIsHeaderVisible(scrollDif < 0) //if scrollDif is > 0, then it is scrolling down. if it is scrolling down, scrollDif > 0 and we want the header to disappear
        }

        lastScrollTop.current = scrollTop
    }

    useLayoutEffect(() => {
        const resizeHeader = () => setHeaderHeight(headerRef.current?.offsetHeight ?? 0)

        resizeHeader()
        const resizeObserver = new ResizeObserver(resizeHeader)
        resizeObserver.observe(headerRef.current)

        return () => resizeObserver.disconnect()

    }, [])

    return(
        <div className='h-dvh flex flex-col'>
            <div className='shrink-0 overflow-hidden transition-[height] duration-300' style={{height: isHeaderVisible ? headerHeight : 0}}>
                <header ref={headerRef} className={`flex bg-blue-100 justify-between p-4 items-center lg:p-8 transition-transform ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}>
                    <NavLink to=".">
                        <img src={initials} className='w-12'/>
                    </NavLink>
                    <nav className='flex'>
                        <NavLink to="about" style={ ({isActive}) => isActive ? style : null} className='pl-4 text-lg'>About</NavLink>
                        <NavLink to="philosophy" style={ ({isActive}) => isActive ? style : null}  className='pl-4 text-lg'>Philosophy</NavLink>
                    </nav>
                </header>
            </div>
            <div className='flex-1 min-h-0 overflow-y-auto' onScroll={handleScroll}>
                <Outlet />
            </div>
        </div>
    )
}

//we want to make it so that when the user scrolls down, the header slides up out of view. and when the user scrolls down past a jitter rate of 4px, it slides back into view. Also, we want the first element with content in the Outlet to take up the remaining vertical space. 