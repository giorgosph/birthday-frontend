import { useState } from 'react';
// import { TryLogin } from '../../logic/loginValidation';
import { useNavigate } from 'react-router-dom';

const useLogIn = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState([false, 1]);
  const navigate = useNavigate();

  const handleLogin = async () => {
    setIsDisabled([true, 0.4]);

    try {
      // const validate = await TryLogin(username, password);
      // if (validate === true) {
        navigate('/'); 
      // } else {
        // Wrong Username/Password
      // }
    } catch (e) {
      console.error(e);
    } finally {
      setIsDisabled([false, 1]);
    }
  };

  return { isDisabled, setUsername, setPassword, handleLogin }
}

export default useLogIn;