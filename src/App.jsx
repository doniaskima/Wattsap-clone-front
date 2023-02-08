import "./App.css"
import "./styles/main.scss"
import LoaderPage from "./Pages/LoaderPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";
import { DataProvider } from "./Context/dataProvider";
import Chats from "./Pages/ChatPage";
import PrivateRoute from "./Components/PrivateRoute";

function App() {

  return (
    <div className="">
      <DataProvider>
        <Routes>
          <Route path="/" element={<LoaderPage />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/home" element={<PrivateRoute />}>
            <Route path="/home" element={<Home />}>
              <Route path=":id" element={<Chats />} />
            </Route>
          </Route>
        </Routes>
      </DataProvider>

    </div>
  )
}

export default App
