import {useRef} from 'react'

// A screenshot shown at a readable size that opens full size in a dialog on click.
export default function ZoomImage({src, alt, caption, framed = true, className = ''}){

    const dialogRef = useRef(null)

    function close(){
        dialogRef.current?.close()
    }

    return(
        <figure className={`m-0 ${className}`}>
            <button
                type='button'
                onClick={() => dialogRef.current?.showModal()}
                className={`group relative block w-full overflow-hidden cursor-zoom-in ${framed ? 'rounded-xl border border-line bg-tint' : ''}`}
            >
                <img src={src} alt={alt} className='w-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none'/>
                <div aria-hidden='true' className='absolute right-2 bottom-2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100'>Click to enlarge</div>
            </button>
            {caption && <figcaption className='caption'>{caption}</figcaption>}
            <dialog
                ref={dialogRef}
                aria-label={alt || 'Enlarged image'}
                onClick={event => { if(event.target === dialogRef.current) close() }}
                className='m-auto max-h-[92vh] max-w-[92vw] bg-transparent p-0 backdrop:bg-ink/80'
            >
                <button type='button' onClick={close} className='fixed top-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg cursor-pointer'>Close ✕</button>
                <img src={src} alt={alt} className='max-h-[86vh] w-auto rounded-lg'/>
            </dialog>
        </figure>
    )
}
