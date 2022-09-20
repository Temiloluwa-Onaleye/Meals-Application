import React, { useContext, useEffect } from 'react';

const AppContext = React.createContext()


const AppProvider = ({ children }) => {

  useEffect(() => {
    console.log('fetch data here')
    // fetch data
  }, [])

  return <AppContext.Provider value={{ name: 'temiloluwa', role: 'student' }}>
    {children}
  </AppContext.Provider>

}



export const useGlobalContext = () => {

  return useContext(AppContext);
}

export { AppContext, AppProvider }