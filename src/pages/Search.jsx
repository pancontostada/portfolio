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
                            I got to tell you as somebody that's just turned 50 bigger is better... I would rather have <span>one really obvious search area</span>.
                        </UserQuote>
                    </li>
                    <li className='mb-16'>
                        <p>2. Confusing titles and description text</p>
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
                        <img src={oldDropdown} className='shadow-lg mb-8 mx-auto max-w-[300px]'/>
                        <p>It was hard to distinguish between a line break and a new entry. Plus there was no categorization of search result types to guide the eye</p>
                    </li>
                </ul>
            </section>
            <section>
                <h3>A Tale of Two Columns</h3>
                <p>We knew that a segmentation and categorization of the results would be helpful. But there was a problem— 1. The ability to filter or sort the search results would require maybe hundreds on manhours of experts labelling results with metadata we didn’t have. 2. Marketing was worried that we would bury results that didn’t get a lot of traffic but that could nonetheless generate new business. Results such as “Oncology Specialty Testing”. So we went with a 2-column approach where the second column was specifically for web content. </p>
                <img src={twoColumn} className='shadow-lg'/>
                <p>As a UX designer, this approach hurt my heart. Plus we knew that users didn’t like it.</p>
            </section>
            <section>
                <h3>Elsewhere in Mayoville...</h3>
                <p>The home page was getting a design facelift. Fortunately we were able to change the header. This allowed us to highlight one primary search bar. (We decided to keep a search in the header so that when a user was on a different page, they were able to search without navigating back to the homepage). But for the time being, search was still handicapped.</p>
                <img src={newHomepage} className='shadow-lg'/>
            </section>
        </main>
    )
}