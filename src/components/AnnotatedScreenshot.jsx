import {useState} from 'react'
import Avatar from './Avatar.jsx'

// Screenshots with numbered pins; the panel beside them explains the selected pin.
// A note can set its own image (and alt); each image is shown once, stacked in the order its first note appears.
export default function AnnotatedScreenshot({image, alt, notes, showPhotos}){

    const [current, setCurrent] = useState(0)
    const note = notes[current]
    const screens = []
    for(const item of notes){
        const src = item.image ?? image
        if(!screens.some(screen => screen.src === src)) screens.push({src, alt: item.image ? item.alt : alt})
    }

    function show(index){
        setCurrent((index + notes.length) % notes.length)
    }

    return(
        <div className='grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-5 items-start mt-6'>
            <div className='grid gap-5'>
                {screens.map(screen => (
                    <div key={screen.src} className='relative overflow-hidden rounded-xl border border-line bg-white'>
                        <img src={screen.src} alt={screen.alt} className='w-full'/>
                        {notes.map((item, index) => {
                            if((item.image ?? image) !== screen.src) return null
                            const isActive = index === current
                            return(
                                <button
                                    key={item.title}
                                    type='button'
                                    onClick={() => show(index)}
                                    aria-pressed={isActive}
                                    aria-label={`Annotation ${index + 1}: ${item.title}`}
                                    style={{left: `${item.x}%`, top: `${item.y}%`}}
                                    className={`absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center size-8 rounded-full border-2 border-white text-sm font-bold text-white shadow-md cursor-pointer transition-transform hover:scale-110 ${isActive ? 'bg-ok' : 'bg-brand'}`}
                                >
                                    {!isActive && <i aria-hidden='true' className='absolute -inset-1.5 rounded-full border-2 border-brand motion-safe:animate-ping'/>}
                                    {index + 1}
                                </button>
                            )
                        })}
                    </div>
                ))}
            </div>
            <div aria-live='polite' className='rounded-xl border border-line bg-white p-5 lg:sticky lg:top-24'>
                <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand'>{current + 1} of {notes.length}</p>
                <h3 className='mt-1 mb-2 text-xl'>{note.title}</h3>
                <p className='m-0 text-base leading-7 md:text-base'>{note.text}</p>
                {note.quotes.map(quote => (
                    <figure key={quote.name} className='m-0 mt-4 grid grid-cols-[40px_1fr] gap-x-3'>
                        <Avatar src={quote.photo} name={quote.name} showPhoto={showPhotos} className='size-10'/>
                        <div>
                            <blockquote className='m-0 text-base leading-7 text-ink'>"{quote.text}"</blockquote>
                            <figcaption className='mt-1 text-sm text-muted'>{quote.name}, {quote.role}</figcaption>
                        </div>
                    </figure>
                ))}
                <div className='mt-5 flex gap-2'>
                    <button type='button' onClick={() => show(current - 1)} className='rounded-full px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink cursor-pointer'>← Previous</button>
                    <button type='button' onClick={() => show(current + 1)} className='rounded-full px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink cursor-pointer'>Next →</button>
                </div>
            </div>
        </div>
    )
}
