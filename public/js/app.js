const startBtn = document.querySelector('.menu-btn');
const popupInfo = document.querySelector('.menu-section');
const exitBtn = document.querySelector('.exit-btn')


startBtn.onclick = () => {
  popupInfo.classList.add('active');
  startBtn.classList.add('active')
}

exitBtn.onclick = () => {
  popupInfo.classList.remove('active');
  startBtn.classList.remove('active')
}




const linkCards = [
  {
    url: './svg/html.svg',
  },
  {
    url: './svg/css.svg',
  },
  {
    url: './svg/javascript.svg',
  },
  {
    url: './svg/react.svg',
  },
  {
    url: './svg/bootstrap.svg',
  },
  {
    url: './svg/tailwind.svg',
  },
  {
    url: './svg/sass.svg',
  },
  {
    url: './svg/github-fill.svg',
  },
  {
    url: './svg/nuxt.svg',
  },
  {
    url: './svg/vuejs.svg',
  },
  {
    url: './svg/next.svg',
  },
  {
    url: './svg/typescript.svg',
  },
];

function cadrAdd({ url }) {


  return `<div>
    <img class="h-14 md:h-20 mx-auto lg:mx-0" src="${url}" alt="svg">
  </div>`;
};

function toBind() {
  const container = document.querySelector('.linksGrid');
  linkCards.forEach(card => {
    const cardHTML = cadrAdd(card);
    container.innerHTML += cardHTML;
  });
};

toBind();



// proect section


const cardData = [
  // 1
  {
    image: './img/4dmind.jpg',
    title: '4d Mind',
    description: 'This is sample project description random things are here in description This is sample project lorem ipsum generator for dummy content',
    link: 'https://4d-dmind-copy.vercel.app/',
  },
  // 2
  {
    image: './img/pi.jpg',
    title: 'Products',
    description: 'Experience a revolutionary approach to trading with our human-centered technologies and investment experts, paving the way for your financial success.',
    link: 'https://stately-sfogliatella-69a7a0.netlify.app/',
  },
  // 3
  {
    image: './img/chamount.jpg',
    title: 'Chamount',
    description: 'Découvrez nos offres de logement et de colocation conçues spécialement pour les étudiants.',
    link: 'https://galdir-guldir.netlify.app/',
  },
  // 3
  {
    image: './img/raindrop.jpg',
    title: 'Raindrop',
    description: 'More than 1000 completed repair and maintenance work. We know exactly what and how to repair as efficiently and profitably as possible for you.',
    link: 'https://rad-raindrop-af0711.netlify.app/',
  },
];

function generateCard(image, title, description, link) {
  return `<div class="card bg-white group rounded-xl overflow-hidden shadow-xl p-4 pb-6"">
    <div class="overflow-hidden border rounded-xl rounded-b-none h-40 md:h-52 -mx-4 -mt-4">
      <img class="w-full h-full object-cover transition duration-300 scale-110 group-hover:scale-125 mb-4" src="${image}" alt="">
    </div>  
    <h3 class="text-brand-green-500 text-2xl font-semibold py-2 mt-3">${title}</h3>
    <p class="md:text-lg line-clamp-3">${description}</p>
    <div class="flex items-center gap-2 transition duration-300 hover:opacity-75 mt-3">
      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M10.2867 7.7133C9.60408 7.031 8.67846 6.64771 7.71334 6.64771C6.74821 6.64771 5.82259 7.031 5.14 7.7133L2.56584 10.2866C1.88324 10.9692 1.49976 11.895 1.49976 12.8604C1.49976 13.8257 1.88324 14.7515 2.56584 15.4341C3.24844 16.1167 4.17424 16.5002 5.13959 16.5002C6.10493 16.5002 7.03074 16.1167 7.71334 15.4341L9 14.1475" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      <path d="M7.71332 10.2867C8.39591 10.969 9.32152 11.3523 10.2867 11.3523C11.2518 11.3523 12.1774 10.969 12.86 10.2867L15.4342 7.71334C16.1168 7.03074 16.5002 6.10493 16.5002 5.13959C16.5002 4.17424 16.1168 3.24844 15.4342 2.56584C14.7516 1.88324 13.8257 1.49976 12.8604 1.49976C11.8951 1.49976 10.9693 1.88324 10.2867 2.56584L8.99998 3.8525" stroke="black" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <a class="block text-xl font-medium underline" href="${link}">Live Preview</a>
    </div>
  </div>`;
}

function renderCards() {
  const container = document.querySelector('.procet-section');
  container.innerHTML = '';
  cardData.forEach(({ image, title, description, link}) => {
    const cardHTML = generateCard(image, title, description, link);
    container.innerHTML += cardHTML;
  });
}


window.addEventListener('DOMContentLoaded', renderCards);