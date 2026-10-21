import {useState, useEffect} from 'react'

// A section becomes active once its top passes this fraction of the viewport height.
const ACTIVE_LINE = 0.3

function useActiveSection(ids){

    const [activeId, setActiveId] = useState(null)

    useEffect(() => {
        let frame = null

        function update(){
            frame = null
            const line = window.innerHeight * ACTIVE_LINE
            const elements = ids.map(id => document.getElementById(id)).filter(Boolean)
            let current = null
            elements.forEach(element => {
                if(element.getBoundingClientRect().top <= line) current = element.id
            })
            // The last section can be too short to reach the line, so activate it at the bottom of the page.
            const last = elements[elements.length - 1]
            if(last && last.getBoundingClientRect().bottom <= window.innerHeight + 2) current = last.id
            setActiveId(current)
        }

        function handleScroll(){
            if(frame === null) frame = requestAnimationFrame(update)
        }

        update()
        // Capture so scrolls inside the layout's scroll container are heard too.
        document.addEventListener('scroll', handleScroll, {capture: true, passive: true})
        window.addEventListener('resize', handleScroll)
        // Images load after the first check and push sections down, so re-check when the page grows.
        const resizeObserver = new ResizeObserver(handleScroll)
        resizeObserver.observe(document.body)
        ids.forEach(id => {
            const element = document.getElementById(id)
            if(element) resizeObserver.observe(element)
        })

        return () => {
            document.removeEventListener('scroll', handleScroll, {capture: true})
            window.removeEventListener('resize', handleScroll)
            resizeObserver.disconnect()
            if(frame !== null) cancelAnimationFrame(frame)
        }
    }, [ids])

    return [activeId, setActiveId]
}

export default function TableOfContents({sections, children}){

    const [isOpen, setIsOpen] = useState(false)
    const [ids] = useState(() => sections.map(section => section.id))
    const [activeId, setActiveId] = useActiveSection(ids)
    const activeLabel = sections.find(section => section.id === activeId)?.label

    function handleLinkClick(id){
        setIsOpen(false)
        setActiveId(id)
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    }

    function linkList(isModal){
        return(
            <ul className='flex flex-col m-0 p-0 list-none'>
                {sections.map(({id, label}) => {
                    const isActive = id === activeId
                    return(
                        <li key={id} className='m-0 text-base leading-6 md:text-base'>
                            <a
                                href={`#${id}`}
                                onClick={event => { event.preventDefault(); handleLinkClick(id) }}
                                aria-current={isActive ? 'location' : undefined}
                                className={`block border-l-2 py-2 transition-colors ${isModal ? 'pl-4 text-lg' : 'pl-4 text-[0.9375rem]'} ${isActive ? 'border-blue-500 text-blue-700 font-bold' : 'border-gray-200 text-gray-500 hover:text-gray-900 hover:border-gray-400'}`}
                            >
                                {label}
                            </a>
                        </li>
                    )
                })}
            </ul>
        )
    }

    return(
        <div className='xl:grid xl:grid-cols-[13rem_minmax(0,1fr)] xl:gap-8 xl:px-10'>
            <aside className='hidden xl:block'>
                <nav aria-label='On this page' className='sticky top-10 mt-16 max-h-[calc(100dvh-5rem)] overflow-y-auto'>
                    <p className='m-0 mb-3 text-xs leading-5 font-bold uppercase tracking-widest text-gray-400'>On this page</p>
                    {linkList(false)}
                </nav>
            </aside>
            <div className='min-w-0 xl:[&>section]:w-full'>
                {children}
            </div>

            <button
                className='xl:hidden fixed bottom-6 right-6 z-10 max-w-[calc(100vw-3rem)] truncate bg-blue-500 rounded-full shadow-lg text-white px-6 py-3 hover:cursor-pointer hover:bg-blue-600'
                onClick={() => setIsOpen(true)}
                aria-haspopup='dialog'
            >
                {activeLabel ? `Sections · ${activeLabel}` : 'Sections'}
            </button>
            {isOpen &&
                <div className='xl:hidden bg-black/50 fixed inset-0 z-20 flex justify-center items-center p-6' onClick={() => setIsOpen(false)}>
                    <div role='dialog' aria-label='Table of contents' className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full" onClick={event => event.stopPropagation()}>
                        <div className="flex justify-between items-start gap-8 mb-4">
                            <p className='m-0 text-2xl font-medium'>Table of contents</p>
                            <button onClick={()=> setIsOpen(false)} aria-label='Close' className='hover:cursor-pointer text-2xl leading-none hover:opacity-70'>&times;</button>
                        </div>
                        {linkList(true)}
                    </div>
                </div>
            }
        </div>
    )
}