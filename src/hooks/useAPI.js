import { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import { api } from "../utils/APIs/general";
import { AuthContext } from "../utils/context";

const useApi = () => {
  const [data, setData] = useState(false);
  const [code, setCode] = useState(false);
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);

  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    if(!loading && error) {
      if(code === 401) alert("Wrong username/password");
      else alert("Something went wrong.\nKindly contact support team");
      setError(false);
    } else if(!loading) {
      if(code === 200 && data.success === false) alert(data.message);
      if(code === 201) {
        authContext.authenticate(data.token);
        navigate("/");
      }
    }
  }, [loading, code, error]);

  const handleCall = async (type, endpoint, body=null, extraHeaders=[]) => {
    try {
      setLoading(true);
      setError(false);

      const { data, code } = await api(type, endpoint, body, extraHeaders);
      data?.hasBody === false ? alert(data.message) : setData(data);
      setCode(code);
    } catch (err) {
      setCode(err.response.status);
      setError(true);
      console.error(`useAPI Error with status code ${err.response.status}:\n`, err);
    } finally {
      setLoading(false);
    }
  }

  return { handleCall, loading, data, error };
};

export default useApi;