import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useApi from './useApi';
import { LOGIN_EP } from '../utils/url';
import { AuthContext } from '../utils/context';
import { validateLogIn } from '../utils/inputValidation';

const useLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleCall, loading, data, error, code } = useApi();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleLogin = async () => {
    const validate = validateLogIn(username, password)
    if(validate === true) {
      await handleCall("put", LOGIN_EP, { username, password });
      if(code === 201) {
        authContext.authenticate(data.token);
        navigate("/");
      }
    } else alert(validate);
  };

  return { 
    setUsername, setPassword, handleLogin,
    response: { error, data, loading }
   }
}

export default useLogIn;