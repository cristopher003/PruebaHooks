import { useState } from "react";
import { UserContext } from "./UserContext"

export const UserProvider = ({ children }) => {

// const user={
//     id:1,
//     email:"john.mckinley@examplepetstore.com",
//     nombre:"William",
//     apellido:"Hoover"
// }

const [user, setUser] = useState();

  return (
        <UserContext.Provider value={{user, setUser}}>
        {children}
        </UserContext.Provider>
  )
}
