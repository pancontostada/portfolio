export default function BeforeAfter({title, before, beforeAlt, after, afterAlt, changes}){
    return(
        <div className='mb-16'>
            <h3>{title}</h3>
            <div className='grid md:grid-cols-[0.8fr_1.2fr] gap-8 items-start'>
                <figure className='m-0 flex flex-col gap-3'>
                    <p className='m-0 text-sm font-extrabold uppercase tracking-widest text-gray-500'>Before</p>
                    <img src={before} alt={beforeAlt} className='w-full rounded-lg border border-gray-200'/>
                </figure>
                <figure className='m-0 flex flex-col gap-3'>
                    <p className='m-0 text-sm font-extrabold uppercase tracking-widest text-blue-700'>After</p>
                    <img src={after} alt={afterAlt} className='w-full rounded-lg border border-gray-200 shadow-lg'/>
                    <ol className='list-decimal pl-5 m-0 flex flex-col gap-1'>
                        {changes.map(change => <li key={change} className='m-0 text-base leading-7 md:text-base'>{change}</li>)}
                    </ol>
                </figure>
            </div>
        </div>
    )
}