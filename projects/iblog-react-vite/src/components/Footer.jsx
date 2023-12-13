import React from 'react';

import { NavLink } from 'react-router-dom';


const Footer = () => {
const mailSvg = '../img/mail.svg';
const contactSvg = '../img/contact.svg';
const logoSlogan = '../img/logoSlogan.svg';
 
  return (
    <div className='flex justify-center gap-20 items-center border-t-2 border-[#E2E8EE]'>
      <div>
        <NavLink to={'/'} className={'cursor-pointer'}><img src={logoSlogan} alt="Logo Slogan" className='w-[83px]' /></NavLink>
      </div>
      <div>
        <h1 className='font-bold'>Тусламж</h1>
        <h2 className='pt-2'>Хэрэглэх заавар</h2>
        <h2>Санал хүсэлт</h2>
      </div>
      <div>
        <h1 className='font-bold'>Бидэнтэй холбогдох</h1>
        <span className='flex pt-2'>
          <img src={mailSvg} alt="Email Icon" />
          <h2>info@jstemplate.net</h2>
        </span>
        <span className='flex'>
          <img src={contactSvg} alt="Contact Icon" />
          <h2>+976 99112344</h2>
        </span>
      </div>
    </div>
  )
}



export default Footer   