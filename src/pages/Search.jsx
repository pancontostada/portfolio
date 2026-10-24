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
import will from '../assets/search/will.png'
import letitia from '../assets/search/letitia.png'
import mobileReg from '../assets/search/mobileReg.png'
import mobileDrawer from '../assets/search/mobileDrawer.png'
import anna from '../assets/search/anna.png'
import paul from '../assets/search/paul.png'
import aiSearchCollapsed from '../assets/search/aiSearchCollapsed.png'
import calloutFastFacts from '../assets/search/crops/calloutFastFacts.webp'
import fastFacts from '../assets/search/fastFacts.png'
import steve from '../assets/search/steve.png'
import olivia from '../assets/search/olivia.png'
import abby from '../assets/search/abby.png'
import krystal from '../assets/search/krystal.png'
import calloutObsolete from '../assets/search/crops/calloutObsolete.webp'
import calloutAiCollapsed from '../assets/search/crops/calloutAiCollapsed.webp'
import calloutAiExpanded from '../assets/search/crops/calloutAiExpanded.webp'
import calloutAiCitations from '../assets/search/crops/calloutAiCitations.webp'
import calloutHideAi from '../assets/search/crops/calloutHideAi.webp'
import enc2SearchResults from '../assets/search/enc2SearchResults.png'

import {useState} from 'react'
import UserQuote from '../components/UserQuote.jsx'
import PhotoUnlock from '../components/PhotoUnlock.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import TableOfContents from '../components/TableOfContents.jsx'
import CaseStudyHeader from '../components/CaseStudyHeader.jsx'
import ZoomImage from '../components/ZoomImage.jsx'
import AnnotatedScreenshot from '../components/AnnotatedScreenshot.jsx'

const sections = [
    {id: 'the-scenario', label: 'Put yourself in their shoes'},
    {id: 'the-problem', label: 'The problem'},
    {id: 'the-constraint', label: 'The constraint'},
    {id: 'research-to-design', label: 'Research to design'},
    {id: 'what-users-said', label: 'What users said'},
    {id: 'ai-search', label: 'AI they can trust'},
    {id: 'before-and-after', label: 'Before and after'},
]

const annotations = [
    {
        x: 40, y: 50,
        image: newDropdown,
        alt: 'Refreshed homepage with enc typed into the single search bar and a dropdown of suggestions, each marked with a test, algorithm or article icon',
        title: 'One search bar',
        text: 'A single, prominent search field replaced three competing entry points.',
        quotes: [
            {text: 'I would rather have one really obvious search area.', name: 'Jennifer', role: 'Lab Technologist', photo: jennifer},
        ],
    },
    {
        x: 60, y: 65.5,
        image: newDropdown,
        title: 'Labeled suggestions',
        text: 'Each suggestion in the dropdown has an icon showing whether it is a test, an algorithm or an article.',
        quotes: [
            {text: 'It already tells you if it’s a lab or an algorithm... that would save a few seconds.', name: 'Steve', role: 'Primary Care Doctor', photo: steve},
        ],
    },
    {
        x: 28.6, y: 21.5,
        title: 'Color-coded labels',
        text: 'Every result says whether it is a test, an algorithm, an article or a form. The same colors appear in the filter list.',
        quotes: [
            {text: 'I like the color-coded labels there with test, algorithm, resource, and form.', name: 'Steve', role: 'Primary Care Doctor', photo: steve},
        ],
    },
    {
        x: 47, y: 37,
        title: 'Fast Facts',
        text: 'Specimen type, stability, turnaround time and performing lab open in place under each test.',
        quotes: [
            {text: 'I like how it just tells you the specimen and the turnaround time right there… you don’t even have to click into the whole page.', name: 'Abby', role: 'Medical Lab Scientist', photo: abby},
            {text: 'Those quick tabs are great because they save clicks. When things are urgent, that matters.', name: 'Will', role: 'Lab Manager', photo: will},
            {text: 'One quick glance, and you know what you need. That’s what my techs appreciate.', name: 'Letitia', role: 'Cytotechnologist', photo: letitia},
        ],
    },
    {
        x: 16.5, y: 54,
        title: 'Filters',
        text: 'Specimen type, turnaround time and performing location, made possible by the new metadata.',
        quotes: [
            {text: 'Usually, I have to dig pretty hard to find this info. Seeing it as a filter is nice and unexpected.', name: 'Krystal', role: 'Genetic Counselor', photo: krystal},
        ],
    },
]

function Beat({number, label, title, children}){
    return(
        <div className='border-b border-line py-10'>
            <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand md:text-xs'>{number} · {label}</p>
            <h2 className='mt-2 mb-4'>{title}</h2>
            {children}
        </div>
    )
}

