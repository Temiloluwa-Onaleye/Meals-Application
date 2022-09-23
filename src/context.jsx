import React, { useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext()

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({ children }) => {

  const fetchData = async () => {
    try {
      const response = await fetch('https://randomuser.me/api/')
      const data = await response.json();
      console.log(data)
    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    fetchData()
  }, [])

  return <AppContext.Provider value={{ name: 'temiloluwa', role: 'student' }}>
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = () => {

  return useContext(AppContext);
}

export { AppContext, AppProvider }