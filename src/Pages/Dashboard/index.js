import React, { useEffect, useState } from 'react';
import { Auth, Hub } from 'aws-amplify';
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
// import awsconfig from '../../aws-exports';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import './style.css'

// Amplify.configure(awsconfig);

export default function Dashboard() {


    const [user, setUser] = useState(null);
    const [customState, setCustomState] = useState(null);

    useEffect(() => {
        const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
            switch (event) {
                case "signIn":
                    setUser(data);
                    break;
                case "signOut":
                    setUser(null);
                    break;
                default:
                    setUser(null)
                    break
                // case "customOAuthState":
                //     setCustomState(data);
            }
        });
        Auth.currentAuthenticatedUser()
            .then(currentUser => setUser(currentUser))
            .catch(() => console.log("Not signed in"));

        return unsubscribe;
    }, []);

    useEffect(() => {
        console.log(user)

    }, [user]);



    return (
        <div className="pageDash pageView">
            <h1 className="text-center">Dashboard</h1>
            <h2 className="text-center">{user ? `Hello again ${user.username}~` : `Login below!`}</h2>
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>


                <Button variant="dark" onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}>Sign In</Button>

                <Button variant="outline-dark" onClick={() => Auth.signOut()}>Sign Out</Button>


            </div>

        </div >

    )
}
