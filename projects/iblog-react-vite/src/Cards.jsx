import React from 'react'

const Cards = () => {
  return  (

    <div>
    {cards.map((card, index ) => (
          <div key={index}> 
                
              <img src={card.img} alt="" />
              <h1>{card.title}</h1>
              <div>{card.title}</div>
          </div>
            
            ))}
    </div>
  )
}


const cards = [
  {
      img: "./img/beach.jpeg",
      title: 'asdas',
      avatar: '',
      name: 'asdasdsa',
      date: '',
      likes: '',
      svg: '',
      fbShare: '',
  },
  {
      img: '',
      title: 'gfdgdfgfd',
      avatar: '',
      name: 'fdgdfgdfgdfgdf',
      date: '',
      likes: '',
      svg: '',
      fbShare: '',
  },
]
export default Cards