function Callout({label, children}){
    return(
        <div className='mt-6 max-w-2xl rounded-xl bg-brand-soft px-6 py-5'>
            <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand md:text-xs'>{label}</p>
            <p className='m-0 mt-1 text-lg font-semibold leading-7 text-ink md:text-xl'>{children}</p>
        </div>
    )
}

export default function Search(){

    const [isUnlocked, setIsUnlocked] = useState(false)
    const [showPhotos, setShowPhotos] = useState(false)
    const [isSkim, setIsSkim] = useState(false)

    const modeButton = isActive => `rounded-full px-4 py-1.5 text-sm font-semibold cursor-pointer ${isActive ? 'bg-white text-ink shadow-sm' : 'text-body hover:text-ink'}`

    return(
        <main className={isSkim ? 'skim' : ''}>
            <CaseStudyHeader
                kicker='Case study · Mayo Clinic Laboratories'
                title='Search grows up'
                subtitle="Lab techs and clinicians couldn't find the tests they needed. I redesigned search from the search bar to the results page."
                summary='Three search boxes, cryptic result titles and an unlabeled dropdown were slowing people down. Once a new search provider gave us metadata, I designed one search bar, Fast Facts, color-coded labels, filters and an AI overview with citations.'
                note='The AI overview was designed but not yet tested with users at the time of writing.'
                facts={[
                    {label: 'Role', value: 'Lead UX Designer'},
                    {label: 'Users', value: 'Lab technologists, clinicians, genetic counselors, specimen processors'},
                    {label: 'Methods', value: 'User interviews, 3 brainstorm sessions, feedback on new designs'},
                ]}
            >
                <div className='flex flex-wrap items-center gap-3'>
                    <p className='m-0 text-sm md:text-sm'>Reading mode</p>
                    <div role='group' aria-label='Reading mode' className='inline-flex rounded-full bg-tint p-1'>
                        <button type='button' aria-pressed={!isSkim} onClick={() => setIsSkim(false)} className={modeButton(!isSkim)}>Full story</button>
                        <button type='button' aria-pressed={isSkim} onClick={() => setIsSkim(true)} className={modeButton(isSkim)}>Skim · 1 min</button>
                    </div>
                </div>
                <PhotoUnlock isUnlocked={isUnlocked} onUnlock={() => { setIsUnlocked(true); setShowPhotos(true) }} showPhotos={showPhotos} onShowPhotosChange={setShowPhotos}/>
            </CaseStudyHeader>

            <TableOfContents sections={sections}>
                <section id='the-scenario' className='mb-0'>
                    <Beat number='01' label='Put yourself in their shoes' title='Find one shipping temperature. How hard could it be?'>
                        <p className='max-w-2xl'>Imagine you're a lab tech. A doctor suspects a patient's immune system is attacking their brain and has just drawn spinal fluid. It's up to you to find out what temperature the sample has to be kept at.</p>
                        <div className='story-body max-w-2xl'>
                            <p>Your hospital recently started sending tests to Mayo Clinic Laboratories, so this is your first time on their website. You know the test code is ENC2, so it should be easy to find.</p>
                            <p>On the homepage, you find three different places to search and aren't sure which one to use.</p>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-4 max-w-3xl'>
                            <ZoomImage src={searchBarsOneAndTwo} alt='Homepage with two separate search entry points marked 1 and 2' caption='Two of the three search boxes'/>
                            <ZoomImage src={searchBarThree} alt='Test Catalog menu open with a third search box, marked 3' caption='The third search box, inside the Test Catalog menu'/>
                        </div>
                        <div className='story-body max-w-2xl'>
                            <p className='mt-8'>You pick one and start typing. A dropdown of suggestions appears, but they all run together and it's hard to spot the right one.</p>
                            <ZoomImage className='max-w-md' src={oldDropdown} alt='Old Test Catalog dropdown: an unbroken list of test names with no categories' caption='The old dropdown: no categories, no visual separation'/>
                            <p className='mt-8'>So you type the code and press Enter instead.</p>
                        </div>
                        <ZoomImage className='max-w-2xl' src={enc2SearchResults} alt='Test Catalog search results for enc2. The first result is a PDF titled central_nervous_system_demyelinating_disease_diagnostic_algorithm.pdf; the ENC2 test is second, followed by six tabs of details' caption='Search for the exact test code, and the top result is a PDF'/>
                        <div className='story-body max-w-2xl'>
                            <p className='mt-8'>The top result for the code you typed is a PDF with a file name for a title. Nothing tells you which results are tests and which are documents. When you do find ENC2, the shipping temperature is somewhere behind six tabs of detail.</p>
                            <p>That took longer than it should have, and you still have a long list of tests to order. Worse, misreading a temperature or minimum volume could spoil the sample and delay a diagnosis by weeks, when every day matters.</p>
                            <p className='mb-0'>I was the lead UX designer on Mayo Clinic Laboratories' year-long effort to fix search, working with a product manager, a design researcher and a team of developers.</p>
                        </div>
                    </Beat>
                </section>

                <section id='the-problem' className='mb-0'>
                    <Beat number='02' label='The problem' title="Real users were hitting the same walls">
                        <div className='story-body'>
                            <p className='max-w-2xl'>In interviews, lab techs and clinicians described the same problems: too many places to search, and result titles that only a specialist could decode.</p>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='max-w-2xl' src={jennifer} name='Jennifer' role='Lab Technologist'>
                            I got to tell you, as somebody that's just turned 50 bigger is better... I would rather have <span>one really obvious search area</span>.
                        </UserQuote>
                        <div className='story-body'>
                            <ZoomImage className='mt-8 max-w-2xl' src={searchPhleb} alt='Site search results for phlebotomy, with near-identical result titles' caption='Search results for phlebotomy, with near-identical titles'/>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='mt-8 max-w-2xl' src={kanedra} name='Kanedra' role='Physician Assistant'>
                            I'm just not confident that I'm taking the right steps and I just think that could be remedied by making sure that the titles are <span>relevant</span> to what I should be looking for or just <span>clear and concise</span>.
                        </UserQuote>
                    </Beat>
                </section>

                <section id='the-constraint' className='mb-0'>
                    <Beat number='03' label='The constraint' title="Filters needed metadata we didn't have">
                        <div className='story-body max-w-2xl'>
                            <p>Labeling every result for filtering would have cost subject matter experts hundreds of hours. Marketing also needed web content to surface, even though it would sink in a single list.</p>
                            <p>We went with a two-column compromise. I believed promoted results should appear organically by default and tweaked on a case-by-case basis, and that the two-column approach didn't fully answer user feedback. For the time being, we lived with it.</p>
                        </div>
                        <ZoomImage className='max-w-2xl' src={twoColumn} alt='Two-column results: Test Catalog results on the left, web content on the right' caption='The interim two-column results page'/>
                        <div className='story-body max-w-2xl'>
                            <p className='mt-8'>Elsewhere in Mayoville, the homepage was getting a facelift. That gave us the chance to make the search bar the primary place to search, answering Jennifer's request for "one really obvious search area". But the behavior of search was still a problem.</p>
                            <ZoomImage src={newHomepage} alt='Redesigned homepage with a single large search bar under the headline Breaking diagnostic boundaries' caption='The refreshed homepage, with search front and center'/>
                        </div>
                    </Beat>
                </section>

                <section id='research-to-design' className='mb-0'>
                    <Beat number='04' label='Research to design' title="A new search provider, and one comment I couldn't forget">
                        <div className='story-body max-w-2xl'>
                            <p>Business funded a new back-end search provider that could use AI to generate the metadata we lacked and improve our titles and descriptions. With the constraint gone, I went back to what users had told us.</p>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='max-w-2xl' src={shari} name='Shari' role='Histology Supervisor'>
                            If I'm looking for a very specific molecular test... what I want to see basically is the test name and this is the test code. These are the specimen requirements. This is the turnaround time. How to ship it, whether it needs to be refrigerated, whether it needs to be frozen. <span>Like all of that, really clear and concise and in one small line</span>.
                        </UserQuote>
                        <Callout label='The design response'>Fast Facts: specimen type, stability, turnaround time and performing lab, one tap away under each test result.</Callout>
                        <ZoomImage className='mt-6 max-w-2xl' src={calloutFastFacts} alt='Search result with the Fast Facts row open, showing 3-5 days'/>
                        <div className='story-body max-w-xl'>
                            <ZoomImage className='mt-6' src={fastFacts} alt='Fast Facts tabs expanding to show specimen type, stability, turnaround time and performing lab' caption='Each tab answers one of the questions lab techs search for most'/>
                        </div>
                    </Beat>
                </section>

                <section id='what-users-said' className='mb-0'>
                    <Beat number='05' label='What users said' title='The new search experience, annotated'>
                        <div className='story-body max-w-2xl'>
                            <p className='mb-0'>Alongside Fast Facts, I added color-coded labels, filters and icons in the dropdown. Select a pin to see what changed and what users said about it.</p>
                        </div>
                        <AnnotatedScreenshot image={newSrp} alt='New search results page with labels, Fast Facts and filters' notes={annotations} showPhotos={showPhotos}/>
                        <div className='mt-10 grid md:grid-cols-2 gap-6 items-center max-w-4xl'>
                            <ZoomImage src={calloutObsolete} alt='Search result with an Obsolete label linking to the update notice' caption='The surprise hit: notices for obsolete tests'/>
                            <UserQuote showPhoto={showPhotos} src={olivia} name='Olivia' role='Specimen Processor'>
                                I LOVE LOVE LOVE LOVE LOVE LOVE LOVE (and a MILLION more LOVES) that when I search the test catalog for an Obsolete test now, I now see a link that says the test is obsolete, and links to the test update PDF.  This is AMAZING and really helps streamline searching for information.
                            </UserQuote>
                        </div>
                    </Beat>
                </section>

                <section id='ai-search' className='mb-0'>
                    <Beat number='06' label='AI they can trust' title="Users trust Mayo. They don't always trust AI.">
                        <div className='story-body max-w-2xl'>
                            <p>Our new search provider also let us bring AI into search. The question was how to use it in a way that made sense for the Mayo brand. We held three brainstorm sessions with lab staff and providers to imagine how AI could make their jobs easier.</p>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='story-body max-w-2xl' src={anna} name='Anna' role='Genetic Counselor'>
                            If I'm on the MCL website and I'm looking for something in MCL specifically, I would trust their AI a little bit more than a generic one.
                        </UserQuote>
                        <Callout label='How might we'>deploy AI search in a way that speeds up what users already do, while guarding against AI's inaccuracies?</Callout>
                        <ZoomImage className='mt-6 max-w-2xl' src={calloutAiCollapsed} alt='AI Overview panel, collapsed by default' caption="My solution: an inline AI panel. Collapsed by default, trained on Mayo's own data, with citations and a switch to turn it off."/>
                        <div className='story-body'>
                            <p className='mt-8 max-w-2xl'>When expanded, the panel shows a <span>formatted response</span> that helps users <span>navigate</span>, <span>decide</span> which test matches a disease state, and <span>answer</span> simple questions like "what's the minimum volume of this specimen I can ship?"</p>
                            <div className='grid sm:grid-cols-2 gap-4 max-w-3xl'>
                                <ZoomImage src={calloutAiExpanded} alt='AI Overview panel expanded, with formatted sections on symptoms, diagnosis and treatment' caption='Expanded: a formatted answer'/>
                                <ZoomImage src={calloutAiCitations} alt='Citation links to Mayo Clinic Labs sources at the bottom of the AI Overview' caption='Citations to the Mayo content behind the answer'/>
                                <ZoomImage src={calloutHideAi} alt='Turn off AI Overview toggle in the top right of the panel' caption='A toggle for people who prefer organic results'/>
                            </div>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='mt-8 max-w-2xl' src={paul} name='Paul' role='Hospital Physician'>
                            Even if I don’t click the source, knowing it’s there matters.
                        </UserQuote>
                        <div className='story-body max-w-2xl'>
                            <h3 className='mt-10'>Mobile</h3>
                            <p>Almost all of MCL's B2B users work on desktops, and mobile search was far from optimized. I designed a mobile version so the brand stays consistent for the 1% who search on their phones.</p>
                            <div className='grid grid-cols-2 gap-6 max-w-md'>
                                <ZoomImage framed={false} src={mobileReg} alt='Mobile search results with a collapsed AI Overview and labeled results'/>
                                <ZoomImage framed={false} src={mobileDrawer} alt='Mobile search results with the filter drawer open'/>
                            </div>
                        </div>
                        <p className='mt-8 mb-0 max-w-2xl text-base text-muted md:text-base'><strong className='text-ink'>Next step:</strong> test the AI overview with users. These designs hadn't been tested at the time of writing, though many of their features came from earlier research.</p>
                    </Beat>
                </section>

                <section id='before-and-after' className='mb-0'>
                    <Beat number='07' label='Before and after' title='From three search boxes to one'>
                        <BeforeAfter
                            title='Search page'
                            before={homePageWithSearch}
                            beforeAlt='Original Mayo Clinic Labs homepage, with search boxes in the Test Catalog panel and behind a magnifying-glass icon in the header, both marked in red'
                            after={newDropdown}
                            afterAlt='New homepage search dropdown with suggestions for enc, each marked with an icon for a test, an algorithm or an article'
                            changes={[
                                'One search bar on the homepage instead of three',
                                'An icon on each suggestion marks it as a test, an algorithm or an article',
                                'The completion is in bold, so each match is easy to scan',
                            ]}
                        />
                        <BeforeAfter
                            title='Search results page'
                            before={searchResultsPage}
                            beforeAlt='Original search results page: a plain list of blue links with long, technical descriptions'
                            after={aiSearchCollapsed}
                            afterAlt='New search results page with the AI Overview collapsed above labeled results'
                            changes={[
                                'Filters for result type, specimen type, turnaround time and performing location',
                                'A color-coded label on every result',
                                'Fast Facts tabs under each test',
                                'An AI Overview, collapsed by default, with citations',
                            ]}
                        />
                    </Beat>
                </section>
            </TableOfContents>
        </main>
    )
}
