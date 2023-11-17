import { useState } from "react";

const Sidebar = () => {


    const [lifestyleOpen, setLifestyleOpen] = useState(true);
    const [sportOpen, setSportOpen] = useState(false);
    const [techOpen, setTechOpen] = useState(false);
    const [entertainmentOpen, setEntertainmentOpen] = useState(false);
  
    const toggleSection = (section) => {
      switch (section) {
        case 'lifestyle':
          setLifestyleOpen(!lifestyleOpen);
          break;
        case 'sport':
          setSportOpen(!sportOpen);
          break;
        case 'technology':
          setTechOpen(!techOpen);
          break;
        case 'entertainment':
          setEntertainmentOpen(!entertainmentOpen);
          break;
        default:
          break;
      }
    };
  return (
    <section className="pt-10 pl-12 pr-12  h-[1700px] border-r-2 border-[#E2E8EE] row-span-3">
      <img src="./img/logo.jpg" alt="" className="w-[92px] h-12 mb-11" />
      <div className="w-[250px]">
        <div>
          <div className="flex justify-between align-middle cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={() => toggleSection('lifestyle')}>
            <h1>Lifestyle</h1>
            <img
              src="./img/downarrow.svg"
              alt=""
              width='15px'
              className={lifestyleOpen ? 'rotate-180 duration-150' : ''}
            />
          </div>
          <ul className={`col-span-2 overflow-hidden ${
              lifestyleOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] mx-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Hobby
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Travel
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Food & Beverage
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Home and Decor
            </li>
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between align-middle cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={() => toggleSection('sport')}>
            <h1>Sport</h1>
            <img
              src="./img/downarrow.svg"
              alt=""
              width='15px'
              className={sportOpen ? 'rotate-180 duration-200' : ''}
            />
          </div>
          <ul className={`col-span-2 overflow-hidden ${
              sportOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] mx-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Soccer
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Volleyball
            </li>
            
          </ul>
        </div>
        
        <div>
          <div className="flex justify-between align-middle cursor-pointer hover:bg-[#E86B02] rounded-md p-2" id="title" onClick={() => toggleSection('technology')}>
            <h1>Technology</h1>
            <img
              src="./img/downarrow.svg"
              alt=""
              width='15px'
              className={techOpen ? 'rotate-180 duration-150' : ''}
            />
          </div>
          <ul className={`col-span-2 overflow-hidden ${
              techOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] mx-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Something1
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Something2
            </li>

          </ul>
        </div>
        <div>
          <div className="flex justify-between align-middle cursor-pointer hover:bg-[#E86B02] rounded-md p-2" id="title" onClick={() => toggleSection('entertainment')}>
            <h1>Entertainment</h1>
            <img
              src="./img/downarrow.svg"
              alt=""
              width='15px'
              className={entertainmentOpen ? 'rotate-180 duration-150' : ''}
            />
          </div>
          <ul className={`col-span-2 overflow-hidden ${
              entertainmentOpen ? 'max-h-[200px]' : 'max-h-0'
            }`}>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] mx-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Something1
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 cursor-pointer hover:bg-[#E86B02] rounded-md p-2" onClick={(e)=> {
              e.currentTarget.style.backgroundColor = 'orange';
            }}>
              Something2
            </li>

          </ul>
        </div>
        
      </div>
    </section>
  );
};

export default Sidebar;
