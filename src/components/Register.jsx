import { useContext } from "react";
import { Link } from "react-router";
import AuthContext from "../contexts/AuthContext";

const Register = () => {
  const { createUser } = useContext(AuthContext);

  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password);

    createUser(email, password)?.then(userCredential => {
      console.log(userCredential);
    }).catch(error => {
      console.log(error);
    })
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
              className="input input-md"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="input input-md"
            />
            <input
              type="password"
              name="password"
              placeholder="Password"
              className="input input-md"
            />
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
        </div>
      </div>
    </div>
  );
};

export default Register;
