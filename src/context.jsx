import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  useEffect(() => {
   const fetchData = async () => {
     try {
       
     } catch(error) {
       
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