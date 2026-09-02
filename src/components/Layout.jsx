import initials from '../assets/initials.webp'
import { Outlet, NavLink } from 'react-router-dom'

export default function Layout(){
    const style = {
        color: 'red'
    }

    return(
        <>
            <header className='flex bg-blue-100 justify-between p-4 items-center lg:p-8'>
                <NavLink to=".">
                    <img src={initials} className='w-12'/>
                </NavLink>
                <nav className='flex'>
                    <NavLink to="about" style={ ({isActive}) => isActive ? style : null} className='pl-4 text-lg'>About</NavLink>
                    <NavLink to="philosophy" style={ ({isActive}) => isActive ? style : null}  className='pl-4 text-lg'>Philosophy</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}