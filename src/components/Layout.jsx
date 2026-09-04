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

    function handleScroll(event){ //when the div scroll container containing the outlet scrolls...
        const scrollTop = event.currentTarget.scrollTop //save a value that measures how far the top of the Outlet element is from the top of the containing div element
        const scrollDifference = scrollTop - lastScrollTop.current //determines the direction of the scroll. if the value is positive, then the user is scrolling down.

        if (scrollTop <= 0) {
            setIsHeaderVisible(true) //if the user hasn't scrolled, then set visibility to true
        } else if (Math.abs(scrollDifference) >= 4) { //i think this is to measure the speed the user is scrolling? maybe if the user scrolls fast enough, the next time the browsers able to update the value of lastScrollTop will be greater than 4, thus kicking in the condition 
            setIsHeaderVisible(scrollDifference < 0) //if user scrolls down, scrollTop will be greater than lastScrollTop, then expression evaluates to false, the header is set to false! this triggers the height of the div class to equal 0, and triggers the header to move up out of view. but why do both actions have to happen? why cant the div height being set to 0 be enough?
        }

        lastScrollTop.current = scrollTop //update value of lastScrollTop
    }

    useLayoutEffect(() => { //run on first render, before browser has painted
        const updateHeaderHeight = () => {
            setHeaderHeight(headerRef.current?.offsetHeight ?? 0) //set the headerHeight to whatever the natural value is based on its content. if for some reason the ref is still null (maybe cause header gets removed?), then set the height to 0
        }

        updateHeaderHeight() //run the fn
        const resizeObserver = new ResizeObserver(updateHeaderHeight) //create in essence an event listener that listens for change in the size. what im confused by, is wouldnt this run any time the dimensions of any element on the page gets resized??
        resizeObserver.observe(headerRef.current)

        return () => resizeObserver.disconnect() //remove the event listener, but not sure when 
    }, [])

    return(
        <div className='h-dvh flex flex-col'> {/* let height of div be whole page, accouting for address bar */}
            <div className='shrink-0 overflow-hidden transition-[height] duration-300' style={{ height: isHeaderVisible ? headerHeight : 0 }}> {/* don't let the header shrink vertically. */}
                <header ref={headerRef} className={`flex bg-blue-100 justify-between p-4 items-center lg:p-8 transition-transform duration-300 ${isHeaderVisible ? 'translate-y-0' : '-translate-y-full'}`}> {/* if state is false, shift the header up out of view */}
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
            <div className='min-h-0 flex-1 overflow-y-auto' onScroll={handleScroll}> {/* allow the scroll container to shrink to fill up remaining page, establish a vertical scroll context, add the onScroll evt listener, then in outlet make sure the child element has h-full*/}
                <Outlet />
            </div>
        </div>
    )
}