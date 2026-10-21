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
                <img src={banner} alt="Usability Testing: user persona cards fanned out over the Mayo Clinic Labs homepage" className='object-cover w-full h-full'/>
            </div>
            <section>
                <h2 className='mt-8'>Intro</h2>
                <h3>Meet <i>the team </i></h3>
                <img src={meetTheTeam} alt="Project team: UX Designer/Project Manager, UI Designer, Behavioral Scientist, Relationship Builder, Interviewer, Front-End Engineer and four Product Owners" className='mx-auto mt-8 mb-24'/>
                <img src={intro} alt="On a cold Boston night Dec 27th 2023, Laura Loeb, a Lab Director at the University of Worthington, sent an email to Grace Mills, a Customer Service Representative at Mayo Clinic Labs, asking for help. Their email thread snowballed in size and engulfed many MCL employees, eventually illuminating a product gap and the need for a feature whereby clients could create more complex Notification Rules." className='mx-auto mb-12'/>
            </section>
            <section>
                <h2>Discover</h2>
                <p>I begin usability testing by deeply understanding where product pain points come from and <span className='text-blue-500 font-bold'>framing it as a story</span>, such as in the above excerpt from a previous project brief (usually in a different font). This helps everyone on the team empathize with our users and give a face to the faceless.</p>
                <Chunk imageUrl={projectBrief} alt="Pages of the Invite to Register project brief fanned out, next to a diagram of the current Notification Rules process" hasBoxShadow={false}>I gather all aspects of a potential feature into a <span className="text-blue-500 font-bold">project brief</span> to create alignment. This includes a goal statement, user criteria, a flow of the current process, and a list of questions we want answered.</Chunk>
                <Chunk imageUrl={discussionGuide} alt="Pages of the interview discussion guide fanned out, next to a page pairing Send Results modal screenshots with interview questions" hasBoxShadow={false}>I then write a <span>discussion guide</span> that walks each participant through the prototype screen by screen, with questions and follow-up probes for every step.</Chunk>
            </section>
            <section>
                <h2>Design</h2>
                <h3 className='lg:text-3xl mb-4'>Prototypes</h3>
                <p className='mb-12'>The UI Designer and myself then work together to create wireframes, mockups, and prototypes on Figma in order to test with users.</p>
                <Chunk imageUrl={mockup} alt="Figma file with four prototype flows for the Notifications feature, linked by prototype connections">For one project, I created four different flows with spaghetti-like prototype links for our Notifications feature</Chunk>
            </section>
            <section>
                <h3 className='lg:text-3xl mb-4 mb-8'>Interviews</h3>
                <Chunk imageUrl={interview} alt="Remote usability session: a blurred cytotechnologist participant beside the Mayo Clinic Labs site being tested">I then work with the Interviewer to select, schedule, invite, and test with 4-6 users per project.</Chunk>
                <h3 className='lg:text-3xl mb-4 mb-8'>Analysis and Personas</h3>
                <Chunk imageUrl={dataTables} alt="Spreadsheet of participant roles, organizations and quotes, grouped by search results page, search bar and reflections" hasBoxShadow={false}>I organize all user data first into a spreadsheet, for the sake of documentation, with quotes as comma-separated values.</Chunk>
                <Chunk imageUrl={userCards} alt="Six user cards for participants including Patricia, Sarah, Belinda, Caleb and Harriet, each with a photo, role and key quotes" hasBoxShadow={false}>For some projects, I also make “user cards” that help the rest of the org better understand and empathize with our users. This sets us up nicely as we begin to craft personas.</Chunk>
            </section>
            <section>
                <h2>Deliver</h2>
                <h3>Findings</h3>
                <Chunk imageUrl={quoteMap} alt="Homepage wireframe with participant quotes pinned to the sections they describe" hasBoxShadow={false}>I visually map user quotes onto each section of a wireframe, allowing the team to contextualize feedback in an intuitive way. </Chunk>
                <Chunk imageUrl={slides} alt="Report slides with findings such as Peripheral finding: the megamenu is too big, and stats of 43%, 29% and 20s" hasBoxShadow={false}>In reports, I then categorize findings under <span>clear headlines</span> that provide takeaways for each section/sub-feature. </Chunk>
                <h3>Clear, actionable recommendations</h3>
                <Chunk imageUrl={recommendations} alt="Animation stepping through annotated recommendation screens for the developers" hasBoxShadow={false}>Referencing these findings, I then modify existing UIs to provide the clearest, most evidence-backed recommendations possible to hand off to developers </Chunk>
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