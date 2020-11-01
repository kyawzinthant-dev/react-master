import { combineReducers } from 'redux';
import testReducer from '../../features/sandbox/testReducer';
import eventReducer from '../../features/events/eventReducer';
import modalReducer from '../common/modals/modalReducer';
import authReducer from '../../features/auth/authReducer';
import asynReducer from '../async/asyncReducer';
import profileReducer from '../../features/profiles/profileReducer';

const rootReducer = combineReducers({
  test: testReducer,
  event: eventReducer,
  modals: modalReducer,
  auth: authReducer,
  async: asynReducer,
  profile: profileReducer
})

export default rootReducer;