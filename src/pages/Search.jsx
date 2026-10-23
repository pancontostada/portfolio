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
import calloutDropdown from '../assets/search/crops/calloutDropdown.webp'
import steve from '../assets/search/steve.png'
import olivia from '../assets/search/olivia.png'
import calloutObsolete from '../assets/search/crops/calloutObsolete.webp'
import calloutAiCollapsed from '../assets/search/crops/calloutAiCollapsed.webp'
import calloutAiExpanded from '../assets/search/crops/calloutAiExpanded.webp'
import calloutAiCitations from '../assets/search/crops/calloutAiCitations.webp'
import calloutHideAi from '../assets/search/crops/calloutHideAi.webp'
import enc2SearchResults from '../assets/search/crops/enc2SearchResults.webp'

import {useState} from 'react'
import UserQuote from '../components/UserQuote.jsx'
import PhotoUnlock from '../components/PhotoUnlock.jsx'
import BeforeAfter from '../components/BeforeAfter.jsx'
import TableOfContents from '../components/TableOfContents.jsx'
import CaseStudyHeader from '../components/CaseStudyHeader.jsx'
import ZoomImage from '../components/ZoomImage.jsx'
import AnnotatedScreenshot from '../components/AnnotatedScreenshot.jsx'

const sections = [
    {id: 'the-problem', label: 'The problem'},
    {id: 'the-constraint', label: 'The constraint'},
    {id: 'research-to-design', label: 'Research to design'},
    {id: 'what-users-said', label: 'What users said'},
    {id: 'ai-search', label: 'AI they can trust'},
    {id: 'before-and-after', label: 'Before and after'},
]

