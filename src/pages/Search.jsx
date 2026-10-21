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

import {useState} from 'react'
import UserQuote from '../components/UserQuote.jsx'
import PhotoUnlock from '../components/PhotoUnlock.jsx'
import TableOfContents from '../components/TableOfContents.jsx'

const sections = [
    {id: 'in-the-beginning', label: 'In The Beginning'},
    {id: 'a-tale-of-two-columns', label: 'A Tale of Two Columns'},
    {id: 'elsewhere-in-mayoville', label: 'Elsewhere in Mayoville...'},
    {id: 'the-door-opens', label: 'The Door Opens'},
    {id: 'ai-search', label: 'AI Search'},
    {id: 'before-and-after', label: 'Before and After'},
]

export default function Search(){

    const [isUnlocked, setIsUnlocked] = useState(false)

    return(
        <main>
            <TableOfContents sections={sections}/>
            <div>
                <img src={searchHero} alt="Search Grows Up: a birthday candle above three search bars, growing from smallest to largest" className='h-full object-cover w-full'/>
            </div>
            <section className='mt-12 mb-0'>
                <PhotoUnlock isUnlocked={isUnlocked} onUnlock={() => setIsUnlocked(true)}/>
            </section>
            <section className='my-16' id='in-the-beginning'>
                <h2>In The Beginning</h2>
                <p>This is what search looked like when I started at MCL</p>
                <h3 className='mb-4'>Search bar on homepage</h3>
                <img src={homePageWithSearch} alt="Original Mayo Clinic Labs homepage, with search boxes in the Test Catalog panel and behind a magnifying-glass icon in the header, both marked in red" className='mb-16 shadow-lg'/>
                <h3 className='mb-4'>Search results page</h3>
                <img src={searchResultsPage} alt="Original search results page: a plain list of blue links with long, technical descriptions" className=' mb-16 shadow-lg'/>
                <p>And there were a number of things wrong with it</p>
                <ul>
                    <li className='mb-16'>
                        <h3 className='mb-8'>1. Redundant places to search from</h3>
                        <img src={searchBarsOneAndTwo} alt="Homepage with two separate search entry points marked 1 and 2: the Test Catalog search box and the header search icon" className='mb-8 shadow-lg'/>
                        <img src={searchBarThree} alt="Test Catalog menu open with a third search box, marked 3" className='shadow-lg mb-8'/>
                        <UserQuote blur={!isUnlocked}
                            src={jennifer}
                            name='Jennifer'
                            role='Lab Technologist'
                        >
                            I got to tell you, as somebody that's just turned 50 bigger is better... I would rather have <span>one really obvious search area</span>.
                        </UserQuote>
                    </li>
                    <li className='mb-16'>
                        <h3 className='mb-8'>2. Arcane search result titles and description text</h3>
                        <img src={searchPhleb} alt="Site search results for phlebotomy, with near-identical result titles like Phlebotomy Modules Module 3 Insights" className='shadow-lg mb-8'/>
                        <UserQuote blur={!isUnlocked}
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
                        <img src={oldDropdown} alt="Old Test Catalog dropdown: an unbroken list of test names and codes with no categories or visual separation" className='shadow-lg mx-auto max-w-[300px] mb-32'/>
                    </li>
                </ul>
            </section>
            <section id='a-tale-of-two-columns'>
                <h2>A Tale of Two Columns</h2>
                <p className='mb-16'>We knew that categorization and filtering of the results would be helpful. But there were two problems.</p>
                <ol className='list-decimal pl-4'>
                    <li className='font-bold'>The ability to filter search results would require hundreds of manhours by subject matter experts labelling results with metadata we didn’t have.</li>
                    <li className='font-bold mb-16'>Marketing wanted the ability to surface results that could generate sales but would get buried organically in a one-column approach due to low traffic.</li>
                </ol>
                <p>So we went with a 2-column approach where the second column was specifically for web content.</p>
                <img src={twoColumn} alt="Two-column search results: Test Catalog results on the left, Site Search web content on the right" className='shadow-lg mb-8'/>
                <p className='mb-32'>As a designer, I thought this approach led to a more jarring experience. Ideally, a promoted search result should exist  within the same column of organic search results and rise according to the tuning of relevance weights. Most importantly, it didn't sufficiently address the user feedback we had gotten. For the time being, the web team was going to have to live with an imperfect solution. </p>
            </section>
            <section id='elsewhere-in-mayoville'>
                <h2>Elsewhere in Mayoville...</h2>
                <p>The home page was getting a design facelift. This gave us the chance to reposition the search bar as the primary place to search, which addressed Jennifer's previous pain point about needing "one really obvious search area." But for the time being, the behavior of search was still problematic.</p>
                <img src={newHomepage} alt="Redesigned homepage with a single large search bar under the headline Breaking diagnostic boundaries" className='shadow-lg mb-32'/>
            </section>
            <section className='mb-32' id='the-door-opens'>
                <h2>The Door Opens</h2>
                <p>Good luck came our way – business agreed that we needed to modernize our search, so they gave us money to buy a new back-end search provider. This provider gave us new powers, like the ability to use AI to create better metadata for our search results and improve our title & description text.</p>
                <p>Freed from technical constraints, I got to painting on a wider canvas. And while designing, an earlier comment had stayed with me: </p>
                <UserQuote blur={!isUnlocked}
                    src={shari}
                    name='Shari'
                    role='Histology Supervisor'
                >
                    If I'm looking for a very specific molecular test... what I want to see basically is the test name and this is the test code. These are the specimen requirements. This is the turnaround time. How to ship it, whether it needs to be refrigerated, whether it needs to be frozen. <span>Like all of that, really clear and concise and in one small line</span>. 
                </UserQuote>
                <p className='mt-16'>I used that feedback to design a "Fast Facts" tab, prioritizing information that lab techs most often searched for.</p>
                <img src={fastFacts} alt="Fast Facts tabs, Specimen type, Stability Info, TAT and Performing Lab, each expanding to show values such as Plasma Na Cit, Frozen 14 days, 3-5 Days and Rochester" className='max-w-[600px] mx-auto mb-8'/>
                <p className='mt-16'>When all was said and done, I had designed the following:</p>
                <h3 className='mb-4'>New search bar</h3>
                <img src={newDropdown} alt="New homepage search dropdown with suggestions for enc, each marked with an icon for a test, an algorithm or an article" className='shadow-lg mb-16'/>
                <h3 className='mb-4'>New search results page</h3>
                <img src={newSrp} alt="New search results page with filters for result type, specimen type, turnaround time and performing location in a left column, and labeled results on the right" className='mb-8 shadow-lg mb-16'/>
                <p>Let's zoom in on some specific features:</p>
                <h3 className='mb-6'>Fast facts</h3>
                <img src={calloutFastFacts} alt="Search results page dimmed except for the Fast Facts row, with the TAT tab open showing 3-5 Days" className='mb-8'/>
                <UserQuote blur={!isUnlocked}
                    src={abby}
                    name='Abby'
                    role='Medical Lab Scientist'
                >
                    I like how it just tells you the specimen and the turnaround time right there… you don’t even have to click into the whole page.
                </UserQuote>
                <UserQuote blur={!isUnlocked}
                    src={will}
                    name='Will'
                    role='Lab Manager'
                >
                    Those quick tabs are great because they save clicks. When things are urgent, that matters.
                </UserQuote>
                <UserQuote blur={!isUnlocked}
                    src={letitia}
                    name='Letitia'
                    role='Cytotechnologist'
                >
                    One quick glance, and you know what you need. That’s what my techs appreciate
                </UserQuote>
                <h3 className='mt-16 mb-6'>New dropdown</h3>
                <img src={calloutDropdown} alt="Homepage search dropdown highlighted, showing test and algorithm icons next to each suggestion" className='mb-8'/>
                <UserQuote blur={!isUnlocked}
                    src={steve}
                    name='Steve'
                    role='Primary Care Doctor'
                >
                    It already tells you if it's a lab or an algorithm... that would save a few seconds.
                </UserQuote>
                <h3 className='mt-16 mb-6'>Labeled search results</h3>
                <img src={calloutLabels} alt="Search results dimmed except for the colored labels Test and Algorithm next to each result title" className='mb-8'/>
                <UserQuote blur={!isUnlocked}
                    src={steve}
                    name='Steve'
                    role='Primary Care Doctor'
                >
                    I like the color-coded labels there with test, algorithm, resource, and form. I think any shortcut like that can help eliminate some searching time and drive you right to it.
                </UserQuote>
                <h3 className='mt-16 mb-6'>Filters</h3>
                <img src={calloutFilters} alt="Search results dimmed except for the filter column: result type, specimen type, turnaround time and performing location" className='mb-8'/>
                <UserQuote blur={!isUnlocked}
                    src={krystal}
                    name="Krystal"
                    role="Genetic Counselor"
                >
                    Usually, I have to dig pretty hard to find this info. Seeing it as a filter is nice and unexpected.
                </UserQuote>
                <p className='mt-16 mb-4'>And one we were not anticipating to be a big hit: </p>
                <h3>Labels for obsolete tests</h3>
                <img src={calloutObsolete} alt="Search result highlighted with an Obsolete label and a notice linking to the test update" className='mb-8'/>
                <UserQuote blur={!isUnlocked}
                    src={olivia}
                    name="Olivia"
                    role="Specimen Processor"
                >
                    I LOVE LOVE LOVE LOVE LOVE LOVE LOVE (and a MILLION more LOVES) that when I search the test catalog for an Obsolete test now, I now see a link that says the test is obsolete, and links to the test update PDF.  This is AMAZING and really helps streamline searching for information.
                </UserQuote>
            </section>
            <section id='ai-search'>
                <h2>AI Search</h2>
                <p>Our new back-end search provider also allowed us to inject AI into search. But the question was— how to use it in a way that made sense for the Mayo brand?</p>
                <p>We held three different brainstorm sessions between lab staff and providers to envision how AI can make their jobs easier. What we learned is that users trust the Mayo brand but don’t always trust AI search results.</p>
                <UserQuote blur={!isUnlocked}
                    src={anna}
                    name={'Anna'}
                    role={'Genetic Counselor'}
                >
                    If I'm on the MCL website and I'm looking for something in MCL specifically, I would trust their AI a little bit more than a generic one.
                </UserQuote>
                <UserQuote blur={!isUnlocked}
                    src={paul}
                    name={'Paul'}
                    role={'Hospital Physician'}
                >
                    Even if I don’t click the source, knowing it’s there matters.
                </UserQuote>
                <div className="h-[50vh] flex flex-col justify-center">
                    <p>In other words, <span>how might we</span> deploy AI Search in a way that speeds up what users already do while safeguarding against AI's inaccuracies?</p>
                </div>
                <p>My solution was to design an inline AI panel in the search results page.</p>
                <img src={aiSearch} alt="Search results page with an expanded AI Overview panel at the top answering a query about celiac disease" className='shadow-lg mb-16'/>
                <p className='mb-6'>By default, the panel was in a <span>collapsed state</span></p>
                <img src={calloutAiCollapsed} alt="AI Overview panel highlighted in its collapsed state, showing a short preview and a Show more link" className='mb-16'/>
                <p className='mb-6'>When expanded, the AI Overview panel would show a <span>formatted response</span> trained on Mayo's own data. It could help users <span>navigate</span>, <span>decide</span> what test best matches a disease state, and <span>answer</span> simple questions like "what's the minimum volume of this specimen I can ship?"</p>
                <img src={calloutAiExpanded} alt="AI Overview panel highlighted and expanded, with formatted sections on symptoms, diagnosis and treatment" className='mb-16'/>
                <p className='mb-6'>Critically, the generated answer would provide <span>citations</span> to the parts of Mayo Clinic where it was pulling this information from.</p>
                <img src={calloutAiCitations} alt="Citation links to Mayo Clinic Labs sources highlighted at the bottom of the AI Overview" className='mb-16'/>
                <p className='mb-6'>And for users who would rather stick to organic results, they had the option to minimize or <span>toggle off</span> the panel.</p>
                <img src={calloutHideAi} alt="Toggle highlighted in the top right of the AI Overview for turning the panel off" className='mb-16'/>
                <h3>Mobile</h3>
                <p className='mb-8'>As a B2B company whose users are 99% of the time working on desktops, Mayo had a mobile version of the website and search was far from optimized. So I created a mobile version that would keep the brand consistent for the 1%. </p>
                <div className='grid grid-cols-2 gap-12 max-w-[600px] mx-auto'>
                    <img src={mobileReg} alt="Mobile search results with a collapsed AI Overview and labeled results" />
                    <img src={mobileDrawer} alt="Mobile search results with the filter drawer open" className='mb-16'/>
                </div>
                <p className='mb-16'>At the time of this writing, these designs have yet to be tested with users. But since many aspects of this feature came from previous user research, it is likely that this feature would have broad user appeal.</p>
            </section>
            <section id='before-and-after' className='w-auto max-w-[2000px] bg-blue-50 pt-8 pb-12 mb-0 rounded-lg'>
                <h2>Before and After</h2>
                <h3>Search page</h3>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 gap-4 items-center mb-16'>
                    <img src={homePageWithSearch} alt="Original Mayo Clinic Labs homepage, with search boxes in the Test Catalog panel and behind a magnifying-glass icon in the header, both marked in red" className='shadow-lg'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={newDropdown} alt="New homepage search dropdown with suggestions for enc, each marked with an icon for a test, an algorithm or an article" className='shadow-lg'/>
                </div>
                <h3>Search results page</h3>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 gap-4 items-center'>
                    <img src={searchResultsPage} alt="Original search results page: a plain list of blue links with long, technical descriptions" className='shadow-lg self-start'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={aiSearchCollapsed} alt="New search results page with the AI Overview collapsed above labeled results" className='shadow-lg'/>
                </div>
            </section>
        </main>
    )
}