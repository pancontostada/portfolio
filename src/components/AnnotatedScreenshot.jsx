import {useState} from 'react'

// One screenshot with numbered pins; the panel beside it explains the selected pin.
export default function AnnotatedScreenshot({image, alt, notes}){

    const [current, setCurrent] = useState(0)
    const note = notes[current]

    function show(index){
        setCurrent((index + notes.length) % notes.length)
    }

    return(
        <div className='grid lg:grid-cols-[minmax(0,1.55fr)_minmax(0,1fr)] gap-5 items-start mt-6'>
            <div className='relative overflow-hidden rounded-xl border border-line bg-white'>
                <img src={image} alt={alt} className='w-full'/>
                {notes.map((item, index) => {
                    const isActive = index === current
                    return(
                        <button
                            key={item.title}
                            type='button'
                            onClick={() => show(index)}
                            aria-pressed={isActive}
                            aria-label={`Annotation ${index + 1}: ${item.title}`}
                            style={{left: `${item.x}%`, top: `${item.y}%`}}
                            className={`absolute -translate-x-1/2 -translate-y-1/2 grid place-items-center size-8 rounded-full border-2 border-white text-sm font-bold text-white shadow-md cursor-pointer transition-transform hover:scale-110 ${isActive ? 'bg-ink' : 'bg-brand'}`}
                        >
                            {!isActive && <i aria-hidden='true' className='absolute -inset-1.5 rounded-full border-2 border-brand motion-safe:animate-ping'/>}
                            {index + 1}
                        </button>
                    )
                })}
            </div>
            <div aria-live='polite' className='rounded-xl border border-line bg-white p-5 lg:sticky lg:top-24'>
                <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand'>{current + 1} of {notes.length}</p>
                <h3 className='mt-1 mb-2 text-xl'>{note.title}</h3>
                <p className='m-0 text-base leading-7 md:text-base'>{note.text}</p>
                <blockquote className='m-0 mt-4 border-l-4 border-brand-soft pl-4'>
                    <p className='m-0 text-base leading-7 text-ink md:text-base'>"{note.quote}"</p>
                    <footer className='mt-1 text-sm text-muted'>{note.cite}</footer>
                </blockquote>
                <div className='mt-5 flex gap-2'>
                    <button type='button' onClick={() => show(current - 1)} className='rounded-full px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink cursor-pointer'>← Previous</button>
                    <button type='button' onClick={() => show(current + 1)} className='rounded-full px-4 py-1.5 text-sm font-semibold text-ink ring-1 ring-line hover:ring-ink cursor-pointer'>Next →</button>
                </div>
            </div>
        </div>
    )
}
