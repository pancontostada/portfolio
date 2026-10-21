import initials from '../assets/home/initials.webp'
import { Outlet, NavLink, Link, useLocation } from 'react-router-dom'
import {useState, useEffect} from 'react'
import { contact } from '../siteConfig'

function useReadingProgress(isEnabled){

    const [progress, setProgress] = useState(0)

    useEffect(() => {
        if(!isEnabled) return

        function update(){
            const max = document.documentElement.scrollHeight - window.innerHeight
            setProgress(max > 0 ? window.scrollY / max : 0)
        }

        update()
        window.addEventListener('scroll', update, {passive: true})
        window.addEventListener('resize', update)
        return () => {
            window.removeEventListener('scroll', update)
            window.removeEventListener('resize', update)
        }
    }, [isEnabled])

    return isEnabled ? progress : 0
}

export default function Layout(){

    const location = useLocation()
    const isCaseStudy = location.pathname.startsWith('/projects/')
    const progress = useReadingProgress(isCaseStudy)

    // The window scroll position carries across routes, so reset it on navigation or jump to the hash.
    useEffect(() => {
        if(location.hash){
            document.getElementById(location.hash.slice(1))?.scrollIntoView()
        }else{
            window.scrollTo(0, 0)
        }
    }, [location.pathname, location.hash])

    const navClass = ({isActive}) => `hover:text-brand ${isActive ? 'text-brand font-semibold' : 'text-ink'}`

    return(
        <>
            <a href='#content' className='sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:z-50 focus:bg-white focus:px-4 focus:py-2 focus:rounded-full focus:shadow-lg'>Skip to content</a>
            <header className='sticky top-0 z-30 bg-white/85 backdrop-blur-md backdrop-saturate-150 border-b border-line'>
                <div className='max-w-[72rem] mx-auto px-5 md:px-8 h-15 flex items-center gap-6'>
                    <Link to='/' aria-label='David Jelke, home'>
                        <img src={initials} alt='' className='w-8'/>
                    </Link>
                    <nav aria-label='Main' className='ml-auto flex items-center gap-4 sm:gap-6 text-[0.95rem] font-medium'>
                        <Link to='/#work' className='hidden sm:inline text-ink hover:text-brand'>Work</Link>
                        <NavLink to='/about' className={navClass}>About</NavLink>
                        <NavLink to='/philosophy' className={navClass}>Philosophy</NavLink>
                        {contact.resume &&
                            <a href={contact.resume} target='_blank' rel='noreferrer' className='inline-flex items-center rounded-full bg-ink px-4 py-2 text-sm font-semibold text-white hover:bg-brand'>Resume</a>
                        }
                    </nav>
                </div>
                {isCaseStudy &&
                    <div
                        aria-hidden='true'
                        className='absolute left-0 -bottom-px h-0.5 w-full origin-left bg-brand'
                        style={{transform: `scaleX(${progress})`}}
                    />
                }
            </header>
            <div id='content'>
                <Outlet />
            </div>
            <footer id='contact' className='border-t border-line mt-16 scroll-mt-20'>
                <div className='max-w-[72rem] mx-auto px-5 md:px-8 py-12 flex flex-wrap items-center justify-between gap-6'>
                    <div>
                        <p className='m-0 text-xl font-semibold text-ink'>Let's build something healthy and fun.</p>
                        {contact.email && <p className='m-0 mt-1 text-base text-muted select-all'>{contact.email}</p>}
                    </div>
                    <div className='flex flex-wrap gap-3'>
                        {contact.email && <a href={`mailto:${contact.email}`} className='rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand'>Email me</a>}
                        {contact.linkedin && <a href={contact.linkedin} target='_blank' rel='noreferrer' className='rounded-full px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink'>LinkedIn</a>}
                        {contact.resume && <a href={contact.resume} target='_blank' rel='noreferrer' className='rounded-full px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink'>Resume (PDF)</a>}
                    </div>
                </div>
            </footer>
        </>
    )
}
