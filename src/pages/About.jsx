import timeline from '../assets/about/timeline.webp'
import carousel from '../assets/about/carousel.gif'
import running from '../assets/about/running.webp'
import recipe from '../assets/about/recipe.webp'
import goodreads from '../assets/about/goodreads.webp'
import meditation from '../assets/about/meditation.webp'
import trivia from '../assets/about/trivia.webp'


export default function About(){
    return(
        <section>
            <img src={timeline} />
            <p>I went to college at Dartmouth where I majored in neuroscience and took pre-med, and I was destined for med school. But  the world of human-centered design was better suited to my strengths, so I attended Northwestern’s Masters in Engineering Design and Innovation where I focused in digital healthcare. <br></br>I have seen a surprising amount of parallels between the world of design and neuroscience. For example, the ideal brainstorming environment mirrors how our brains are wired— brain cells are mostly connected to other nearby brain cells, but they also connect with a few brain cells in distant parts of the brain to create ordered complexity. Similarly, a good brainstorm requires people in the same room under one culture, but thrives from diverse life experiences. This cross-discipline finding has been called the Small World phenomenon. And the more that I have learned about science and design, the smaller the world has become!</p>
            <img src={carousel} className='w-[20vw] mx-auto'/>
            <p>In the squiggled line between 2018 and 2022, I embarked on what I called a “carousel of internships”. I was a web designer for a mental health startup out of Harvard, a tech reporter in D.C., an SEO marketer from an e-commerce brand in Alaska, and a barista in Miami Beach. They seem random, but all these experiences were instrumental in getting me to the place I am now. From web design, I learned that I love laying out information in a visual way. From tech journalism, I learned the art of shaping quotes and data into narratives. From SEO, or search engine optimization, I discovered the joy of giving a user exactly what they’re looking for. And working as a barista showed me that I love working in person with a trusting, fun-loving team. These experiences all contributed to my desire to enter human-centered design, which has led me to a career path that I love.<br></br>I took the road less travelled, and that has made all the difference. </p>
            <p>I also run🏃🏻, cook👨🏻‍🍳, mediate🧘🏻‍♂️, read self-help books📚, and play pub trivia🍻! </p>
            <div className="grid grid-cols-1 sm: grid-cols-3">
                <img src={running} />
                <img src={recipe} />
                <img src={goodreads} className='row-span-3 col-start-4 col-end-3'/>
                <img src={meditation} />
                <img src={trivia} />
            </div>
        </section>
    )
}