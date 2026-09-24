import budderHero from '../assets/budder/budder-hero.webp'
import overview from '../assets/budder/01-overview.webp'
import problem from '../assets/budder/02-problem.webp'
import interview from '../assets/budder/03-interview.webp'
import competitiveAnalysis from '../assets/budder/04-competitiveAnalysis.webp'
import spotifyQuote from '../assets/budder/05-spotifyQuote.png'
import corinneTestimonial from '../assets/budder/06-corinneTestimonial.webp'
import markTestimonnial from '../assets/budder/07-markTestimonial.webp'
import handSketches from '../assets/budder/08-handSketches.webp'
import groupInterview from '../assets/budder/09-groupInterview.webp'
import doubleQuote from '../assets/budder/10-doubleQuote.webp'
import v2 from '../assets/budder/11-v2.webp'
import anotherInterview from '../assets/budder/12-anotherInterview.webp'
import returnToPantry from '../assets/budder/13-returnToPantry.webp'
import moodBoard from '../assets/budder/14-moodBoard.webp'
import styles from '../assets/budder/15-styles.webp'
import logotype from '../assets/budder/16-logotype.png'
import contentCollection from '../assets/budder/17-contentCollection.gif'
import addWow from '../assets/budder/18-addWow.gif'
import voiceCommand from '../assets/budder/19-voiceCommand.mp4'
import eBook from '../assets/budder/20-eBook.gif'
import photoOfBook from '../assets/budder/21-photoOfBook.gif'
import toast from '../assets/budder/22-toast.webp'
import sendAToast from '../assets/budder/23-sendAToast.mp4'
import sendToast from '../assets/budder/24-sendToast.gif'
import network from '../assets/budder/25-network.gif'
import newConvo from '../assets/budder/26-newConvo.webp'
import finalVersion from '../assets/budder/27-finalVersion.webp'
import testimonialOne from '../assets/budder/28-testimonialOne.webp'
import testimonialTwo from '../assets/budder/29-testimonialTwo.webp'
import testimonialThree from '../assets/budder/30-testimonialThree.webp'
import pricing from '../assets/budder/31-pricing.webp'
import benchmark from '../assets/budder/32-benchmark.webp'

import Chunk from '../components/Chunk.jsx'

/*

to-do list:
-add lightbox feature to photos 
-complete responsiveness

*/

