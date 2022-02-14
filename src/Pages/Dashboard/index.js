import React, { useContext } from 'react';
import Button from 'react-bootstrap/Button'
import { Link } from 'react-router-dom'
import { AuthContext, useAuth } from '../../Contexts/UserContext';
import './style.css'

export const Dashboard = () => {
    // const { currentUser } = useContext(AuthContext)
    const { currentUser, signIn, signOut, checkUser } = useAuth()
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
