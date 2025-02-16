import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Login = () => {
  const { logInWithEmail } = useContext(AuthContext);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInWithEmail(email, password)
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 bg-base-300">
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
              className="input input-md"
            />
            <input
              name="password"
              type="password"
              placeholder="Password"
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
          <div className="flex flex-col gap-2">
            <p className="text-center text-lg font-medium">Or</p>
            <div className="card-actions justify-end">
              <button className="btn btn-accent text-lg w-full">
                Log In With Google
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
