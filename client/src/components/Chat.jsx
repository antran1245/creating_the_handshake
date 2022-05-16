import { useEffect, useState } from "react"
import io from 'socket.io-client';

// const socket = io('http://localhost:8000');
export default () => {
    const [socket] = useState(() => io('http://localhost:8000', {cors: {origin: "*"}}));

    socket.on('connect', () => {
        console.log('connect')
        socket.on("welcome", (data) => console.log(data));
        // socket.emit('back', 'hello from client');
    })
    useEffect(() => {
        console.log('Is this running? ');
        return () => socket.disconnect(true);
    }, [socket]);

    return(
        <div>
            <h1>Socket Test</h1>
        </div>
    );
}