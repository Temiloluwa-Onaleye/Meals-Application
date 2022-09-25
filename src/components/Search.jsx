import React, { useState } from 'react';
import { useGlobalContext } from '../context'


const Search = () => {
  const [text, setText] = useState('')

  const handleChange = (e) => {
    e.preventDefault()
    setText(e.target.value)
    console.log(e.target.value)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
  }

  return (


    <header className="search-container">
      <form onSubmit={handleSubmit} className="">
        <input className="form-input" type="text" value={text} placeholder="type favourite meal" onChange={handleChange} />
        <button className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button">Surprise me!</button>
      </form>
    </header>

  )


}

export default Search;