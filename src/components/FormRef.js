import React, { useRef } from "react";
import Card from "./Card";

const FormRef = () => {
  const full_nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const confirm_passRef = useRef("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      full_name: full_nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      confirm_pass: confirm_passRef.current.value,
    };
    console.log(formData);
  };

  return (
    <Card>
      <h2>Form using Ref</h2>
      <form id="info-form" onSubmit={handleSubmit}>
        <input
          id="full_name"
          type="text"
          placeholder="Full Name"
          ref={full_nameRef}
        />
        <input id="email" type="email" placeholder="Email" ref={emailRef} />
        <input
          id="password"
          type="password"
          placeholder="Password"
          ref={passwordRef}
        />
        <input
          id="password_confirmation"
          type="password"
          placeholder="Confirm Password"
          ref={confirm_passRef}
        />
        <button type="submit">Submit</button>
      </form>
    </Card>
  );
};

export default FormRef;