const annotations = [
    {
        x: 52, y: 13,
        title: 'One search bar',
        text: 'A single, prominent search field replaced three competing entry points.',
        quote: 'I would rather have one really obvious search area.',
        cite: 'Jennifer, Lab Technologist',
    },
    {
        x: 28.6, y: 21.5,
        title: 'Color-coded labels',
        text: 'Every result says whether it is a test, an algorithm, an article or a form. The same colors appear in the filter list.',
        quote: 'I like the color-coded labels there with test, algorithm, resource, and form.',
        cite: 'Steve, Primary Care Doctor',
    },
    {
        x: 47, y: 37,
        title: 'Fast Facts',
        text: 'Specimen type, stability, turnaround time and performing lab open in place under each test.',
        quote: 'I like how it just tells you the specimen and the turnaround time right there… you don’t even have to click into the whole page.',
        cite: 'Abby, Medical Lab Scientist',
    },
    {
        x: 16.5, y: 54,
        title: 'Filters',
        text: 'Specimen type, turnaround time and performing location, made possible by the new metadata.',
        quote: 'Usually, I have to dig pretty hard to find this info. Seeing it as a filter is nice and unexpected.',
        cite: 'Krystal, Genetic Counselor',
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
                    {label: 'Role', value: 'UX Designer'},
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
                <section>
                    <p>I want you to imagine you’re a medical lab tech who is helping a doctor diagnose a patient with a rare form of brain cancer. The doctor just extracted spinal fluid from the patient, and it’s up to you to find out what temperature the sample needs to be kept at.</p>
                    <p>Your hospital has recently partnered with Mayo Clinic Labs to support your testing, and so you go on to their website for the first time to find the answer. You know the test code is ENC2, so it should be pretty easy to find.</p>
                    <p>On the home page, you find 3 different places to search from and aren’t sure the best place to look.</p>
                    <img src={searchBarsOneAndTwo} />
                    <img src={searchBarThree} />
                    <p>After picking one of the search bars at random, you start typing. A dropdown of suggestions appears, and at first glance it’s hard to tell apart different suggestions and find the right result.</p>
                    <img src={oldDropdown} />
                    <p>You decide to type your own query and hit enter instead.</p>
                    <img src={enc2SearchResults} />
                    <p>When the page loads, it’s unclear which results are tests, articles, or something else. The title and description text are confusing. And when you do locate the correct test, you have to click through different subtabs and scan a lot of information to find the shipping temperature. </p>
                    <p>This took longer than expected. As a lab tech, you have a long list of other tests to order and are daunted by the task ahead. You’re also concerned that while attempting to navigate through this website, you might misread a shipping temperature or minimum volume, causing a patient sample to spoil and delaying a diagnosis for weeks in a process for which every day matters.</p>
                    <p>I was part of a year long, ongoing pr	ocess by Mayo to improve the search experience for users. I was the chief UX Designer and worked with a Product Manager, a team of developers, and a design researcher to tackle this problem.</p>
                </section>

                <section id='the-problem' className='mb-0'>
                    <Beat number='01' label='The problem' title='Three places to search, and none of them obvious'>
                        <div className='story-body'>
                            <p className='max-w-2xl'>When I started at MCL, search had three separate entry points. Result text read like arcane codes, and the dropdown bunched up suggestions with no categories.</p>
                        </div>
                        <div className='grid sm:grid-cols-2 gap-4 max-w-3xl'>
                            <ZoomImage src={searchBarsOneAndTwo} alt='Homepage with two separate search entry points marked 1 and 2' caption='Two of the three search boxes'/>
                            <ZoomImage src={searchBarThree} alt='Test Catalog menu open with a third search box, marked 3' caption='The third search box, inside the Test Catalog menu'/>
                        </div>
                        <UserQuote showPhoto={showPhotos} className='mt-8 max-w-2xl' src={jennifer} name='Jennifer' role='Lab Technologist'>
                            I got to tell you, as somebody that's just turned 50 bigger is better... I would rather have <span>one really obvious search area</span>.
                        </UserQuote>
                        <div className='story-body'>
                            <div className='mt-8 grid sm:grid-cols-[1.6fr_1fr] gap-4 max-w-3xl items-start'>
                                <ZoomImage src={searchPhleb} alt='Site search results for phlebotomy, with near-identical result titles' caption='Results only a specialist could decode'/>
                                <ZoomImage src={oldDropdown} alt='Old Test Catalog dropdown: an unbroken list of test names with no categories' caption='The old dropdown: no categories, no visual separation'/>
                            </div>
                            <UserQuote showPhoto={showPhotos} className='mt-8 max-w-2xl' src={kanedra} name='Kanedra' role='Physician Assistant'>
                                I'm just not confident that I'm taking the right steps and I just think that could be remedied by making sure that the titles are <span>relevant</span> to what I should be looking for or just <span>clear and concise</span>.
                            </UserQuote>
                        </div>
                    </Beat>
                </section>

                <section id='the-constraint' className='mb-0'>
                    <Beat number='02' label='The constraint' title="Filters needed metadata we didn't have">
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
                    <Beat number='03' label='Research to design' title="A new search provider, and one comment I couldn't forget">
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
                    <Beat number='04' label='What users said' title='The new results page, annotated'>
                        <div className='story-body max-w-2xl'>
                            <p className='mb-0'>Alongside Fast Facts, I added color-coded labels, filters and icons in the dropdown. Select a pin to see what changed and what users said about it.</p>
                        </div>
                        <AnnotatedScreenshot image={newSrp} alt='New search results page with labels, Fast Facts and filters' notes={annotations}/>
                        <div className='story-body'>
                            <div className='mt-10 grid md:grid-cols-[1.2fr_1fr] gap-6 items-center max-w-4xl'>
                                <ZoomImage src={calloutDropdown} alt='New dropdown with test, algorithm and article icons next to each suggestion' caption='The new dropdown marks each suggestion as a test, an algorithm or an article'/>
                                <UserQuote showPhoto={showPhotos} src={steve} name='Steve' role='Primary Care Doctor'>
                                    It already tells you if it's a lab or an algorithm... that would save a few seconds.
                                </UserQuote>
                            </div>
                            <div className='mt-8 grid md:grid-cols-2 gap-6 max-w-4xl'>
                                <UserQuote showPhoto={showPhotos} src={will} name='Will' role='Lab Manager'>
                                    Those quick tabs are great because they save clicks. When things are urgent, that matters.
                                </UserQuote>
                                <UserQuote showPhoto={showPhotos} src={letitia} name='Letitia' role='Cytotechnologist'>
                                    One quick glance, and you know what you need. That’s what my techs appreciate
                                </UserQuote>
                            </div>
                        </div>
                        <div className='mt-10 grid md:grid-cols-2 gap-6 items-center max-w-4xl'>
                            <ZoomImage src={calloutObsolete} alt='Search result with an Obsolete label linking to the update notice' caption='The surprise hit: notices for obsolete tests'/>
                            <UserQuote showPhoto={showPhotos} src={olivia} name='Olivia' role='Specimen Processor'>
                                I LOVE LOVE LOVE LOVE LOVE LOVE LOVE (and a MILLION more LOVES) that when I search the test catalog for an Obsolete test now, I now see a link that says the test is obsolete, and links to the test update PDF.  This is AMAZING and really helps streamline searching for information.
                            </UserQuote>
                        </div>
                    </Beat>
                </section>

                <section id='ai-search' className='mb-0'>
                    <Beat number='05' label='AI they can trust' title="Users trust Mayo. They don't always trust AI.">
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
                    <Beat number='06' label='Before and after' title='From three search boxes to one'>
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
