// Wide screenshots span the column so their text stays legible; tall ones (tall) sit beside the quotes.
export default function FeatureBlock({kicker, title, image, alt, caption, tall = false, children}){

    const figure = (
        <figure className='m-0'>
            <img src={image} alt={alt} className='w-full rounded-xl border border-gray-200'/>
            {caption && <figcaption className='caption text-gray-500'>{caption}</figcaption>}
        </figure>
    )

    return(
        <div className='mb-20'>
            <p className='m-0 text-sm leading-6 font-bold uppercase tracking-widest text-blue-700'>{kicker}</p>
            <h3 className='mt-2 mb-8 text-gray-900 max-w-2xl text-balance'>{title}</h3>
            {tall ? (
                <div className='grid sm:grid-cols-[minmax(0,18rem)_1fr] gap-8 items-start'>
                    {figure}
                    <div className='flex flex-col gap-6'>{children}</div>
                </div>
            ) : (
                <>
                    {figure}
                    {children && <div className='grid md:grid-cols-2 gap-x-10 gap-y-6 mt-8'>{children}</div>}
                </>
            )}
        </div>
    )
}