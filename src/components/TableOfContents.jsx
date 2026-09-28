import {useState} from 'react'

export default function TableOfContents({sections}){

    const [isOpen, setIsOpen] = useState(false)

    function handleClick(id){
        document.getElementById(id).scrollIntoView({behavior: 'smooth'})
    }

    return(
        <>
            <button onClick={() => setIsOpen(true)} className='fixed bottom-6 right-6'>Table of contents</button>
            {isOpen &&
                <ul className='fixed inset-0 bg-white/50 flex justify-center align-center'>
                    {sections.map(({id, label}) => {
                        return(
                            <li 
                                key={id}
                                onClick={(id) => handleClick(id)}
                            >
                                {label}
                            </li>
                        )
                    })}
                </ul>
            }
        </>
    )
}