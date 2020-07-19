import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";

const FETCH_DATA = "FETCH_DATA";
const FETCH_MENTOR_DATA = "FETCH_MENTOR_DATA";
const GET_APP_LINK = "GET_APP_LINK";
const getData = (data) => ({
  type: FETCH_DATA,
  payload: data,
});
const getMentorData = (data) => ({
  type: FETCH_MENTOR_DATA,
  payload: data,
});
const getAppointmentLink = (data) => ({
  type: GET_APP_LINK,
  payload: data,
});
const buddiesAPI = new Request("./data.json");

export const fetchedData = () => async (dispatch) => {
  const res = await fetch(buddiesAPI).then((res) => res.json());
  dispatch(getData(res));
};

export const fetchedMentorData = (id) => async (dispatch) => {
  const res = await fetch(buddiesAPI).then((res) => res.json());

  dispatch(getMentorData(res.buddies[id - 1]));
};
export const getLinkData = (link) => async (dispatch) => {
  dispatch(getAppointmentLink(link));
};

const initalBuddiesState = {
  buddies: [],
  isLoading: false,
  error: null,
};
const initalBuddyState = {
  buddyInfo: {},
};
const initalLink = {
  link: "",
};
const linkReducer = (state = initalLink, action) => {
  switch (action.type) {
    case GET_APP_LINK:
      return { link: action.payload };
    default:
      return state;
  }
};
const buddyReducer = (state = initalBuddyState, action) => {
  switch (action.type) {
    case FETCH_MENTOR_DATA:
      return {
        buddyInfo: { ...action.payload },
      };
    default:
      return state;
  }
};
const buddiesReducer = (state = initalBuddiesState, action) => {
  switch (action.type) {
    case FETCH_DATA:
      const { buddies } = action.payload;
      return {
        ...state,
        buddies: [...buddies],
      };

    default:
      return state;
  }
};
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  combineReducers({
    buddies: buddiesReducer,
    buddy: buddyReducer,
    link: linkReducer,
  }),
  composeEnhancers(applyMiddleware(thunk))
);
export default store;
