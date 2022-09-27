import React, { useContext, useEffect, useState } from 'react';
import axios from 'axios';

const AppContext = React.createContext()

const allMealsUrl = "https://www.themealdb.com/api/json/v1/1/search.php?s="

const randomMealUrl = 'https://www.themealdb.com/api/json/v1/1/random.php'



const AppProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [meals, setMeals] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [showModal, setShowModal] = useState(false);
  const [selectedMeal, setSelectedMeal] = useState(null)
  const [favorites, setFavorites] = useState([])


  const fetchMeals = async (url) => {

    setLoading(true)
    try {
      const { data } = await axios.get(url)

      if (data.meals) { setMeals(data.meals) }
      else {
        setMeals([])
      }




    } catch (e) {
      console.log(e.response)
    }
    setLoading(false)
  }

  useEffect(() => {

    fetchMeals(allMealsUrl)
  }, [])

  useEffect(() => {
    if (!searchTerm) return
    fetchMeals(`${allMealsUrl}${searchTerm}`)
  }, [searchTerm])

  const fetchRandomMeal = () => {
    fetchMeals(randomMealUrl)
  }

  const selectMeal = (idMeal, favoriteMeal) => {
    let meal;
    meal = meals.find((meal) => meal.idMeal === idMeal)
    setSelectedMeal(meal)
    setShowModal(true)

  }

  const closeModal = () => {
    setShowModal(false)
  }


  const addToFavorites = (idMeal) => {

    const alreadyFavorite = favorites.find((meal) => meal.idMeal === idMeal)
    if (alreadyFavorite) return
    const meal = meals.find((meal) => meal.idMeal === idMeal)
    const updatedFavorites = [...favorites, meal]

    setFavorites(updatedFavorites)
  }

  const removeFromFavorites = (idMeal) => {
    const updatedFavorites = favorites.filter((meal) => meal.idMeal !== idMeal)
    setFavorites(updatedFavorites)
  }


  return <AppContext.Provider value={{ meals, loading, setSearchTerm, fetchRandomMeal, showModal, selectMeal, selectedMeal, closeModal, addToFavorites, removeFromFavorites }}>
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = () => {

  return useContext(AppContext);
}

export { AppContext, AppProvider }