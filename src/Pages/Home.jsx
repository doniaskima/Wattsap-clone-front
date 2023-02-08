import Sidebar from "../Components/Home/Sidebar/Sidebar"
import InitialSectionCover from "../Components/MessagesPageComponents/InitialSectionCover"
import styled from "styled-components";
import Chats from "./ChatPage";
import { useLocation, Outlet } from "react-router-dom";


const Home = () => {
  const { pathname } = useLocation();
  return (
    <div>
      <HomePage>
        <Sidebar />
        {pathname === "/home" && (
          <InitialSectionCover />
        )}
        <Outlet />
      </HomePage>

    </div>
  )
}


export const HomePage = styled.div`
   display: grid;
  grid-template-columns: 3fr 12fr;
`

export default Home