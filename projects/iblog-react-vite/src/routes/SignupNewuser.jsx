import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';
import { NavLink } from 'react-router-dom';
import logoImg from '../img/logo.jpg'

const SignunNewuser = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [passwordRepeat, setPasswordrepeat] = useState('');
    const [passwordsMatch, setPasswordsMatch] = useState(true);


    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    };

    const handlePasswordRepeatChange = (e) => {
        setPasswordrepeat(e.target.value);
    };

    const handleRegister = async (e) => {
        e.preventDefault();

        if (password === passwordRepeat) {
            try {
                const userCredential = await createUserWithEmailAndPassword(auth, email, password);
                console.log(userCredential);
                navigate('/signup/newuser/confirmed');
            } catch (error) {
                console.error(error);
            }
        } else {
            setPasswordsMatch(false);
        }
    };

    return (
        <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
            <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
                <NavLink to={'/'}><img src={logoImg} alt="" className="w-[92px] h-12 cursor-pointer" /></NavLink>
                <Header withBorders={false} />
            </div>
            <div className=' flex flex-col justify-around h-[556px] w-[478px] mx-auto mb-10'>
                <h2 className=' text-2xl text-[#E86B02] font-bold mb-6'>Нэвтрэх</h2>
                <form className='w-[478px] mx-auto' onSubmit={handleRegister}>
                    <label>
                        <input
                            type="text"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                            placeholder='И-мэйл оруулна уу...'
                            className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                        />
                    </label>
                    <br />
                    <label>
                        <input
                            type="text"
                            name="username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)}
                            required
                            placeholder='Username оруулна уу...'
                            className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                        />
                    </label>
                    <br />

                    <label className='flex items-center w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] justify-between pr-6'>
                        <input
                            type='password'
                            name="password"
                            value={password}
                            onChange={handlePasswordChange}
                            required
                            placeholder='Нууц үг'
                            className='w-[460px] bg-[#F5F7F9] pl-4'
                        />



                    </label>
                    <br />
                    <label className='flex items-center w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] justify-between pr-6'>
                        <input
                            type='password'
                            name="passwordRepeat"
                            value={passwordRepeat}
                            onChange={handlePasswordRepeatChange}
                            required
                            placeholder='Нууц үгээ давтаж оруулна уу'
                            className='w-[460px] bg-[#F5F7F9] pl-4'
                        />



                    </label>
                    <br />
                    {!passwordsMatch && <p>Passwords don't match</p>}
                    <button
            className='p-2 border-[#E86B02] border-[2px] rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 text-white font-bolder h-12'
            type='submit'
          >
            Бүртгүүлэх
          </button>

                </form>

            </div>
            <Footer />
        </div>
    );
};


export default SignunNewuser;
