import { useState } from 'react';

import useApi from './useApi';
import { SIGNUP_EP } from '../utils/url';
import { validateSignUp } from '../utils/inputValidation';

const useSignUp = () => {
  const [name, setName]  = useState('');
  const [surname, setSurname]  = useState('');
  const [username, setUsername]  = useState('');
  const [birthDate, setBirthDate]  = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const { handleCall, loading, data, error } = useApi();

  const handleSignup = async () => {
    const data = { name, surname, username, birthDate, password }

    const validate = validateSignUp(data, confPassword);
    if(validate === true) await handleCall("post", SIGNUP_EP, data);  
    else alert(validate);
  };

  return {
    handleSignup,
    set: {
      name: setName, surname: setSurname, 
      username: setUsername, birthDate: setBirthDate, 
      password: setPassword, confPassword: setConfPassword
    },
    response: { data, error, loading } 
  }
}

export default useSignUp;