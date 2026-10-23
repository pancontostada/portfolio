import { Link } from 'react-router-dom'
import { projects } from '../projects'

// Closes a case study with a link to the next one, wrapping from the last back to the first.
export default function NextProject({currentPath}){

    const index = projects.findIndex(project => project.to.toLowerCase() === currentPath.toLowerCase().replace(/\/$/, ''))
    if(index === -1) return null

    const next = projects[(index + 1) % projects.length]
    const isWrapping = index === projects.length - 1

    return(
        <section aria-labelledby='next-project-heading' className='mt-20 mb-0'>
            <Link to={next.to} className='group grid sm:grid-cols-[1fr_minmax(0,18rem)] gap-6 sm:gap-10 items-center rounded-2xl border border-line bg-tint p-6 sm:p-8 transition-colors hover:border-brand'>
                <div>
                    <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand md:text-xs'>
                        {isWrapping ? 'Back to the first case study' : 'Next case study'} · {(index + 1) % projects.length + 1} of {projects.length}
                    </p>
                    <h2 id='next-project-heading' className='mt-2 mb-0 transition-colors group-hover:text-brand'>{next.title}</h2>
                    <p className='mt-2 mb-0 max-w-xl'>{next.summary}</p>
                    <span aria-hidden='true' className='mt-5 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white transition-colors group-hover:bg-brand'>
                        Read it
                        <svg viewBox='0 0 20 20' className='w-4 h-4 transition-transform group-hover:translate-x-1 motion-reduce:transition-none' fill='none' stroke='currentColor' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'>
                            <path d='M4 10h12M11 5l5 5-5 5'/>
                        </svg>
                    </span>
                </div>
                <img src={next.image} alt='' className='order-first sm:order-none aspect-[16/10] w-full object-cover rounded-xl border border-line'/>
            </Link>
        </section>
    )
}
