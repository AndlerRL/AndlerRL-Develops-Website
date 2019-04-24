import * as actionTypes from './actionTypes';
import Axios from '../../axios-contact';
import { createHash } from 'crypto';

export const contactRequestSuccess = (id, contactData) => {
  return {
    type: actionTypes.CONTACT_REQUEST_SUCCESS,
    contactId: id,
    contactData: contactData
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
    Axios.post(null , contactData)
      .then(res => {
        dispatch(contactRequestSuccess(createHash('sha1').update(res.data.name).digest('hex'), contactData));
      })
      .catch(err => {
        dispatch(contactRequestFail(err));
      })
  }
}