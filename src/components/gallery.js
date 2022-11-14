import React from 'react'
import { useContext } from 'react'
import { DataContext } from '../context/dataContext'
import GalleryItem from './galleryItem'

const Gallery = () => {
    const data = useContext(DataContext)
    const display = data.map((item,index) => {
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