import React from 'react'


const Footer = () => {
  return (
    <div className='flex justify-center gap-20 items-center border-t-2 border-[#E2E8EE]'>
      <div>
        <a className='cursor-pointer' href='#'><img src="../img/logoSlogan.svg" alt="" className='w-[83px]' /></a>
      </div>
      <div>
        <h1 className='font-bold'>Тусламж</h1>
        <h2 className='pt-2'>Хэрэглэх заавар</h2>
        <h2>Санал хүсэлт</h2>
      </div>
      <div>
        <h1 className='font-bold'>Бидэнтэй холбогдох</h1>
        <span className='flex pt-2'>
          <img src="../img/mail.svg" alt="" />
          <h2>info@jstemplate.net</h2>
        </span>
        <span className='flex'>
          <img src="../img/contact.svg" alt="" />
          <h2>+976 99112344</h2>
        </span>
      </div>
    </div>
  )
}



export default Footer   