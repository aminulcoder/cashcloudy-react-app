import React, { useState } from "react";
import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig";
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Login = () => {

  const auth = getAuth();
  const navigate = useNavigate();

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (!email && !password) {
      setErr("Fill the all details!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (!password) {
      setErr("Enter your password!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed in
          setErr("");
          navigate("/admin/dashboard");
        })
        .catch((error) => {
          console.log(error.code);
          if (error.code == "auth/wrong-password") {
            setErr("Wrong password!");
          } else if (error.code == "auth/user-not-found") {
            setErr("Wrong email!");
          } else {
            setErr("");
          }
        });
    }
  };


  onAuthStateChanged(auth, (user) => {
    if (user) {
      // navigate("/");
    }
  });

  return (
    <div>
      <div className="flex min-h-screen items-center justify-center ">
        <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2">
          {/* Left Section */}
          <div className="p-8 md:p-12">
            <h2 className="text-2xl font-bold text-gray-800">
              Login an account
            </h2>
            <div className=" space-y-6">
              {/* Email */}
              <div>
                <label
                  htmlFor="email"
                  className=" text-start  block text-sm font-medium text-gray-600"
                >
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=""
                  onChange={(e) => setEmail(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Password */}
              <div>
                <label
                  htmlFor="password"
                  className="text-start block text-sm font-medium text-gray-600"
                >
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={(e) => setPassword(e.target.value)}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
              </div>

              {/* Submit Button */}
              <button onClick={handleSubmit} className="w-full px-6 py-2 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
                Sign In
              </button>
            </div>
<p>{err}</p>
            {/* Footer */}
            <p className="mt-6 text-sm text-center text-gray-600">
              Have an account?{" "}
              <Link
                to={"/register"}
                className="font-medium text-blue-600 hover:underline"
              >
                Sign Up
              </Link>
            </p>
          </div>

          {/* Right Section */}
          <div className="hidden md:flex flex-col items-center justify-center bg-blue-500 rounded-r-lg text-white p-12">
            <Link to={"/"}>
              <img
                src="/src/assets/navbar/Clip path group.png" // Replace with your right section logo URL
                alt="Right Section Logo"
                className="mb-6 w-16 h-16"
              />
            </Link>
            <h3 className="text-xl font-bold">Welcome to Cashcloudy</h3>
            <p className="mt-2 text-center">
              Join us today and experience our seamless services. Already have
              an account? Just sign in and get started!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
