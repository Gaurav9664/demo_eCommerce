import React, { useEffect, useMemo, useState } from 'react';
import { io } from "socket.io-client";

function Chat(props) {
    const [ mySocket, setMySocket ] = useState('');
    const [room, setRoom] = useState('');
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);

    const socket = useMemo(() => io("http://localhost:4000"), []);

    useEffect(() => {
        socket.on("connect", () => {
            setMySocket(socket.id)
        });

        socket.on("my-event-a", (msg) => {
            console.log(msg);
        });

        socket.on("receive-message", (msgs) => {
            setMessages((prev) => [...prev, msgs]);
        })

    }, [])


    const handleSubmit = () => {
        event.preventDefault();
        socket.emit("message", { room: [mySocket, room], message })
    }
    return (
        <>
            {
                messages.map((v) => (
                    <p>{v}</p>
                ))
            }
            <form onSubmit={handleSubmit}>
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
            </form>
        </>

    );
}

export default Chat;