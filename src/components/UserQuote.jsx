export default function UserQuote({src, name, role, blur = false, children}){
    return(
        <div className="user-quote flex flex-col  sm:flex-row sm:items-start gap-8 p-8 bg-blue-50 rounded-2xl shadow-lg flex-col-reverse items-center mb-8">
            <div className='flex flex-col gap-0  items-center min-w-[150px]'>
                <div className='headshot mb-2 rounded-full aspect-1 overflow-hidden'>
                    <img src={src} alt='' className={`w-full h-full object-cover transition-[filter] duration-500 ${blur ? 'blur-md scale-110' : ''}`}/>
                </div>
                <p className='m-0 font-bold text-center'>{name}</p>
                <p className='m-0 text-center text-sm leading-6'>{role}</p>
            </div>
            <p className='m-0'>"{children}"</p>
        </div>
    )
}