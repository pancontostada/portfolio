import memoji from '../assets/memoji.webp'
import signature from '../assets/signature.gif'
import nmVideo from '../assets/nm-trailer.mp4'
import budderTrailerOne from '../assets/budder-trailer-1.mp4'
import budderTrailerTwo from '../assets/budder-trailer-2.mp4'
import mclResearchPreview from '../assets/mcl-research-preview.webp'
import mclDsPreview from '../assets/mcl-ds-preview.webp'
import budderPreview from '../assets/budder-preview.webp' 
import { Link } from 'react-router-dom'
import { useRef } from 'react'


export default function Home(){
    const videoRefs = useRef([])

    function playNextVideo(videoIndex){
        videoRefs.current[videoIndex + 1]?.play()
    }

    return(
        <main>
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
                </div>
                <img src={signature} className='w-96 mx-auto my-6'/>
                <h3 className='text-xl text-center mb-6'>...also, I have 3 superpowers</h3>
                <h2 className='text-6xl text-center mb-6'>🦸🏻‍♂️</h2>
            </section>
            <section className='px-8 pt-6 pb-6'>
                <ol className='list-decimal list-inside flex flex-col gap-6 lg:flex-row lg:wrap'>
                    <li className='w-1/2'>
                        <p className='mb-2 inline-block'>I spot unsung opportunities</p>
                        <video ref={video => videoRefs.current[0] = video} src={budderTrailerTwo} autoPlay controls muted playsInline onEnded={() => playNextVideo(0)} className='video-controls aspect-video w-full object-contain bg-white'/>
                    </li>
                    <li className='w-1/2'>
                        <p className='mb-2 inline-block'>I wrangle unruly data</p>
                        <video ref={video => videoRefs.current[1] = video} src={nmVideo} controls muted playsInline onEnded={() => playNextVideo(1)} className='video-controls aspect-video w-full object-contain bg-white'/>
                    </li>
                    <li className='w-1/2'>
                        <p className='mb-2 inline-block'>I tell human-centered stories</p>
                        <video ref={video => videoRefs.current[2] = video} src={budderTrailerOne} controls muted playsInline className='video-controls aspect-video w-full object-contain bg-white'/>
                    </li>
                </ol>
            </section>
            <section className='bg-blue-50 px-8 pt-6 pb-6 w-full'>
                <h2 className='py-6 text-center'>Projects</h2>
                <ul className='flex flex-col gap-6 mx-auto lg:flex-row lg:flex-wrap lg:justify-center'>
                    <li className='w-3/8'>
                        <Link to='projects/mclResearch'>
                            <img src={mclResearchPreview} className='w-80 mx-auto lg:w-auto'/>
                        </Link>
                    </li>
                    <li className='w-3/8'>
                        <Link to='projects/mclDs'>
                            <img src={mclDsPreview} className='w-80 mx-auto lg:w-auto'/>
                        </Link>
                    </li>
                    <li className='w-3/8 aspect-[1.33/1]'>
                        <Link to='projects/budder'>
                            <img src={budderPreview} className='w-80 mx-auto lg:w-auto object-cover lg:h-full'/>
                        </Link>
                    </li>
                </ul>
            </section>
        </main>
    )
}