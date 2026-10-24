import {useRef, useState} from 'react'

// A screenshot shown at a readable size that opens full size in a dialog on click.
// The dialog steps through every visible ZoomImage on the page, in page order.
export default function ZoomImage({src, alt, caption, framed = true, className = ''}){

    const dialogRef = useRef(null)
    const [gallery, setGallery] = useState({items: [], index: 0})
    const current = gallery.items[gallery.index] ?? {src, alt, caption}
    const count = gallery.items.length

    function open(event){
        // Skip images hidden on the page, such as story-body content in skim mode.
        const buttons = [...document.querySelectorAll('[data-zoom-src]')].filter(button => button.getClientRects().length > 0)
        const items = buttons.map(button => ({src: button.dataset.zoomSrc, alt: button.dataset.zoomAlt, caption: button.dataset.zoomCaption}))
        setGallery({items, index: Math.max(0, buttons.indexOf(event.currentTarget))})
        dialogRef.current?.showModal()
    }

    function step(offset){
        setGallery(({items, index}) => ({items, index: (index + offset + items.length) % items.length}))
    }

    function close(){
        dialogRef.current?.close()
    }

    function handleKeyDown(event){
        if(count < 2) return
        if(event.key === 'ArrowRight') step(1)
        if(event.key === 'ArrowLeft') step(-1)
    }

    const navButton = 'fixed top-1/2 -translate-y-1/2 grid place-items-center size-11 rounded-full bg-white text-xl font-semibold text-ink shadow-lg cursor-pointer'

    return(
        <figure className={`m-0 ${className}`}>
            <button
                type='button'
                onClick={open}
                data-zoom-src={src}
                data-zoom-alt={alt}
                data-zoom-caption={caption}
                className={`group relative block w-full overflow-hidden cursor-zoom-in ${framed ? 'rounded-xl border border-line bg-tint' : ''}`}
            >
                <img src={src} alt={alt} className='w-full transition-transform duration-300 group-hover:scale-[1.02] motion-reduce:transition-none'/>
                <div aria-hidden='true' className='absolute right-2 bottom-2 rounded-full bg-white/95 px-2.5 py-1 text-xs font-semibold text-ink opacity-0 transition-opacity group-hover:opacity-100 group-focus-visible:opacity-100'>Click to enlarge</div>
            </button>
            {caption && <figcaption className='caption'>{caption}</figcaption>}
            <dialog
                ref={dialogRef}
                aria-label={current.alt || 'Enlarged image'}
                onClick={event => { if(event.target === dialogRef.current) close() }}
                onKeyDown={handleKeyDown}
                className='m-auto max-h-[92vh] max-w-[92vw] bg-transparent p-0 backdrop:bg-ink/80'
            >
                <button type='button' onClick={close} className='fixed top-4 right-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg cursor-pointer'>Close ✕</button>
                {count > 1 && (
                    <>
                        <div className='fixed top-4 left-4 rounded-full bg-white px-4 py-2 text-sm font-semibold text-ink shadow-lg'>{gallery.index + 1} / {count}</div>
                        <button type='button' onClick={() => step(-1)} aria-label='Previous image' className={`${navButton} left-3 md:left-6`}>←</button>
                        <button type='button' onClick={() => step(1)} aria-label='Next image' className={`${navButton} right-3 md:right-6`}>→</button>
                    </>
                )}
                <img src={current.src} alt={current.alt} className='max-h-[86vh] w-auto rounded-lg'/>
                {current.caption && <p className='m-0 mt-2 text-center text-sm text-white md:text-sm'>{current.caption}</p>}
            </dialog>
        </figure>
    )
}
