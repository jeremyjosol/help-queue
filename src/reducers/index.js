import formVisibleReducer from './form-visible-reducer';
import ticketListReducer from './ticket-list-reducer';
import { combineReducers } from 'redux';
// import { legacy_createStore } from 'redux';

// const store = legacy_createStore(rootReducer);

const rootReducer = combineReducers({
  formVisibleOnPage: formVisibleReducer,
  mainTicketList: ticketListReducer
});

export default rootReducer;