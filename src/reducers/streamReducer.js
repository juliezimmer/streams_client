import _ from 'lodash';

import { 
   FETCH_STREAM,
   FETCH_STREAMS,
   EDIT_STREAM,
   DELETE_STREAM,
   CREATE_STREAM
} from '../actions/types';

// boilerplate for the reducer
export default (state= {}, action) => {
   switch (action.type){
      case FETCH_STREAMS:
         return { ...state, ..._.mapKeys(action.payload, 'id')};
      case FETCH_STREAM:
        return { ...state, [action.payload.id]: action.payload};
      case CREATE_STREAM: // This also returns a single record.
         return { ...state, [action.payload.id]: action.payload };
      case EDIT_STREAM: // This also returns a single record.
         return { ...state, [action.payload.id]: action.payload };
// in all three cases above, FETCH_STREAM, EDIT_STREAM, and CREATE_STREAM, the API returns a single record, which is then added to the state object.  
      case DELETE_STREAM:
         return _.omit(state, action.payload);
      
        default:
         return state;
   }
}
