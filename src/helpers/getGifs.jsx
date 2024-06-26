import React from 'react'

export const getGif = async (category)=>{
    const api_key = '49SWpbDQkUU9laLbWTOyQC4X4MlsACyI';
    const url = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${encodeURI(category)}&limit=2`;
    const resp = await fetch(url);
    const {data} = await resp.json()
    const gifs = data.map(img=>{
        return{
            id : img.id,
            title: img.title,
            url: img.images?.downsized_medium.url
        }
    })
    return gifs;
}