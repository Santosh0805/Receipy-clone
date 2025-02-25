import { createContext, useState } from 'react'
export const ContextAPIProvider = createContext();

const ContextAPI = ({children}) => {
    const [isAuth, setIsAuth] = useState(localStorage.getItem("token") ? true : false);
    const [token, setToken] = useState(localStorage.getItem("token"))
  return (
    <ContextAPIProvider.Provider value={{isAuth, setIsAuth, token, setToken}}>
        {children}
    </ContextAPIProvider.Provider>
  )
}

export default ContextAPI


