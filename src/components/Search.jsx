import React, {useState} from 'react';
import {useGlobalContext} from '../context'


const Search = () => {

  return(

    
    <header className="search-container">
    <form className="">
    <input className="form-input" type="text" placeholder="type favourite meal" />
      <button className=".btn" type="submit">Search</button>
      <button className="btn btn-hipster" type="btn">Surprise me!</button>
    </form>
    </header>
  
  )
    
  
}

export default Search;