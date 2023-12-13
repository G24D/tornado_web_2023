import Footer from "../components/Footer"
import { NavLink } from "react-router-dom"
import Heart from "react-heart"
import { useState } from "react"


const Userprofile = () => {
    const [active, setActive] = useState(false);
    return (
        <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
            <div className='flex items-center justify-between mb-20 '>
                <NavLink to={'/'}><img src="../img/logo.jpg" alt="" className="w-[92px] h-12 cursor-pointer" /></NavLink>
                <div className="flex w-[572px] h-10 rounded-[20px] justify-between px-4">
                    <input type="text" placeholder="Хайх" className="border-none outline-none w-full" />
                    <img src='../img/search.svg' alt="" width="25px" />
                </div>
                <div className="w-[28px]"><Heart isActive={active} onClick={() => setActive(!active)}/></div>
                <NavLink to={'/post'}><button className="text-[#E86B02] font-bold px-8 py-3 border-2 border-[#E2E8EE] rounded-[10px] hover:text-white hover:bg-[#E86B02]">Post</button></NavLink>
                <NavLink to={'/profile'}><button className="text-[#E86B02] font-bold px-8 py-3 border-2 border-[#E2E8EE] rounded-[10px] hover:text-white hover:bg-[#E86B02]">Профайл</button></NavLink>
            </div>
            <div className=' flex flex-col justify-around h-[556px] w-[478px] mx-auto mb-10'>
                <h2 className=' text-2xl text-[#E86B02] font-bold mb-6'>Post</h2>


            </div>
            <Footer />
        </div>
    )
}

export default Userprofile