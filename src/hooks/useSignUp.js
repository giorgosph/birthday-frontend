import { useState } from 'react';
// import { FinalValidation } from '../../logic/signupValidation';

const useSignUp = () => {
  const [name, setName]  = useState('');
  const [surname, setSurname]  = useState('');
  const [username, setUsername]  = useState('');
  const [birthday, setBirthday]  = useState('');
  const [password, setPassword] = useState('');
  const [confPassword, setConfPassword] = useState('');
  const [isDisabled, setIsDisabled] = useState([false, 1]);

  const handleSignup = async () => {
    setIsDisabled([true, 0.4]);

    const data = { name, surname, username, birthday, password }
    console.log("SignUp Data:\n", data);

    try {
      // const validate = await FinalValidation(data, password, confPassword);
      // TODO
    } catch (e) {
      console.error(e);
    } finally {
      setIsDisabled([false, 1]);
    }
  };

  return {
    isDisabled, handleSignup,
    set: {
      name: setName, surname: setSurname, 
      username: setUsername, birthday: setBirthday, 
      password: setPassword, confPassword: setConfPassword
    }
  }
}

export default useSignUp;