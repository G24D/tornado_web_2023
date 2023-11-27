
const Header = () => {
    return ( 
        <div className="flex justify-evenly w-[1091px] h-[119px] border-[#E2E8EE] border-b-2 items-center">
            <div className="flex w-[572px] h-10 rounded-[20px] border-2 justify-between px-4">
                <input type="text" placeholder="Хайх" className="border-none outline-none w-full" />
                <img src="../img/search.svg" alt="" width="25px"/>
            </div>
            <a href="login/signup"><CreateButton onClick={()=>console.log('Pressed')}>Бүртгүүлэх</CreateButton></a>
            <a href="login"><CreateButton>Нэвтрэх</CreateButton></a>
            
        </div>
     ); 
}
 
const  CreateButton = (prop) => {
    
    return (
        <button onClick={prop.onClick} className="text-[#E86B02] font-bold px-8 py-3 border-2 border-[#E2E8EE] rounded-[10px] hover:text-white hover:bg-[#E86B02]">{prop.children}</button>
    )
}
export default Header;