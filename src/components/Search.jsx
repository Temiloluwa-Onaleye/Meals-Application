import React, { useState } from 'react';
import { useGlobalContext } from '../context'


const Search = () => {
  const [text, setText] = useState('')

  const handleChange = (event) => {
    event.preventDefault()
    setText(event.target.value)
    console.log(setText)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
  }

  return (


    <header className="search-container">
      <form className="">
        <input className="form-input" type="text" placeholder="type favourite meal" onChange={handleChange} />
        <button onSubmit={handleSubmit} className="btn" type="submit">Search</button>
        <button className="btn btn-hipster" type="button">Surprise me!</button>
      </form>
    </header>

  )


}

export default Search;