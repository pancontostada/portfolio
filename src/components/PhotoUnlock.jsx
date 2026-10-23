import {useState} from 'react'

// Client-side only: this hides faces from casual viewers, it doesn't secure the image files.
const PASSWORD = 'resolve'

const toggleButton = isActive => `rounded-full px-4 py-1.5 text-sm font-semibold cursor-pointer ${isActive ? 'bg-white text-ink shadow-sm' : 'text-body hover:text-ink'}`

export default function PhotoUnlock({isUnlocked, onUnlock, showPhotos, onShowPhotosChange}){

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
        return(
            <div className='flex flex-wrap items-center gap-3'>
                <p className='m-0 text-sm md:text-sm'>Participants</p>
                <div role='group' aria-label='Participant images' className='inline-flex rounded-full bg-tint p-1'>
                    <button type='button' aria-pressed={!showPhotos} onClick={() => onShowPhotosChange(false)} className={toggleButton(!showPhotos)}>Illustrations</button>
                    <button type='button' aria-pressed={showPhotos} onClick={() => onShowPhotosChange(true)} className={toggleButton(showPhotos)}>Photos</button>
                </div>
            </div>
        )
    }

    return(
        <form onSubmit={handleSubmit} className='flex flex-col gap-2 max-w-2xl rounded-xl border border-line bg-tint px-5 py-4'>
            <label htmlFor='photo-password' className='text-sm text-body'>
                Participants are shown as illustrations to protect their privacy. Enter the password to see their photos.
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
                    Show photos
                </button>
            </div>
            {hasError && <p id='photo-password-error' role='alert' className='m-0 text-sm text-red-600'>That password isn't right. Try again.</p>}
        </form>
    )
}
