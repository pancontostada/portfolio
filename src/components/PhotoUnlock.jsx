import {useState} from 'react'

// Client-side only: this hides faces from casual viewers, it doesn't secure the image files.
const PASSWORD = 'resolve'

export default function PhotoUnlock({isUnlocked, onUnlock}){

    const [value, setValue] = useState('')
    const [hasError, setHasError] = useState(false)

    function handleSubmit(event){
        event.preventDefault()
        if(value.trim().toLowerCase() === PASSWORD){
            setHasError(false)
            onUnlock()
        }else{
            setHasError(true)
        }
    }

    if(isUnlocked){
        return <p className='m-0 text-base text-gray-500'>Participant photos are visible.</p>
    }

    return(
        <form onSubmit={handleSubmit} className='flex flex-col gap-3 p-6 bg-blue-50 rounded-2xl'>
            <label htmlFor='photo-password' className='text-base text-gray-700'>
                Participant photos are blurred to protect their privacy. Enter the password to view them.
            </label>
            <div className='flex flex-wrap gap-3'>
                <input
                    id='photo-password'
                    type='password'
                    value={value}
                    onChange={event => { setValue(event.target.value); setHasError(false) }}
                    aria-invalid={hasError}
                    aria-describedby={hasError ? 'photo-password-error' : undefined}
                    className='flex-1 min-w-0 px-4 py-2 rounded-full border border-gray-300 bg-white text-base focus:outline-2 focus:outline-blue-500'
                />
                <button type='submit' className='bg-blue-500 hover:bg-blue-600 hover:cursor-pointer text-white rounded-full px-6 py-2'>
                    Unblur
                </button>
            </div>
            {hasError && <p id='photo-password-error' role='alert' className='m-0 text-sm text-red-600'>That password isn't right. Try again.</p>}
        </form>
    )
}