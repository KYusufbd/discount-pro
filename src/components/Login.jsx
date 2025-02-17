import { useContext } from "react";
import { Link, useNavigate } from "react-router";
import AuthContext from "../contexts/AuthContext";
import LoginWithGoogle from "./LoginWithGoogle";

const Login = () => {
  const { user, logInWithEmail } = useContext(AuthContext);

  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInWithEmail(email, password);
    e.target.reset();
  };

  user && navigate("/");

  return (
    <div className="min-h-screen flex flex-col gap-8 pb-8 bg-base-300">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">Log In</h1>
        </div>
      </div>
      <div className="card bg-base-100 w-96 max-w-full shadow-sm mx-auto">
        <div className="card-body gap-4">
          <h2 className="card-title">Log In Here</h2>
          <form onSubmit={handleLogin} className="w-full flex flex-col gap-3">
            <input
              name="email"
              type="email"
              placeholder="Email"
              required
              className="input input-md"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
              required
              className="input input-md"
            />
            <button className="text-secondary text-start">
              Forgot pasword?
            </button>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg w-full">Log In</button>
              <p className="text-center">
                Don&apos;t have an account?{" "}
                <Link to="/register" className="text-secondary">
                  Register
                </Link>
              </p>
            </div>
          </form>
          <LoginWithGoogle />
        </div>
      </div>
    </div>
  );
};

export default Login;
