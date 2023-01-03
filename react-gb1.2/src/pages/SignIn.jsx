import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';

import { signIn } from '../services/firebase';
import { auth } from '../store/profile/actions'


export function SignIn() {
    const [inputs, setInputs] = useState({ email: '', password: '' })
    const [error, setError] = useState('')
    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const handleSubmit = async (e) => {
        e.preventDefault()
        setError('')
        setLoading(true)
        try {
            await signIn(inputs.email, inputs.password)
            dispatch(auth(true))
            navigate('/chats')
        } catch (error) {
            console.log(error)
            setError(error.message)
            setInputs({ email: '', password: '' })
        } finally {
            setLoading(false)
        }
    }

    return (
        <>
            <div>SignIn</div>
            <form onSubmit={handleSubmit}>
                <p>Email:</p>
                <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                    type="text"
                    name="email"
                    value={inputs.email}
                    onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <p>Password:</p>
                <input style={{ color: 'red', padding: '15px', margin: '15px', width: '150px' }}
                    type="text"
                    name="password"
                    value={inputs.password}
                    onChange={(e) => setInputs((prev) => ({ ...prev, [e.target.name]: e.target.value }))}
                />
                <button style={{ color: 'red', padding: '15px', margin: '15px', width: '150px', backgroundColor: 'aqua' }} >Login</button>
            </form>
            {loading && (
                <Box sx={{ display: 'flex', justifyContent: 'center' }}>
                    <CircularProgress />
                </Box>
            )}
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </>
    )
}

