import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_FAIL,
  USER_LOGIN_REQUEST,
  USER_LOGIN_RESPONSE,
  USER_LOGIN_FAIL,
} from "../constants/userConstants";

export const userRegisterReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_REGISTER_REQUEST:
      return { loading: true, success: false };
    case USER_REGISTER_RESPONSE:
      return { loading: false, user: action.payload };
    case USER_REGISTER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case USER_LOGIN_REQUEST:
      return { loading: true, success: false };
    case USER_LOGIN_RESPONSE:
      return { loading: false, success: true };
    case USER_LOGIN_FAIL:
      return { loading: false, success: false, error: action.payload };
    default:
      return state;
  }
};
