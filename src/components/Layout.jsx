import initials from '../assets/initials.webp'
import { Outlet, NavLink } from 'react-router-dom'

export default function Layout(){
    return(
        <>
            <header>
                <NavLink to=".">
                    <img src={initials} width="50px"/>
                </NavLink>
                <nav>
                    <NavLink to="about">About</NavLink>
                    <NavLink to="philosophy">Philosophy</NavLink>
                </nav>
            </header>
            <Outlet />
        </>
    )
}