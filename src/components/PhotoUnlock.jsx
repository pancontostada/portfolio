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
        return <p className='m-0 text-sm text-muted md:text-sm'>Participant photos are visible.</p>
    }

    return(
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-2xl rounded-xl border border-line bg-tint px-5 py-4'>
            <label htmlFor='photo-password' className='text-sm text-body'>
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
                    className='flex-1 min-w-0 px-4 py-1.5 rounded-full border border-line bg-white text-sm focus:outline-2 focus:outline-brand'
                />
                <button type='submit' className='bg-ink hover:bg-brand hover:cursor-pointer text-white text-sm font-semibold rounded-full px-5 py-1.5'>
                    Unblur
                </button>
            </div>
            {hasError && <p id='photo-password-error' role='alert' className='m-0 text-sm text-red-600'>That password isn't right. Try again.</p>}
        </form>
    )
}