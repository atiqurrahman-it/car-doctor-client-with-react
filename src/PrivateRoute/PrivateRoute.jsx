import { useContext } from "react";
import { AuthContext } from "../providers/AuthProviders";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);

  let location = useLocation();
  
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
  // state er maddome je location jete giye login page jai tar patha ta diyedilam
  return <Navigate state={{from:location}} to="/login"> </Navigate>;
};

export default PrivateRoute;
