import React from 'react'

const ImageContainer = ({imgSrc, altText, containerId}) => {
  return (
    <div className='bg-gray-500'>
        <img src={imgSrc} alt={altText} id={containerId} className='w-[400px]'/>
    </div>
  )
}

export default ImageContainer