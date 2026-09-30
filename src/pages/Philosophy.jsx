import mindMap from '../assets/philosophy/mindMap.webp'
import litMindMap from '../assets/philosophy/litMindMap.webp'

export default function Philosophy(){
    return(
        <main>
            <section className='max-w-[800px]'>
                <h1 className='mt-16 mb-16 font-normal'>Theory of the Good Life</h1>
                <img src={mindMap} className='mb-16'/>
                <p>Above are the fundamental variables for what I consider “the good life.” This is also my operational definition for “<span>health</span>” and “<span>thriving</span>” which I find to be more aspirational, proactive, and frankly, helpful for people in the business of flourishing.<br/><br/>

                Lacking in any of these domains will at some point, either directly or indirectly, gone acknowledged or unacknowledged, lead to deep unsatisfactoriness and discontent and inhibit flourishing. <br/><br/>
                
                Importantly, these conditions cannot be met until the conditions of survival have been satisfied and stabilized. Shifting from the defensive mode of <span>survival</span> to the proactive pursuit of health, for oneself and others, represents <span>the highest striving of humankind</span>.<br/><br/>
                
                My goal, for which I hope to use my career in design as a conduit, is to play my part, however small, in creating this shift for as many people as possible. Below, I detail how I define each of these variables. <br/><br/><br/><br/>
                
                <span className="text-[#57E452]">Eat</span>: The consumption of what we need to generate energy. Includes food, water, nutrients, medication, and supplements.<br/><br/>
                
                <span className='text-[#8894FF]'>Sleep</span>: The physiological process all human bodies are designed to undergo once a day. Includes sleep quantity, quality, and satisfaction.<br/><br/>
                
                <span className='text-[#FF7575]'>Move</span>: Includes exercise, mobility, dance, and the refinement of spatial navigation.<br/><br/>
                
                <span className='text-[#2298FF]'>Build</span>: Broad category that includes many things that people want to build, such as careers, wealth, Lego spaceships, knowledge, companies, families, social status, virtues, habits, etc. The basis of learning, self-improvement, and much goal-directed behavior. Includes building physical and digital things, and therefore captures the creative urge.<br/><br/>
                
                <span className='text-[#DBC403]'>Bond</span>: Encompasses the human urge to engage in relationships with others in different roles, like friend, spouse, father, daughter, leader, follower, mentor, ancestor. Also captures group affiliations like family, local community, animals, nature, higher power.<br/><br/>
                
                <span className='text-[#DB74FF]'>Believe</span>: Encompasses the human urge to believe in something greater than oneself. Could include religion, but also covers one’s philosophy, epistemology, code of ethics, mindsets, and core beliefs. One’s model and framework for reality.<br/><br/>
                
                <span className='text-[#828282]'>Rest</span>: The human need to occasionally do nothing, be in the present moment, and recover by allowing things to unfold as they are. Allergic to perfectionism, protects against chronic stress. Includes acceptance, laughter, play, and doing amusing things for no apparent reason.</p>
                <div>
                    <img src={litMindMap} />
                    <p className='caption'>The books and podcasts that have informed my view on this framework.</p>
                </div>
            </section>
        </main>
    )
}