import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import logoImg from '../img/logo.jpg';
import { useLocation  , NavLink } from 'react-router-dom';


const Yourcode = () => {

  const location = useLocation();
  const arr = location.state?.arr || '';

  return (
    <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
       <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
        <NavLink to={'/'}><img src={logoImg} alt="" className="w-[92px] h-12 cursor-pointer" /></NavLink>
        <Header withBorders={false}/>
      </div>
      <div className='w-[420px] font-bolder mx-auto'>
        <p className='text-center text-[#E86B02] text-5xl'>
            YOUR CODE IS
        </p>
        <p className='text-center my-8 text-5xl text-blue-600 '>{arr.join('')}</p>
      </div>
      <Footer/>
    </div>
)

}

export default Yourcode