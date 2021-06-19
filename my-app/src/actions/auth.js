import { commonCallApi } from '../utils/ApiUtils';
import { LOGIN, LOGIN_CHECK } from '../constants/actionTypes/auth';

export function login(loginInfo) {
  return (dispatch) => {
    commonCallApi({
      path: 'login',
      data: loginInfo,
    }).then((camelizeJson) => {
      const { authCd } = camelizeJson;
      dispatch({
        type: LOGIN,
        authCd
      });
    }).catch((error) => {
      const { message } = error;
      dispatch({
        type: LOGIN_CHECK,
        message,
      });
    }
    );
  };
}