import React from "react";

import { useState } from "react";

const Cards = () => {
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
          {lifestyleCards.map((lifestyleCard, index) => (
            <div
              key={index}
              className="h-[320px] flex flex-col w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
            >
              <img
                src={lifestyleCard.img}
                alt=""
                className=" rounded-md h-[150px]"
              />
              <div className="p-2">
                <h1 className="text-lg font-bold">{lifestyleCard.title}</h1>
                <div className="flex items-center justify-between text-sm text-[#97989F]">
                  <img
                    src={lifestyleCard.avatar}
                    alt=""
                    className="w-7 rounded-full"
                  />
                  <span>{lifestyleCard.name}</span>
                  <span>{lifestyleCard.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span id="likesLs" className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer">
                      {" "}
                      <img src="./img/vector.svg" alt="" onClick={() => handleLikeClick('lifestyle', index)} id={`likesLs-${inde}`}/>
                    </a>
                    <span>{lifestyleLikes[index]}</span>
                  </span>
                  <a href="https://www.facebook.com/" className="relative">
                    <button className="flex bg-[#2F80ED] text-white font-bold items-center gap-3 p-2 rounded-lg
                     before:absolute before:left-0 before:top-0 before:-z-1 before:rounded-lg before:h-full before:w-full before:origin-top-left 
                     before:scale-x-0 before:bg-[#6ad0d9] before:transition-transform before:duration-1000 
                     before:contents-['*'] hover:font-extrabold before:hover:scale-x-100">
                      <img src="./img/F.svg" alt="" className="w-3 z-10" />
                      <h3 className="z-10">Share</h3>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10" />
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10" />

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
          {technologyCards.map((technologyCard, index) => (
            <div
              key={index}
              className="h-[320px] flex flex-col w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
            >
              <img
                src={technologyCard.img}
                alt=""
                className=" rounded-md h-[150px]"
              />
              <div className="p-2">
                <h1 className="text-lg font-bold">{technologyCard.title}</h1>
                <div className="flex items-center justify-between text-sm text-[#97989F]">
                  <img
                    src={technologyCard.avatar}
                    alt=""
                    className="w-7 rounded-full"
                  />
                  <span>{technologyCard.name}</span>
                  <span>{technologyCard.date}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span id="likesTech" className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer" onClick={() => { }}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{technologyCard.likes}</span>
                  </span>
                  <a href="#" className="relative">
                    <button className="flex bg-[#2F80ED] text-white font-bold items-center gap-3 p-2 rounded-lg
                     before:absolute before:left-0 before:top-0 before:-z-1 before:rounded-lg before:h-full before:w-full before:origin-top-left 
                     before:scale-x-0 before:bg-[#6ad0d9] before:transition-transform before:duration-1000 
                     before:contents-['*'] hover:font-extrabold before:hover:scale-x-100">
                      <img src="./img/F.svg" alt="" className="w-3 z-10" />
                      <h3 className="z-10">Share</h3>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10" />
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10" />
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
                  <span id="likesHealth" className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer" onClick={() => { }}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{healthCard.likes}</span>
                  </span>
                  <a href="#" className="relative">
                    <button className="flex bg-[#2F80ED] text-white font-bold items-center gap-3 p-2 rounded-lg
                     before:absolute before:left-0 before:top-0 before:-z-1 before:rounded-lg before:h-full before:w-full before:origin-top-left 
                     before:scale-x-0 before:bg-[#6ad0d9] before:transition-transform before:duration-1000 
                     before:contents-['*'] hover:font-extrabold before:hover:scale-x-100">
                      <img src="./img/F.svg" alt="" className="w-3 z-10" />
                      <h3 className="z-10">Share</h3>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10" />
        <img src="./img/LeftArrow.svg" alt="" className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10" />

      </div>
      <div className="flex justify-center mt-16">
        <button className="px-[20px] py-[12px] border-2 w-[141px] h-[48px] text-[#696A75] rounded-xl col-span-4 place-self-center">
          Цааш унших
        </button>
      </div>
    </div>
  );
};

const lifestyleCards = [
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
];

const technologyCards = [
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
];
const healthCards = [
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
  {
    img: "./img/beach.jpeg",
    title: "The Impact of Technology on the Workplace",
    avatar: "./img/avatar.jpg",
    name: "Tracey Wilson",
    date: "Aug 20, 2022",
    likes: 23,
  },
];

const [lifestyleLikes, setLifestyleLikes] = useState(Array(lifestyleCards.length).fill(0));

import React, { useState } from "react";

const Cards = () => {
  const [lifestyleLikes, setLifestyleLikes] = useState(Array(lifestyleCards.length).fill(0));
  const [technologyLikes, setTechnologyLikes] = useState(Array(technologyCards.length).fill(0));
  const [healthLikes, setHealthLikes] = useState(Array(healthCards.length).fill(0));

  const handleLikeClick = (category, index) => {
    switch (category) {
      case 'lifestyle':
        setLifestyleLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] += 1;
          return newLikes;
        });
        break;
      case 'technology':
        setTechnologyLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] += 1;
          return newLikes;
        });
        break;
      case 'health':
        setHealthLikes((prevLikes) => {
          const newLikes = [...prevLikes];
          newLikes[index] += 1;
          return newLikes;
        });
        break;
      default:
        break;
    }
  };

export default Cards;
