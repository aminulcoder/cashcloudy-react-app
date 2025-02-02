import React, { useState } from "react";

import { Link } from "react-router-dom";
import firebaseConfig from "../firebaseConfig.jsx";
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";


const Register = () => {
  const auth = getAuth();
  const navigate = useNavigate();

  let [firstname, setFirstname] = useState("");
  let [lastname, setLastname] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [password_confirmation, setPassword_confirmation] = useState("");
  let [err, setErr] = useState("");

  let handleSubmit = () => {
    if (
      !firstname &&
      !lastname &&
      !email &&
      !password &&
      !password_confirmation
    ) {
      setErr("Fill the all details!");
    } else if (!firstname) {
      setErr("Enter your firstname!");
    } else if (!lastname) {
      setErr("Enter your lastname!");
    } else if (!email) {
      setErr("Enter your email!");
    } else if (password.length < 7) {
      setErr("Password need minimum 8 character!");
    } else if (password_confirmation.length < 7) {
      setErr("Password need minimum 8 character!");
    } else {
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          // Signed up

          updateProfile(auth.currentUser, {
            displayName: "name",
            photoURL: "https://static.vecteezy.com/system/resources/thumbnails/027/951/137/small/stylish-spectacles-guy-3d-avatar-character-illustrations-png.png",
          }).then(() => {
            // Profile updated!
            setErr("");
            navigate("/");
          });
        })
        .catch((error) => {
          console.log(error.code);

          if (error.code == "auth/email-already-in-use") {
            setErr("Email already in use!");
          } else {
            setErr("");
          }
        });
    }
  };
  return (
    // <AppLayout>
    <div className="flex min-h-screen items-center justify-center py-6">
      <div className="w-full max-w-4xl bg-white rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-2 py-12">
        {/* Left Section */}
        <div className="p-8 py-12 md:p-12">
          <Link to={'/'} className="mb-6">
            <img
              src="/src/assets/navbar/Clip path group.png" // Replace with your logo URL
              alt="Logo"
              className="w-10 h-10"
            />
          </Link>
          <h2 className="text-2xl font-bold text-gray-800">
            Create an account
          </h2>
          {/* <div className="mt-6 space-y-6"> */}
          {/* First and Last Name */}
          <div className="grid grid-cols-1  gap-4 sm:grid-cols-2">
            <div>
              <label
                htmlFor="firstName"
                className="text-start block text-sm font-medium text-gray-600"
              >
                First Name
              </label>
              <input
                type="text"
                name="firstname"
                id="firstName"
                placeholder="e.g. Howard"
                onChange={(e) => setFirstname(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
            <div>
              <label
                htmlFor="lastName"
                className=" text-start block text-sm font-medium text-gray-600"
              >
                Last Name
              </label>
              <input
                type="text"
                name="lastname"
                id="lastName"
                placeholder="e.g. Thurman"
                onChange={(e) => setLastname(e.target.value)}
                className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
            </div>
          </div>

          <label for="country" className="text-start block text-sm font-medium text-gray-600">Country</label>
          <div className="mt-2 grid grid-cols-1">
            <select id="country" name="country" autocomplete="country-name" className="col-start-1 row-start-1 w-full appearance-none rounded-md bg-white py-1.5 pl-3 pr-8 text-base text-gray-900 outline outline-1 -outline-offset-1 outline-gray-300 focus:outline focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6">
              <option>United States</option>
              <option>Canada</option>
              <option>Mexico</option>
            </select>
            <svg className="pointer-events-none col-start-1 row-start-1 mr-2 size-5 self-center justify-self-end text-gray-500 sm:size-4" viewBox="0 0 16 16" fill="currentColor" aria-hidden="true" data-slot="icon">
              <path fill-rule="evenodd" d="M4.22 6.22a.75.75 0 0 1 1.06 0L8 8.94l2.72-2.72a.75.75 0 1 1 1.06 1.06l-3.25 3.25a.75.75 0 0 1-1.06 0L4.22 7.28a.75.75 0 0 1 0-1.06Z" clip-rule="evenodd" />
            </svg>
          </div>

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
          {/* Password */}
          <div>
            <label
              htmlFor="password"
              className="text-start block text-sm font-medium text-gray-600"
            >
              Confirm Password
            </label>
            <input
              type="password"
              name="password_confirmation"
              id="password"
              placeholder="password_confirmation"
              onChange={(e) => setPassword_confirmation(e.target.value)}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full px-6 py-2 my-5 disabled:bg-gray-400 text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            Sign Up
          </button>

          {/* Footer */}
          <p className="mt-6 text-sm text-center text-gray-600">
            Have an account?{" "}
            <Link
              to={"/login"}
              className="font-medium text-blue-600 hover:underline"
            >
              Sign In
            </Link>
          </p>
          <p className="text-xl font-bold text-red-500">{err} </p>
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
            Join us today and experience our seamless services. Already have an
            account? Just sign in and get started!
          </p>
        </div>
      </div>
    </div>
    // </AppLayout>
  );
};

export default Register;
