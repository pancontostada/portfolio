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
            <section className='px-8 lg:px-16 lg:mt-12'>
                <div className='pt-4 lg:flex lg:items-center lg:gap-12 lg:pt-8'>
                    <div className="flex items-center gap-4 mb-12 lg:flex-col">
                        <h1 className='text-3xl order-1 text-right pt-12 lg:hidden'>Hi, my name is <span className='text-blue-500'>David</span>.</h1>
                        <img src={memoji} className='w-24 lg:w-64'/>
                    </div>
                    <div>
                        <h1 className='hidden text-2xl lg:block lg:text-6xl lg:mb-12 font-medium'>Hi, my name is <span className='text-blue-500'>David</span>.</h1>
                        <h1 className='text-2xl mb-14 lg:text-5xl lg:text-left lg:mb-12 font-medium'>
                            I'm a
                                <span className='text-blue-500'> UX Designer </span>
                            and
                                <span className='text-blue-500'> Researcher</span>
                            .
                        </h1>
                        <h1 className='text-xl text-right lg:text-4xl lg:text-left font-medium'>And I design to help people lead <span className='text-blue-500'>healthy </span>lives and have <span className='text-blue-500'>fun</span> along the way.</h1>
                    </div>
                    <img src={signature} className='w-96 mx-auto my-6'/>
                </div>
            </section>
                <h3 className='text-xl text-center mb-6'>...also, I have 3 superpowers</h3>
                <h2 className='text-6xl text-center mb-6'>🦸🏻‍♂️</h2>
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
                        grid grid-cols-1 gap-6 mx-auto 
                        sm:bg-red-500 sm:grid-cols-2'
                    >
                        <li>
                            <Link to='projects/mclResearch'>
                                <img 
                                    src={mclResearchPreview} 
                                    className='
                                        mx-auto transition-opacity duration-300 aspect-[1.3/1] aspect-[1.3/1]
                                        hover:opacity-50
                                    '
                                />
                            </Link>
                        </li>
                        <li>
                            <Link to='projects/mclDs'>
                                <img src={mclDsPreview} className='mx-auto hover:opacity-50 transition-opacity duration-300 aspect-[1.3/1]'/>
                            </Link>
                        </li>
                        <li>
                            <Link to='projects/budder'>
                                <img src={budderPreview} className='mx-auto object-cover hover:opacity-50 transition-opacity duration-300 aspect-[1.3/1]'/>
                            </Link>
                        </li>
                    </ul>
            </section>
        </main>
    )
}