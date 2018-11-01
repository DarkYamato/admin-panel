import { REQUESTED_USER, REQUESTED_USER_FAILED, REQUESTED_USER_SUCCEEDED } from '../actions';

const initialState = {
  users: [],
  loading: false,
  error: false,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case REQUESTED_USER:
      return { ...state, loading: true, error: false };
    case REQUESTED_USER_SUCCEEDED:
      return { ...state, loading: false, users: action.users };
    case REQUESTED_USER_FAILED:
      return {
        ...state, loading: false, users: [], error: action.error,
      };
    default:
      return state;
  }
}
