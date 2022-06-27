import { useRouter } from 'next/router';
import React, { useState } from 'react';
import { useAuth } from '../../context/authContext';



const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter()
    const { signIn } = useAuth()
    const { isSignedIn } = useAuth()

    function onSubmit(e) {
        e.preventDefault()
        signIn({ email, password })
        if (isSignedIn()) {

            router.push('/admin/admin')
        }
    }

    return (
        <div className=''>
            <form onSubmit={onSubmit} className='flex flex-col items-center justify-center bg-bg bg-center bg-cover  h-144'>

                <input
                    className='bg-white p-2 rounded-lg text-black border-2 border-gray-400 my-2'
                    type="email"
                    placeholder="email"
                    onChange={(e) => setEmail(e.target.value)}
                    value={email}
                ></input>
                <input
                    className='bg-white p-2 rounded-lg text-black border-2 border-gray-400 mb-2'
                    type="password"
                    placeholder="password"
                    onChange={(e) => setPassword(e.target.value)}
                    value={password}
                ></input>
                <button type="submit" className='text-white rounded-lg border-2 border-blueNav px-4 py-2 bg-blueCC'>Sign In</button>
            </form>
        </div>
    )
}

export default Login;



