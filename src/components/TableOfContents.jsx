import {useState} from 'react'

export default function TableOfContents({sections}){

    const [isOpen, setIsOpen] = useState(false)

    function handleLinkClick(id){
        setIsOpen(false)
        document.getElementById(id)?.scrollIntoView({behavior: 'smooth'})
    }
    

    return(
        <>
            <button 
                className='fixed bottom-6 right-6 bg-blue-500 rounded-full shadow-lg text-white px-6 py-3 hover:cursor-pointer  hover:bg-blue-600'
                onClick={() => setIsOpen(true)}
            >
                Sections
            </button>
            {isOpen &&
                <div className='bg-black/50 fixed inset-0 flex justify-center items-center'>
                    
                    <div className="bg-white p-8 rounded-2xl shadow-lg max-w-sm w-full">
                        <div className="flex justify-between gap-8">
                            <p className='text-2xl font-medium'>Table of contents</p>
                            <p onClick={()=> setIsOpen(false)} className='hover:cursor-pointer text-2xl hover:opacity-70'>&times;</p>
                        </div>
                        <ul className='flex flex-col gap-2'>
                            {
                                sections.map(({id, label}) => {
                                    return(
                                        <li key={id} className='mb-4'>
                                            <button 
                                                onClick={() => handleLinkClick(id)}
                                                className='hover:underline text-blue-500 '
                                            >
                                                {label}
                                            </button>
                                        </li>
                                    )
                                })
                            }
                        </ul>
                    </div>
                </div>
            }
        </>
    )
}