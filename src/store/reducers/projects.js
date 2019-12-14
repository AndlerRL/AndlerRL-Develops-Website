import { updateObject } from 'shared/utility';
import * as actionTypes from '../actions/actionTypes';

import shopaholic from 'assets/images/projects_ss/shopaholic.jpg';
import sleepland from 'assets/images/projects_ss/sleepland.jpg';
import clicMed from 'assets/images/projects_ss/clicmedicamentos.jpg';
import burgerBuilder from 'assets/images/projects_ss/leburgerbuilder.jpg';
import pokedex from 'assets/images/projects_ss/pokedex.jpg';
import cuisineFraiche from 'assets/images/projects_ss/cuisine-fraiche.png';
import tribute from 'assets/images/projects_ss/tribute.png';
import travelerBlog from 'assets/images/projects_ss/Traveler-blog.png';
import spaceInv from 'assets/images/projects_ss/space-invaders.png';
import chekers from 'assets/images/projects_ss/chekers.png';
import snakeClassic from 'assets/images/projects_ss/snake-classic.png';

const initState = {
  websites: [
    {
      title: 'Shopaholic',
      url: 'https://shopaholic-react.web.app/',
      description: `Shopaholic is an e-commerce website where you can purchase shirts of different categories and departments:\n\n- Customers can register to the site and place orders.\n- Orders can be followed by payment/checkout procedure.\n- You can see a variety of products (t-shirts) among the website.`,
      img: shopaholic,
      techs: ['React.js', 'RESTfull API', 'Firebase', 'MySQL Server', 'Redux-Saga', 'Redux-Thunk', 'CSS-Modules', 'CSS-Animations', 'Stripe', 'Javascript', 'ES8'],
    },
    {
      title: 'Sleepland',
      url: 'https://sleepland.netlify.com/',
      description: `Sleepland is an existent local business who wanted to adapt to the new business model, online customers:\n\n- Customers can see the offered products that Sleepland has on their physical stores.\n- Customers may know where are located through maps within the website.`,
      img: sleepland,
      techs: ['Gatsby.js', 'GraphQL API', 'Javascript', 'ES8', 'SEO', 'Styled Components']
    },
    {
      title: 'ClicMedicamentos',
      url: 'https://farmacia.netlify.com/',
      description: `Clicmedicamentos website it's a e-commerce site where client wanted to reach:\n\n- Online audience whom are able to order drugs through their website.\n- Clients and Employees may follow the orders through a map within the website and control delivery live.\n- Reach higher earnings with the addition of this website.`,
      img: clicMed,
      techs: ['Gatsby.js', 'Redux', 'Redux-Thunk', 'Node.js', 'GraphQL API', 'RESTfull API', 'Sanity', 'AXIOS', 'Styled Components', 'SEO', 'Javascript', 'ES8', 'React-Animations', 'Material Design']
    },
    {
      title: 'Pokédex WebApp',
      url: 'https://pokedex-lore.netlify.com/',
      description: `Pokédex app is a project that takes advantage of the Pokémon API, using AXIOS and React.js.\n\nIn this project, you can lore the Pokémon's 1st generation, 151 to be exact and you can click on them and see the Pokédex and their info.`,
      img: pokedex,
      techs: ['Javascript', 'ES6', 'React.js', 'CSS-Modules', 'Webpack', 'AXIOS', 'RESTfull API', 'CSS3-Animations']
    },
    {
      title: 'Le Burger Builder',
      url: 'https://react-burger-builder-faf38.web.app/',
      description: `Burger Builder is a full-stack javascript project where one can order a burger online. Has a home/description, process and login with storage in firebase and also an order page where you can see all the orders that a user made with his/her profile.`,
      img: burgerBuilder,
      techs: ['Material Design', 'Redux-Saga', 'Redux-Thunk', 'Javascript', 'ES6', 'React.js', 'AXIOS', 'Firebase', 'Webpack', 'CSS-Modules', 'REST API']
    },
    {
      title: 'Cuisine Fraîche Blog',
      url: 'https://www.behance.net/gallery/79416581/Cuisine-Frache-Blog',
      description: `Cuisine Fraîche it's a blog that simplify the use of Foundation 6. It has sections from header, navigation, search bar to ads aside, recipes.\n\nAll recipes where took from the internet, and took 2 from my favorites ones.`,
      img: cuisineFraiche,
      techs: ['Zurb Foundation', 'HTML5', 'CSS3']
    },
    {
      title: 'Tribute, Music is Life Blog',
      url: 'https://www.behance.net/gallery/79411443/Tribute-Blog',
      description: `This Blog simplify the use of Bootstrap with CSS3/HTML5. As it seems, has every section from search query, ads section to navigation and news asides.\n\nAll images where took from the internet and I selected some bands/interpretes that I like to hear.`,
      img: tribute,
      techs: ['Material Design', 'HTML5', 'CSS3', 'Javascript']
    },
    {
      title: 'Traveler Blog',
      url: 'https://www.behance.net/gallery/79421171/Trip-in-Land-Blog',
      description: `Trip in Land is a blog that simplify the use of Material UI design with MaterializeCSS.\n\nThis blog has many sections: Header, main & discover places (Header Imgs), author's biography w/post and an area for ads.\n\nPhotos were took on the internet and some photos are from Roatan, Honduras.`,
      img: travelerBlog,
      techs: ['Bootstrap', 'CSS3', 'HTML5']
    }
  ],
  games: [
    spaceInv,
    chekers,
    snakeClassic
  ]
};

const websiteImgs = (state, action) => {
  return updateObject(state, {
    websiteImgs: action.img
  })
}

const gameImgs = (state, action) => {
  return updateObject(state, {
    gameImgs: action.img
  })
}

const projectsReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.WEBSITES_ITEMS:
      return websiteImgs(state, action);
    case actionTypes.GAMES_ITEMS:
      return gameImgs(state, action);
    default:
      return state;
  }
}

export default projectsReducer;