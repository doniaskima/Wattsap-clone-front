import React, { useEffect, useState } from "react";
import Sidebar from "../Components/Home/Sidebar/Sidebar"
import { useSocket } from "../Context/socket";
import { useAuth } from "../Context/authProvider";
import InitialSectionCover from "../Components/MessagesPageComponents/InitialSectionCover"
import { DataProvider } from "../Context/dataProvider";

const Home = (props) => {
    const [leftSide, setLeftSide] = useState(false);
    const { user } = useAuth();
    const socket = useSocket();
    useEffect(() => {
        socket.emit("connectUser", { name: user.name });
    }, []);

    return (
        <DataProvider>
            <div className="min-h-screen bg-background lg:px-36 lg:pt-14">
                <div className="mr-auto ml-auto flex h-screen lg:h-600 w-full bg-back rounded-md">
                    {props.location.pathname === "/home" ? (
                        <InitialSectionCover />
                    ) : (
                        <div className="absolute md:static w-full lg:w-full h-full">
                            {props.children}
                        </div>
                    )}
                </div>
            </div>
        </DataProvider>
    );
};

export default Home
