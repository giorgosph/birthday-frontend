import { 
  ReSpecialChars, ReSpecialCharsUsername, ReWhiteSpaces, ReSpecialCharsPass, ReDate
} from "./regex";

export const validateSignUp = (data, confPassword) => {
  const { name, surname, username, birthDate, password } = data;
  let validation = true;

  if(validation === true) validation = validateFullName(name, surname);
  if(validation === true) validation = validateUsernameSignUp(username);
  if(validation === true) validation = validateBirthDate(birthDate);
  if(validation === true) validation = validatePassword(password);
  if(validation === true) validation = matchPasswords(password, confPassword)

  console.log("Sign Up data validation result:\n\t", validation); 
  return validation;
}

export const validateLogIn = (username, password) => {
  let validation = true;

  if(validation === true) validation = validateUsername(username);
  if(validation === true) validation = validatePassword(password);

  console.log("Log In data validation result:\n\t", validation);
  return validation;
}

/* -------------------------------------------------------------- */
/* ---------------------- Helper Functions ---------------------- */
/* -------------------------------------------------------------- */

const validateUsername = (username) => {
  if(username) {
    if(username.length > 18 || username.length < 3 || ReSpecialCharsUsername.test(username))
      return "Wrong email/username or password";
  } else return "Username is a required field!";
  return true;
} 

const validateUsernameSignUp = (username) => {
  if(username) {
    if(username.length > 18 || username.length < 3)
      return "Username must be between 3 to 18 characters";
    if(ReSpecialCharsUsername.test(username))
      return "Username must contain only dot (.), underscore (_), letters and numbers";
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

const validateBirthDate = (birthDate) => {
  if(birthDate) {
    if(!ReDate.test(birthDate))
      return "Please enter a valid date";
  } else return "Date of birth is a required field!";
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