import React, { useState } from 'react'
import Heart from 'react-heart';

const Healthcard = ({ index, healthCard, likes, setLikes }) => {
  const [active, setActive] = useState(false)

  return (
    <div
      key={index}
      className="h-[320px] flex flex-col w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
    >
      <img
        src={healthCard.img}
        alt=""
        className=" rounded-md h-[150px]"
      />
      <div className="p-2">
        <h1 className="text-lg font-bold">{healthCard.title}</h1>
        <div className="flex items-center justify-between text-sm text-[#97989F]">
          <img
            src={healthCard.avatar}
            alt=""
            className="w-7 rounded-full"
          />
          <span>{healthCard.name}</span>
          <span>{healthCard.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <span
            id="likesHealth"
            className="flex items-center justify-between gap-2"
          >
            <a className="cursor-pointer" >
              <div className="w-[28px]" onClick={() => {
                setLikes((prevLikes) => {
                  const newLikes = [...prevLikes];
                  if (!active) {
                    newLikes[2][index] = newLikes[2][index] + 1;
                  } else {
                    newLikes[2][index] = newLikes[2][index] - 1;
                  }
                  setActive(!active);
                  return newLikes;
                });
              }}
              ><Heart isActive={active} onClick={() => { }} /></div>
            </a>
            <span>{likes[2][index]}</span>
          </span>
          <a href="#" className="relative">
            <button
              className="flex bg-[#2F80ED] text-white font-bold items-center gap-3 p-2 rounded-lg
                     before:absolute before:left-0 before:top-0 before:-z-1 before:rounded-lg before:h-full before:w-full before:origin-top-left 
                     before:scale-x-0 before:bg-[#6ad0d9] before:transition-transform before:duration-1000 
                     before:contents-['*'] hover:font-extrabold before:hover:scale-x-100"
            >
              <img src="./img/F.svg" alt="" className="w-3 z-10" />
              <h3 className="z-10">Share</h3>
            </button>
          </a>
        </div>
      </div>
    </div>
  )
}

export default Healthcard