import * as actionTypes from './actionTypes';
import Axios from '../../axios-contact';

export const contactRequestSuccess = contactData => {
  return {
    type: actionTypes.CONTACT_REQUEST_SUCCESS,
    contactData: contactData
  }
}
export const contactCompleteClose = close => {
  return {
    type: actionTypes.CONTACT_REQUEST_CLOSE,
    contactComplete: close
  }
}
export const contactRequestFail = error => {
  return {
    type: actionTypes.CONTACT_REQUEST_FAIL,
    error: error
  }
}
export const contactRequestStart = () => {
  return {
    type: actionTypes.CONTACT_REQUEST_START
  }
}
export const contactRequest = contactData => {
  return dispatch => {
    dispatch(contactRequestStart());
    Axios.post('https://formcarry.com/s/cekGFuhSwgT', {
      name: contactData.contactData.name,
      email: contactData.contactData.email,
      bodyText: contactData.contactData.bodyText
    })
      .then(res => {
        console.log(res, contactData.contactData);
        dispatch(contactRequestSuccess(contactData.contactData));
      })
      .catch(err => {
        dispatch(contactRequestFail(err));
      })
  }
}