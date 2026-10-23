import memoji from '../assets/home/memoji.webp'
import toast from '../assets/budder/22-toast.webp'
import fastFacts from '../assets/search/fastFacts.png'
import quoteMap from '../assets/mclResearch/quoteMap.webp'
import { Link } from 'react-router-dom'
import { projects } from '../projects'

const superpowers = [
    {
        title: 'I make connections no one else thinks of',
        body: 'Sharing a podcast is the bread. Your reaction is the butter. Put them together and you get a Toast, the core idea behind Budder.',
        image: toast,
        alt: 'A Toast from Budder: an audio reaction bubble paired with a podcast clip, labeled bread and butter',
        fit: 'contain',
        to: '/projects/budder',
        from: 'Budder',
    },
    {
        title: 'I simplify complex topics',
        body: 'A histology supervisor listed six things she needs from a test. I put them on one line under every search result.',
        image: fastFacts,
        alt: 'Fast Facts tabs expanding to show specimen type, stability, turnaround time and performing lab',
        fit: 'contain',
        to: '/projects/search',
        from: 'Search grows up',
    },
    {
        title: 'I tell human-centered stories',
        body: "I pin every participant quote to the part of the screen it's about, so the team reads feedback in context instead of in a spreadsheet.",
        image: quoteMap,
        alt: 'Homepage wireframe with participant quotes pinned to the sections they describe',
        fit: 'cover',
        to: '/projects/mclResearch',
        from: 'Usability testing',
    },
]

export default function Home(){
    return(
        <main>
            <section className='pt-16 pb-12 md:pt-28 md:pb-16 mb-0 grid md:grid-cols-[auto_1fr] gap-6 md:gap-12 items-center'>
                <img src={memoji} alt='Memoji of David with a lightbulb glowing above his head' className='w-24 md:w-32 motion-safe:animate-rise'/>
                <div>
                    <p className='m-0 mb-4 inline-flex items-center gap-2 text-sm font-semibold text-ok md:text-sm'>
                        <i aria-hidden='true' className='size-2 rounded-full bg-ok ring-4 ring-ok/15'/>
                        Open to UX and product design roles
                    </p>
                    <h1 className='text-[2.2rem] md:text-5xl lg:text-[3.6rem] leading-[1.1] motion-safe:animate-rise'>
                        Hi, I'm David. I design to help people lead <em className='not-italic text-brand'>healthy lives</em> and have fun along the way.
                    </h1>
                    <p className='mt-4 mb-0 max-w-2xl text-lg md:text-xl'>UX designer and researcher, most recently at Mayo Clinic Laboratories. Trained in neuroscience at Dartmouth and in human-centered design at Northwestern.</p>
                    <div className='mt-6 flex flex-wrap gap-3'>
                        <a href='#work' className='rounded-full bg-ink px-5 py-2.5 text-sm font-semibold text-white hover:bg-brand'>See my work</a>
                        <a href='#contact' className='rounded-full px-5 py-2.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink'>Get in touch</a>
                    </div>
                </div>
            </section>

            <section id='work' aria-labelledby='work-heading' className='pb-16 mb-0'>
                <h2 id='work-heading' className='text-2xl lg:text-2xl mb-5'>Selected work</h2>
                <ul className='m-0 p-0 list-none border-t border-line'>
                    {projects.map(project => (
                        <li key={project.to} className='m-0 border-b border-line'>
                            <Link to={project.to} className='group grid sm:grid-cols-[1fr_minmax(0,15rem)] gap-4 sm:gap-8 items-center py-7'>
                                <div>
                                    <h3 className='m-0 text-xl lg:text-[1.4rem] transition-colors group-hover:text-brand'>{project.title}</h3>
                                    <p className='mt-1.5 mb-0 max-w-xl'>{project.summary}</p>
                                    <div className='mt-3 flex flex-wrap gap-1.5'>
                                        {project.tags.map(tag => <p key={tag} className='m-0 rounded-full bg-tint px-2.5 py-0.5 text-xs font-semibold text-body md:text-xs'>{tag}</p>)}
                                    </div>
                                </div>
                                <img src={project.image} alt='' className='order-first sm:order-none aspect-[16/10] w-full object-cover rounded-xl border border-line transition-transform duration-300 group-hover:scale-[1.03] motion-reduce:transition-none'/>
                            </Link>
                        </li>
                    ))}
                </ul>
            </section>

            <div className='bg-tint -mb-16'>
                <section aria-labelledby='powers-heading' className='py-16 mb-0'>
                    <h2 id='powers-heading' className='text-2xl lg:text-2xl'>Three superpowers</h2>
                    <div className='grid md:grid-cols-3 gap-6'>
                        {superpowers.map(power => (
                            <article key={power.title} className='flex flex-col overflow-hidden rounded-2xl border border-line bg-white'>
                                <img
                                    src={power.image}
                                    alt={power.alt}
                                    className={`aspect-[4/3] w-full bg-white border-b border-line ${power.fit === 'contain' ? 'object-contain p-4' : 'object-cover object-top'}`}
                                />
                                <div className='flex flex-1 flex-col gap-2 p-5'>
                                    <h3 className='m-0 text-lg lg:text-lg'>{power.title}</h3>
                                    <p className='m-0 text-base leading-7 md:text-base'>{power.body}</p>
                                    <Link to={power.to} className='mt-auto pt-2 text-sm font-semibold text-brand hover:underline'>From {power.from} →</Link>
                                </div>
                            </article>
                        ))}
                    </div>
                </section>
            </div>
        </main>
    )
}
