import memoji from '../assets/memoji.webp'
import signature from '../assets/signature.gif'
import nmVideo from '../assets/nm-trailer.mp4'
import budderTrailerOne from '../assets/budder-trailer-1.mp4'
import budderTrailerTwo from '../assets/budder-trailer-2.mp4'
import mclResearchPreview from '../assets/mcl-research-preview.webp'
import mclDsPreview from '../assets/mcl-ds-preview.webp'
import budderPreview from '../assets/budder-preview.webp' 


export default function Home(){
    return(
        <main>
            <section className='px-8 lg:px-16'>
                <div className='lg:flex lg:items-center lg:gap-12'>
                    <div className="flex items-center gap-4 mb-6 lg:flex-col">
                        <h1 className='text-2xl order-1 text-right lg:text-6xl lg:hidden'>Hi, my name is <span className='text-blue-500'>David</span>.</h1>
                        <img src={memoji} className='w-24 lg:w-48'/>
                    </div>
                    <div>
                        <h1 className='hidden text-2xl lg:block lg:text-6xl lg:mb-8'>Hi, my name is <span className='text-blue-500'>David</span>.</h1>
                        <h1 className='text-2xl mb-6 lg:text-4xl lg:text-left lg:mb-8'>
                            I'm a
                                <span className='text-blue-500'> UX Designer </span>
                            and
                                <span className='text-blue-500'> Researcher</span>
                            .
                        </h1>
                        <h1 className='text-xl text-center lg:text-3xl lg:text-left'>And I design to help people lead <span className='text-blue-500'>healthy </span>lives and have <span className='text-blue-500'>fun</span> along the way.</h1>
                    </div>
                </div>
                <img src={signature} className='w-48 mx-auto my-6'/>
                <h3 className='text-xl text-center mb-6'>...also, I have 3 superpowers</h3>
                <h2 className='text-6xl text-center mb-6'>🦸🏻‍♂️</h2>
            </section>
            <section className='px-8 bg-blue-50 pt-6 pb-6'>
                <ol className='list-decimal flex flex-col gap-6 lg:flex-row lg:wrap'>
                    <li className='w-1/2'>
                        <p className='mb-2'>I spot unsung opportunities</p>
                        <video src={budderTrailerTwo} />
                    </li>
                    <li className='w-1/2'>
                        <p className='mb-2'>I wrangle unruly data</p>
                        <video src={nmVideo} />
                    </li>
                    <li className='w-1/2'>
                        <p className='mb-2'>I tell human-centered stories</p>
                        <video src={budderTrailerOne} />
                    </li>
                </ol>
            </section>
            <section className='px-8 pt-6 pb-6'>
                <h2 className='text-2xl py-6 text-center'>Projects</h2>
                <ul className='flex flex-col gap-6 lg:flex-row lg-wrap'>
                    <li>
                        <img src={mclResearchPreview} className='w-80 mx-auto lg:w-1/2'/>
                    </li>
                    <li>
                        <img src={mclDsPreview} className='w-80 mx-auto lg:w-1/2'/>
                    </li>
                    <li>
                        <img src={budderPreview} className='w-80 mx-auto lg:w-1/2'/>
                    </li>
                </ul>
            </section>
        </main>
    )
}