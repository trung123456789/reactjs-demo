import { SERVER_URL } from "../constants";
import store from '../store';
import { camelizeKeys } from 'humps';

export async function commonCallApi({
  serverUrl = SERVER_URL,
  path,
  method = "POST",
  data,
}) {
  const state = store.getState();
  // const { authedUser } = state.authed;

  let bodyData = {};

  // bodyData.authCd = authedUser.authCd;

  bodyData = { ...bodyData, ...data };

  // set headers
  const headers = new Headers();
  headers.append("Content-Type", "application/json");


  try {
    const response = await fetch(`${serverUrl}/${path}`, {
      method,
      headers,
      body: JSON.stringify(bodyData),
      //credentials: "include",
    });
    const contentType = response.headers.get("content-type");
    if (contentType && contentType.indexOf("application/json") > -1) {
      const jsonRes = await response.json();
      const camlizeJson = camelizeKeys(jsonRes || {});

      if (response.ok) {
        return camlizeJson;
      }

      throw camlizeJson;
    }
    return {};
  } catch (error) {
    console.log(error);

    let messageInfo = {
      message: ["System error!"],
    };

    if (error.statusCd) {
      messageInfo = {
        statusCd: error.statusCd,
        message: error.errMessageList,
      };
    }
    throw messageInfo;
  }
}
