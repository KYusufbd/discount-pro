import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";

const LoginWithGoogle = () => {
  const { logInWithGoogle } = useContext(AuthContext);


  return (
    <div className="flex flex-col gap-2">
      <p className="text-center text-lg font-medium">Or</p>
      <div className="card-actions justify-end">
        <button
          onClick={logInWithGoogle}
          className="btn btn-accent text-lg w-full"
        >
          Log In With Google
        </button>
      </div>
    </div>
  );
};

export default LoginWithGoogle;
