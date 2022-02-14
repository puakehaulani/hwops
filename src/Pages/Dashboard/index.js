import React, { useEffect, useState, useContext } from 'react';
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'
import { Auth, Hub } from 'aws-amplify';
import { Link } from 'react-router-dom'
import { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';
import { AuthContext, useAuth } from '../../Contexts/UserContext';
import './style.css'

export default function Dashboard() {
    const { currentUser, setCurrentUser } = useContext(AuthContext)
    const [loading, setLoading] = useState(true);
    const { signIn, signOut, checkUser } = useAuth()
    // useEffect(() => {
    //     console.log("Dashboard currentUser: ", currentUser)
    // }, [currentUser])

    // useEffect(() => {
    //     Auth.currentAuthenticatedUser()
    //         .then(user => setCurrentUser(user))
    // }, [])

    // const signIn = () => {
    //     Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }

    // const signOut = () => {
    //     Auth.signOut()
    //         .then(data => console.log(data))
    //         .catch(err => console.log(err))
    // }

    // const checkUser = () => {
    //     Auth.currentAuthenticatedUser()
    //         .then(user => console.log("cognitoUser ", user, "app User ", currentUser))
    //         .catch(err => console.log(err))
    // }

    // useEffect(() => {
    //     const unsubscribe = Hub.listen("auth", ({ payload: { event, data } }) => {
    //         switch (event) {
    //             case "signUp":
    //                 setCurrentUser(data)
    //                 setLoading(false)
    //                 break
    //             case "signIn":
    //                 setCurrentUser(data)
    //                 setLoading(false)
    //                 break
    //             case "signOut":
    //                 setCurrentUser(null)
    //                 console.log("logout ", currentUser)
    //                 setLoading(false)
    //                 break
    //             default:
    //                 break

    //         }
    //     });
    //     return unsubscribe;
    // }, [])
    return (
        <div className="pageDash pageView">
            <h1 className="text-center">Dashboard</h1>
            <h2 className="text-center">{currentUser ? `Hello again ${currentUser.username}~` : `Login below!`}</h2>
            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>

                <Button variant="dark" onClick={signIn}>Sign In</Button>
                <Button variant="outline-dark" onClick={signOut}>Sign Out</Button>

                <Button variant="outline-dark" onClick={checkUser}>Check User</Button>
                <Link to="/">
                    <Button variant="dark"
                    >Go Back</Button>
                </Link>
            </div>

        </div >

    )
}
