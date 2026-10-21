import banner from '../assets/mclResearch/banner.webp'
import meetTheTeam from '../assets/mclResearch/meetTheTeam.webp'
import projectBrief from '../assets/mclResearch/projectBrief.webp'
import discussionGuide from '../assets/mclResearch/discussionGuide.webp'
import mockup from '../assets/mclResearch/mockup.png'
import interview from '../assets/mclResearch/interview.png'
import dataTables from '../assets/mclResearch/dataTables.png'
import userCards from '../assets/mclResearch/userCards.webp'
import quoteMap from '../assets/mclResearch/quoteMap.webp'
import slides from '../assets/mclResearch/slides.webp'
import recommendations from '../assets/mclResearch/recommendations.gif'

import Step from '../components/Step'


export default function MclResearch(){
    return(
        <main className='h-full'>
            <div className='h-full'>
                <img src={banner} alt="Usability Testing: user persona cards fanned out over the Mayo Clinic Labs homepage" className='object-cover w-full h-full'/>
            </div>
            <section>
                <h2 className='mt-8'>Intro</h2>
                <h3>Meet <i>the team </i></h3>
                <img src={meetTheTeam} alt="Project team: UX Designer/Project Manager, UI Designer, Behavioral Scientist, Relationship Builder, Interviewer, Front-End Engineer and four Product Owners" className='mx-auto mt-8 mb-12'/>
            </section>
            <section>
                <h2>Discover</h2>
                <p className='-mt-4 mb-10 text-sm leading-6 font-bold uppercase tracking-widest text-gray-500'>Example project: Invite to Register for Notification Rules</p>
                <Step
                    number={1}
                    title='Story'
                    media={
                        <figure className='m-0 p-6 md:p-8 rounded-xl border border-gray-200 bg-stone-50'>
                            <blockquote className='m-0 flex flex-col gap-4 font-serif text-lg md:text-xl leading-8 text-gray-900'>
                                <p className='m-0'>On a cold Boston night Dec 27th 2023, Laura Loeb, a Lab Director at the University of Worthington, sent an email to Grace Mills, a Customer Service Representative at Mayo Clinic Labs, asking for help.</p>
                                <p className='m-0'>Their email thread snowballed in size and engulfed many MCL employees, eventually illuminating a product gap and the need for a feature whereby clients could create more complex Notification Rules.</p>
                            </blockquote>
                            <figcaption className='caption text-gray-500'>Excerpt from the project brief</figcaption>
                        </figure>
                    }
                >
                    I begin usability testing by deeply understanding where product pain points come from and <span className='text-blue-500 font-bold'>framing it as a story</span>, such as this excerpt from a previous project brief (usually in a different font). This helps everyone on the team empathize with our users and give a face to the faceless.
                </Step>
                <Step number={2} title='Project brief' image={projectBrief} alt="Pages of the Invite to Register project brief fanned out, next to a diagram of the current Notification Rules process">
                    I gather all aspects of a potential feature into a <span className="text-blue-500 font-bold">project brief</span> to create alignment. This includes a goal statement, user criteria, a flow of the current process, and a list of questions we want answered.
                </Step>
                <Step number={3} title='Discussion guide' image={discussionGuide} alt="Pages of the interview discussion guide fanned out, next to a page pairing Send Results modal screenshots with interview questions">
                    I then write a <span>discussion guide</span> that walks each participant through the prototype screen by screen, with questions and follow-up probes for every step.
                </Step>
            </section>
            <section>
                <h2>Design</h2>
                <Step number={4} title='Prototypes' image={mockup} alt="Figma file with four prototype flows for the Notifications feature, linked by prototype connections" framed>
                    The UI Designer and myself then work together to create wireframes, mockups, and prototypes on Figma in order to test with users. For one project, I created four different flows with spaghetti-like prototype links for our Notifications feature.
                </Step>
                <Step number={5} title='Interviews' image={interview} alt="Remote usability session: a blurred cytotechnologist participant beside the Mayo Clinic Labs site being tested" framed>
                    I then work with the Interviewer to select, schedule, invite, and test with 4-6 users per project.
                </Step>
                <Step number={6} title='Analysis' image={dataTables} alt="Spreadsheet of participant roles, organizations and quotes, grouped by search results page, search bar and reflections">
                    I organize all user data first into a spreadsheet, for the sake of documentation, with quotes as comma-separated values.
                </Step>
                <Step number={7} title='User cards' image={userCards} alt="Six user cards for participants including Patricia, Sarah, Belinda, Caleb and Harriet, each with a photo, role and key quotes">
                    For some projects, I also make “user cards” that help the rest of the org better understand and empathize with our users. This sets us up nicely as we begin to craft personas.
                </Step>
            </section>
            <section>
                <h2>Deliver</h2>
                <Step number={8} title='Quote map' image={quoteMap} alt="Homepage wireframe with participant quotes pinned to the sections they describe">
                    I visually map user quotes onto each section of a wireframe, allowing the team to contextualize feedback in an intuitive way.
                </Step>
                <Step number={9} title='Findings' image={slides} alt="Report slides with findings such as Peripheral finding: the megamenu is too big, and stats of 43%, 29% and 20s">
                    In reports, I then categorize findings under <span>clear headlines</span> that provide takeaways for each section/sub-feature.
                </Step>
                <Step number={10} title='Recommendations' image={recommendations} alt="Animation stepping through annotated recommendation screens for the developers">
                    Referencing these findings, I then modify existing UIs to provide the clearest, most evidence-backed recommendations possible to hand off to developers.
                </Step>
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