export default function Budder(){
    return(
        <main className="h-full">
            <div className="h-full">
                <img src={budderHero} className='h-full object-cover w-full'/>
            </div>
            <section>
                <h2 className='mt-8'>Overview</h2>
                <Chunk imageUrl={overview} hasBoxShadow={false}/>
            </section>
            <section>
                <h2>Problem</h2>
                <Chunk imageUrl={problem} hasBoxShadow={false} imgStyle={{width: '20rem', margin: '0 auto'}}>Has this ever happened to you?</Chunk>
                <p>For my Master’s Thesis at Northwestern I was interested in exploring how we consume content together. I ended up creating <span>the book club of the future.</span></p>
            </section>
            <section>
                <h2>Define</h2>
                <h3>User Interivews</h3>
                <p>I interviewed <span>13 users</span> to get a better understanding of unmet needs. I spoke with a CEO, a TikTok influencer, a Bible study class, and several avid readers and podcast listeners.</p>
                <img src={interview} className='w-full mb-16'/>
                <h3>Competitive Analysis</h3>
                <Chunk imageUrl={competitiveAnalysis}>I assessed platforms where users share reading and podcast content across several domains. I found that many were missing important ingredients in successfully generating <span>meaningful conversations</span> amongst <span>close friends.</span> </Chunk>
                <h3>Insights</h3>
                <div className='grid grid-cols-3 gap-4 mb-16'>
                    <div className='flex flex-col justify-between'>
                        <p>The definition of reading is expanding to include <span>audio</span></p>
                        <img src={spotifyQuote} alt="" className='shadow-xl rounded-xl' />
                    </div>
                    <div>
                        <p className='mb-2'>People prefer having deep conversations with <span>friends</span> vs. online strangers</p>
                        <img src={corinneTestimonial} alt="" className='shadow-xl rounded-xl'/>
                    </div>
                    <div className='flex flex-col justify-between'>
                        <p>It’s hard to record and share <span>in-the-moment</span> reactions to content</p>
                        <img src={markTestimonnial} alt="" className='shadow-xl rounded-xl'/>
                    </div>
                </div>
                <p className='leading-24 mb-16 text-5xl h-[85vh] flex flex-col justify-center'><div><span className="text-6xl text-gray-700 font-regular">How might we</span> use long-form content to <span>jumpstart meaningful conversations</span> between friends in a way that feels effortless?</div></p>
            </section>
            <section>
                <h2>Design</h2>
                <h3>Mockups v1</h3>
                <img src={handSketches} className='mb-16'/>
                <h3>User testing v1</h3>
                <Chunk imageUrl={groupInterview}>User feedback indicated great interest in the <span>One Cool Thing</span>, <span>Pin It</span>, and <span>Network</span> features, while shrinking from the Echo and Friend Oath features. So I decided to focus on the three frontrunners and turning those into digital prototypes.</Chunk>
                <img src={doubleQuote} className='mb-16 shadow-xl rounded-xl'/>
                <h3>Mockups v2</h3>
                <img src={v2} className='mb-16' />
                <h3>User testing v2</h3>
                <div className="flex gap-8">
                    <Chunk imageUrl={anotherInterview}>In the next round of user testing, I learned that in addition to saving reactions “in the moment”, users also wanted to be able to <span>share their reaction</span> at the end of a podcast and highlight different features. So I made that.</Chunk>
                    <img src={returnToPantry} className='pb-12 w-60'/>
                </div>
                <h3>Mood Board + Style Guide</h3>
                <p>I wanted the design evoke a sense of <span>playfulness</span> and <span>approachability</span> through bright, contrasting colors and lines with thick stroke and shadow. For font, I thought a hand-drawn style for title text would complement the theme of <span>whimsy</span>.</p>
                <img src={moodBoard} className='mb-4'/>
                <img src={styles} className='mb-16' />
            </section>
            <section>
                <h2>Deliver</h2>
                <h3>(sound on)</h3>
                <video src={voiceCommand} controls className='mb-16'></video>
                <div className="h-[85vh] flex flex-col justify-center">
                    <div className='flex flex-col items-center mb-20'>
                        <img src={logotype} className='mb-8'/>
                        <p className='text-3xl bold font-display'>Serving savory conversations with the people you love</p>
                    </div>
                </div>
                <h3>Extract, record, share</h3>
                <Chunk imageUrl={addWow} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>While you’re consuming content, Budder lets you easily <span>extract</span> a piece of text or audio, <span>record</span> your reaction to it, and <span>share</span> it with a friend.</Chunk>
                <h3>A Toast!</h3>
                <div className="mb-40">
                    <Chunk imageUrl={toast} hasBoxShadow={false}>Budder seamlessly combines the content you share and your reaction into a <span>Toast</span>.</Chunk>
                </div>
                <h3>A Toast in Action</h3>
                <video src={sendAToast} autoPlay controls muted className='mb-16'></video>
                <h3>Share moments with friends</h3>
                <Chunk imageUrl={sendToast} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>The resulting Toast helps jumpstart fun and <span>meaningful conversations</span> with friends.</Chunk>
                <Chunk imageUrl={network} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder keeps track of the Toasts you send and their resulting conversations through <span>Picnic</span>. Picnic gives you a visual, birds-eye view of your social reading network.</Chunk>
                <h3>Load your content</h3>
                <Chunk imageUrl={contentCollection} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder lets you access your favorite <span>books and podcasts</span> in one app.</Chunk>
                <h3>Integrate your books</h3>
                <Chunk imageUrl={eBook} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder works with your favorite <span>e-books</span>.</Chunk>
                <Chunk imageUrl={photoOfBook} hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>And even works for <span>physical books</span> by leveraging live text technology.</Chunk>
                <h3 className='text-center text-3xl mb-12'>Which conversation would you rather be a part of?</h3>
                <div className="flex justify-center gap-12 pb-16">
                    <img src={problem} className='w-2/5'/>
                    <img src={newConvo} className='w-2/5'/>
                </div>
                <h3>Final wireframes</h3>
                <img src={finalVersion} className='pb-20' />
                <h3>Testimonials</h3>
                <div className='flex flex-col mb-16'>
                    <img src={testimonialOne} className='w-2/3 self-end'/>
                    <img src={testimonialTwo} className='w-2/3'/>
                    <img src={testimonialThree} className='w-2/3 self-end'/>
                </div>
                <h3>Business model</h3>
                <div className="flex items-start justify-between mb-16">
                    <p className='basis-sm'>Budder operates on a <span>freemium</span> model, meaning that paid subscribers get extra benefits. With the Pro version of Budder, you can add more friends and you can also see what the friends of your friends are reading and how similar your content is to theirs.</p>
                    <img src={pricing} className='w-1/2'/>
                </div>
                <h3>See how Budder compares</h3>
                <img src={benchmark} className=''/>
            </section>
            <section>
                <h2>What I learned</h2>
                <ul className='leading-8 flex flex-col gap-4'>
                    <li>Passion projects are super <span>thrilling</span>, absolutely <span>draining</span>, and in the long-term, <span>rewarding</span>.</li>
                    <li>Don’t use research as an excuse to avoid starting the first iteration. <span>Use the first draft as a springboard</span> for asking people questions.</li>
                    <li><span>Drawing is a method of thinking in pictures.</span></li>
                    <li>Don’t make <span>components in Figma</span> before you need to.</li>
                    <li>If I had more time, I would have tested the final prototype with more users, especially <span>podcast listeners</span>. I would have created a living, clickable Toast for users to more accurately convey the idea I had in my head. I would code this app into a real thing and get all my friends hooked on it and wean them off of TikTok. </li>
                </ul>
            </section>
            <section className='pb-16'>
                <h2>Final presentation</h2>
                <p>insert youtube video link here</p>
                <iframe 
                    src="https://www.youtube.com/embed/tkYbgeCBi4o?si=FCXttho18IpYZtoG" 
                    className='w-full h-[500px]'
                    title="YouTube video player" 
                    frameborder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerpolicy="strict-origin-when-cross-origin" 
                    allowfullscreen>
                </iframe>
            </section>
        </main>
    )
}