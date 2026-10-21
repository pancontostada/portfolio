import timeline from '../assets/about/timeline.webp'
import carousel from '../assets/about/carousel.gif'
import running from '../assets/about/running.webp'
import recipe from '../assets/about/recipe.webp'
import goodreads from '../assets/about/goodreads.webp'
import meditation from '../assets/about/meditation.webp'
import trivia from '../assets/about/trivia.webp'


export default function About(){
    return(
        <main>
            <section className='max-w-[800px]'>
                <img src={timeline} alt="Timeline from 2018, David holding a brain specimen in a neuroscience lab, along a squiggled line to 2022, David sketching with a teammate in a design studio" className='my-16'/>
                <p>I went to college at Dartmouth where I majored in <span>neuroscience</span> and took pre-med, and I was destined for med school. But  the world of <span>human-centered design</span> was better suited to my strengths, so I attended Northwestern’s Masters in Engineering Design and Innovation where I focused in digital healthcare. <br/><br/>I have seen a surprising amount of parallels between the world of design and neuroscience. For example, the ideal brainstorming environment mirrors how our brains are wired— brain cells are mostly connected to other nearby brain cells, but they also connect with a few brain cells in distant parts of the brain to create ordered complexity. Similarly, a good brainstorm requires people in the same room under one culture, but thrives from diverse life experiences. This cross-discipline finding has been called the Small World phenomenon. And the more that I have learned about science and design, the smaller the world has become!</p>
                <img src={carousel} alt="Pixel-art carousel with horses" className='w-[20vw] mx-auto mb-16 max-w-[100px]'/>
                <p>In the squiggled line between 2018 and 2022, I embarked on what I called a “<span>carousel of internships</span>”. I was a web designer for a mental health startup out of Harvard, a tech reporter in D.C., an SEO marketer from an e-commerce brand in Alaska, and a barista in Miami Beach. They seem random, but all these experiences were instrumental in getting me to the place I am now. From web design, I learned that I love laying out information in a visual way. From tech journalism, I learned the art of shaping quotes and data into narratives. From SEO, or search engine optimization, I discovered the joy of giving a user exactly what they’re looking for. And working as a barista showed me that I love working in person with a trusting, fun-loving team. These experiences all contributed to my desire to enter human-centered design, which has led me to a career path that I love.<br/><br/>I took the road less travelled, and that has made all the difference. </p>
                <p>I also run🏃🏻, cook👨🏻‍🍳, meditate🧘🏻‍♂️, read self-help books📚, and play pub trivia🍻! </p>
                <div className="grid sm:grid-cols-3 grid-cols-1">
                    <img src={running} alt="David with friends and family in matching blue shirts after an Invest in Yourself 5K" className='w-full h-full object-cover'/>
                    <img src={recipe} alt="Ingredients for a soba noodle recipe laid out on a kitchen counter next to an open cookbook" className='w-full h-full object-cover'/>
                    <img src={goodreads} alt="David's Goodreads read list, including Play, Make It Stick, Essentialism and Creative Confidence" className='sm:row-span-2 sm:col-start-4 sm:col-end-3 w-full h-full object-cover'/>
                    <img src={meditation} alt="Memoji of David meditating cross-legged with eyes closed" className='w-full h-full object-contain '/>
                    <img src={trivia} alt="David and friends around a table at pub trivia" className='w-full h-full object-cover'/>
                </div>
            </section>
        </main>
    )
}