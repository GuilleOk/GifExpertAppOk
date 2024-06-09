import React from 'react'
import { useEffect } from 'react'
import { useState } from 'react'
import { getGif } from '../helpers/getGifs'

function useFetch(category) {
    const [state, setState] = useState({
        load: true,
        data:[]
    })
    useEffect(() => {
        getGif(category).then(imgs=>{
            setTimeout(() => {
                setState({
                    load:true,
                    data: imgs
                })
            }, 3000);
        })
    }, [category])
    
    
    return state;
}

export default useFetch