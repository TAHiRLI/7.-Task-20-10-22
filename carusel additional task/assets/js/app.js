let mainDiv = document.querySelector('.main-img');
let mainImg = document.querySelector('.main-img img');
let loader = document.getElementById('load');

let themes = document.querySelector('.themes');
let hiddenThemes = document.querySelectorAll('.theme.d-none');
let themeDiv = document.querySelectorAll('.theme');

let forwardBtn = document.querySelector('.btn-right');
let backwardBtn = document.querySelector('.btn-left');

let intervalDuration = 3000;
let index = 0;
let nthLink = 0;

const images = [
  'https://img.freepik.com/premium-photo/generic-brandless-modern-sport-car_110488-1758.jpg?w=2000',
  'https://imgd.aeplcdn.com/0x0/n/cw/ec/41406/bmw-8-series-right-front-three-quarter8.jpeg',
  'https://media.wired.com/photos/5d09594a62bcb0c9752779d9/125:94/w_1994,h_1500,c_limit/Transpo_G70_TA-518126.jpg',
  'https://www.alfaromeousa.com/content/dam/alfausa/BHP/desktop/AR-BHP-HERO-Desktop.jpg',
  'https://i.ytimg.com/vi/ekgUjyWe1Yc/maxresdefault.jpg',
  'https://cdn.motor1.com/images/mgl/AkkY6L/s3/wooden-mercedes-vision-avtr-concept-toy-car.jpg',
  'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTChUO90WBb1L_8Cv0jDFt5GVtc67ieay3FIg&usqp=CAU'

];

mainImg.src = images[0];



for (let i = 0; i < images.length; i++) {
  const link = images[i];

  let div = document.createElement('div');
  div.classList.add('theme');
  let img = document.createElement('img');
  img.src = link;
  img.style.width = '100%';
  img.style.height = '100%';
  img.setAttribute('index', i);
  div.appendChild(img);

  themes.appendChild(div);



}

let themeImgs = document.querySelectorAll('.theme img');

// animation appearance
const imgScale = [
  { transform: ' scale(0.5)' },
  { transform: 'scale(1)' }
];

const imgTiming = {
  duration: 500,
  iterations: 1,
};
// animation loading
const load = [
  { width: ' 0' },
  { width: '100%' }
];

const loadTiming3s = {
  duration: 3000,
  iterations: 1,
};
const loadTiming9s = {
  duration: 9000,
  iterations: 1,
};
loader.animate(load, loadTiming3s);


// indicator click

themeImgs.forEach(img => {
  img.addEventListener('click', (e) => {

    clearInterval(interval);  // stop sliding

    requestAnimationFrame(() => {
      loader.animate(load, loadTiming9s);
    });
  
    // after 6s start sliding
  
    setTimeout(() => {
      interval = setInterval(() => {
        loader.animate(load, loadTiming3s);
        goForward();
      }, intervalDuration);
  
    }, 6000);


    nthLink = img.getAttribute('index');
    mainImg.src = images[nthLink];
    mainDiv.animate(imgScale, imgTiming);
    for (const child of themes.children) {
      child.classList.remove('active');
    }
    img.parentElement.classList.toggle('active');

    for (let i = 0; i < themes.children.length; i++) {
      const element = themes.children[i];
      if (element == e.target.parentElement) {
        index = i;
      }

    }




  });
});


themes.children[0].classList.add('active');

function goForward() {
  // remove active class

  for (const child of themes.children) {
    child.classList.remove('active');
  }
  index++;
  nthLink++;
  if (nthLink == images.length) {
    nthLink = 0;
  }
  if (index == 4) {
    themes.appendChild(themes.removeChild(themes.children[0]));
    makeVisible();

    themes.children[3].classList.add('active');
    index--;

  }
  else {
    themes.children[index].classList.add('active');
  }
  mainImg.src = images[nthLink];
}

forwardBtn.addEventListener('click', () => {

  clearInterval(interval);  // stop sliding




  loader.animate(load, loadTiming9s);


 

  // after 6s start sliding
  setTimeout(() => {
    interval = setInterval(() => {
      loader.animate(load, loadTiming3s);

      goForward();

    }, intervalDuration);
  }, 6000);



  goForward();

});



backwardBtn.addEventListener('click', (e) => {

  clearInterval(interval);  // stop sliding

  requestAnimationFrame(() => {
    loader.animate(load, loadTiming9s);
  });

  // after 6s start sliding

  setTimeout(() => {
    interval = setInterval(() => {
      loader.animate(load, loadTiming3s);
      goForward();
    }, intervalDuration);

  }, 6000);

  //cleaning active class
  for (const child of themes.children) {
    child.classList.remove('active');
  }


  index--;
  nthLink--;


  if (nthLink == -1) {
    nthLink = images.length - 1;
  }

  if (index == -1) {
    themes.insertBefore(themes.children[themes.children.length - 1], themes.firstChild);
    makeVisible();

    index++;
  }
  if (index == 0) {
    themes.children[0].classList.add('active');
  }
  if (index < 4 && index > 0) {
    themes.children[index].classList.add('active');

  }


  mainImg.src = images[nthLink];




});


// make 4 theme divs visible
function makeVisible() {
  for (let i = 0; i < themes.children.length; i++) {
    if (i < 4) {
      themes.children[i].classList.add('d-block');
      themes.children[i].classList.remove('d-none');
    }
    else {
      themes.children[i].classList.remove('d-block');
      themes.children[i].classList.add('d-none');
    }

  }
}

makeVisible();

var interval = setInterval(() => {
  requestAnimationFrame(() => {

    loader.animate(load, loadTiming3s);
  });
  goForward();
}, intervalDuration);
