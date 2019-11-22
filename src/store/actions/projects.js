import * as actionTypes from './actionTypes';

export const websiteItems = image => {
  return {
    type: actionTypes.WEBSITES_ITEMS,
    img: image
  }
}

export const gamesItems = image => {
  return {
    type: actionTypes.GAMES_ITEMS,
    img: image
  }
}