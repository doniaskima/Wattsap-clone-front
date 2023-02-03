import Sidebar from "../Components/Home/Sidebar/Sidebar"
import InitialSectionCover from "../Components/MessagesPageComponents/InitialSectionCover"
import styled from "styled-components";
import Chats from "./ChatPage";


const Home = () => {
  return (
    <div>
      <HomePage>
        <Sidebar />
        {/* <InitialSectionCover /> */}
        <Chats />
      </HomePage>

    </div>
  )
}


export const HomePage = styled.div`
   display: grid;
  grid-template-columns: 3fr 12fr;
`

export default Home