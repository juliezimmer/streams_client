import streams from '../apis/streams';
import { SIGN_IN, SIGN_OUT  } from './types';

export const signIn = (userId) => {
   return {
      type: SIGN_IN,
      payload: userId 
   };
};

export const signOut = () => {
   return {
      type: SIGN_OUT
   };
};

// this is called with the values entered in the redux form in src/components/StreamCreate.js
export const createStream = formValues => async dispatch => {

}


