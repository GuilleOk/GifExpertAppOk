import React, { useState } from 'react'
import PropTypes from 'prop-types'

function AddCategory({setCategories,categories}) {
  let [inputV, setInputV] = useState('Hola Mundo')
  const handleAdd = (e)=>{
    let nuevoele = e.target.value; 
    setInputV(nuevoele.trim());  
  } 
  const handleSubmit = (e)=>{
    e.preventDefault();
    let validar = categories.filter(categoria => categoria === inputV)
    let tamanno = validar.length;
    if ((tamanno === 0)&&(inputV.trim().length != 0)) {
        setCategories(categories =>[inputV,...categories])       
    }else alert('Ya introdujo este anime')
    setInputV('')
  }
    return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type='text' onChange={handleAdd}/>
            <button>Add</button>
        </form>
    </div>
  )
}

AddCategory.propTypes = {
    setCategories : PropTypes.func.isRequired,
    categories    : PropTypes.array.isRequired
}

export default AddCategory