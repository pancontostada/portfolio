import Portrait from './Portrait.jsx'
import { people } from '../participants'

// A participant's photo, or their illustration until photos are shown.
export default function Avatar({src, name, showPhoto = true, className = ''}){

    const person = name.toLowerCase()
    const hasPortrait = person in people

    return(
        <div className={`rounded-full overflow-hidden ${className}`}>
            {showPhoto || !hasPortrait
                ? <img src={src} alt='' className='w-full h-full object-cover'/>
                : <Portrait person={person} className='w-full h-full'/>}
        </div>
    )
}
