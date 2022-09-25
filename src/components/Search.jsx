import React, { useState } from 'react';
import { useGlobalContext } from '../context'


const Search = () => {
  const [text, setText] = useState('')
  const {setSearchTerm, fetchRandomMeal} = useGlobalContext();

  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if(text) {
      setSearchTerm(text)
      
    }
    
  }

  const handleFetchRandomMeal = (e) => {
    e.preventDefault();
    fetchRandomMeal()
  }

  return (


    <header className="search-container">
      <form onSubmit={handleSubmit} className="">
        <input className="form-input" type="text" value={text} placeholder="type favourite meal" onChange={handleChange} />
        <button className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button" onSubmit={handleFetchRandomMeal}>Surprise me!</button>
      </form>
    </header>

  )


}

export default Search;