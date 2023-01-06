const initialState = {};

const GET_DETAILS = 'capstone3/details/GET_DETAILS';

// Reducer
export default function categoriesReducer(state = initialState, action = {}) {
  switch (action.type) {
    case GET_DETAILS:
      // return { ...state, action.details};
      return { ...state };
    default:
      return state;
  }
}

// Action Creators
export function getDetailsAction(details) {
  return { type: GET_DETAILS, details };
}
