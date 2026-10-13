import memoji from '../assets/home/memoji.webp'
import signature from '../assets/home/signature.gif'
import nmVideo from '../assets/home/nm-trailer.mp4'
import budderTrailerOne from '../assets/home/budder-trailer-1.mp4'
import budderTrailerTwo from '../assets/home/budder-trailer-2.mp4'
import mclResearchPreview from '../assets/home/mcl-research-preview.webp'
import mclDsPreview from '../assets/home/mcl-ds-preview.webp'
import budderPreview from '../assets/home/budder-preview.webp' 
import search from '../assets/home/search.png' 
import budderThumbnail from '../assets/home/budderThumbnail.png' 
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Home(){

    return(
        <main className='h-full'>
            <section className='h-full flex flex-col justify-between max-w-[1200px] w-auto mx-auto px-12'>
                <div>
                    <div className='grid md:grid-cols-[auto_1fr] grid-cols-1 md:gap-8 lg:gap-16 md:pt-10'>
                        <img src={memoji} className='w-32 mx-auto my-8 lg:w-40'/>
                        <div className='md:self-center relative top-6'>
                            <p className='text-3xl md:text-4xl md:leading-12 lg:text-5xl'>Hi, my name is <span className='text-blue-500'>David</span>.</p>
                            <p className='text-2xl md:text-3xl lg:text-4xl md:leading-12'> I'm a <span className='text-blue-500'> UX Designer </span> and <span className='text-blue-500'> Researcher</span>.</p>
                            <p className='text-xl md:text-2xl lg:text-3xl md:leading-12'>And I design to help people lead <span className='text-blue-500'>healthy </span>lives and have <span className='text-blue-500'>fun</span> along the way.</p>
                        </div>
                    </div>
                    <img src={signature} className='lg:max-w-[500px] mx-auto w-full md:max-w-[400px] max-w-[250px]'/>
                </div>
            </section>
            <section className='px-8 pt-6 pb-6'>
                <p className='md:text-xl relative bottom-28'>...also, I have 3 superpowers 🦸🏻‍♂️</p>
                <ol className='flex flex-col gap-12'>
                    <li className='md:text-2xl'>
                        <p className='mb-8 inline-block md:text-2xl'>1. I make connections no one else thinks of</p>
                        <video 
                            src={ budderTrailerTwo }
                            className= 'video-controls aspect-video bg-white object-contain w-full'
                            autoPlay playsInline controls muted
                        />
                    </li>
                    <li>
                        <p className='mb-2 inline-block md:text-2xl'>2. I simplify complex topics</p>
                        <video 
                            src={ nmVideo }
                            className= 'video-controls aspect-video'
                            autoPlay playsInline controls muted
                            poster={budderThumbnail}
                        />
                    </li>
                    <li className=''>
                        <p className='mb-12 inline-block md:text-2xl'>3. I tell human-centered stories</p>
                        <video 
                            src={ budderTrailerOne }
                            className= 'video-controls aspect-video'
                            autoPlay playsInline controls muted
                        />
                    </li>
                </ol>
            </section>
            <section className='bg-blue-50 w-full m-0 max-w-none pb-16'>
                <div className='max-w-[1000px] w-4/5 mx-auto'>
                    <h2 className='py-6 text-center'>Projects</h2>
                    <ul className='grid grid-cols-[repeat(auto-fit,minmax(400px,1fr))] gap-8'>
                        <li>
                            <Link to='projects/search' className='relative'>
                                <img
                                    src={search}
                                    className='aspect-[1.37/1] object-cover hover:opacity-50 transition-opacity duration-300'
                                />
                                <div className='absolute inset-0 bg-black/75 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 p-8 gap-4'>
                                    <h3 className='text-white text-center'>Mayo Clinic Labs Search Enhancement</h3>
                                    <p className='text-white text-center text-md'>Upgrading search to include features like filtering and AI.</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='projects/mclResearch' className='relative'>
                                <img
                                    src={mclResearchPreview}
                                    className='aspect-[1.37/1] object-cover hover:opacity-50 transition-opacity duration-300'
                                />
                                <div className='absolute inset-0 bg-black/75 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 p-4 gap-4'>
                                    <h3 className='text-white text-center'>Mayo Clinic Labs User Research</h3>
                                    <p className='text-white text-center text-md'>Turning usability research into clear product recommendations.</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='projects/mclDs' className='relative'>
                                <img
                                    src={mclDsPreview}
                                    className='aspect-[1.37/1] object-cover'
                                />
                                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/75 p-4 gap-4'>
                                    <h3 className='text-white text-center'>Mayo Clinic Labs Design System</h3>
                                    <p className='text-white text-center text-md'>An MVP design system built for consistency in design and code.</p>
                                </div>
                            </Link>
                        </li>
                        <li>
                            <Link to='projects/budder' className='relative'>
                                <img
                                    src={budderPreview}
                                    className='aspect-[1.37/1] object-cover hover:opacity-50 transition-opacity duration-300'
                                />
                                <div className='absolute inset-0 flex flex-col justify-center items-center opacity-0 transition-opacity duration-300 hover:opacity-100 bg-black/75 p-4 gap-4'>
                                    <h3 className='text-white text-center'>Budder</h3>
                                    <p className='text-white text-center'>A new way for friends to share books, podcasts, and conversation.</p>
                                </div>
                            </Link>
                        </li>
                    </ul>
                </div>
            </section>
        </main>
    )
}