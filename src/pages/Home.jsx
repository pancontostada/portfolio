import memoji from '../assets/home/memoji.webp'
import signature from '../assets/home/signature.gif'
import nmVideo from '../assets/home/nm-trailer.mp4'
import budderTrailerOne from '../assets/home/budder-trailer-1.mp4'
import budderTrailerTwo from '../assets/home/budder-trailer-2.mp4'
import mclResearchPreview from '../assets/home/mcl-research-preview.webp'
import mclDsPreview from '../assets/home/mcl-ds-preview.webp'
import budderPreview from '../assets/home/budder-preview.webp' 
import { Link } from 'react-router-dom'
import { useRef } from 'react'

export default function Home(){

    const videoRefs = useRef([]) 
    function playNextVideo(videoIndex){
        videoRefs.current[videoIndex + 1]?.play()
    }

    return(
        <main className='h-full'>
            <section className='h-full flex flex-col justify-between'>
                <div>
                    <div className='grid md:grid-cols-[auto_1fr] grid-cols-1 md:gap-8 lg:gap-16 md:pt-10'>
                        <img src={memoji} className='w-32 mx-auto my-8 lg:w-40'/>
                        <div className='md:self-center relative top-6'>
                            <p className='text-3xl md:text-4xl md:leading-12 lg:text-5xl'>Hi, my name is <span className='text-blue-500'>David</span>.</p>
                            <p className='text-2xl md:text-3xl lg:text-4xl md:leading-12'> I'm a <span className='text-blue-500'> UX Designer </span> and <span className='text-blue-500'> Researcher</span>.</p>
                            <p className='text-xl md:text-2xl lg:text-3xl md:leading-12'>And I design to help people lead <span className='text-blue-500'>healthy </span>lives and have <span className='text-blue-500'>fun</span> along the way.</p>
                        </div>
                    </div>
                    <img src={signature} className='max-w-[500px] mx-auto w-full'/>
                </div>
                <p className='md:text-xl'>...also, I have 3 superpowers 🦸🏻‍♂️</p>
            </section>
            <section className='px-8 pt-6 pb-6'>
                <ol className='list-decimal list-inside flex flex-col gap-6 lg:flex-row lg:wrap'>
                    <li className='lg:w-1/2'>
                        <p className='mb-2 inline-block'>I spot unsung opportunities</p>
                        <video 
                            src={ budderTrailerTwo }
                            ref={ video => videoRefs.current[0] = video }
                            onEnded={ () => playNextVideo(0) }
                            className= 'video-controls aspect-video bg-white object-contain w-full'
                            autoPlay playsInline controls muted
                        />
                    </li>
                    <li className='lg:w-1/2'>
                        <p className='mb-2 inline-block'>I wrangle unruly data</p>
                        <video 
                            src={ nmVideo }
                            ref={ video => videoRefs.current[1] = video }
                            onEnded={ () => playNextVideo(1) }
                            className= 'video-controls aspect-video'
                            playsInline controls muted
                        />
                    </li>
                    <li className='lg:w-1/2'>
                        <p className='mb-2 inline-block'>I tell human-centered stories</p>
                        <video 
                            src={ budderTrailerOne }
                            ref={ video => videoRefs.current[2] = video }
                            onEnded={ () => playNextVideo(2) }
                            className= 'video-controls aspect-video'
                            playsInline controls muted
                        />
                    </li>
                </ol>
            </section>
            <section className='bg-blue-50 px-8 pt-6 pb-6 w-full'>
                <h2 className='py-6 text-center'>Projects</h2>
                    <ul className='
                        grid grid-cols-1 gap-6 mx-auto max-w-[400px] sm:max-w-full
                        sm:grid-cols-2'
                    >
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
            </section>
        </main>
    )
}