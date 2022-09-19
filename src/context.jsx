import React, { useContext } from 'react';

const AppContext = React.createContext()


const AppProvider = ({ children }) => {
  return <AppContext.Provider value='heyy'>
    {children}
  </AppContext.Provider>

}


export { AppContext, AppProvider }