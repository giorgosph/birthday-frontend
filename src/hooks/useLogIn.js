import { useState } from 'react';

import useApi from './useApi';
import { LOGIN_EP } from '../utils/url';
import { validateLogIn } from '../utils/inputValidation';

const useLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const { handleCall, loading, data, error } = useApi();

  const handleLogin = async () => {
    const validate = validateLogIn(username, password);
    if(validate === true) await handleCall("put", LOGIN_EP, { username, password });  
    else alert(validate);
  };

  return { 
    setUsername, setPassword, handleLogin,
    response: { error, data, loading }
   }
}

export default useLogIn;