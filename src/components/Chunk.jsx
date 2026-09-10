export default function Chunk({imageUrl, children, hasBoxShadow = true}){

    return(
        <div className='mx-auto mt-12'>
            <p className='pb-4 mb-0'>{children}</p>
            <img src={imageUrl} className={hasBoxShadow ? 'shadow-xl rounded-xl' : null}/>
        </div>
    )
}