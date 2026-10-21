// Opens a case study with the summary a recruiter can read in 20 seconds.
export default function CaseStudyHeader({kicker, title, subtitle, summary, note, facts, image, imageAlt, children}){
    return(
        <section className='pt-14 md:pt-20 mb-0'>
            <p className='m-0 text-xs font-bold uppercase tracking-[0.12em] text-muted'>{kicker}</p>
            <h1 className='mt-2 text-4xl md:text-5xl lg:text-[3.4rem] leading-[1.08]'>{title}</h1>
            <p className='mt-3 mb-0 max-w-2xl text-lg md:text-xl'>{subtitle}</p>
            <div className='mt-8 grid gap-8 rounded-2xl border border-line bg-white p-6 md:p-7 shadow-[0_1px_2px_rgb(18_27_43/0.04),0_12px_32px_rgb(18_27_43/0.06)] md:grid-cols-[1.4fr_1fr]'>
                <div>
                    <p className='m-0 text-lg leading-8 text-ink'>{summary}</p>
                    {note && <p className='m-0 mt-4 text-sm leading-6 text-muted md:text-sm'>{note}</p>}
                </div>
                <dl className='m-0 grid gap-4'>
                    {facts.map(({label, value}) => (
                        <div key={label}>
                            <dt className='text-xs font-bold uppercase tracking-widest text-muted'>{label}</dt>
                            <dd className='m-0 mt-0.5 font-medium text-ink'>{value}</dd>
                        </div>
                    ))}
                </dl>
            </div>
            {image && <img src={image} alt={imageAlt} className='mt-8 w-full max-h-[28rem] object-cover object-top rounded-2xl border border-line'/>}
            {children && <div className='mt-8 flex flex-col gap-4'>{children}</div>}
        </section>
    )
}
