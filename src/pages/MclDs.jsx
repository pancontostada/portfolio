import banner from '../assets/mclDs/00-banner.webp'
import danMallCourse from '../assets/mclDs/01-danMallCourse.webp'
import mclPages from '../assets/mclDs/02-mclPages.webp'
import pagesFigma from '../assets/mclDs/03-pagesFigma.webp'
import buttonsCollection from '../assets/mclDs/04-buttonsCollection.webp'
import formsCollection from '../assets/mclDs/05-formsCollection.webp'
import tokens from '../assets/mclDs/06-tokens.webp'
import buttonGif from '../assets/mclDs/07-buttonGif.gif'
import form from '../assets/mclDs/08-form.gif'
import table from '../assets/mclDs/09-table.gif'
import messagesGreyed from '../assets/mclDs/10-messagesGreyed.webp'
import messagesHalfBuilt from '../assets/mclDs/11-messagesHalfBuilt.webp'
import messagesCompleted from '../assets/mclDs/12-messagesCompleted.webp'
import darkMode from '../assets/mclDs/13-darkMode.gif'
import docs from '../assets/mclDs/13-docs.webp'
import darkModeJuxt from '../assets/mclDs/14-darkModeJuxt.webp'
import devMode from '../assets/mclDs/15-devMode.webp'
import inspector from '../assets/mclDs/16-inspector.webp'
import reactPlain from '../assets/mclDs/17-reactPlain.webp'
import button from '../assets/mclDs/18-button.webp'
import reactwithButton from '../assets/mclDs/19-reactwithButton.webp'
import npm from '../assets/mclDs/20-npm.webp'
import importButton from '../assets/mclDs/21-importButton.webp'
import nextJs from '../assets/mclDs/22-nextJs.webp'
import certificate from '../assets/mclDs/23-certificate.webp'

import Chunk from '../components/Chunk'

