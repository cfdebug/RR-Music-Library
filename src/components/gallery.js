import React from 'react'
import GalleryItem from './galleryItem'

const Gallery = (props) => {

    const display = props.data.map((item,index) => {
        return (
            <GalleryItem item={item} key={index} />
        )
    })

    return(
    <div>
        {display}
    </div>
    )
}

export default Gallery