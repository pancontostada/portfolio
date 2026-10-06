import searchHero from '../assets/search/searchHero.png'
import homePageWithSearch from '../assets/search/homePageWithSearch.png'
import searchResultsPage from '../assets/search/searchResultsPage.png'
import searchBarsOneAndTwo from '../assets/search/searchBarsOneAndTwo.png'
import searchBarThree from '../assets/search/searchBarThree.png'
import searchPhleb from '../assets/search/searchPhleb.png'

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
                        <img src={searchBarThree} className='shadow-lg'/>
                    </li>
                    <li>
                        <p>2. Confusing titles and description text</p>
                        <img src={searchPhleb} className='shadow-lg'/>
                        
                    </li>
                </ul>
            </section>
        </main>
    )
}