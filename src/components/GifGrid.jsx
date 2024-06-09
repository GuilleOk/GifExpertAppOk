import React, { useEffect, useState } from 'react'
import GifgridItem from './GifgridItem';
import {getGif} from '../helpers/getGifs'
import useFetch from '../hooks/useFetch';

function GifGrid({category}) {
    const {data:images,load} = useFetch(category)

    return (
        <>
            <h3 key={category}>{category}</h3>
            {load && <p className='animate__animated animate__flash'>Loading</p>}
            <div className='card-grid'>
                    {images.map(img=>{
                        return <GifgridItem key={img.id} {...img}/>
                    })}
            </div>
        </>
  )
}

export default GifGrid