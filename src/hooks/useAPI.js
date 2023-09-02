import { useState } from "react";
import { api } from "../utils/APIs/general";

const useApi = () => {
  const [data, setData] = useState(false);
  const [code, setCode] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleCall = async (type, endpoint, body=null, extraHeaders=[]) => {
    try {
      setLoading(true);
      setError(false);

      const { data, code } = await api(type, endpoint, body, extraHeaders);
      setData(data);
      setCode(code);
    } catch (err) {
      setCode(code);
      console.error(`useAPI Error with status code ${code}:\n\t`, err);
      if(code === 401) alert("Wrong username/password");
      else {
        alert("Something went wrong.\nKindly contact support team");
        setError(true);
      }
    } finally {
      setLoading(false);
    }
  }

  return { handleCall, loading, data, error };
};

export default useApi;