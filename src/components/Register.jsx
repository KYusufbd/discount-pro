import { useContext, useState } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";
import LoginWithGoogle from "./LoginWithGoogle";
import { isStrongPassword } from "validator";
import { BiHide, BiShow } from "react-icons/bi";

const Register = () => {
  const { createUser } = useContext(AuthContext);
  const [warning, setWarning] = useState(false);
  const [showPass, setShowPass] = useState(false);

  const isPasswordValid = (pass) => {
    return isStrongPassword(pass, {
      minLength: 6,
      minNumbers: 0,
      minSymbols: 0,
      minLowercase: 1,
      minUppercase: 1,
    });
  };

  const handleRegister = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    if (isPasswordValid(password)) {
      createUser(email, password);
      e.target.reset();
    } else {
      setWarning(true);
    }
  };

  const passwordToggle = (e) => {
    e.preventDefault();
    setShowPass(!showPass);
  };

  return (
    <div className="min-h-screen flex flex-col gap-8 bg-base-300">
      <div className="w-full bg-primary text-primary-content py-4">
        <div className="section flex flex-row justify-between">
          <h1 className="text-start font-bold text-3xl">Create Account</h1>
        </div>
      </div>
      <div className="card bg-base-100 w-96 max-w-full shadow-sm mx-auto">
        <div className="card-body gap-4">
          <h2 className="card-title">Create An Account</h2>
          <form
            onSubmit={handleRegister}
            className="w-full flex flex-col gap-3"
          >
            <input
              type="text"
              name="name"
              placeholder="Name"
              required
              className="input input-md"
            />
            <input
              type="email"
              name="email"
              required
              placeholder="Email"
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
            <p className={`text-warning ${warning || "hidden"}`}>
              Warning: Password must be at least 6 characters long and include
              at least one uppercase and one lowercase letter.
            </p>
            <div className="card-actions justify-end">
              <button className="btn btn-primary text-lg w-full">
                Register
              </button>
              <p className="text-center">
                Already have an account?{" "}
                <Link to="/login" className="text-secondary">
                  Log In
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

export default Register;
