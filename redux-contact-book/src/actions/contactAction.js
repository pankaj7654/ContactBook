import {CREATE_CONTACT , GET_CONTACT, UPDATE_CONTACT} from '../constant/types';

//actions
//return
export const addContact = (contact) => ({
    type: CREATE_CONTACT,
    payload: contact,
  });



// get a contact
export const getContact = (id) => ({
  type: GET_CONTACT,
  payload: id,
});


//Update a Contact
export const updateContact = (contact) => ({
  type: UPDATE_CONTACT,
  payload: contact,
});