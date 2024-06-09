import React, { useState } from 'react'
import AddCategory from './AddCategory'
import GifGrid from './GifGrid';
function GifExpertApp() {
    const [categories, setCategories] = useState(['One Punch']);

    return (
    <div>
        <h2>GifExpertApp</h2>
        <AddCategory setCategories={setCategories} categories={categories}/>
        <hr/>
        <ul>
        {categories.map(category=>{
            return <GifGrid key={category} category={category}/>})
        }
        </ul>
    </div>
  )
}

export default GifExpertApp