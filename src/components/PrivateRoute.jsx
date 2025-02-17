import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, navigate, setPath, loading } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  if (user) {
    return <>{children}</>;
  }

  if (loading) {
    return (
      <div className="flex w-full h-screen justify-center items-center">
        <span className="loading loading-spinner loading-xl"></span>
      </div>
    );
  } else {
    setPath(path);
    navigate("/login");
  }
};

export default PrivateRoute;
