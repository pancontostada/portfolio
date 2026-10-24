import Avatar from './Avatar.jsx'

export default function UserQuote({src, name, role, showPhoto = true, className = 'm-0', children}){

    return(
        <figure className={`user-quote grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 ${className}`}>
            <Avatar src={src} name={name} showPhoto={showPhoto} className='w-12 h-12 row-span-2'/>
            <blockquote className='m-0 text-gray-800 text-base md:text-lg leading-7'>"{children}"</blockquote>
            <figcaption className='text-sm text-gray-500'>{name}, {role}</figcaption>
        </figure>
    )
}
