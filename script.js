// MENU
const openMenu = document.getElementById('menu-mobile');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('nav-mobile');

function openMobileMenu() {
  menu.style.display = 'block';
  openMenu.style.display = 'none';
  closeMenu.style.display = 'block';
}

function closeMobileMenu() {
  menu.style.display = 'none';
  openMenu.style.display = 'block';
  closeMenu.style.display = 'none';
}

openMenu.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);


// FEATURED PLAYERS
const chessPlayers = document.querySelector('.chess-players');

// Players Dynamic data
const featuredPlayers = [
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },

  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/images.jpeg',
  },
];
// variable to hold the injected html players
let playerHTML = '';
// iterate through the projects
featuredPlayers.forEach((player) => {
  playerHTML += `
  <div class="player">
  <div class="player-pic">
   <img src="${player.image}" alt=""/>
   </div>
   <div class="player-details">
   <h5>${player.name}</h5>
   <p class="player-desc">${player.description}</p>
   <hr class="ruler">
   <p class="player-intro">${player.intro}</p>
   </div>
   </div>`;
});
chessPlayers.innerHTML = playerHTML;