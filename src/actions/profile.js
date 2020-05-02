import axios from 'axios';

import {
  GET_PROFILES,
  GET_PROFILE,
  PROFILE_ERROR,
  CLEAR_PROFILE,
  SET_LODAING,
  SORT_PROFILE,
  GET_PROFILE_COUNTRY,
  GET_PROFILE_TITLE,
  GET_PROFILE_AVAILABLITY
} from './types';

// Get all profiles
export const getProfiles = () => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: SET_LODAING });
  try {
    const res = await axios.get('api/jobdescriptions');

    dispatch({
      type: GET_PROFILES,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Global search
export const getProfileBySearch = value => async dispatch => {
  dispatch({ type: CLEAR_PROFILE });
  dispatch({ type: SET_LODAING });
  try {
    const res = await axios.get(`/api/jobdescriptions/search?query=${value}`);

    dispatch({
      type: GET_PROFILE,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Global search
export const getProfileByCountry = value => async dispatch => {
  dispatch({ type: SET_LODAING });
  try {
    dispatch({
      type: GET_PROFILE_TITLE,
      payload: value
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

// Global search
export const getProfileByTitle = value => async dispatch => {
  dispatch({ type: SET_LODAING });
  try {
    dispatch({
      type: GET_PROFILE_COUNTRY,
      payload: value
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};


// Global search
export const getSearchAvailablityFilter = value => async dispatch => {
  dispatch({ type: SET_LODAING });
  try {
    dispatch({
      type: GET_PROFILE_AVAILABLITY,
      payload: value
    });
  } catch (err) {
    dispatch({
      type: PROFILE_ERROR,
      payload: { msg: err.response.statusText, status: err.response.status }
    });
  }
};

export const sortByField = value => async dispatch => {
  dispatch({ type: SORT_PROFILE , sort : value });
};
