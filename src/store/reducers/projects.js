import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

import burgerBuilder from '../../assets/images/projects_ss/burger-builder.png';
import pokedex from '../../assets/images/projects_ss/pokedex.png';
import cuisineFraiche from '../../assets/images/projects_ss/cuisine-fraiche.png';
import tribute from '../../assets/images/projects_ss/tribute.png';
import travelerBlog from '../../assets/images/projects_ss/Traveler-blog.png';
import spaceInv from '../../assets/images/projects_ss/space-invaders.png';
import chekers from '../../assets/images/projects_ss/chekers.png';

const initState = {
  websiteImgs: [
    travelerBlog,
    pokedex,
    burgerBuilder,
    cuisineFraiche,
    tribute
  ],
  gameImgs: [
    spaceInv,
    chekers
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