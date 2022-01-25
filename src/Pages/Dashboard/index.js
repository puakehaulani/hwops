import React from 'react'
import Button from 'react-bootstrap/Button'

import './style.css'

export default function Dashboard() {

    const handleLogin = () => {
        alert('Login')
    }

    return (
        <div className="pageDash pageView">
            <h1 className="text-center">Dashboard</h1>

            <div style={{ display: 'flex', height: '100vh', justifyContent: 'center', alignItems: 'center' }}>
                <Button variant="dark" onClick={handleLogin}>Login</Button>
            </div>

        </div>

    )
}