export default function MclDs(){
    return(
        <main className='h-full'>
            <div className='h-full'>
                <img src={banner} className='h-full object-cover w-full'/>
            </div>
            <section>
                <h2 className='mt-12'>A Design System for Mayo Clinic Labs</h2>
                <Chunk imageUrl={ danMallCourse }>
                    I recently took a course on Design Systems University by Dan Mall, an expert in and pioneer of design systems.
                </Chunk>
                <p>For the uninitiated, a design system is <span className='block mt-4 italic text-gray-500 font-normal'>“A connected, package-managed, version-controlled software product that contains the smallest set of components and guidelines a particular organization needs to make digital products consistently, efficiently, and happily.”</span></p>
                <p>At the time of this writing, I am a UX Designer at Mayo Clinic Labs, so I thought using the mayocliniclabs.com website would be an instructive exercise upon which to practice building a design system. In the following case study, I will guide you through the process I took to build a design system in design and in code.</p>
            </section>
            <section>
                <h2>A Design System in Figma</h2>
                <Chunk imageUrl={mclPages}>
                    Let’s build a design system for MCL in Figma! We’ll start by <span>documenting</span> the pages from MCL that represent the highest trafficked and most critical pages on the website.
                </Chunk>
                <Chunk imageUrl={pagesFigma}>
                    Now let’s visually scan these pages for components and make a list  of the different common components that appear throughout the pages. Let’s also make a note of the number of pages in which each component appears.
                </Chunk>
                <p>When it comes time to building components, this process will help us determine which components will save future designers and developers the most time.</p>
                <Chunk imageUrl={buttonsCollection}>
                    Now, let’s gather different instances of each component to gauge the degree of variation that exists. We’ll also make a note of which stylings and elements are common to all, most, some, and few of the component instances.
                </Chunk>
                <p className='caption'>Audit of mcl buttons. Note how much variation there is between buttons. Much of this reflects redundant work that could be streamlined.</p>
                <Chunk imageUrl={formsCollection} />
                <p className="caption">Audit of MCL forms. In addition to adding hundreds of hours of labor to designer and developer workflows, this much variety in buttons damages the trust that the user has in the MCL brand.</p>
                <Chunk imageUrl={tokens}>
                    Before we take off creating components, let’s create tokens — essential for any modern design system - using Figma’s Variables feature.
                </Chunk>
                <p>These tokens, which have semantic names for color, reference “source of truth” colors called Primitives. Soon, you’ll see how much power and flexibility this gives the design system.</p>
                <p>Applying these color tokens as we go, let’s build some components. I chose three components to build out: <span>buttons</span>, <span>forms</span>, and <span>tables</span>.</p>
                <div className="grid grid-cols-1 mb-8">
                    <Chunk imageUrl={buttonGif} />
                    <Chunk imageUrl={form} />
                    <Chunk imageUrl={table} />
                </div>
                <p>Now, let’s see the payoff! Let’s select a page-- the Message Center page in MCL-- to recreate using components as a proof of concept for this design system.</p>
                <div className="flex gap-2 w-full items-center mb-8">
                    <img src={messagesGreyed} className='min-w-0'/>
                    <p className='text-[2rem]'>&rarr;</p>
                    <img src={messagesHalfBuilt} className='min-w-0'/>
                </div>
                <Chunk imageUrl={messagesCompleted}>
                    Using just button, form, and table components, we recreated half the messages page in record time! This turned a task that ordinarily would have taken hours into minutes. And it made the consistency of design elements in the page less prone to human error. Not to mention the vastly greater number of hours that we can save designers and developers in the future, since we can reuse these components to build future products!
                </Chunk>
                <p className='mt-8'>Let’s build the rest of the page out using customs designs, just for good measure!</p>
                <Chunk imageUrl={docs}>While we’re building out the page, let’s start creating a reference website to document our design system. This will help convey its advantages to other team members so that they want to adopt it!</Chunk>
                <Chunk imageUrl={darkMode} hasBoxShadow={false}>What ever happened to those pesky tokens? Well, since we applied them to our reusable components while we were designing upfront, something really cool is just a few clicks away...</Chunk>
                <p>Introducing MCL Dark Mode!</p>
                <div className="flex-row">
                    <Chunk imageUrl={darkModeJuxt}/>
                </div>
                <Chunk imageUrl={devMode}>
                    Let’s open of Dev Mode on Figma and leave some notes so for our developers so that we can ensure a  smooth handoff process (as smooth as it can be, at least).
                </Chunk>
            </section>
            <section>
                <h2>A Design System in Code</h2>
                <p>In addition to taking substantial first steps to create a design system for MCL based in Figma, it is also important to do so in code. I am not a front-end developer (yet), but I think it’s important for designers to better understand the process that developers go through to create design systems in code. So let’s do that.</p>
                <Chunk imageUrl={inspector}>Let’s start simply, by picking one instance of a button from our Message Center page. Let’s open up the Developer Tools to get more information on its HTML and CSS properties.</Chunk>
                <Chunk imageUrl={reactPlain}>Now, let’s create a React app. This will test whether the button component we build in code will actually work on the Web.</Chunk>
                <Chunk imageUrl={button}>
                    Now, let’s code a button using HTML, CSS, JS, and React.
                </Chunk>
                <img src={reactwithButton} />
                <Chunk imageUrl={npm}>We did it! Now, let’s take the very first step in creating a design system in code by uploading our files to a Package Manager.</Chunk>
                <p className="caption">In this example, let’s use NPM, or Node Package Manager, a popular choice for design systems.</p>
                <Chunk imageUrl={importButton}>Let’s run one more test to ensure that our design system is usable by any programmer, regardless of the framework. We’ll also edit the text to make sure it’s modifiable.</Chunk>
                <p className="caption">The key lines of code that import the button from our design system and insert it into the page are highlighted.</p>
                <Chunk imageUrl={nextJs}>
                    This time, we’ll see if the button appears on a Next.js app.
                </Chunk>
                <Chunk imageUrl={certificate}>
                    It worked! We have successfully built a design system in Figma and in code. Thanks for following along!
                </Chunk>
            </section>
        </main>
    )
}