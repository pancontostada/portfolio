export default function UserQuote({src, name, role, blur = false, compact = false, children}){

    const blurClass = `w-full h-full object-cover transition-[filter] duration-500 ${blur ? 'blur-md scale-110' : ''}`

    if(compact){
        return(
            <figure className='user-quote grid grid-cols-[48px_1fr] gap-x-4 gap-y-1 m-0'>
                <div className='w-12 h-12 rounded-full overflow-hidden row-span-2'>
                    <img src={src} alt='' className={blurClass}/>
                </div>
                <blockquote className='m-0 text-gray-800 text-base md:text-lg leading-7'>"{children}"</blockquote>
                <figcaption className='text-sm text-gray-500'>{name}, {role}</figcaption>
            </figure>
        )
    }

    return(
        <div className="user-quote flex flex-col  sm:flex-row sm:items-start gap-8 p-8 bg-blue-50 rounded-2xl shadow-lg flex-col-reverse items-center mb-8">
            <div className='flex flex-col gap-0  items-center min-w-[150px]'>
                <div className='headshot mb-2 rounded-full aspect-1 overflow-hidden'>
                    <img src={src} alt='' className={blurClass}/>
                </div>
                <p className='m-0 font-bold text-center'>{name}</p>
                <p className='m-0 text-center text-sm leading-6'>{role}</p>
            </div>
            <p className='m-0'>"{children}"</p>
        </div>
    )
}