import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  //
  if (loading) {
    return (
      <div>
        <progress className="progress w-56"></progress>
      </div>
    );
  }

  if (user?.email) {
    return children;
  }
  return <Navigate to="/login"> </Navigate>;
};

export default PrivateRoute;
