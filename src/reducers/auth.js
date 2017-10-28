import Immutable from 'immutable';
import { AUTH_REQUEST, AUTH_SUCCESS, AUTH_FAILURE, SHOW_AUTH_POPUP, LOGOUT } from '../actions/auth';

const auth = (state = Immutable.Map(), action) => {
  switch (action.type) {
    case AUTH_REQUEST:
      return state.set('isFetching', true);
    case AUTH_SUCCESS:
      return Immutable.fromJS({ user: action.payload });
    case AUTH_FAILURE:
      return Immutable.Map({ error: action.payload.toString() });
    case SHOW_AUTH_POPUP:
      return state.set('popup', true);
    case LOGOUT:
      return state.remove('user').remove('isFetching');
    default:
      return state;
  }
};

export default auth;
