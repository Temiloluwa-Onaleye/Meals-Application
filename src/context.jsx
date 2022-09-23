import React, { useContext, useEffect } from 'react';
import axios from 'axios';

const AppContext = React.createContext()

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s=a"

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({ children }) => {

  const fetchMeals = async (url) => {
    try {
      const response = await axios(url)
      console.log(response)

    } catch (err) {
      console.log(err)
    }
  }

  useEffect(() => {

    fetchMeals(allMealsUrl)
  }, [])

  return <AppContext.Provider value={{ name: 'temiloluwa', role: 'student' }}>
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = () => {

  return useContext(AppContext);
}

export { AppContext, AppProvider }