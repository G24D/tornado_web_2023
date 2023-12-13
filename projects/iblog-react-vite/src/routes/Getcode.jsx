import React, { useState } from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';
import logoImg from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';

const Getcode = () => {

  const [arr, setArr] = useState([]);
  const navigate = useNavigate();
  const handleValue = (e) => {
    setArr([...arr, e.target.value]);
    console.log(arr);
  }

  const handleContinue = () => {
    navigate('/signup/forgotpass/getcode/yourcode', { state: { arr } });
  };

  return (
    <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
       <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
        <NavLink to={'/'}><img src={logoImg} alt="" className="w-[92px] h-12 cursor-pointer" /></NavLink>
        <Header withBorders={false}/>
      </div>
      <div className='w-[420px] font-bolder mx-auto'>
        <p className='text-[20px] text-[#E86B02] w-[150px] font-bolder'>Нууц үг сэргээх</p> <br />
        <div>
            <p className='text-[#546371] w-[280px] mx-auto mb-6'>Таны бүртгэлтэй имэйл рүү илгээсэн баталгаажуулах кодыг оруулна уу.</p>
            <label id='listItems' className='flex gap-10 justify-center'>
                <input
                  type="text"
                  name=""
                  onChange={handleValue}
                  maxLength={1}
                  required
                  placeholder='_'
                  className='w-[50px] h-[50px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                />
                <input
                  type="text"
                  onChange={handleValue}
                  name=""
                  maxLength={1}
                  required
                  placeholder='_'
                  className='w-[50px] h-[50px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                />
                <input
                  onChange={handleValue}
                  type="text"
                  name=""
                  maxLength={1}
                  required
                  placeholder='_'
                  className='w-[50px] h-[50px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                />
                <input
                  type="text"
                  onChange={handleValue}
                  name=""
                  maxLength={1}
                  required
                  placeholder='_'
                  className='w-[50px] h-[50px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                />
              </label> 
              <a href='/signup/forgotpass/getcode/yourcode'><button onClick={handleContinue} className='p-2 border-[#E86B02] border-[2px] 
              rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 text-white 
              font-bolder h-12'>Үргэлжлүүлэх</button></a>
        </div>
      </div>
      <Footer/>
    </div>
)

}

export default Getcode