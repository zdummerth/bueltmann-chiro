import React from 'react'

export const GlobalStateContext = React.createContext()



const GlobalContextProvider = ({ children }) => {
  return (
    <GlobalStateContext.Provider 
      value={{}}
    >
        {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider