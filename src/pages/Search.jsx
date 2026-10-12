import searchHero from '../assets/search/searchHero.png'
import homePageWithSearch from '../assets/search/homePageWithSearch.png'
import searchResultsPage from '../assets/search/searchResultsPage.png'
import searchBarsOneAndTwo from '../assets/search/searchBarsOneAndTwo.png'
import searchBarThree from '../assets/search/searchBarThree.png'
import searchPhleb from '../assets/search/searchPhleb.png'
import jennifer from '../assets/search/jennifer.png'
import kanedra from '../assets/search/kanedra.png'
import oldDropdown from '../assets/search/oldDropdown.png'
import twoColumn from '../assets/search/twoColumn.png'
import newHomepage from '../assets/search/newHomepage.png'
import newDropdown from '../assets/search/newDropdown.png'
import newSrp from '../assets/search/newSrp.png'
import shari from '../assets/search/shari.png'
import abby from '../assets/search/abby.png'
import will from '../assets/search/will.png'
import letitia from '../assets/search/letitia.png'
import mobileReg from '../assets/search/mobileReg.png'
import mobileDrawer from '../assets/search/mobileDrawer.png'
import anna from '../assets/search/anna.png'
import paul from '../assets/search/paul.png'
import aiSearch from '../assets/search/aiSearch.png'
import aiSearchCollapsed from '../assets/search/aiSearchCollapsed.png'
import calloutFastFacts from '../assets/search/calloutFastFacts.png'
import fastFacts from '../assets/search/fastFacts.png'
import calloutDropdown from '../assets/search/calloutDropdown.png'
import steve from '../assets/search/steve.png'
import calloutLabels from '../assets/search/calloutLabels.png'
import olivia from '../assets/search/olivia.png'
import calloutObsolete from '../assets/search/calloutObsolete.png'
import calloutFilters from '../assets/search/calloutFilters.png'
import krystal from '../assets/search/krystal.png'
import calloutAiCollapsed from '../assets/search/calloutAiCollapsed.png'
import calloutAiExpanded from '../assets/search/calloutAiExpanded.png'
import calloutAiCitations from '../assets/search/calloutAiCitations.png'
import calloutHideAi from '../assets/search/calloutHideAi.png'

import UserQuote from '../components/UserQuote.jsx'

