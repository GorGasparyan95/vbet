import React, { useEffect, useState } from "react"
import { useLocalStorage } from "../../hooks"
import UserContext from "./UserContext"

export const guestUser = {
  id: "guest",
}


const UserProvider = ({ children }) => {

  const [userObj, setUserObj] = useState({ authUser: guestUser })
  const { get } = useLocalStorage()
  const unique = get("user")
  const user = get("users") && get("users").filter((item) => item.email === unique)[0]


  useEffect(() => setUserObj(user), [])





  return (
    <UserContext.Provider value={{
      authUser: userObj,
      setUser: setUserObj
    }}>
      {children}
    </UserContext.Provider>

  )
}

export default UserProvider