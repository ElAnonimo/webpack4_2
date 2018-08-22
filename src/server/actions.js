import fetch from 'cross-fetch';

export const TEST_ACTION = 'TEST_ACTION';
export const FETCH_SUCCESS = 'FETCH_SUCCESS';
export const FETCH_FAILURE = 'FETCH_FAILURE';

export const testAction = (text) => ({
  type: TEST_ACTION,
  text
});

export const fetchArticle = (site, slug) => (dispatch) => {
  if (!site || !slug) return;

  fetch(`http://${site}.com:8080/api/articles/${slug}`)
    .then((res) => res.json())
    .then((data) => dispatch(fetchSuccess(data)))
    .catch((err) => dispatch(fetchFailure(err)));
};

export const fetchSuccess = (response) => {
  return {
    type: FETCH_SUCCESS,
    payload: response
  };
};

export const fetchFailure = (error) => {
  return {
    type: FETCH_FAILURE,
    payload: error
  };
};
