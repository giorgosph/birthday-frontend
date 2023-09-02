import { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import useApi from './useApi';
import { SIGNUP_EP } from '../utils/url';
import { AuthContext } from '../utils/context';
import { validateSignUp } from '../utils/inputValidation';

const useSignUp = () => {
  const [name, setName]  = useState('');
  const [surname, setSurname]  = useState('');
  const [username, setUsername]  = useState('');
  const [birthDate, setBirthDate]  = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');

  const { handleCall, loading, data, error, code } = useApi();
  const authContext = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSignup = async () => {
    const data = { name, surname, username, birthDate, password }
    console.log("SignUp Data:\n", data); // REMOVE

    const validate = validateSignUp(data, confPassword);
    if(validate === true){
      await handleCall("post", SIGNUP_EP, data);
      if(code === 201) {
        authContext.authenticate(data.token);
        navigate("/");
      } else if(code === 200) alert("Username already exist!");
    } else alert(validate);
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