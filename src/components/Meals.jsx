import React, { useContext } from 'react';
import { AppContext } from '../context';

const Meals = () => {

  const context = useContext(AppContext);
  console.log("context:", context)

  return (

    <div>
      <h1>Who are you</h1>
    </div>
  )


}

export default Meals;