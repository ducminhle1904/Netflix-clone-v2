import React, { useRef } from "react";
import "./SignIn.css";
import { auth } from "../../firebase";

function SignIn() {
  const emailRef = useRef();
  const passwordRef = useRef();

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => {
        alert(err.message);
      });
  };

  const signIn = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(
        emailRef.current.value,
        passwordRef.current.value
      )
      .then((authUser) => {})
      .catch((err) => {
        alert(err.message);
      });
  };
  return (
    <div className="signinScreen">
      <form action="">
        <h1>Sign In</h1>
        <input type="email" placeholder="Email" ref={emailRef} />
        <input type="password" placeholder="Password" ref={passwordRef} />
        <button type="submit" onClick={signIn}>
          Sign In
        </button>

        <h4>
          <span className="gray">New to Netflix? </span>
          <span className="link" onClick={register}>
            Sign Up now.
          </span>
        </h4>
      </form>
    </div>
  );
}

export default SignIn;
