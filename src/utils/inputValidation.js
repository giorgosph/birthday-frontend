import { 
  ReSpecialChars, ReSpecialCharsUsername, ReWhiteSpaces, ReSpecialCharsPass
} from "./regex";

export const validateSignUp = (data, confPassword) => {
  const { name, surname, username, password } = data;
  let validation;

  validation = validateFullName(name, surname);
  if(validation === true) validation = validateUsername(username);
  if(validation === true) validation = validatePassword(password);
  if(validation === true) validation = matchPasswords(password, confPassword)

  console.log("Sign Up data validation result:\n\t", validation); 
  return validation;
}

export const validateLogIn = (username, password) => {
  let validation;

  if(validation === true) validation = validateUsername(username);
  if(validation === true) validation = validatePassword(password);

  console.log("Log In data validation result:\n\t", validation);
  return validation;
}

/* -------------------------------------------------------------- */
/* ---------------------- Helper Functions ---------------------- */
/* -------------------------------------------------------------- */

const validateUsername = (username) => {
  if(!username) {
    if(username.length > 18 || username.length < 3 || ReSpecialCharsUsername.test(username))
      return "Wrong email/username or password";
  } else return "Username is a required field!";
  return true;
} 

const validateFullName = (name, surname) => {
  if(name && surname) {
    if(ReSpecialChars.test(name) || ReSpecialChars.test(surname))
      return "No special characters are allowed in your Name or Surname!";
  } else return "Your Name and Surname are required"; 
  return true;
}

const validatePassword = (password) => {
  if(password) {
    if(ReWhiteSpaces.test(password))
      return "No spaces are allowed in your password"; 
    if(ReSpecialCharsPass.test(password))
      return "Some of the special characters of you or password are rejected"; 
    if(password.length > 20 || password.length < 8)
      return "Password must be between 8-20 characters long";
  } else return "Password is a required field";
  return true;
}

const matchPasswords = (password, confPassword) => {
  if(password !== confPassword) return "Passwords do not match";
  return true;
}