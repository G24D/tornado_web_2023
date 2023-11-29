import React from 'react'
import Header from '../components/Header'
import Footer from '../components/Footer';

const Forgotpass = () => {

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
      };
  return (
    <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
      <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
        <a href="/"><img src="../img/logo.jpg" alt="" className="w-[92px] h-12 cursor-pointer" /></a>
        <Header withBorders={false}/>
      </div>
      <div className='w-[420px] font-bolder mx-auto'>
        <p className='text-[20px] text-[#E86B02] w-[150px] font-bolder'>Нууц үг сэргээх</p> <br />
        <div>
            <p className='text-[#546371] w-[280px] mx-auto mb-6'>Таны бүртгэлтэй имэйл рүү баталгаажуулах код илгээх болно.</p>
            <label>
                <input
                  type="text"
                  name="firstName"
                  onChange={handleChange}
                  required
                  placeholder='example@gmail.com'
                  className='w-[480px] bg-[#F5F7F9] py-6 gap-[10px] rounded-[10px] pl-4 mb-6 '
                />
              </label> <br />
              <a href='/signup/forgotpass/getcode'><button className='p-2 border-[#E86B02] border-[2px] 
              rounded-[10px] bg-[#E86B02] hover:bg-[#efc94a] w-[478px] mb-6 text-white 
              font-bolder h-12'>Код авах</button></a>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Forgotpass