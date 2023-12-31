import React, { useState } from 'react';
import Header from '../components/Header';
import Footer from '../components/Footer';
import { FaEyeSlash, FaEye } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import { MdOutlineFacebook } from "react-icons/md";
import {useNavigate} from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../firebase';

const Signup = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");



  const handleLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log(user)
        if (user) {
          localStorage.setItem(
            "authenticated",
            JSON.stringify({ email: user.email, uid: user.uid })
          );
        }
        navigate(`/contact/user`)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // const CreateButton = (e) => {
  //   return (
  //     <a><button className='p-2 border-[#E86B02] 
  //     border-[2px] rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 
  //     text-white font-bolder h-12'>{e.children}</button></a>
  //   )
  // }
  

  const [hidePass, setShowPassword] = useState(true);

  return (
    <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
      <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
        <a href="/"><img src="../img/logo.jpg" alt="" className="w-[92px] h-12 cursor-pointer" /></a>
        <Header withBorders={false}/>
      </div>
      <div className=' flex flex-col justify-around h-[556px] w-[478px] mx-auto mb-10'>
        <h2 className=' text-2xl text-[#E86B02] font-bold mb-6'>Нэвтрэх</h2>
        <form onSubmit={handleLogin} className='w-[478px] mx-auto'>
          <label>
            <input
              type="text"
              name="firstName"
              value={email}
              onChange={(e)=> setEmail(e.target.value)}
              required
              placeholder='И-мэйл эсвэл утасны дугаар'
              className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
            />
          </label>
          <br />

          <label className='flex items-center w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] justify-between pr-6'>
            <input
              type={hidePass ? 'password' : 'text'}
              name="lastName"
              value={password}
              onChange={(e)=> setPassword(e.target.value)}
              required
              placeholder='Нууц үг'
              className='w-[460px] bg-[#F5F7F9] pl-4'
            />

            {hidePass ? <FaEyeSlash className='w-[25px] cursor-pointer' onClick={() => setShowPassword(false)} /> :
              <FaEye className='w-[25px] cursor-pointer' onClick={() => setShowPassword(true)} />
            }

          </label>
          <br />
          <a href="/signup/forgotpass" className='underline flex justify-end'>Нууц үг мартсан уу?</a>
          <br />
          <button onClick={handleLogin} className='p-2 border-[#E86B02] 
      border-[2px] rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 
      text-white font-bolder h-12'>Нэвтрэх</button>
          <br />
          <div className='flex  justify-center gap-4 items-center p-2 border-[#E86B02] border-[2px] font-bolder rounded-[10px] bg-white hover:bg-[#efc94a] w-[478px] mb-2 font-bolder h-12'>
            <FcGoogle />
            <button type="submit">Gmail-ээр нэвтрэх</button>
          </div><br />
          <div className='flex  justify-center gap-4 items-center p-2 border-[#E86B02] border-[2px] font-bolder rounded-[10px] bg-white hover:bg-[#efc94a] w-[478px] mb-2 font-bolder h-12'>
            <MdOutlineFacebook color='blue' />
            <button type="submit">Facebook-ээр нэвтрэх</button>
          </div><br />
          <div className='w-[478px] relative flex justify-center before:content-[""] before:w-[120px] before:h-[2px] before:absolute before:top-3
           before:left-16 before:bg-[#E5E6EB] after:content-[""] after:w-[120px] after:h-[2px] after:absolute
            after:top-3 after:right-16 after:bg-[#E5E6EB] text-[#E5E6EB] mb-6'>
            <span>эсвэл</span>
          </div>
          <button onClick={()=>navigate('/signup/newuser')} className='p-2 border-[#E86B02] 
      border-[2px] rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 
      text-white font-bolder h-12'>Бүртгүүлэх</button>

        </form>

      </div>
      <Footer />
    </div>
  );
};


export default Signup;
