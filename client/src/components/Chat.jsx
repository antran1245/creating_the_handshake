import { useEffect, useState } from "react"
import io from 'socket.io-client';

export default () => {
    const [socket] = useState(() => io(':8000'));

    useEffect(() => {
        console.log('Is this running?');
        socket.on("message", data => console.log(data));
        return () => socket.disconnect(true);
    }, []);

    return(
        <div>
            <h1>Socket Test</h1>
        </div>
    );
}