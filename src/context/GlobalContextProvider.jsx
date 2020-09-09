import React, { useState, useEffect } from 'react'

export const GlobalStateContext = React.createContext()



const GlobalContextProvider = ({ children }) => {
  let initialStoreState = {
  }


  
  return (
    <GlobalStateContext.Provider 
    value={{}}
    >
        {children}
    </GlobalStateContext.Provider>
  )
}

export default GlobalContextProvider