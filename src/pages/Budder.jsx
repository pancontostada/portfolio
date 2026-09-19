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
                <Chunk imageUrl={problem}>Has this ever happened to you?</Chunk>
            </section>
            <p>For my Master’s Thesis at Northwestern I was interested in exploring how we consume content together. I ended up creating the book club of the future.</p>
            <section>
                <h2>Define</h2>
                <h3>User Interivews</h3>
                <Chunk imageUrl={interview}>I interviewed 13 users to get a better understanding of unmet needs. I spoke with a CEO, a TikTok influencer, a Bible study class, and several avid readers and podcast listeners.</Chunk>
                <h3>Competitive Analysis</h3>
                <Chunk imageUrl={competitiveAnalysis}>I assessed platforms where users share reading and podcast content across several domains. I found that many were missing important ingredients in successfully generating meaningful conversations amongst close friends. </Chunk>
            </section>
        </main>
    )
}