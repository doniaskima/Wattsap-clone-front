import Sidebar from "../Components/Home/Sidebar/Sidebar"
import InitialSectionCover from "../Components/MessagesPageComponents/InitialSectionCover"
import styled from "styled-components";

const Home = () => {
  return (
    <div>
      <HomePage>
        <Sidebar />
        <InitialSectionCover />
      </HomePage>

    </div>
  )
}


export const HomePage = styled.div`
   display: grid;
  grid-template-columns: 3fr 12fr;
`

export default Home