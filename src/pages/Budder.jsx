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
import TableOfContents from '../components/TableOfContents.jsx'
import CaseStudyHeader from '../components/CaseStudyHeader'

/*

change this file 
 
*/

const sections = [
    {id: 'overview', label: 'Overview'},
    {id: 'problem', label: 'Problem'},
    {id: 'define', label: 'Define'},
    {id: 'design', label: 'Design'},
    {id: 'deliver', label: 'Deliver'},
    {id: 'what-i-learned', label: 'What I learned'},
    {id: 'final-presentation', label: 'Final Presentation'},
]

export default function Budder(){
    return(
        <main>
            <CaseStudyHeader
                kicker="Case study · Northwestern master's thesis"
                title='Budder'
                subtitle='The book club of the future: a social reading app that turns a podcast moment into a conversation between friends.'
                summary='I interviewed 13 people, from a CEO to a Bible study class. They wanted deep conversations with friends rather than strangers, and found it hard to share in-the-moment reactions. Two rounds of testing shaped Budder: save a moment, record your reaction, and send it to a friend as a Toast.'
                facts={[
                    {label: 'Role', value: 'All-around designer'},
                    {label: 'Methods', value: '13 interviews, competitive analysis, 2 rounds of user testing'},
                    {label: 'Platform', value: 'Mobile app'},
                ]}
                image={budderHero}
                imageAlt='Budder logo next to three phone screens of the app'
            />
            <TableOfContents sections={sections}>
                <section id='overview'>
                    <h2 className='mt-8'>Overview</h2>
                    <Chunk imageUrl={overview} alt="Project overview: client Northwestern, problem, insight, solution and process timeline" hasBoxShadow={false}/>
                </section>
                <section id='problem'>
                    <h2>Problem</h2>
                    <Chunk imageUrl={problem} alt="Text thread: a friend sends a podcast episode with 'OMG U HAVE TO LISTEN TO THIS', gets 'Will listen when I get back home', then 'Ah sorry totally forgot', and finally just 'uhhhh' when asked 'did u listen?'" hasBoxShadow={false} imgStyle={{width: '20rem', margin: '0 auto'}}>Has this ever happened to you?</Chunk>
                    <p>For my Master’s Thesis at Northwestern I was interested in exploring how we consume content together. I ended up creating <span>the book club of the future.</span></p>
                </section>
                <section id='define'>
                    <h2>Define</h2>
                    <h3>User Interviews</h3>
                    <p>I interviewed <span>13 users</span> to get a better understanding of unmet needs. I spoke with a CEO, a TikTok influencer, a Bible study class, and several avid readers and podcast listeners.</p>
                    <img src={interview} alt="Video call interview with a participant in front of a bookshelf" className='w-full mb-16'/>
                    <h3>Competitive Analysis</h3>
                    <Chunk imageUrl={competitiveAnalysis} alt="Feature comparison grid of Goodreads, Spotify, TikTok, Blinkist, Letterboxd and The StoryGraph, with checks and crosses">I assessed platforms where users share reading and podcast content across several domains. I found that many were missing important ingredients in successfully generating <span>meaningful conversations</span> amongst <span>close friends.</span> </Chunk>
                    <h3>Insights</h3>
                    <div className='grid grid-cols-[repeat(auto-fit,minmax(220px,1fr))] gap-y-12 gap-x-6 mb-16'>
                        <div className='flex flex-col justify-between'>
                            <p>The definition of reading is expanding to include <span>audio</span></p>
                            <img src={spotifyQuote} alt="Statista: it is predicted that the number of monthly podcast listeners in the U.S. will hit 164 million in the year 2024." className='shadow-xl rounded-xl' />
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p className='mb-2'>People prefer having deep conversations with <span>friends</span> vs. online strangers</p>
                            <img src={corinneTestimonial} alt="'With my friends, I don't have to worry about saying the wrong thing.' Corinne, organizer of informal book club" className='shadow-xl rounded-xl'/>
                        </div>
                        <div className='flex flex-col justify-between'>
                            <p>It’s hard to record and share <span>in-the-moment</span> reactions to content</p>
                            <img src={markTestimonnial} alt="'I was trying to capture that moment of oh holy shit, look what just happened!' Mark, CEO of a social reading company" className='shadow-xl rounded-xl'/>
                        </div>
                    </div>
                    <div className='h-dvh flex flex-col justify-center my-16'>
                        <p className='sm:leading-24 sm:text-5xl text-3xl leading-20'><span className='sm:text-6xl text-gray-700 font-regular text-4xl'>How might we</span> use long-form content to <span>jumpstart meaningful conversations</span> between friends in a way that feels effortless?</p>
                    </div>
                </section>
                <section id='design'>
                    <h2>Design</h2>
                    <h3>Mockups v1</h3>
                    <img src={handSketches} alt="Grid of hand-drawn mobile app sketches" className='mb-16'/>
                    <h3>User testing v1</h3>
                    <Chunk imageUrl={groupInterview} alt="Group video interview reviewing a hand-drawn sketch of the app">User feedback indicated great interest in the <span>One Cool Thing</span>, <span>Pin It</span>, and <span>Network</span> features, while shrinking from the Echo and Friend Oath features. So I decided to focus on the three frontrunners and turning those into digital prototypes.</Chunk>
                    <img src={doubleQuote} alt="Participant Chloe M. with two quotes, above prototypes ranked from would not want to use to would want to use" className='mb-16 shadow-xl rounded-xl'/>
                    <h3>Mockups v2</h3>
                    <img src={v2} alt="Second round of digital mockups laid out by feature flow" className='mb-16' />
                    <h3>User testing v2</h3>
                    <div className='grid sm:grid-cols-[70%_auto] gap-y-8 gap-x-8 mb-16'>
                        <p className='m-0 md:col-start-1 md:col-end-2 md:row-start-1 md:row-end-2'>In the next round of user testing, I learned that in addition to saving reactions “in the moment”, users also wanted to be able to <span>share their reaction</span> at the end of a podcast and highlight different features. So I made that.</p>
                        <img src={anotherInterview} alt="Video call testing the Add butter screen with a participant" className='row-start-2 row-end-3 col-span-full md:col-start-1 md:col-end-2'/>
                        <img src={returnToPantry} alt="Podcast player showing Podcast complete with Add butter and Return to pantry buttons" className='w-1/2 mx-auto justify-self-end sm:m-0 sm:w-auto md:row-start-1 md:row-end-3 md:col-start-2 md:col-end-3'/>
                    </div>
                    <h3>Mood Board + Style Guide</h3>
                    <p>I wanted the design evoke a sense of <span>playfulness</span> and <span>approachability</span> through bright, contrasting colors and lines with thick stroke and shadow. For font, I thought a hand-drawn style for title text would complement the theme of <span>whimsy</span>.</p>
                    <img src={moodBoard} alt="Mood board of bold, playful packaging and illustration: butter boxes, a lemonade carton and a Cafe con Leche poster" className='mb-4'/>
                    <img src={styles} alt="Style guide with handwritten-style title text at three sizes, body text sizes and a palette of yellows, blues, reds and browns" className='mb-16' />
                </section>
                <section id='deliver'>
                    <h2>Deliver</h2>
                    <h3>(sound on)</h3>
                    <video src={voiceCommand} controls className='mb-16'></video>
                    <div className="h-dvh flex flex-col justify-center">
                        <div className='flex flex-col items-center mb-20'>
                            <p className='self-start italic sm:text-3xl'>Introducing...</p>
                            <img src={logotype} alt="Budder logotype in yellow script beside a winged butter box" className='mb-8'/>
                            <p className='text-[clamp(.875rem,3.5vw,2rem)] bold font-display relative bottom-4'>Serving savory conversations with the people you love</p>
                        </div>
                    </div>
                    <h3>Extract, record, share</h3>
                    <Chunk imageUrl={addWow} alt="Phone animation of pausing a podcast and recording a reaction to share" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>While you’re consuming content, Budder lets you easily <span>extract</span> a piece of text or audio, <span>record</span> your reaction to it, and <span>share</span> it with a friend.</Chunk>
                    <h3>A Toast!</h3>
                    <div className="mb-40">
                        <Chunk imageUrl={toast} alt="A Toast: an audio reaction bubble paired with a podcast clip card" hasBoxShadow={false}>Budder seamlessly combines the content you share and your reaction into a <span>Toast</span>.</Chunk>
                    </div>
                    <h3>A Toast in Action</h3>
                    <video src={sendAToast} autoPlay controls muted className='mb-16'></video>
                    <h3>Share moments with friends</h3>
                    <Chunk imageUrl={sendToast} alt="Phone animation of sending a Toast into a chat with a friend" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>The resulting Toast helps jumpstart fun and <span>meaningful conversations</span> with friends.</Chunk>
                    <Chunk imageUrl={network} alt="Phone animation of Picnic, a map of friends and the Toasts shared between them" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder keeps track of the Toasts you send and their resulting conversations through <span>Picnic</span>. Picnic gives you a visual, birds-eye view of your social reading network.</Chunk>
                    <h3>Load your content</h3>
                    <Chunk imageUrl={contentCollection} alt="Phone animation of the library with podcasts and books in one place" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder lets you access your favorite <span>books and podcasts</span> in one app.</Chunk>
                    <h3>Integrate your books</h3>
                    <Chunk imageUrl={eBook} alt="Phone animation of choosing an e-book in the library" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>Budder works with your favorite <span>e-books</span>.</Chunk>
                    <Chunk imageUrl={photoOfBook} alt="Phone animation of adding a physical book by scanning its text" hasBoxShadow={false} imgStyle={{width: '18rem', margin: '0 auto'}}>And even works for <span>physical books</span> by leveraging live text technology.</Chunk>
                    <h3 className='text-center text-3xl mb-12'>Which conversation would you rather be a part of?</h3>
                    <div className="flex justify-center gap-12 pb-16">
                        <img src={problem} alt="Before: a shared podcast link that goes nowhere" className='w-2/5'/>
                        <img src={newConvo} alt="After: a conversation built from Toasts" className='w-2/5'/>
                    </div>
                    <h3>Final wireframes</h3>
                    <img src={finalVersion} alt="Final wireframes and component library in Figma" className='pb-20' />
                    <h3>Testimonials</h3>
                    <div className='flex flex-col mb-16'>
                        <img src={testimonialOne} alt="'I like that it encompasses physical books as well as my digital books.'" className='w-2/3 self-end'/>
                        <img src={testimonialTwo} alt="'I honestly thought your app existed hahaha.... you better patent this thing quick'" className='w-2/3'/>
                        <img src={testimonialThree} alt="'All I watch is YouTube videos... this for YouTube would be a *gives chef's kiss* 10/10'" className='w-2/3 self-end'/>
                    </div>
                    <h3>Business model</h3>
                    <div className='grid md:grid-cols-2 gap-8 mb-16'>
                        <p className='m-0'>Budder operates on a <span>freemium</span> model, meaning that paid subscribers get extra benefits. With the Pro version of Budder, you can add more friends and you can also see what the friends of your friends are reading and how similar your content is to theirs.</p>
                        <img src={pricing} alt="Pricing tiers: Free at $0.00 a month for up to 6 friends, Pro at $9.99 a month for up to 20 friends and seeing friends of friends" className=''/>
                    </div>
                    <h3>See how Budder compares</h3>
                    <img src={benchmark} alt="Feature comparison grid with Budder added beside Goodreads, Spotify, TikTok, Blinkist, Letterboxd and The StoryGraph, checking every row" className=''/>
                </section>
                <section id='what-i-learned'>
                    <h2>What I learned</h2>
                    <ul className='leading-8 flex flex-col gap-4 list-disc pl-5'>
                        <li>Passion projects are super <span>thrilling</span>, absolutely <span>draining</span>, and in the long-term, <span>rewarding</span>.</li>
                        <li>Don’t use research as an excuse to avoid starting the first iteration. <span>Use the first draft as a springboard</span> for asking people questions.</li>
                        <li><span>Drawing is a method of thinking in pictures.</span></li>
                        <li>Don’t make <span>components in Figma</span> before you need to.</li>
                        <li>If I had more time, I would have tested the final prototype with more users, especially <span>podcast listeners</span>. I would have created a living, clickable Toast for users to more accurately convey the idea I had in my head. I would code this app into a real thing and get all my friends hooked on it and wean them off of TikTok. </li>
                    </ul>
                </section>
                <section id='final-presentation' className='pb-16'>
                    <h2>Final presentation</h2>
                    <iframe 
                        src="https://www.youtube.com/embed/tkYbgeCBi4o?si=muXNgklVXrX1cvjm" 
                        className='w-full aspect-video'
                        title="YouTube video player border-0" >
                    </iframe>
                </section>
            </TableOfContents>
        </main>
    )
}