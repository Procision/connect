import React from 'react';
import '../login.css';
import { Box, Button, Input, Label } from "bumbag";
import Logo from '../components/Logo';
import fetch from 'node-fetch';

// const API_URL = "https://connect.procision.xyz/api/v1";
const API_URL = "https://login.queryzi.repl.co/api/v1";

const Login = (props: any) => {
    const [error, setError] = React.useState("");
    const [username, setUsername] = React.useState("");
    const [password, setPassword] = React.useState("");
    const [loading, setLoading] = React.useState(false);

    const handleLogin = () => {
        setLoading(true);
        fetch(API_URL + "/authenticate/", {
            method: "POST",
            headers: {
                Authorization: JSON.stringify({
                    username, 
                    password
                })
            },
            body: JSON.stringify({
                type: "PASSWORD" // "PASSWORD" | "TOKEN" | "MULTIFACTOR"
            })
        }).then(r => {
            setLoading(false);
            if (!r.ok) {
                if (r.status === 429) setError("You are logging in too quick. Please try again later.");
                else if (r.status === 401) setError("You have entered invalid credentials. Please check your credentials.");
                else if (r.status === 500) setError("The server is currently having technical issues. Please try again later.");
                else if (r.status === 502) setError("The server is currently having technical issues. Please try again later.");
                else if (r.status === 503) setError("The server is currently having technical issues. Please try again later.");
                else if (r.status === 504) setError("The server is currently having technical issues. Please try again later.");
                else setError("An unexpected error has occurred. Please try again later.");
            } else {
                redirectApp((r.json()));
            }
        }).catch(e => {
            setLoading(false);
            setError("An unexpected error has occurred. Please try again later.");
            
        });
    }

    const redirectApp = async (validated: Promise<any>) => {
        var state = await validated;
        // TODO: trigger animation
        props.history.push("/app/", { state });
    }

    return (
        <div style={{ 
            backgroundImage: "url(/assets/bg.jpg)", 
            position: "absolute", 
            top: 0, 
            left: 0, 
            height: "100%", 
            width: "100%" 
        }}>
            <Box 
                position="absolute"
                left="50%"
                top="50%"
                transform="translate(-50%, -50%)"
                backgroundColor="white"
                height="500px"
                width="500px"
                borderRadius="4"
                backgroundRepeat="no-repeat"
            >
                <div
                    style={{ padding: "20px", width: "100%", height: "100%" }}
                >
                    <Logo />

                    <Input
                        label="Email"
                        type="email"
                        marginTop="25px"
                        marginBottom="25px"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setUsername(e.target.value)}
                    />
                    
                    <Input
                        label="Password"
                        type="password"
                        marginTop="25px"
                        marginBottom="25px"
                        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setPassword(e.target.value)}
                    />
                    
                    <Label
                        color="danger"
                    >
                        {error}
                    </Label>

                    <div style={{
                        position: "fixed",
                        bottom: "0",
                        right: "0",
                        padding: "20px"

                    }}>
                        <Button
                            color="green"
                            width="100px"
                            onClick={handleLogin}
                            isLoading={loading}
                        >
                        Login
                        </Button>
                    </div>
                </div>
                
            </Box>
            <div style={{
                position: "absolute",
                bottom: 0,
                right: 0,
                color: "white",
                padding: 10
            }}>Image credit: <a href="https://wallhere.com/en/wallpaper/1422103">WallHere</a></div>
        </div>
    )
}
export default Login;