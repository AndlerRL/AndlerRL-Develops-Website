import { updateObject } from '../../shared/utility';
import * as actionTypes from '../actions/actionTypes';

const initState = {
  isLoading: false,
  contactComplete: false,
  contacts: []
};

const failure = (state, action) => {
  return updateObject(state, {
    isLoading: false,
    contactComplete: false
  })
};
const started = (state, action) => {
  return updateObject(state, {
    isLoading: true
  })
};
const contactRequestSuccess = (state, action) => {
  const newContact = updateObject(action.contactData, {
    id: action.contactId    
  })
  return updateObject(state, {
    isLoading: false,
    contactComplete: true,
    contacts: state.contacts.concat(newContact)
  })
};

const contactReducer = (state = initState, action) => {
  switch (action.type) {
    case actionTypes.CONTACT_REQUEST_START:
      return started(state, action);
    case actionTypes.CONTACT_REQUEST_SUCCESS:
      return contactRequestSuccess(state, action);
    case actionTypes.CONTACT_REQUEST_FAIL:
      return failure(state, action);
    default:
      return state;
  }
}

export default contactReducer;