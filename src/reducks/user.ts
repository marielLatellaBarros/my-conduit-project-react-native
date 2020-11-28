import { Reducer } from 'redux';
import { User, UserProfile } from '../data';

const CREATE_USER = 'conduit/user/CREATE_USER';
const CREATE_USER_SUCCESS = 'conduit/user/CREATE_USER_SUCCESS';
const CREATE_USER_FAIL = 'conduit/user/CREATE_USER_FAIL';

const LOGIN_USER = 'conduit/user/LOGIN_USER';
const LOGIN_USER_SUCCESS = 'conduit/user/LOGIN_USER_SUCCESS';
const LOGIN_USER_FAIL = 'conduit/user/LOGIN_USER_FAIL';

type CreateUserAction = {
  type: typeof CREATE_USER;
  payload: { user: User };
};

type CreateUserActionSuccess = {
  type: typeof CREATE_USER_SUCCESS;
  payload: { data: UserProfile };
};

type CreateUserActionFail = {
  type: typeof CREATE_USER_FAIL;
  payload: { data: any };
};

type LoginUserAction = {
  type: typeof LOGIN_USER;
  payload: { user: User };
};

type LoginUserActionSuccess = {
  type: typeof LOGIN_USER_SUCCESS;
  payload: { data: UserProfile };
};

type LoginUserActionFail = {
  type: typeof LOGIN_USER_FAIL;
  payload: { data: any };
};

type ActionTypes =
  | CreateUserAction
  | CreateUserActionSuccess
  | CreateUserActionFail
  | LoginUserAction
  | LoginUserActionSuccess
  | LoginUserActionFail;

type UserState = {
  user: UserProfile;
  errors: { [key: string]: string[] };
};

const reducer: Reducer<UserState, ActionTypes> = (state = { user: null, errors: null }, action) => {
  switch (action.type) {
    case CREATE_USER: {
      return state;
    }
    case CREATE_USER_SUCCESS: {
      return { ...state, user: action.payload.data };
    }
    case CREATE_USER_FAIL: {
      return { ...state, user: null, errors: action.payload.data };
    }
    case LOGIN_USER: {
      return state;
    }
    case LOGIN_USER_SUCCESS: {
      return { ...state, user: action.payload.data };
    }
    case LOGIN_USER_FAIL: {
      return { ...state, user: null, errors: action.payload.data };
    }
    default:
      return state;
  }
};

export const createUser = (user: { user: User }) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/users`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const body = await response.json();
      if (body.errors) {
        dispatch(createUserFail(body.errors));
        return;
      }
      dispatch(createUserSuccess(body.user));
    } catch (error) {
      dispatch(createUserFail(error));
    }
  };
};

const createUserSuccess = (user: UserProfile) => {
  return {
    type: CREATE_USER_SUCCESS,
    payload: { data: user }
  };
};

const createUserFail = (errors: { [key: string]: string[] }) => {
  return {
    type: CREATE_USER_FAIL,
    payload: { data: errors }
  };
};

export const loginUser = (user: { user: User }) => {
  return async dispatch => {
    try {
      const response = await fetch(`https://conduit.productionready.io/api/users/login`, {
        method: 'POST',
        body: JSON.stringify(user),
        headers: {
          'Content-Type': 'application/json'
        }
      });
      const body = await response.json();
      if (body.errors) {
        dispatch(createUser(user));
        return;
      }
      dispatch(loginUserSuccess(body.user));
    } catch (error) {
      dispatch(loginUserFail(error));
    }
  };
};

const loginUserSuccess = (user: UserProfile) => {
  return {
    type: LOGIN_USER_SUCCESS,
    payload: { data: user }
  };
};

const loginUserFail = (errors: { [key: string]: string[] }) => {
  return {
    type: LOGIN_USER_FAIL,
    payload: { data: errors }
  };
};

export default reducer;
