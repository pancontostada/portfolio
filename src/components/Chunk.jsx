export default function Chunk({imageUrl, children, hasBoxShadow = true}){

    return(
        <div className='mx-auto mb-16'>
            <p className='mb-6'>{children}</p>
            <img src={imageUrl} className={hasBoxShadow ? 'shadow-xl rounded-xl' : null}/>
        </div>
    )
}