import budderHero from '../assets/budder/budder-hero.webp'
import overview from '../assets/budder/01-overview.webp'
import problem from '../assets/budder/02-problem.webp'
import interview from '../assets/budder/03-interview.webp'
import competitiveAnalysis from '../assets/budder/04-competitiveAnalysis.webp'
import spotifyQuote from '../assets/budder/05-spotifyQuote.webp'
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
import logotype from '../assets/budder/16-logotype.webp'
import contentCollection from '../assets/budder/17-contentCollection.gif'
import addWow from '../assets/budder/18-addWow.gif'
import eBook from '../assets/budder/20-eBook.gif'
import photoOfBook from '../assets/budder/21-photoOfBook.gif'
import toast from '../assets/budder/22-toast.webp'
import sendToast from '../assets/budder/24-sendToast.gif'
import network from '../assets/budder/25-network.gif'
import newConvo from '../assets/budder/26-newConvo.webp'
import finalVersion from '../assets/budder/27-finalVersion.webp'
import testimonialOne from '../assets/budder/28-testimonialOne.webp'
import testimonialTwo from '../assets/budder/29-testimonialTwo.webp'
import testimonialThree from '../assets/budder/30-testimonialThree.webp'
import pricing from '../assets/budder/31-pricing.webp'

import Chunk from '../components/Chunk.jsx'

export default function Budder(){
    return(
        <main className="h-full">
            <div className="h-full">
                <img src={budderHero} />
            </div>
            <section>
                <h2>Overview</h2>
                <Chunk imageUrl={overview} />
            </section>
            <section>
                <h2>Problem</h2>
                <Chunk imageUrl={problem} hasBoxShadow={false} imgStyle={{width: '200px', margin: '0 auto'}}>Has this ever happened to you?</Chunk>
                <p>For my Master’s Thesis at Northwestern I was interested in exploring how we consume content together. I ended up creating the book club of the future.</p>
            </section>
            <section>
                <h2>Define</h2>
                <h3>User Interivews</h3>
                <Chunk imageUrl={interview}>I interviewed 13 users to get a better understanding of unmet needs. I spoke with a CEO, a TikTok influencer, a Bible study class, and several avid readers and podcast listeners.</Chunk>
                <h3>Competitive Analysis</h3>
                <Chunk imageUrl={competitiveAnalysis}>I assessed platforms where users share reading and podcast content across several domains. I found that many were missing important ingredients in successfully generating meaningful conversations amongst close friends. </Chunk>
            </section>
            <section>
                <h2>Design</h2>
                <div className='flex gap-4'>
                    <Chunk imageUrl={spotifyQuote}>The definition of reading is expanding to include audio</Chunk>
                    <Chunk imageUrl={corinneTestimonial}>People prefer having deep conversations with friends vs. online strangers</Chunk>
                    <Chunk imageUrl={markTestimonnial}>It’s hard to record and share in-the-moment reactions to content</Chunk>
                </div>
                <p>How might we use long-form content to jumpstart meaningful conversations between friends in a way that feels effortless?</p>
                <h3>Mockups v1</h3>
                <img src={handSketches} className='pb-12'/>
                <h3>User testing v1</h3>
                <Chunk imageUrl={groupInterview}>User feedback indicated great interest in the One Cool Thing, Pin It, and Network features, while shrinking from the Echo and Friend Oath features. So I decided to focus on the three frontrunners and turning those into digital prototypes.</Chunk>
                <img src={doubleQuote} className='pb-12'/>
                <h3>Mockups v2</h3>
                <img src={v2} className='pb-12' />
                <h3>User testing v2</h3>
                <div className="flex gap-8">
                    <Chunk imageUrl={anotherInterview}>In the next round of user testing, I learned that in addition to saving reactions “in the moment”, users also wanted to be able to share their reaction at the end of a podcast and highlight different features. So I made that.</Chunk>
                    <img src={returnToPantry} className='pb-12 w-60'/>
                </div>
                <h3>Mood Board + Style Guide</h3>
                <Chunk imageUrl={moodBoard}>I wanted the design evoke a sense of playfulness and approachability through bright, contrasting colors and lines with thick stroke and shadow. For font, I thought a hand-drawn style for title text would complement the theme of whimsy.</Chunk>
                <img src={styles} className='pb-12' />
            </section>
            <section>
                <h2>Deliver</h2>
                <img src={logotype} />
                <p className='caption'>Serving savory conversations with the people you love</p>
                <h3>Load content, capture reaction</h3>
                <div className="flex">
                    <Chunk imageUrl={contentCollection}>Budder lets you access your favorite books and podcasts in one app.</Chunk>
                    <Chunk imageUrl={addWow}>While you’re consuming content, Budder lets you easily extract a piece of text or audio, record your reaction to it, and share it with a friend.</Chunk>
                </div>
                <h3>Voice Command</h3>
                <p>insert video here</p>
                <h3>Integrate your books</h3>
                <div className="flex">
                    <Chunk imageUrl={eBook}>Budder works just as well for e-books.</Chunk>
                    <Chunk imageUrl={photoOfBook}>And even works for physical books by leveraging live text technology.</Chunk>
                </div>
                <h3>A Toast!</h3>
                <Chunk imageUrl={toast}>Budder seamlessly combines the content you share and your reaction into a Toast.</Chunk>
                <h3>A Toast in Action</h3>
                <p>insert Toast video here</p>
                <h3>Share moments with friends</h3>
                <div className="flex">
                    <Chunk imageUrl={sendToast}>The resulting Toast helps jumpstart fun and meaningful conversations with friends.</Chunk>
                    <Chunk imageUrl={network}>Budder keeps track of your conversations through Potluck. Potluck gives you a visual, birds-eye view of your social reading network.</Chunk>
                </div>
                <h3>Which conversation do you want to be a part of?</h3>
                <div className="flex">
                    <img src={problem} />
                    <img src={newConvo} />
                </div>
                <h3>Final wireframes</h3>
                <img src={finalVersion} className='pb-12' />
                <h3>Testimonials</h3>
                <div className='flex col '>
                    <img src={testimonialOne} className='w-100'/>
                    <img src={testimonialTwo} className='w-100'/>
                    <img src={testimonialThree} className='w-100'/>
                </div>
                <h3>Business model</h3>
                <Chunk imageUrl={pricing}>Budder operates on a freemium model, meaning that paid subscribers get extra benefits. With the Pro version of Budder, you can add more friends and you can also see what the friends of your friends are reading and how similar your content is to theirs.</Chunk>
                <h3>See how Budder compares</h3>
                <image src={competitiveAnalysis} />
            </section>
            <section>
                <h2>What I learned</h2>
                <ul>
                    <li>Passion projects are super thrilling, absolutely draining, and in the long-term, rewarding.</li>
                    <li>Don’t use research as an excuse to avoid starting the first iteration. Use the first draft as a springboard for asking people questions.</li>
                    <li>Drawing is a method of thinking in pictures.</li>
                    <li>Don’t make components in Figma before you need to.</li>
                    <li>If I had more time, I would have tested the final prototype with more users, especially podcast listeners. I would have created a living, clickable Toast for users to more accurately convey the idea I had in my head. I would code this app into a real thing and get all my friends hooked on it and wean them off of TikTok. </li>
                </ul>
            </section>
            <section>
                <h2>Final presentation</h2>
                <p>insert youtube video link here</p>
            </section>
        </main>
    )
}