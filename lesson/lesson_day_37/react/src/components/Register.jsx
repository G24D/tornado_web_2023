import React, { useState } from 'react'
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase'
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [username, setUsername] = useState('');
    const [repeatPassword, setRepeatPassword] = useState('');

    const handleRegister = (e) => {
        e.preventDefault();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential) => {
            console.log(userCredential);
        }).catch((error) => {
            console.log(error);
        })
    }

    return (
        <form className=' mx-auto max-w-[30%] flex flex-col border-1 border-black border-solid align-center items-center'
        onSubmit={handleRegister}>
        <input 
        type="text" 
        placeholder='Email' 
        className='m-2 mt-10'
        value={email}
        onChange={(e)=> {
            setEmail(e.target.value)
        }}
        />
        <input 
        type="text" 
        placeholder='Username' 
        className='m-2 mt-10'
        value={username}
        onChange={(e)=> {
            setUsername(e.target.value)
        }}
        />
        <input 
        type="password"
        placeholder='Password'
        className='m-2'
        value={password}
        onChange={(e)=> {
            setPassword(e.target.value)
        }}
        />
        <input 
        type="password"
        placeholder='Repeat Password'
        className='m-2'
        value={repeatPassword}
        onChange={(e)=> {
            setRepeatPassword(e.target.value)
        }}
        />
        <button className='m-2 mb-10' onClick={handleRegister}>Register</button>
    </form>
  )
}

export default Register