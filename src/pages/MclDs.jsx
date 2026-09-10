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

export default function MclDs(){
    return(
        <main className='h-full'>
            <div className='h-full'>
                <img src={banner} className='h-full object-cover w-full'/>
            </div>
            <section>
                <h2>A Design System for Mayo Clinic Labs</h2>
                <img src={ danMallCourse } />
            </section>
        </main>
    )
}