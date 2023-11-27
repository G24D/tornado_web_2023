import React from "react";
import { useState } from "react";
import Lifestylecards from "./Lifestylecards";
import Technologycards from "./Technologycards";
import Lifestylecard from "./Lifestylecard";



const Cards = () => {
  const [likes, setLikes] = useState([[23, 23, 23, 23], [23, 23, 23, 23]]);



  const [lifestyleCards, setLifestyleCards] = useState([
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },

  ]);

  const technologyCards = [
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes[0],
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
  ];
  const healthCards = [
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
    {
      img: "./img/beach.jpeg",
      title: "The Impact of Technology on the Workplace",
      avatar: "./img/avatar.jpg",
      name: "Tracey Wilson",
      date: "Aug 20, 2022",
      likes: likes,
    },
  ];

  
  const lsShower = () => {
    const arrows = document.querySelectorAll('.arrow');
    console.log(arrows);


    if(lifestyleCards.length > 4) {
      
      arrows[0].style.display = 'block';
      arrows[1].stlye.display = 'block'
    } else {
      arrows[0].style.display = 'none';
      arrows[1].stlye.display = 'none'
    }
  }

  window.addEventListener('load', ()=> {
    lsShower();
  })

  return (
    <div className="w-[1091px] mx-10">
      <div className="m-6 relative">
        <div className="w-[1000px] flex justify-between my-6">
          <h1 className="uppercase font-bold text-[25px]">Lifestyle</h1>
          <div className="flex items-center gap-4">
            <p>Бүгд</p>
            <img src="./img/RightArrow.svg" alt="" />
          </div>
        </div>

        <div className="group flex gap-x-6">
          {lifestyleCards.map((lifestyleCard, index) => {

            return (
              <Lifestylecards
                key={index}
                index={index}
                likes={likes}
                setLikes={setLikes}
                lifestyleCard={lifestyleCard}
              />
            );
          })}
        </div>
=======
          <div className="group flex gap-x-6 overflow-hidden w-[1043px]">
            {lifestyleCards.map((lifestyleCard, index) => {
              
              return (
                <Lifestylecard
                  key={index}
                  index={index}
                  likes={likes}
                  setLikes={setLikes}
                  lifestyleCard={lifestyleCard}
                />
              );
            })}
          </div>
       
        <img
          id="arrow"
          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10 hidden"
        />
        <img
          id="arrow"
          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10 hidden"
        />
      </div>
      <div className="m-6 relative">
        <div className="w-[1000px] flex justify-between my-6">
          <h1 className="uppercase font-bold text-[25px]">Technology</h1>
          <div className="flex items-center gap-4">
            <p>Бүгд</p>
            <img src="./img/RightArrow.svg" alt="" />
          </div>
        </div>

        <div className="group flex gap-6">
          {technologyCards.map((technologyCard, index) => {
            return (
              <Technologycards 
              key={index} 
              technologyCard={technologyCard} 
              index={index} 
              setLikes={setLikes} />
            );
          })}
        </div>
        <img
          id="arrow"

          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10"
        />
        <img
          id="arrow"

          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10"
        />
      </div>
      <div className="m-6 relative">
        <div className="flex gap-x-6 m-6 items-center flex-wrap relative">
          <div className="w-[1000px] flex justify-between my-6">
            <h1 className="uppercase font-bold text-[25px]">Health</h1>
            <div className="flex items-center gap-4">
              <p>Бүгд</p>
              <img src="./img/RightArrow.svg" alt="" />
            </div>
          </div>
        </div>

        <div className="group flex gap-6">
          {healthCards.map((healthCard, index) => (
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
                    <a className="cursor-pointer" onClick={() => { }}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{healthCard.likes}</span>
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
          ))}
        </div>
        <img
          id="arrow"

          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10"
        />
        <img
          id="arrow"

          src="./img/LeftArrow.svg"
          alt=""
          className="p-4 w-16 rounded-full arrow shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10"
        />
      </div>
      <div className="flex justify-center mt-16">
        <button className="px-[20px] py-[12px] border-2 w-[141px] h-[48px] text-[#696A75] rounded-xl col-span-4 place-self-center">
          Цааш унших
        </button>
      </div>
    </div>
  );
};

export default Cards;
