import memoji from '../assets/home/memoji.webp'
import signature from '../assets/home/signature.gif'
import mclResearchPreview from '../assets/home/mcl-research-preview.webp'
import mclDsPreview from '../assets/home/mcl-ds-preview.webp'
import budderPreview from '../assets/home/budder-preview.webp'
import search from '../assets/home/search.png'
import fastFactsCrop from '../assets/search/crops/calloutFastFacts.webp'
import quoteMap from '../assets/mclResearch/quoteMap.webp'
import { Link } from 'react-router-dom'

const projects = [
    {
        to: 'projects/search',
        image: search,
        meta: 'Mayo Clinic Labs · Product design',
        title: 'Search Enhancement',
        outcome: 'Fast Facts, labels and an AI overview that lab techs can trust.',
    },
    {
        to: 'projects/mclResearch',
        image: mclResearchPreview,
        meta: 'Mayo Clinic Labs · Research',
        title: 'Usability Testing',
        outcome: 'Turning 7 moderated studies into recommendations developers can act on.',
    },
    {
        to: 'projects/mclDs',
        image: mclDsPreview,
        meta: 'Mayo Clinic Labs · Systems',
        title: 'Design System MVP',
        outcome: 'Buttons, forms and tables in Figma and on npm, with dark mode.',
    },
    {
        to: 'projects/budder',
        image: budderPreview,
        meta: "Northwestern · Master's thesis",
        title: 'Budder',
        outcome: 'A social reading app that turns a podcast moment into a conversation.',
    },
]

const superpowers = [
    {
        title: 'I simplify complex topics',
        body: 'A histology supervisor listed six things she needs from a test. I put them on one line under each search result.',
        to: 'projects/search',
        from: 'Search Enhancement',
        image: fastFactsCrop,
        alt: 'Search result with the Fast Facts row open, showing a turnaround time of 3-5 days',
    },
    {
        title: 'I tell human-centered stories',
        body: "I pin every participant quote to the part of the screen it's about, so the team reads feedback in context instead of in a spreadsheet.",
        to: 'projects/mclResearch',
        from: 'Usability Testing',
        image: quoteMap,
        alt: 'Homepage wireframe with participant quotes pinned to the sections they describe',
    },
    {
        title: 'I make connections no one else thinks of',
        body: 'Sharing a podcast is the bread. Your reaction is the butter. Put them together and you get a Toast, the core idea behind Budder.',
        to: 'projects/budder',
        from: 'Budder',
        image: budderPreview,
        alt: 'Three Budder phone screens showing Toasts shared in a chat',
    },
]

export default function Home(){
    return(
        <main>
            <section className='max-w-[1100px] w-auto mx-auto px-6 md:px-12 py-12 md:py-20 mb-0 grid md:grid-cols-[auto_1fr] gap-8 md:gap-12 items-center'>
                <img src={memoji} alt='Memoji of David with a lightbulb glowing above his head' className='w-28 lg:w-36 mx-auto md:mx-0'/>
                <div>
                    <p className='m-0 text-sm leading-6 font-bold uppercase tracking-widest text-blue-700'>UX designer &amp; researcher</p>
                    <h1 className='mt-3 text-balance text-3xl md:text-4xl lg:text-5xl font-extrabold leading-tight text-gray-900'>I design tools that help people stay healthy and still have fun.</h1>
                    <p className='mt-4 mb-0 max-w-xl'>Most recently at <span>Mayo Clinic Laboratories</span>, where I redesigned test-catalog search for lab techs and clinicians.</p>
                    <img src={signature} alt='David Jelke signature' className='mt-4 w-48 lg:w-56'/>
                </div>
            </section>
            <section className='bg-blue-50 w-full max-w-none m-0 px-6 md:px-12 py-12 md:py-16'>
                <div className='max-w-[1100px] mx-auto'>
                    <h2>Selected work</h2>
                    <ul className='grid grid-cols-[repeat(auto-fit,minmax(min(100%,17rem),1fr))] gap-6'>
                        {projects.map(project => (
                            <li key={project.to} className='m-0'>
                                <Link
                                    to={project.to}
                                    className='flex flex-col h-full bg-white rounded-xl overflow-hidden border border-blue-100 transition duration-200 hover:-translate-y-0.5 hover:shadow-xl motion-reduce:transition-none motion-reduce:hover:translate-y-0'
                                >
                                    <img src={project.image} alt='' className='aspect-[16/10] w-full object-cover'/>
                                    <div className='flex flex-col gap-1 p-5'>
                                        <p className='m-0 text-xs font-bold uppercase tracking-wider text-gray-500'>{project.meta}</p>
                                        <h3 className='m-0 text-lg lg:text-xl text-gray-900'>{project.title}</h3>
                                        <p className='m-0 text-base leading-6 md:text-base'>{project.outcome}</p>
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>
            <section className='max-w-[1100px] w-auto mx-auto px-6 md:px-12 py-12 md:py-16 mb-0'>
                <h2>How I work</h2>
                <div className='flex flex-col gap-12'>
                    {superpowers.map(power => (
                        <div key={power.title} className='grid md:grid-cols-[1fr_1.25fr] gap-6 md:gap-10 items-center'>
                            <div>
                                <h3 className='mb-2 text-gray-900 text-balance'>{power.title}</h3>
                                <p className='mb-3'>{power.body}</p>
                                <Link to={power.to} className='font-bold text-blue-700 hover:underline'>From {power.from} &rarr;</Link>
                            </div>
                            <img src={power.image} alt={power.alt} className='w-full max-h-[26rem] object-cover object-top rounded-xl border border-gray-200'/>
                        </div>
                    ))}
                </div>
            </section>
        </main>
    )
}
