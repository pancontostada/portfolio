export default function Chunk({imageUrl, children, hasBoxShadow = true, imgStyle = null}){

    return(
        <div className='pb-16'>
            <p className='pb-4 mb-0'>{children}</p>
            <img src={imageUrl} className={hasBoxShadow ? 'shadow-xl rounded-xl' : null} style={imgStyle}/>
        </div>
    )
}