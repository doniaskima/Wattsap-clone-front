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
import { useEffect, useState } from "react";

const userPrefersDark =
  window.matchMedia &&
  window.matchMedia("(prefers-color-scheme: dark)").matches;


function App() {
  const [appLoaded, setAppLoaded] = useState(false);
  const [startLoadProgress, setStartLoadProgress] = useState(false);

  useEffect(() => {
    if (userPrefersDark) document.body.classList.add("dark-theme");
    stopLoad();
  }, []);

  const stopLoad = () => {
    setStartLoadProgress(true);
    setTimeout(() => setAppLoaded(true), 3000);
  };

  if (!appLoaded) return <LoaderPage done={startLoadProgress} />;

  return (
    <div className="">
      <DataProvider>
        <Routes>
          <Route path="/" element={<Login />} />
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
