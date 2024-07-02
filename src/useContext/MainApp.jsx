import { Outlet} from "react-router-dom"
import { NavBar } from "./NavBar"
import { UserProvider } from "./context/UserProvider"

export const MainApp = () => {
  return (
    <UserProvider>

    <NavBar title="HooksApp"></NavBar>
    <hr></hr>
    <Outlet ></Outlet>
    
    </UserProvider>
    
  )
}
