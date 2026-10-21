import ZoomImage from './ZoomImage.jsx'

export default function Chunk({imageUrl, children, hasBoxShadow = true, imgStyle = null, alt = ''}){

    return(
        <div className='mb-14'>
            {children && <p className='pb-4 mb-0 max-w-2xl'>{children}</p>}
            {imgStyle
                ? <img src={imageUrl} alt={alt} style={imgStyle}/>
                : <ZoomImage src={imageUrl} alt={alt} framed={hasBoxShadow} className='max-w-2xl'/>
            }
        </div>
    )
}