import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('https://randomuser.me/api/')
        const data = await response.json()
        console.log(data)
      } catch (error) {
        console.log(error)
      }
    }
    
  }, [])

  return <AppContext.Provider value={{ name: 'temiloluwa', role: 'student' }}>
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = () => {

  return useContext(AppContext);
}

export { AppContext, AppProvider }