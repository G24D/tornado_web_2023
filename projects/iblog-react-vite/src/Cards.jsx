import React from "react";

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
              className="h-[300px] flex flex-col justify-between w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
            >
              <img
                src={lifestyleCard.img}
                alt=""
                className=" rounded-md h-[150px]"
              />
          <div className="p-3">
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
                  <span className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer" onClick={() => {}}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{lifestyleCard.likes}</span>
                  </span>
                  <a href="#">
                    <button className="flex bg-[#2F80ED] text-white font-extrabold items-center gap-3 p-2 rounded-lg">
                      <img src="./img/F.svg" alt="" className="w-3" />
                      <h3>Share</h3>
                    </button>
                  </a>
                </div>
          </div>
            </div>
          ))}
  
       </div>
      <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10"/>
      <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10"/>

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
              className="h-[300px] flex flex-col justify-between w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
            >
              <img
                src={technologyCard.img}
                alt=""
                className=" rounded-md h-[150px]"
              />
              <div className="p-3">
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
                  <span className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer" onClick={() => {}}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{technologyCard.likes}</span>
                  </span>
                  <a href="#">
                    <button className="flex bg-[#2F80ED] text-white font-extrabold items-center gap-3 p-2 rounded-lg left-[-2]">
                      <img src="./img/F.svg" alt="" className="w-3" />
                      <h3>Share</h3>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}

        </div>
        <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10"/>
        <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10"/>
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
              className="h-[300px] flex flex-col justify-between w-[230px] rounded-xl shadow-lg cursor-pointer hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
            >
              <img
                src={healthCard.img}
                alt=""
                className=" rounded-md h-[150px]"
              />
              <div className="p-3">
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
                  <span className="flex items-center justify-between gap-2">
                    <a className="cursor-pointer" onClick={() => {}}>
                      {" "}
                      <img src="./img/vector.svg" alt="" />
                    </a>
                    <span>{healthCard.likes}</span>
                  </span>
                  <a href="#">
                    <button className="flex bg-[#2F80ED] text-white font-extrabold items-center gap-3 p-2 rounded-lg">
                      <img src="./img/F.svg" alt="" className="w-3" />
                      <h3>Share</h3>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute left-[-45px] top-[160px] z-10"/>
        <img src="./img/LeftArrow.svg" alt=""  className="p-4 w-16 rounded-full shadow-md bg-gray-100 cursor-pointer absolute right-[5px] top-[160px] rotate-180 z-10"/>

      </div>
      <div className="flex justify-center mt-20">
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
export default Cards;
