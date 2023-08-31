import { Link } from "react-router-dom";

function HomeRoute() {
  return (
    <>
      <h1>Welcome to the Birthday Celebrating Web App</h1>
      <p>Log in or create a new account to start celebrating with us</p>
      <Link to={"/auth"}><button>Log in/Sign up</button></Link>
    </>
  );
}

export default HomeRoute;
