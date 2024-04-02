import React, { useEffect, useMemo, useState } from 'react';
import { io } from "socket.io-client";

function GauravChat(props) {
    const [mySocket, setMySocket] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [group, setGroup] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = useMemo(() => io("http://localhost:8080"), [])

    useEffect(() => {
        socket.on("connect", () => {
            setMySocket(socket.id)

            console.log(socket.id);
        })

        socket.on("gauravChat", (msg) => {
            console.log(msg);
        })

        // socket.on("recevied-message", (messages) => {
        //     setMessages((prev) => [...prev, messages])
        // })

        socket.on("group_mess", (messages) => {
            setMessages((prev) => [...prev, messages])
        })

    }, [])


    const handleSubmit = () => {
        event.preventDefault();
        socket.emit("message", { room: [mySocket, room], message })
    }

    const henalGroupSubmit = () => {
        event.preventDefault();
        socket.emit("join_group", group, message)
    }

    return (
        <>
            {
                messages.map((v) => (
                    <p>{v}</p>
                ))
            }

            <form onSubmit={henalGroupSubmit}>
                <input
                    type="text"
                    name='group'
                    onChange={(event) => setGroup(event.target.value)}
                    placeholder='Enter group name'
                />
                <input
                    type="text"
                    name='message'
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder='Enter message'
                />


                <input type="submit" />
            </form> <br /><br /><br />

            {/* <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    name='room'
                    onChange={(event) => setRoom(event.target.value)}
                    placeholder='Enter room name'
                />
                <input
                    type="text"
                    name='message'
                    onChange={(event) => setMessage(event.target.value)}
                    placeholder='Enter message'
                />

                <input type="submit" />
            </form> */}
        </>
    );
}

export default GauravChat;