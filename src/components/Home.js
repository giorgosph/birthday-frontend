import { Link } from "react-router-dom";

function Home() {
  return (
    <>
      <p>Log in or create a new account to start celebrating with us</p>
      <Link to={"/auth"}><button>Log in/Sign up</button></Link>
    </>
  );
}

export default Home;
