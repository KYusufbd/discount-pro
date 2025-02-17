import { useContext } from "react";
import AuthContext from "../contexts/AuthContext";
import { useLocation } from "react-router";

// eslint-disable-next-line react/prop-types
const PrivateRoute = ({ children }) => {
  const { user, navigate, setPath } = useContext(AuthContext);
  const location = useLocation();
  const path = location.pathname;

  if (user) {
    return <>{children}</>;
  }
  setPath(path);
  navigate("/login");
};

export default PrivateRoute;
