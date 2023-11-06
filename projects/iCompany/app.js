const swiper = new Swiper('.swiper', {
    // Optional parameters
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });




  const serviceContainer = document.getElementById('servicecards-container');
  const serviceCards = [
      {
          imgFile: "./svg/service-1.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
          imgFile: "./svg/service-2.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
          imgFile: "./svg/service-3.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
          imgFile: "./svg/service-4.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
          imgFile: "./svg/service-5.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
      {
          imgFile: "./svg/service-6.png",
          title: 'How to brew coffee the right <br/>way',
          info: 'Lorem ipsum dolor sit amet consectetur adipisicing elit.',
      },
  ];
  const postService = () => {
    serviceCards.forEach((serviceCard) => 
    {
          const postSer = document.createElement('div');
          postSer.innerHTML = `
                  <img src="${serviceCard.imgFile}" width="100px" height="100px" alt="">
                  <h6>${serviceCard.title}</h6>
                  <p style="font-size: 12px">${serviceCard.info}</p>
                  `;
        serviceContainer.appendChild(postSer);
      })
  }
  postService();


  const teamCardContainer = document.getElementById('teamcard-container');

  const teamCards = [
    {
        avatar: "./img/pic-1.jpg",
        name: 'Magic Johnson',
        role: 'CEO',    
    },
    {
        avatar: "./img/pic-2.jpg",
        name: 'Magic Johnson',
        role: 'Manager',    
    },
    {
        avatar: "./img/pic-3.jpg",
        name: 'Magic Johnson',
        role: 'CEO',    
    },
    {
        avatar: "./img/pic-4.jpg",
        name: 'Magic Johnson',
        role: 'Something',    
    },
  ]

  const postTeamCards = () => {
    teamCards.forEach((teamCard) => {
        const teamElement = document.createElement('div');
        teamElement.innerHTML = `
        <img src="${teamCard.avatar}" width="250px" height="250px" alt="" style="border-radius: 50%">
        <strong style="margin: 0 auto">${teamCard.name}</strong>
        <h5 style="color: 
        #7BB7C6">${teamCard.role}</h5>
        <span style="display: flex; gap: 6px; justify-content : center"><img src="./svg/contact1.svg" alt="">
        <img src="./svg/contact2.svg" alt="">
        <img src="./svg/contact3.svg" alt="">
        <img src="./svg/contact4.svg" alt=""></span>
        `
        console.log(teamElement.style);
        teamElement.setAttribute('style', 'border: 1px solid #d2dae1; display: grid; place-items: center; padding: 4px; filter: drop-shadow(30px 10px 4px #d2dae1);');
    teamCardContainer.appendChild(teamElement);

    }) 
  }

  postTeamCards();