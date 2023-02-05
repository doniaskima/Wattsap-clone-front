import "./App.css"
import "./styles/main.scss"
import LoaderPage from "./Pages/LoaderPage";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { Route, Routes } from "react-router-dom";


function App() {

  return (
    <div className="">
      <Routes>
        <Route path="/" element={<LoaderPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/home" element={<Home />} />
        {/* <Route path="/home" element={<PrivateRoute />}>
          <Route path="/home" element={<Home />} />
        </Route> */}
      </Routes>
    </div>
  )
}

export default App
