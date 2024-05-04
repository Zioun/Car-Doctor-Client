import React, { useContext } from "react";
import loginImg from "../../../src/assets/images/login/login.svg"
import { AuthContext } from "../../Providers/AuthProvider";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const Login = () => {
  const {login} = useContext(AuthContext)
  const location = useLocation();
  const navigate = useNavigate();
    const handleLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;
        console.log(email,password)

        login(email, password)
        .then(result => {
            const loggedInUser = result.user;
            console.log(loggedInUser);
            const user = {email};
            //get access token
            axios.post("http://localhost:5000/jwt", user, {withCredentials: true})
            .then(res => {
              console.log(res.data);
              if(res.data.success){
                navigate(location?.state ? location?.state : '/')
              }
            })

        })
        .catch(error => console.log(error))

    }
  return (
    <div className="hero py-20">
      <div className="hero-content flex-col gap-40 lg:flex-row">
        <div className="text-center lg:text-left">
          <img src={loginImg} alt="" />
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100 border">
          <form onSubmit={handleLogin} className="card-body">
          <h1 className="text-3xl font-bold text-center">Login</h1>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Email</span>
              </label>
              <input
                type="email"
                placeholder="email"
                className="input input-bordered"
                name="email"
              />
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text">Password</span>
              </label>
              <input
                type="password"
                placeholder="password"
                className="input input-bordered"
                name="password"
              />
              <label className="label">
                <a href="#" className="label-text-alt link link-hover">
                  Forgot password?
                </a>
              </label>
            </div>
            <div className="form-control mt-6">
              <button className="btn btn-primary">Login</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
