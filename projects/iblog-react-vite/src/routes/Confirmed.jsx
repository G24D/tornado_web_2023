import Header from '../components/Header';
import Footer from '../components/Footer';
import {useNavigate} from 'react-router-dom';
import logoImg from '../img/logo.jpg';
import { NavLink } from 'react-router-dom';

const Confirmed = () => {


  return (
    <div className='w-[1043px] mx-auto h-screen flex flex-col justify-between p-4'>
      <div className='flex items-center justify-between mb-20 border-[#E2E8EE] border-b-2'>
      <NavLink to={'/'}><img src={logoImg} alt="" className="w-[92px] h-12 cursor-pointer" /></NavLink>
        <Header withBorders={false}/>
      </div>
      <div className=' flex flex-col justify-around h-[556px] w-[478px] mx-auto mb-10 text-center'>
        <h2 className=' text-2xl text-[#E86B02] font-bold mb-6'>Баталгаажуулах URL таны и-мейл хаяг руу илгээгдлээ. Та и-мейл хаягаа шалгаж баталгаажуулна уу.</h2>
        

      </div>
      <Footer />
    </div>
  );
};


export default Confirmed;
