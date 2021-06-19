import * as actionTypes from '../constants/actionTypes/auth';

const  initialState = {
  logined: false,
  message: '',
};

export default function auth(state = initialState, action) {
  console.log("action: ", action);
    switch (action.type) {
        case actionTypes.LOGIN:
          return {
            ...state,
            ...{
              logined: action.authCd !== "",
            },
          };
        case actionTypes.LOGIN_CHECK:
          return {
            ...state,
            ...{
              message: action.message,
            },
        };
        case actionTypes.LOGOUT:
          return state - 1;
        default:
          return state;
    }
}