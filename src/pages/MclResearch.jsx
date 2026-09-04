import banner from '../assets/mclResearch/banner.webp'
import meetTheTeam from '../assets/mclResearch/meetTheTeam.webp'
import intro from '../assets/mclResearch/intro.webp'
import projectBrief from '../assets/mclResearch/projectBrief.webp'
import discussionGuide from '../assets/mclResearch/discussionGuide.webp'
import mockup from '../assets/mclResearch/mockup.png'
import interview from '../assets/mclResearch/interview.png'
import dataTables from '../assets/mclResearch/dataTables.png'
import userCards from '../assets/mclResearch/userCards.webp'
import quoteMap from '../assets/mclResearch/quoteMap.webp'
import slides from '../assets/mclResearch/slides.webp'
import recommendations from '../assets/mclResearch/recommendations.gif'

import Chunk from '../components/Chunk'


export default function MclResearch(){
    return(
        <main className='h-full'>
            <div className='h-full'>
                <img src={banner} className='object-cover w-full h-full'/>
            </div>
            <section>
                <h2 className='mt-8'>Intro</h2>
                <h3>Meet <i>the team </i></h3>
                <img src={meetTheTeam} className='mx-auto mt-8 mb-24'/>
                <img src={intro}  className='mx-auto mb-12'/>
            </section>
            <section>
                <h2>Discover</h2>
                <Chunk imageUrl={projectBrief} hasBoxShadow={false} >I begin usability testing by deeply understanding where product pain points come from and <span className='text-blue-500 font-bold'>framing it as a story</span>, such as in the above excerpt from a previous project brief (usually in a different font). This helps everyone on the team empathize with our users and give a face to the faceless.</Chunk>
                <Chunk imageUrl={discussionGuide} hasBoxShadow={false}>I gather all aspects of a potential feature into a <span className="text-blue-500 font-bold">project brief</span> to create alignment. This includes a goal statement, user criteria, a flow of the current process, and a list of questions we want answered.</Chunk>
            </section>
            <section>
                <h2>Design</h2>
                <h3 className='lg:text-3xl mb-4'>Prototypes</h3>
                <p className='mb-12'>The UI Designer and myself then work together to create wireframes, mockups, and prototypes on Figma in order to test with users.</p>
                <Chunk imageUrl={mockup}>For one project, I created four different flows with spaghetti-like prototype links for our Notifications feature</Chunk>
            </section>
            <section>
                <h3 className='lg:text-3xl mb-4 mb-8'>Interviews</h3>
                <Chunk imageUrl={interview}>I then work with the Interviewer to select, schedule, invite, and test with 4-6 users per project.</Chunk>
                <h3 className='lg:text-3xl mb-4 mb-8'>Analysis and Personas</h3>
                <Chunk imageUrl={dataTables} hasBoxShadow={false}>I organize all user data first into a spreadsheet, for the sake of documentation, with quotes as comma-separated values.</Chunk>
                <Chunk imageUrl={userCards} hasBoxShadow={false}>For some projects, I also make “user cards” that help the rest of the org better understand and empathize with our users. This sets us up nicely as we begin to craft personas.</Chunk>
            </section>
            <section>
                <h2>Deliver</h2>
                <h3>Findings</h3>
                <Chunk imageUrl={quoteMap} hasBoxShadow={false}>I visually map user quotes onto each section of a wireframe, allowing the team to contextualize feedback in an intuitive way. </Chunk>
                <Chunk imageUrl={slides} hasBoxShadow={false}>In reports, I then categorize findings under <span>clear headlines</span> that provide takeaways for each section/sub-feature. </Chunk>
                <h3>Clear, actionable recommendations</h3>
                <Chunk imageUrl={recommendations} hasBoxShadow={false}>Referencing these findings, I then modify existing UIs to provide the clearest, most evidence-backed recommendations possible to hand off to developers </Chunk>
            </section>
            <section>
                <h2>Appendix</h2>
                <ul className='list-disc pl-4'>
                    <li>I've led 7 Moderated Usability Tests , covering homepage, site search, navigation and other common website features.</li>
                    <li>I've led 3 Asynchronous Usability Tests, including tree testing, card sorting, and A/B Tests.</li>
                </ul>
            </section>
        </main>
    )
}