const Sidebar = () => {
    const toggleList = () => {
        const list = document.getElementById(`list`);
        if ( list.style.display == 'block' ) {
            list.style.display == 'none'
        }

    }
  return (
    <section className="pt-10 pl-12 pr-12 w-[348px]">
      <img src="./img/logo.png" alt="" className="w-[92px] h-12 mb-11" />
      <div className="w-[250px]">
        <div >
          <div className="flex justify-between" id="title">
            <h1>Lifestyle</h1>
            <img
              src="./img/expand.svg"
              alt=""
              className="mt-2 justify-self-end"
            />
          </div>
          <ul className=" col-span-2" id="list" onClick={toggleList}>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Hobby
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Travel
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Food & Beverage
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Home and Decor
            </li>
          </ul>
        </div>
        <div >
          <div className="flex justify-between">
            <h1>Sport</h1>
            <img
              src="./img/expand.svg"
              alt=""
              className="mt-2 justify-self-end"
            />
          </div>
          <ul className=" col-span-2">
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Soccer
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Volleyball
            </li>
          </ul>
        </div>
        <div >
          <div className="flex justify-between">
            <h1>Technology</h1>
            <img
              src="./img/expand.svg"
              alt=""
              className="mt-2 justify-self-end"
            />
          </div>
          <ul className=" col-span-2">
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Something1
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Something2
            </li>
          </ul>
        </div>
        <div >
          <div className="flex justify-between">
            <h1>Entertainment</h1>
            <img
              src="./img/expand.svg"
              alt=""
              className="mt-2 justify-self-end"
            />
          </div>
          <ul className=" col-span-2">
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Something1
            </li>
            <li className="extrabold-400 text-sm leading-[21px] text-[#242A31] ml-4 py-2">
              Something2
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;
