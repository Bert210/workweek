import { fromJS } from 'immutable';
import {
  TOGGLE_WEEK_VIEW,
} from './constants';

const initialState = fromJS({
  displayWeekView: true,
});

function titleBarContainerReducer(state = initialState, action) {
  switch(action.type){
    case TOGGLE_WEEK_VIEW:
      return state.set('displayWeekView', !state.get('displayWeekView'));
    default:
      return state;
  }
}

export default titleBarContainerReducer;
