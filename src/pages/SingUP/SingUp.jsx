import { Link } from "react-router-dom";
import loginImage from "../../assets/images/login/login.svg";
import { AuthContext } from "../../providers/AuthProviders";
import { useContext } from "react";
import SocialLogin from "../shared/SocialLogin/SocialLogin";
const SingUp = () => {
  const { createUser, updateUser } = useContext(AuthContext);

  const handelSingUP = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const password = form.password.value;
    const name = form.name.value;
    console.log(email, password, name);

    // registration user  start
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);

        // update profile  start

        updateUser(result.user, name)
          .then(() => {
            console.log("profile update");
            console.log(result.user);
          })
          .catch((error) => {
            console.log(error);
            // setRegisterError(error.message);
          });

          form.reset()
        // update End
      })
      .catch((error) => {
        const errorMessage = error.message;
        console.log(errorMessage);
      });

    // registration user  End
  };

  return (
    <div className="hero min-h-screen bg-white">
      <div className="hero-content flex-col justify-between gap-20  lg:flex-row">
        <div className="w-1/2 mr-10">
          <img src={loginImage} alt="" />
        </div>
        <div className="card flex-shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <div className="card-body">
            <h1 className="text-2xl font-bold">SingUP </h1>
            <form onSubmit={handelSingUP}>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Name</span>
                </label>
                <input
                  type="text"
                  required
                  name="name"
                  placeholder="Enter Your Name "
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Email</span>
                </label>
                <input
                  type="email"
                  required
                  name="email"
                  placeholder="Your email"
                  className="input input-bordered"
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text">Confirm Password</span>
                </label>
                <input
                  type="password"
                  required
                  name="password"
                  placeholder="Your password"
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
                  value="SingUP"
                />
              </div>
            </form>

           <SocialLogin></SocialLogin>

            <p className="text-center">
              Already have an account?
              <Link to="/login" className="text-orange-600 text-bold">
                {" "}
                Login{" "}
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingUp;
