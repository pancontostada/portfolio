import Portrait, {people} from './Portrait.jsx'

export default function UserQuote({src, name, role, showPhoto = true, className = 'm-0', children}){

    const person = name.toLowerCase()
    const hasPortrait = person in people

    return(
        <figure className={`user-quote grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 ${className}`}>
            <div className='w-12 h-12 rounded-full overflow-hidden row-span-2'>
                {showPhoto || !hasPortrait
                    ? <img src={src} alt='' className='w-full h-full object-cover'/>
                    : <Portrait person={person} className='w-full h-full'/>}
            </div>
            <blockquote className='m-0 text-gray-800 text-base md:text-lg leading-7'>"{children}"</blockquote>
            <figcaption className='text-sm text-gray-500'>{name}, {role}</figcaption>
        </figure>
    )
}
