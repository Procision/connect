import React from 'react';
import WebSocket from 'ws';

// const GATEWAY_URL = "wss://connect.procision.xyz/api/v1/gateway";
const GATEWAY_URL = "wss://login.queryzi.repl.co/api/v1/gateway";

interface User {
    userID: string,
    username: string,
    email?: string,
    password?: string,
    sessionID?: string,
    token?: string
}

function App(props: any) {
    const [user, setUser] = React.useState<User>();
    const [socket, setSocket] = React.useState<WebSocket>();
    React.useEffect(() => {
        setSocket(new WebSocket(GATEWAY_URL, { headers: { Authorization: JSON.stringify(props.state) } }));

        socket!.on('open', () => {

        });
        return () => {
            socket!.close();
            setSocket(undefined);
        }
    }, []);

    return (
        <div>
            app goes here
        </div>
    )
}

export default App;