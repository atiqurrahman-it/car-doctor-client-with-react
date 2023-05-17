import { Link, useLocation, useNavigate } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { useContext } from "react";
import { AuthContext } from "../../providers/AuthProviders";
import SocialLogin from "../shared/SocialLogin/SocialLogin";

const Login = () => {
  const {logInUser}=useContext(AuthContext)

  // 
  let navigate = useNavigate();
  let location = useLocation();

  let from = location.state?.from?.pathname || "/";

  const handelLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    // user sing-in 
    logInUser(email,password)
    .then(result=>{
      const user = result.user;
      console.log("login user",user)
      form.reset()
      navigate(from, { replace: true });


    })
    .catch((error) => {
      const errorMessage = error.message;
      console.log(errorMessage)
    });

  };
  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col justify-between gap-20  lg:flex-row">
        <div className="w-1/2 mr-10">
          <img src={loginImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl font-bold">Login </h1>
            <form onSubmit={handelLogin}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="password"
                  className="input input-bordered"
                />
                <label className="label">
                  <a href="#" className="label-text-alt link link-hover">
                    Forgot password?
                  </a>
                </label>
              </div>
              <div className="form-control mt-6">
                <input
                  className="btn btn-primary"
                  type="submit"
                  value="Login"
                />
              </div>
            </form>
           
            {/* socialLogin  */}
            <SocialLogin></SocialLogin>

            <p className="text-center">
              New to car doctors
              <Link to="/sing-up" className="text-orange-600 text-bold"> SingUp </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
