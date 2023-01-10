const initialState = {};

const GET_DETAILS = 'capstone3/details/GET_DETAILS';

// Reducer
export default function detailsReducer(state = initialState, action = {}) {
  const { details } = action;
  const { category } = action;
  switch (action.type) {
    case GET_DETAILS:
      return { ...state, [category]: details };
    default:
      return state;
  }
}

// Action Creators
export function getDetailsAction(category, details) {
  return { type: GET_DETAILS, category, details };
}
