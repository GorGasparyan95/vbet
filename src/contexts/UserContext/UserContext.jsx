import { createContext } from "react";
import { guestUser } from "./UserProvider";


const UserContext = createContext({
  authUser: guestUser,
  setUser: () => { },
})

export default UserContext