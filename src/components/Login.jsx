import { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import LoginWithGoogle from "./LoginWithGoogle";
import { BiShow } from "react-icons/bi";
import { BiHide } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";

const Login = () => {
  const { logInWithEmail, navigate, path, resetPassword } =
    useContext(AuthContext);
  const [showPass, setShowPass] = useState(false);
  const [forgotPassword, setForgotPassword] = useState(false);

  const handleLogin = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    logInWithEmail(email, password);
    e.target.reset();
    path && navigate(path);
  };

  const passwordToggle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  const passwordReset = () => {
    setForgotPassword(!forgotPassword);
  };

  const getMail = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    resetPassword(email);
    setForgotPassword(!forgotPassword);
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 pb-8 bg-base-300">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">Log In</h1>
        </div>
      </div>
      {!forgotPassword && (
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
              <div className="flex flex-row input input-md">
                <input
                  name="password"
                  type={showPass ? "text" : "password"}
                  placeholder="Password"
                  required
                  className=""
                />
                <i onClick={passwordToggle}>
                  {showPass ? <BiHide /> : <BiShow />}
                </i>
              </div>
              <button
                onClick={passwordReset}
                className="cursor-pointer text-secondary text-start"
              >
                Forgot pasword?
              </button>
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-lg w-full">
                  Log In
                </button>
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
      )}
      {forgotPassword && (
        <div className="card bg-base-100 w-96 max-w-full shadow-sm mx-auto">
          <div className="card-body gap-4 relative">
            <h2 className="card-title">Forgot Password?</h2>
            <form onSubmit={getMail} className="w-full flex flex-col gap-3">
              <input
                name="email"
                type="email"
                placeholder="Input your email address"
                required
                className="input input-md"
              />
              <div className="card-actions justify-end">
                <button className="btn btn-primary text-lg w-full">
                  Get password recovery mail
                </button>
              </div>
            </form>
            <button
              onClick={() => setForgotPassword(!forgotPassword)}
              className="cursor-pointer"
            >
              <IoIosClose className="absolute top-2 right-2 text-4xl" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
