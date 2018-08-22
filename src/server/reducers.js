import { FETCH_SUCCESS, FETCH_FAILURE } from './actions';

export const testReducer = (state = {}, action) => {
  switch (action.type) {
    case 'TEST_ACTION':
      return {
        ...state,
        text: action.text
      };
    default:
      return state;
  }
};

export const fetchArticle = (state = {}, action) => {
  switch (action.type) {
    case FETCH_SUCCESS:
      return {
        ...state,
        content: action.payload
      };
    case FETCH_FAILURE:
      return {
        ...state,
        error: action.payload
      };
    default:
      return state;
  }
};
