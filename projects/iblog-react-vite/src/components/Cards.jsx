import React from "react";
import { useState } from "react";
import Lifestylecard from "./Lifestylecard";
import Technologycard from "./Technologycard";
import Healthcard from "./Healthcard";



const Cards = () => {
  const [likes, setLikes] = useState([[23, 23, 23, 23], [23, 23, 23, 23], [23, 23, 23, 23]]);



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

  const [technologyCard, setTechnologyCard] = useState([
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
  ]);
  const [healthCards, setHealtCard] = useState([
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
        <div className="w-[1000px] flex justify-between my-6">
          <h1 className="uppercase font-bold text-[25px]">Technology</h1>
          <div className="flex items-center gap-4">
            <p>Бүгд</p>
            <img src="./img/RightArrow.svg" alt="" />
          </div>
        </div>

        <div className="group flex gap-6">
          {technologyCard.map((technologyCard, index) => {
            return (
              <Technologycard 
              key={index} 
              technologyCard={technologyCard} 
              index={index} 
              likes={likes}
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
          {healthCards.map((healthCard, index) => {
            return (
              <Healthcard 
              key={index}
              index={index}
              healthCard={healthCard}
              likes= {likes}
              setLikes={setLikes}
              />
            )
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
      <div className="flex justify-center mt-16">
        <button className="px-[20px] py-[12px] border-2 w-[141px] h-[48px] text-[#696A75] rounded-xl col-span-4 place-self-center">
          Цааш унших
        </button>
      </div>
    </div>
  );
};

export default Cards;
