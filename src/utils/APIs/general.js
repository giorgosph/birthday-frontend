import axios from "axios";
import { BASE_URL } from "../url";

/**
 * @warning Use try/catch every time you use api()
 * @param type -> get, put, post, etc.
 */
export const api = async (type, endpoint, data=null, extraHeaders=[]) => {
  const options = {
    url: `${BASE_URL}${endpoint}`,
    method: type,
    data: data,
    headers: {
      ...extraHeaders,
      Accept: "application/json",
    }
  };

  console.log(`Sending request to ${endpoint}`);
  const response = await axios(options);
  return { data: response?.data, code: response?.status, response };
}