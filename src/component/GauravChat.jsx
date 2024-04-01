import React, { useEffect, useMemo } from 'react';
import { io } from "socket.io-client";

function GauravChat(props) {

    const socket = useMemo(() => io("http://localhost:8080"), [])

    useEffect(() => {
        socket.on("connection", () => {
            console.log("Socket ID is:-", socket.id);

        })

        socket.on("gauravChat", (msg) => {
            console.log(msg);
        })



    }, [])

    return (
        <div>

        </div>
    );
}

export default GauravChat;