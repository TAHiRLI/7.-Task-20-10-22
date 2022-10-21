let mainDiv = document.querySelector('.main-img')
let mainImg = document.querySelector('.main-img img');

let themes = document.querySelectorAll('.theme img');
let themeDiv = document.querySelectorAll('.theme');

let forwardBtn = document.querySelector('.btn-right');
let backwardBtn = document.querySelector('.btn-left');
console.log(themes);


const images = [
  'https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000',
  'https://imgd.aeplcdn.com/0x0/n/cw/ec/41406/bmw-8-series-right-front-three-quarter8.jpeg',
  'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
  'https://www.alfaromeousa.com/content/dam/alfausa/BHP/desktop/AR-BHP-HERO-Desktop.jpg'
]

mainImg.src = images[0];

const imgScale = [
    { transform: ' scale(0.5)' },
    { transform: 'scale(1)' }
  ];


  const imgTiming = {
    duration: 500,
    iterations: 1,
  }


themes.forEach(img => {
    img.addEventListener('click', ()=>{
        mainImg.src = img.src;
        mainDiv.animate(imgScale,imgTiming);
        themeDiv.forEach(item => item.classList.remove('active'));
        img.parentElement.classList.toggle('active');
    })
})
for (let i = 0; i < themes.length; i++) {
  console.log(themes[i])
  themes[i].src = images[i]
  
}

let index = 0;
forwardBtn.addEventListener('click', (e)=>{ 
  if(index == images.length -1 ){
    index = -1;
    console.log('sifirlandi');
  }
  index++;
  mainImg.src= images[index];
  console.log(index);

})

backwardBtn.addEventListener('click', (e)=>{ 
  if  (index <= 0 ){
    index = images.length ;
    console.log('maxlandi')
  }
  index--;
  mainImg.src= images[index  ];
  console.log(index);
})

