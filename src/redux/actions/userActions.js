import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc } from "firebase/firestore";

import { auth, db } from "../../firebaseConfig";
import {
  USER_REGISTER_REQUEST,
  USER_REGISTER_RESPONSE,
  USER_REGISTER_FAIL,
} from "../constants/userConstants";

export const registerUser = (userData) => async (dispatch, getState) => {
  try {
    dispatch({ type: USER_REGISTER_REQUEST });

    // Create a user with email & password then add displayName
    const { user } = await createUserWithEmailAndPassword(
      auth,
      userData.email,
      userData.password
    );
    user.displayName = userData.name;

    dispatch({ type: USER_REGISTER_RESPONSE, payload: user });
  } catch (e) {
    dispatch({
      type: USER_REGISTER_FAIL,
      payload: e.code,
    });
  }
};
