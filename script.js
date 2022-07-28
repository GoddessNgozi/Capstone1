
const hamburger = document.getElementById('hamburger');
const closeMenu = document.getElementById('close');
const menu = document.getElementById('mobile-menu');

function openMobileMenu() {
  menu.style.visibility = 'visible';
  hamburger.style.visibility = 'hidden';
  closeMenu.style.visibility = 'visible';
}

function closeMobileMenu() {
  menu.style.visibility = 'hidden';
  hamburger.style.visibility = 'visible';
  closeMenu.style.visibility = 'hidden';
}

hamburger.addEventListener('click', openMobileMenu);
closeMenu.addEventListener('click', closeMobileMenu);






// FEATURED PLAYERS
const chessPlayers = document.querySelector('.chess-players');

// Players Dynamic data
const featuredPlayers = [
  {
    name: 'Fabiano Caruana',
    intro:
      'Fabiano Luigi Caruana is an Italian-American chess player. A chess prodigy, Caruana became a grandmaster at the age of 14 years, 11 months, and 20 days—the youngest grandmaster in the history of both Italy and the United States at the time.',
    description:
      'American grandmaster and one of the best chess players in the world. Learn more about his chess achievements.',
    image: 'images/kenny.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Viswanathan "Vishy" Anand is an Indian chess grandmaster and a five-time world chess champion. He became the first grandmaster from India in 1988, and is one of the few players to have surpassed an Elo rating of 2800, a feat he first achieved in 2006.',
    description:
      'Indian chess master who won the Fédération Internationale des Échecs',
    image: 'images/440px-Viswanathan_Anand_(2016)_(cropped).jpeg',
  },

  {
    name: 'Magnus Carlsen',
    intro:
      'Sven Magnus Øen Carlsen is a Norwegian chess grandmaster who is the reigning five-time World Chess Champion. He is also a three-time World Rapid Chess Champion and five-time World Blitz Chess',
    description:
      '5-time World Chess Champion & highest ranked chess player in the world.',
    image: 'images/images.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/Sergey_Karjakin.jpeg',
  },
  {
    name: 'Yochai Benkler',
    intro:
      'Benkler studies commons based peer production and published his serminal book The Wealth of Networks in 2006',
    description:
      'Benkman professor of Enterpreneurial Studies at Harvard Law School.',
    image: 'images/kenny.jpeg',
  },
  {
    name: 'Viswanathan Anand',
    intro:
      'Viswanathan "Vishy" Anand is an Indian chess grandmaster and a five-time world chess champion. He became the first grandmaster from India in 1988, and is one of the few players to have surpassed an Elo rating of 2800, a feat he first achieved in 2006.',
    description:
      'Indian chess master who won the Fédération Internationale des Échecs',
    image: 'images/440px-Viswanathan_Anand_(2016)_(cropped).jpeg',
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