export default function Search(){
    return(
        <main>
            <div>
                <img src={searchHero} className='h-full object-cover w-full'/>
            </div>
            <section className='my-16'>
                <h2>In the beginning</h2>
                <p>This is what search looked like when I started at MCL</p>
                <h3 className='mb-4'>Search bar on homepage</h3>
                <img src={homePageWithSearch} className='mb-16 shadow-lg'/>
                <h3 className='mb-4'>Search results page</h3>
                <img src={searchResultsPage} className=' mb-16 shadow-lg'/>
                <p>And there were a number of things wrong with it</p>
                <ul>
                    <li className='mb-16'>
                        <h3 className='mb-8'>1. Redundant places to search from</h3>
                        <img src={searchBarsOneAndTwo} className='mb-8 shadow-lg'/>
                        <img src={searchBarThree} className='shadow-lg mb-8'/>
                        <UserQuote
                            src={jennifer}
                            name='Jennifer'
                            role='Lab Technologist'
                        >
                            I got to tell you, as somebody that's just turned 50 bigger is better... I would rather have <span>one really obvious search area</span>.
                        </UserQuote>
                    </li>
                    <li className='mb-16'>
                        <h3 className='mb-8'>2. Arcane search result titles and description text</h3>
                        <img src={searchPhleb} className='shadow-lg mb-8'/>
                        <UserQuote
                            src={kanedra}
                            name='Kanedra'
                            role='Physician Assistant'
                        >
                            I'm just not confident that I'm taking the right steps and I just think that could be remedied by making sure that the titles are <span>relevant</span> to what I should be looking for or just <span>clear and concise</span>.
                        </UserQuote>
                    </li>
                    <li className='mb-16'>
                        <h3 className='mb-8'>3. Confusing dropdown suggestions</h3>
                        <p>The old design made it hard to distinguish between different dropdown entries, and a lack of categorization made it even harder to find what you're looking for.</p>
                        <img src={oldDropdown} className='shadow-lg mx-auto max-w-[300px] mb-32'/>
                    </li>
                </ul>
            </section>
            <section>
                <h2>A Tale of Two Columns</h2>
                <p className='mb-16'>We knew that categorization and filtering of the results would be helpful. But there there were two problems.</p>
                <ol className='list-decimal pl-4'>
                    <li className='font-bold'>The ability to filter search results would require hundreds of manhours by subject matter experts labelling results with metadata we didn’t have.</li>
                    <li className='font-bold mb-16'>Marketing wanted the ability to surface results that could lead to new business but due to low traffic might get buried in an organic, one-column approach.</li>
                </ol>
                <p>So we went with a 2-column approach where the second column was specifically for web content.</p>
                <img src={twoColumn} className='shadow-lg mb-8'/>
                <p className='mb-32'>As a designer, I thought this approach led to a more jarring experience. Ideally, a promoted search result should exist  within the same column of organic search results and rise according to the tuning of relevance weights. Most importantly, it didn't sufficiently address the user feedback we had gotten. For the time being, the web team was going to have to live with an imperfect solution. </p>
            </section>
            <section>
                <h2>Elsewhere in Mayoville...</h2>
                <p>The home page was getting a design facelift. This gave us the chance to reposition the search bar as the primary place to search, which addressed Jennifer's previous pain point about needing "one really obvious search area." But for the time being, the behavior of search was still problematic.</p>
                <img src={newHomepage} className='shadow-lg mb-32'/>
            </section>
            <section className='mb-32'>
                <h2>The door opens</h2>
                <p>Good luck came our way – business agreed that we needed to modernize our search, so they gave us money to buy a new back-end search provider. This provider gave us new powers, like the ability to use AI to create better metadata for our search results and improve our title & description text.</p>
                <p>Freed from technical constraints, I got to painting on a wider canvas. And while designing, an earlier comment had stayed with me: </p>
                <UserQuote
                    src={shari}
                    name='Shari'
                    role='Histology Supervisor'
                >
                    If I'm looking for a very specific molecular test... what I want to see basically is the test name and this is the test code. These are the specimen requirements. This is the turnaround time. How to ship it, whether it needs to be refrigerated, whether it needs to be frozen. <span>Like all of that, really clear and concise and in one small line</span>. 
                </UserQuote>
                <p className='mt-16'>I used that feedback to design a "Fast Facts" tab, prioritizing information that lab techs most often searched for.</p>
                <img src={fastFacts} className='max-w-[600px] mx-auto mb-8'/>
                <p className='mt-16'>When all was said and done, I had designed the following:</p>
                <h3 className='mb-4'>New search bar</h3>
                <img src={newDropdown} className='shadow-lg mb-16'/>
                <h3 className='mb-4'>New search results page</h3>
                <img src={newSrp} className='mb-8 shadow-lg mb-16'/>
                <p>Let's zoom in on some specific features:</p>
                <h3 className='mb-6'>Fast facts</h3>
                <img src={calloutFastFacts} className='mb-8'/>
                <UserQuote
                    src={abby}
                    name='Abby'
                    role='Medical Lab Scientist'
                >
                    I like how it just tells you the specimen and the turnaround time right there… you don’t even have to click into the whole page.
                </UserQuote>
                <UserQuote
                    src={will}
                    name='Will'
                    role='Lab Manager'
                >
                    Those quick tabs are great because they save clicks. When things are urgent, that matters.
                </UserQuote>
                <UserQuote
                    src={letitia}
                    name='Letitia'
                    role='Cytotechnologist'
                >
                    One quick glance, and you know what you need. That’s what my techs appreciate
                </UserQuote>
                <h3 className='mt-16 mb-6'>New dropdown</h3>
                <img src={calloutDropdown} className='mb-8'/>
                <UserQuote
                    src={steve}
                    name='Steve'
                    role='Primary Care Doctor'
                >
                    It already tells you if it's a lab or an algorithm... that would save a few seconds.
                </UserQuote>
                <h3 className='mt-16 mb-6'>Labelled search results</h3>
                <img src={calloutLabels} className='mb-8'/>
                <UserQuote
                    src={steve}
                    name='Steve'
                    role='Primary Care Doctor'
                >
                    I like the color-coded labels there with test, algorithm, resource, and form. I think any shortcut like that can help eliminate some searching time and drive you right to it.
                </UserQuote>
                <h3 className='mt-16 mb-6'>Filters</h3>
                <img src={calloutFilters} className='mb-8'/>
                <UserQuote
                    src={krystal}
                    name="Krystal"
                    role="Genetic Counselor"
                >
                    Usually, I have to dig pretty hard to find this info. Seeing it as a filter is nice and unexpected.
                </UserQuote>
                <p className='mt-16 mb-4'>And one we were not anticipating to be a big hit: </p>
                <h3>Labels for obsolete tests</h3>
                <img src={calloutObsolete} className='mb-8'/>
                <UserQuote
                    src={olivia}
                    name="Olivia"
                    role="Specimen Processor"
                >
                    I LOVE LOVE LOVE LOVE LOVE LOVE LOVE (and a MILLION more LOVES) that when I search the test catalog for an Obsolete test now, I now see a link that says the test is obsolete, and links to the test update PDF.  This is AMAZING and really helps streamline searching for information.
                </UserQuote>
                <p className='mt-16 mb-4'>As a B2B company whose users are 99% of the time working on desktops, Mayo had a mobile version of search that was very janky. I also created a responsive mobile version to improve our user’s experience the 1% of times they used search on the go. </p>
                <div className='grid grid-cols-2 gap-12 max-w-[600px] mx-auto'>
                    <img src={mobileReg} />
                    <img src={mobileDrawer} />
                </div>
            </section>
            <section>
                <h2>AI Search</h2>
                <p>Our new back-end search provider also allowed us to inject AI into search. But the question was— how to use it in a way that made sense for the Mayo brand?</p>
                <p>We held three different brainstorm sessions between lab staff and providers to envision how AI can make their jobs easier. What we learned is that users trust the Mayo brand but don’t always trust AI search results.</p>
                <UserQuote
                    src={anna}
                    name={'Anna'}
                    role={'Genetic Counselor'}
                >
                    If I'm on the MCL website and I'm looking for something in MCL specifically, I would trust their AI a little bit more than a generic one.
                </UserQuote>
                <UserQuote
                    src={paul}
                    name={'Paul'}
                    role={'Hospital Physician'}
                >
                    Even if I don’t click the source, knowing it’s there matters.
                </UserQuote>
                <div className="h-[50vh] flex flex-col justify-center">
                    <p>In other words, <span>how might we</span> deploy AI Search in a way speeds up what users already do while safeguarding against AI's inaccuracies?</p>
                </div>
                <p>My solution was to design an inline AI panel in the search results page.</p>
                <img src={aiSearch} className='shadow-lg mb-16'/>
                <p className='mb-6'>By default, the panel was in a <span>collapsed state</span></p>
                <img src={calloutAiCollapsed} className='mb-16'/>
                <p className='mb-6'>When expanded, the AI Overview panel would show a <span>formatted response</span> trained on Mayo's own data. It could help users <span>navigate</span>, <span>decide</span> what test best matches a disease state, and <span>answer</span> simple questions like "what's the minimum volume of this specimen I can ship?"</p>
                <img src={calloutAiExpanded} className='mb-16'/>
                <p className='mb-6'>Critically, the generated answer would link to other parts of Mayo Clinic where it was pulling this information from.</p>
                <img src={calloutAiCitations} className='mb-16'/>
                <p className='mb-6'>And for users who would rather stick to organic results, they had the option to minimize or toggle off the panel.</p>
                <img src={calloutHideAi} className='mb-16'/>
                <p className='mb-16'>At the time of this writing, these designs have yet to be tested with users. But since many aspects of this feature came from previous user research, it is likely that this feature would have broad user appeal.</p>
            </section>
            <section className='w-auto max-w-[2000px]'>
                <h2 className='max-w-[1000px] mx-auto'>Before and After</h2>
                <h3>Search page</h3>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 gap-4 items-center mb-16'>
                    <img src={homePageWithSearch} className='shadow-lg'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={newDropdown} className='shadow-lg'/>
                </div>
                <h3>Search results page</h3>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 gap-4 items-center'>
                    <img src={searchResultsPage} className='shadow-lg self-start'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={aiSearchCollapsed} className='shadow-lg'/>
                </div>
            </section>
        </main>
    )
}