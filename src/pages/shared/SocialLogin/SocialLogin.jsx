import { useContext } from "react";
import { AuthContext } from "../../../providers/AuthProviders";
import { useLocation, useNavigate } from "react-router-dom";

const SocialLogin = () => {
  const { logInWithGoogle } = useContext(AuthContext);
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handelGoogleLogin = () => {
    // social login
    logInWithGoogle()
    .then(result=>{
        const loggedUser=result.user;
        console.log(loggedUser)

        navigate(from, { replace: true });
    })
    .catch(error=>console.log(error))
  };

  return (
    <div>
      <div className="divider">OR</div>
      <div className="text-center">
        <button
          onClick={handelGoogleLogin}
          className="btn btn-circle btn-outline"
        >
          G
        </button>
      </div>
    </div>
  );
};

export default SocialLogin;
