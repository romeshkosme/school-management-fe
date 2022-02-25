import React, { useState, useEffect, useRef } from "react";
import SimpleReactValidator from "simple-react-validator";
import axios from "axios";
import { Link } from "react-router-dom";

function Register() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [tnc, setTnc] = useState(false);
  let [, setState] = useState();
  const simpleValidator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-sm text-right">{message}</div>,
    })
  );
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!tnc) {
      alert("Agreeing to Terms & Conditions is required.");
    } else if (simpleValidator.current.allValid()) {
      console.log("all valid");
      const register = await axios({
        method: "POST",
        url: "http://localhost:8080/api/user/register",
        headers: { "Access-Control-Allow-Origin": "*" },
        data: {
          email,
          password,
        },
      });
    } else {
      setState({});
      simpleValidator.current.showMessages();
    }
  };
  useEffect(() => {}, [email, password, tnc]);
  return (
    <div className="Register bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 h-screen flex justify-center items-center">
      <div className="container mx-auto w-96 bg-gray-200/[.09] rounded-xl p-8 text-white">
        <form>
          <h2 className="text-3xl text-center">Register</h2>
          <div className="flex flex-col mt-6">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              name="email"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="form-input rounded-xl bg-gray-200/[.04] border-2 border-white"
            />
            {simpleValidator.current.message("email", email, "required|email")}
          </div>
          <div className="flex flex-col mt-2">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="form-input rounded-xl bg-gray-200/[.04] border-2 border-white"
            />
            {simpleValidator.current.message(
              "password",
              password,
              "required|min:8"
            )}
          </div>
          <div className="flex flex-row items-center mt-3">
            <input
              type="checkbox"
              name="tnc"
              id="tnc"
              checked={tnc}
              onChange={(e) => setTnc(!tnc)}
            />
            <p className="ml-2">
              I agree to&nbsp;
              <a
                href="https://google.com"
                rel="noreferrer"
                target="_blank"
                className="border-b-2 border-white"
              >
                Terms & Conditions
              </a>
            </p>
          </div>
          <div className="mt-6 text-right">
            <button className="px-8 py-2 border-2 border-white rounded-xl">
              <Link to="/">Login</Link>
            </button>
            <button
              onClick={handleSubmit}
              className="px-8 py-2 bg-indigo-600 rounded-xl ml-2"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Register;
