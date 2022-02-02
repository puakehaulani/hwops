import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom'
import './style.css'

export default function Logout() {
    const navigate = useNavigate()
    useEffect(() => {
        setTimeout(() => {
            navigate('/')
        }, 5000)
    })

    return (
        <div className="pageDash pageView">
            <h1 className="text-center">Bye!</h1>
        </div >

    )
}
