import ZoomImage from './ZoomImage.jsx'

export default function Step({number, title, image, alt, framed = false, media, children}){
    return(
        <div className='grid md:grid-cols-[1fr_1.6fr] gap-6 md:gap-10 items-center mb-16'>
            <div>
                <p className='m-0 text-xs font-bold tracking-widest text-brand md:text-xs'>{String(number).padStart(2, '0')}</p>
                <h3 className='mt-1 mb-3'>{title}</h3>
                <p className='m-0 text-base leading-7 md:text-lg md:leading-8'>{children}</p>
            </div>
            {media ?? <ZoomImage src={image} alt={alt} framed={framed}/>}
        </div>
    )
}