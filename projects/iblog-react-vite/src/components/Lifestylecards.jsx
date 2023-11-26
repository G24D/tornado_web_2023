import React from "react";

const Lifestylecards = ({ index, lifestyleCard, likes, setLikes }) => {
  return (
    <div
      key={index}
      className="h-[320px] flex flex-col w-[230px] rounded-xl shadow-lg cursor-pointer 
      hover:translate-x-1 hover:translate-y-1 group-hover:blur-sm hover:!blur-none"
    >
      <img src={lifestyleCard.img} alt="" className=" rounded-md h-[150px]" />
      <div className="p-2">
        <h1 className="text-lg font-bold">{lifestyleCard.title}</h1>
        <div className="flex items-center justify-between text-sm text-[#97989F]">
          <img src={lifestyleCard.avatar} alt="" className="w-7 rounded-full" />
          <span>{lifestyleCard.name}</span>
          <span>{lifestyleCard.date}</span>
        </div>
        <div className="flex items-center justify-between">
          <span
            id="likesLs"
            className="flex items-center justify-between gap-2"
          >
            <a className="cursor-pointer">
              <img
                src="./img/vector.svg"
                alt=""
                onClick={(e) => {
                  // Use the functional form of setLikes to correctly update the state
                  setLikes((prevLikes) => {
                    const newLikes = [...prevLikes];
                    if (!e.target.style.backgroundColor || e.target.style.backgroundColor === 'none') {
                      newLikes[0][index] = newLikes[0][index] + 1;
                      e.target.style.backgroundColor = 'red'
                    } else {
                      newLikes[0][index] = newLikes[0][index] - 1;
                      e.target.style.backgroundColor = '';
                    }
                    return newLikes;
                  });
                }}
            
              />
            </a>
            <span>{likes[0][index]}</span>
          </span>
          <a href="https://www.facebook.com/" className="relative">
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
  );
};

export default Lifestylecards;
