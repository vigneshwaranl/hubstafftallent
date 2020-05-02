import {
  PROFILE_ERROR,
  CLEAR_PROFILE,
  GET_PROFILE,
  SET_LODAING,
  SORT_PROFILE,
  GET_PROFILES,
  GET_PROFILE_COUNTRY,
  GET_PROFILE_TITLE,
  GET_PROFILE_AVAILABLITY,
} from "../actions/types";

const initialState = {
  profiles: [],
  loading: true,
  error: {},
  clearAll : false
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case SET_LODAING:
      return {
        ...state,
        loading: true,
      };
    case GET_PROFILE_AVAILABLITY:
      return {
        ...state,
        profiles: state.profiles.filter(
          (item) =>
            item.jobType.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ),
        loading: false,
      };
    case GET_PROFILE_COUNTRY:
      return {
        ...state,
        profiles: state.profiles.filter(
          (item) =>
            item.title.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ),
        loading: false,
      };
    case GET_PROFILE_TITLE:
      return {
        ...state,
        profiles: state.profiles.filter(
          (item) =>
            item.location.toLowerCase().indexOf(payload.toLowerCase()) !== -1
        ),
        loading: false,
      };
    case GET_PROFILE:
      return {
        profiles: payload,
        loading: false,
      };
    case GET_PROFILES:
      return {
        ...state,
        profiles: payload,
        loading: false,
      };
    case PROFILE_ERROR:
      return {
        ...state,
        error: payload,
        loading: false,
      };
    case CLEAR_PROFILE:
      return {
        ...state,
        profiles: [],
        clearAll: !state.clearAll
      };
    case SORT_PROFILE:
      return {
        ...state,
        profiles: state.profiles.sort(
          (a, b) => parseFloat(a.salaryMin) - parseFloat(b.salaryMin)
        ),
      };
    default:
      return state;
  }
}
