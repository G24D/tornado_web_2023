// import searchSvg  from '../img/search.svg';
import { NavLink } from 'react-router-dom';

const Header = ({ withBorders = true }) => {
    const borderClasses = withBorders
    ? "border-[#E2E8EE] border-b-2"
    : "";
    return ( 
        <div className={`flex justify-evenly w-[1091px] h-[119px] ${borderClasses} items-center`}>
            <div className="flex w-[572px] h-10 rounded-[20px] border-2 justify-between px-4">
                <input type="text" placeholder="Хайх" className="border-none outline-none w-full" />
                <img src='../img/search.svg' alt="" width="25px"/>
            </div>
            <NavLink to={'/signup'}><CreateButton onClick={()=>console.log('Pressed')}>Бүртгүүлэх</CreateButton></NavLink>
            <NavLink to={'/login'}><CreateButton>Нэвтрэх</CreateButton></NavLink>
            
        </div>
     ); 
}
 
const  CreateButton = (prop) => {
    
    return (
        <button onClick={prop.onClick} className="text-[#E86B02] font-bold px-8 py-3 border-2 border-[#E2E8EE] rounded-[10px] hover:text-white hover:bg-[#E86B02]">{prop.children}</button>
    )
}
export default Header;