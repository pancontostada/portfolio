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

import UserQuote from '../components/UserQuote.jsx'

export default function Search(){
    return(
        <main>
            <div>
                <img src={searchHero} className='h-full object-cover w-full'/>
            </div>
            <section className='mt-16'>
                <h3>In the beginning</h3>
                <p>This is what search looked like when I started at MCL</p>
                <p className='mb-2'>Search bar on homepage</p>
                <img src={homePageWithSearch} className='mb-16 shadow-lg'/>
                <p className='mb-2'>Search results page</p>
                <img src={searchResultsPage} className=' mb-16 shadow-lg'/>
                <p>And there were a number of things wrong with it</p>
                <ul>
                    <li className='mb-16'>
                        <p>1. Redundant places to search from</p>
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
                        <p>2. Arcane search result titles and description text</p>
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
                        <p>3. Confusing dropdown suggestions</p>
                        <p>The old design made it hard to distinguish between different dropdown entries, and a lack of categorization made it even harder to find what you're looking for.</p>
                        <img src={oldDropdown} className='shadow-lg mb-8 mx-auto max-w-[300px]'/>
                    </li>
                </ul>
            </section>
            <section>
                <h3>A Tale of Two Columns</h3>
                <p>We knew that categorization and filtering of the results would be helpful. But there there were two problems.</p>
                <ol className='list-decimal pl-4 text-xl'>
                    <li>The ability to filter search results would require hundreds of manhours by subject matter experts labelling results with metadata we didn’t have.</li>
                    <li>Marketing wanted the ability to surface results that could lead to new business but due to low traffic might get buried in an organic, one-column approach.</li>
                </ol>
                <p>So we went with a 2-column approach where the second column was specifically for web content.</p>
                <img src={twoColumn} className='shadow-lg mb-8'/>
                <p>As a designer, I thought this approach led to a more jarring experience. Ideally, a search result should be promoted within the same column of organic search results and surfaced based on the tuning of a relevance engine. If users . Plus we knew that users didn’t like it.</p>
            </section>
            <section>
                <h3>Elsewhere in Mayoville...</h3>
                <p>The home page was getting a design facelift. This gave us the chance to reposition the search bar as the primary place to search, which addressed Jennifer's previous pain point. (We decided to keep a search in the header so that when a user was on a different page, they were able to search without navigating back to the homepage). But for the time being, the function of search was still handicapped.</p>
                <img src={newHomepage} className='shadow-lg'/>
            </section>
            <section>
                <h3>The door opens</h3>
                <p>Good luck came our way – the business powers that be agreed we needed to modernize our search, so they gave us money to buy a new back-end search provider. This provider gave us new powers, like the ability to use AI to create better metadata for our search results and improve our title & description text.</p>
                <p>Freed from technical constraints, I introduced a dropdown with categorized entries.</p>
                <img src={newDropdown} className='shadow-lg'/>
                <p>And for the search results page, I introduced color-coded labels, filters, fast facts, and an updated style to match the home page. </p>
                <img src={newSrp} className='mb-8 shadow-lg'/>
                <UserQuote
                    src={shari}
                    name='Shari'
                    role='Histology Supervisor'
                >
                    “If I'm looking for a very specific molecular test... what I want to see basically is the test name and this is the test code. These are the specimen requirements. This is the turnaround time. How to ship it, whether it needs to be refrigerated, whether it needs to be frozen. Like all of that, really clear and concise and in one small line.“ 
                </UserQuote>
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
                    Those quick tabs are great because they save clicks. When things are urgent, that matters.”
                </UserQuote>
                <UserQuote
                    src={letitia}
                    name='Letitia'
                    role='Cytotechnologist'
                >
                    “One quick glance, and you know what you need. That’s what my techs appreciate”
                </UserQuote>
                <p>As a B2B company whose users are 99% of the time working on desktops, Mayo had a mobile version of search that was very janky. I also created a responsive mobile version to improve our user’s experience the 1% of times they used search on the go. </p>
                <div className='grid grid-cols-2 gap-4 max-w-[600px] mx-auto'>
                    <img src={mobileReg} />
                    <img src={mobileDrawer} />
                </div>
            </section>
            <section>
                <h3>AI Search</h3>
                <p>Our partnership with Coveo also allowed us to inject AI into search. But the question was— how to use it in a way that made sense with the Mayo brand? We held three different brainstorm sessions between lab staff and providers to envision how AI can make their jobs easier. We learned the following:</p>
                <p>Users trust the Mayo brand but don’t always trust AI search results. We can leverage the trust users have in Mayo, but need to be very careful that the quality of our AI keeps that trust.</p>
                <UserQuote
                    src={anna}
                    name={'Anna'}
                    role={'Genetic Counselor'}
                >
                    “If I'm on the MCL website and I'm looking for something in MCL specifically, I would trust their AI a little bit more than a generic one.”
                </UserQuote>
                <UserQuote
                    src={paul}
                    name={'Paul'}
                    role={'Hospital Physician'}
                >
                    “Even if I don’t click the source, knowing it’s there matters.”
                </UserQuote>
                <p>I designed an AI overview panel that is distinct from the rest of the search results page. It features markup formatting to allow faster scanning of information, the ability to minimize and hide the panel for users who want to focus on standard search, and links to different parts of the Mayo website to let users confirm what they are reading.</p>
                <img src={aiSearch} className='shadow-lg'/>
            </section>
            <section>
                <h3>Before and After</h3>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] md:grid-rows-1 gap-4 items-center mb-16'>
                    <img src={homePageWithSearch} className='shadow-lg'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={newDropdown} className='shadow-lg'/>
                </div>
                <div className='grid grid-rows-[1fr_auto_1fr] md:grid-cols-[1fr_auto_1fr] gap-4 items-center'>
                    <img src={searchResultsPage} className='shadow-lg'/>
                    <p className='mb-0 text-4xl mx-auto rotate-90 md:rotate-0'>&rarr;</p>
                    <img src={aiSearchCollapsed} className='shadow-lg'/>
                </div>
            </section>
        </main>
    )
}