import React, { useState } from 'react'

function SearchHeader({search}) {

  const [valueInput, setValueInput]= useState("");

  const handleforSubmit=(e)=>{
    e.preventDefault();
    search(valueInput)
  };

  const handleChange=(event)=>{
    setValueInput(event.target.value);
  }

  return (
    <div className='searcHeader'>
        <form onSubmit={handleforSubmit}>
            <label>What are you looking for?</label>
            <input value={valueInput}  onChange={handleChange}/>
        </form>
    </div>
  )
}

export default SearchHeader
