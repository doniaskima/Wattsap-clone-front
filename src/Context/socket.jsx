import socketio from "socket.io-client";
import { baseUrl } from "../utils/api";
import React, { useContext } from "react";

export const socket = socketio(baseUrl);
export const SocketContext = React.createContext();
export const useSocket = () => useContext(SocketContext);
