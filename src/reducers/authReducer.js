import { SIGN_IN, SIGN_OUT } from '../actions/types';

// state initializer
const INITIAL_STATE = {
   isSignedIn: null,
   userId: null // null indicates that there is no current userId

};

export default (state = INITIAL_STATE,  action) => {
   switch (action.type) {
      case SIGN_IN:
         return { 
            ...state, 
            isSignedIn: true, 
            userId: action.payload 
         }; 
      case SIGN_OUT:
         return { 
            ...state, 
            isSignedIn: false,
            userId: null // clears Goodle userId when user signs out
         };
      default:
      return state;
   }
};