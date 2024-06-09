import React from 'react'

function GifgridItem({id,title,url}) {
    return (
    <div key={id} className="card animate__animated animate__bounce" >
        <img src={url} alt={title}/>
        <p>{title}</p>
    </div>
  )
}

export default GifgridItem