import ZoomImage from './ZoomImage.jsx'

export default function BeforeAfter({title, before, beforeAlt, after, afterAlt, changes}){
    return(
        <div className='mb-12 last:mb-0'>
            <h3>{title}</h3>
            <div className='grid md:grid-cols-[0.8fr_1.2fr] gap-6 items-start'>
                <div className='flex flex-col gap-3'>
                    <p className='m-0 text-xs font-bold uppercase tracking-widest text-muted md:text-xs'>Before</p>
                    <ZoomImage src={before} alt={beforeAlt}/>
                </div>
                <div className='flex flex-col gap-3'>
                    <p className='m-0 text-xs font-bold uppercase tracking-widest text-brand md:text-xs'>After</p>
                    <ZoomImage src={after} alt={afterAlt}/>
                    <ol className='list-decimal pl-5 m-0 flex flex-col gap-1'>
                        {changes.map(change => <li key={change} className='m-0 text-base leading-7 md:text-base'>{change}</li>)}
                    </ol>
                </div>
            </div>
        </div>
    )
}
